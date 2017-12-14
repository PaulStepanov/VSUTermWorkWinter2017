package vsu.by.awesomeProject.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import vsu.by.awesomeProject.DAO.EntityValueRepository;
import vsu.by.awesomeProject.DAO.entities.EntityValue;
import vsu.by.awesomeProject.DAO.entities.PropertyDefinition;
import vsu.by.awesomeProject.DAO.entities.PropertyValue;
import vsu.by.awesomeProject.controllers.JSONObjects.PropertyValueRequest;
import vsu.by.awesomeProject.controllers.JSONObjects.PropertyValueResponse;
import vsu.by.awesomeProject.servicies.PropertyDefinitionService;
import vsu.by.awesomeProject.servicies.PropertyValueService;

import javax.websocket.server.PathParam;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Андрей on 14.12.2017.
 */
@RestController
@RequestMapping("/property_value")
public class PropertyValueController {
    @Autowired
    private PropertyValueService propertyValueService;

    @Autowired
    private PropertyDefinitionService propertyDefinitionService;

    @Autowired
    private EntityValueRepository entityValueRepository;

    @GetMapping("/entity_id/{entity_id}")
    public List<PropertyValueResponse> getSealRow(@PathVariable(name = "entity_id") Integer id){
        List<PropertyValue> propertyValues = propertyValueService.getPropertyValuesByEntityValueId(id);
        return propertyValues.stream().
                map(this::propertyValueResponseBuilder).
                collect(Collectors.toList());
    }

    @GetMapping("/property_definition_id/{property_definition_id}")
    public List<PropertyValueResponse> getSealColumn(@PathVariable(name = "property_definition_id") Integer id){
        List<PropertyValue> propertyValues = propertyValueService.getColumn(id);
        return propertyValues.stream()
                .map(this::propertyValueResponseBuilder)
                .collect(Collectors.toList());
    }

    @GetMapping()
    public PropertyValueResponse getSeal(@RequestParam("entity_id") Integer entityId, @RequestParam("property_definition_id") Integer propertyId){
        PropertyValue propertyValue = propertyValueService.getSeal(entityId, propertyId);
        return propertyValueResponseBuilder(propertyValue);
    }

    @PostMapping
    public void addSealColumn(@RequestBody PropertyValueRequest propertyValueRequest){

        PropertyValue propertyValue = new PropertyValue();
        PropertyDefinition propertyDefinition
                = propertyDefinitionService.getPropertyDefinitionsById(propertyValueRequest.getPropertyId());
        propertyValue.setPropertyDefinition(propertyDefinition);
        EntityValue entityValue = entityValueRepository.findOne(propertyValueRequest.getEntityId());
        propertyValue.setEntityValue(entityValue);
        propertyValue.setValue(propertyValueRequest.getValue());
        propertyValueService.addSealColumn(propertyValue);
    }
    private PropertyValueResponse propertyValueResponseBuilder(PropertyValue propertyValue){
        PropertyValueResponse propertyValueResponse = new PropertyValueResponse();


        propertyValueResponse.setEntityId(propertyValue.getEntityValue().getId());
        propertyValueResponse.setPropertyId(propertyValue.getPropertyDefinition().getId());
        propertyValueResponse.setName(propertyValue.getValue());
        propertyValueResponse.setId(propertyValue.getId());

        return propertyValueResponse;
    }
}
