package vsu.by.awesomeProject.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import vsu.by.awesomeProject.DAO.entities.EntityDefinition;
import vsu.by.awesomeProject.controllers.JSONObjects.EntityDefinitionRequest;
import vsu.by.awesomeProject.servicies.EntityDefinitionService;

import java.util.List;

/**
 * Created by Андрей on 12.12.2017.
 */
@RestController
@RequestMapping("/entity_definition")
public class EntityDefinitionController {

    @Autowired
    private EntityDefinitionService entityDefinitionService;

    @GetMapping
    public List<EntityDefinition> getEntityDefinitions(){
        return entityDefinitionService.getEntityDefinitions();
    }

    @GetMapping("/id/{id}")
    public EntityDefinition getEntityDefinitionById(@PathVariable(name = "id") Integer id){
        return entityDefinitionService.getEntityDefinitionById(id);
    }

    @GetMapping("/name/{name}")
    public EntityDefinition getEntityDefinitionByName(@PathVariable String name){
        return entityDefinitionService.getEntityDefinitionByName(name);
    }

    @PostMapping
    public void addEntityDefinition(@RequestBody EntityDefinitionRequest entityDefinitionRequest){
        entityDefinitionService.addEntityDefinition(new EntityDefinition(entityDefinitionRequest));
    }

    @PutMapping
    public void changeEntityDefinition(@RequestBody EntityDefinitionRequest entityDefinitionRequest){
        entityDefinitionService.changeEntityDefinition(new EntityDefinition(entityDefinitionRequest));
    }

    @DeleteMapping("/id/{id}")
    public void deleteEntityDefinition(@PathVariable(name = "id") Integer id){
        entityDefinitionService.deleteEntityDefinition(id);
    }
}
