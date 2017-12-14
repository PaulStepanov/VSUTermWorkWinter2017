package vsu.by.awesomeProject.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import vsu.by.awesomeProject.DAO.EntityDefinitionRepository;
import vsu.by.awesomeProject.DAO.entities.EntityDefinition;
import vsu.by.awesomeProject.DAO.entities.EntityValue;
import vsu.by.awesomeProject.controllers.JSONObjects.AddEntityValueRequest;
import vsu.by.awesomeProject.controllers.JSONObjects.EntityValueRequest;
import vsu.by.awesomeProject.controllers.JSONObjects.EntityValueResponse;
import vsu.by.awesomeProject.servicies.EntityDefinitionService;
import vsu.by.awesomeProject.servicies.EntityValueService;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/entity_value")
public class EntityValueController {
    @Autowired
    private EntityDefinitionService entityDefinitionService;

    @Autowired
    private EntityValueService entityValueService;

    @GetMapping("/id/{id}")
    public EntityValueResponse getEntityValueById(@PathVariable(name = "id") Integer id) {
        EntityValue entityValue = entityValueService.getEntityValue(id);
        return entityValueResponseBuilder(entityValue);
    }

    @GetMapping("/entity_id/{entity_id}")
    public List<EntityValueResponse> getEntityValues(@PathVariable(name = "entity_id") Integer entity_id) {
        List<EntityValue> entityValues = entityValueService.getEntityValues(entity_id);

        return entityValues.stream()
                .map(this::entityValueResponseBuilder)
                .collect(Collectors.toList());
    }

    @PostMapping
    public void addEntityValue(@RequestBody AddEntityValueRequest addEntityValueRequest) {
        EntityValue entityValue = entityValueBuilder(addEntityValueRequest.getEntityId());
        entityValueService.addEntityValue(entityValue);
    }

    @PutMapping
    public void changeEntityValue(@RequestBody EntityValueRequest entityValueRequest){
        EntityValue entityValue = entityValueBuilder(entityValueRequest.getEntityId());
        entityValueService.changeEntityValue(entityValue);
    }

    @DeleteMapping("/id/{id}")
    public void deleteEntityValue(@PathVariable(name = "id") Integer id){
        entityValueService.deleteEntityValue(id);
    }

    private EntityValueResponse entityValueResponseBuilder(EntityValue entityValue){
        EntityValueResponse entityValueResponse = new EntityValueResponse();

        entityValueResponse.setTableName(entityValue.getEntityDefinition().getName());
        entityValueResponse.setId(entityValue.getId());
        entityValueResponse.setEntityId(entityValue.getEntityDefinition().getId());

        return entityValueResponse;
    }

    private EntityValue entityValueBuilder(Integer entityId){
        EntityValue entityValue = new EntityValue();

        EntityDefinition entityDefinitionById = entityDefinitionService.getEntityDefinitionById(entityId);
        entityValue.setEntityDefinition(entityDefinitionById);

        return entityValue;
    }
}
