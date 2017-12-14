package vsu.by.awesomeProject.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import vsu.by.awesomeProject.DAO.entities.EntityDefinition;
import vsu.by.awesomeProject.DAO.entities.PropertyDefinition;
import vsu.by.awesomeProject.controllers.JSONObjects.PropertyDefinitionRequest;
import vsu.by.awesomeProject.controllers.JSONObjects.PropertyDefinitionResponse;
import vsu.by.awesomeProject.servicies.EntityDefinitionService;
import vsu.by.awesomeProject.servicies.PropertyDefinitionService;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Андрей on 13.12.2017.
 */
@RestController
@RequestMapping("/property_definition")
public class PropertyDefinitionController {
    @Autowired
    private PropertyDefinitionService propertyDefinitionService;

    @Autowired
    private EntityDefinitionService entityDefinitionService;

    @GetMapping("/tableName/{tableName}")
    public List<PropertyDefinitionResponse> getPropertyDefinitionsByTableName(@PathVariable(name = "tableName") String tableName){
        List<PropertyDefinition> propertyDefinitions = propertyDefinitionService.getPropertyDefinitionsByTableName(tableName);
        return propertyDefinitions.stream()
                .map(this::propertyDefinitionResponseBuilder)
                .collect(Collectors.toList());
    }

    @GetMapping("/id/{id}")
    public PropertyDefinitionResponse getPropertyDefinitionById(@PathVariable(name = "id") Integer id){
        PropertyDefinition propertyDefinition = propertyDefinitionService.getPropertyDefinitionsById(id);
        return propertyDefinitionResponseBuilder(propertyDefinition);
    }

    @PostMapping
    public void addPropertyDefinition(@RequestBody PropertyDefinitionRequest propertyDefinitionRequest){

        PropertyDefinition propertyDefinition = propertyDefinitionBuilder(propertyDefinitionRequest);
        propertyDefinitionService.addPropertyDefinition(propertyDefinition);
    }

    @PutMapping
    public void changePropertyDefinition(@RequestBody PropertyDefinitionRequest propertyDefinitionRequest){

        PropertyDefinition propertyDefinition = propertyDefinitionBuilder(propertyDefinitionRequest);
        propertyDefinitionService.changePropertyDefinition(propertyDefinition);

    }

    @DeleteMapping("/id/{id}")
    public void deletePropertyDefinition(@PathVariable(name = "id") Integer id){
    }

    private PropertyDefinitionResponse propertyDefinitionResponseBuilder(PropertyDefinition propertyDefinition){
        PropertyDefinitionResponse propertyDefinitionResponse = new PropertyDefinitionResponse();

        propertyDefinitionResponse.setEntityId(propertyDefinition.getEntityDefinition().getId());
        propertyDefinitionResponse.setId(propertyDefinition.getId());
        propertyDefinitionResponse.setTableName(propertyDefinition.getEntityDefinition().getName());
        propertyDefinitionResponse.setName(propertyDefinition.getName());
        propertyDefinitionResponse.setType(propertyDefinition.getType());

        return propertyDefinitionResponse;
    }

    private PropertyDefinition propertyDefinitionBuilder(PropertyDefinitionRequest propertyDefinitionRequest){
        PropertyDefinition propertyDefinition = new PropertyDefinition();

        propertyDefinition.setId(propertyDefinitionRequest.getId());
        propertyDefinition.setName(propertyDefinitionRequest.getName());
        propertyDefinition.setType(propertyDefinitionRequest.getType());
        EntityDefinition entityDefinition =
                entityDefinitionService.getEntityDefinitionById(propertyDefinitionRequest.getEntityId());
        propertyDefinition.setEntityDefinition(entityDefinition);

        return propertyDefinition;
    }
}
