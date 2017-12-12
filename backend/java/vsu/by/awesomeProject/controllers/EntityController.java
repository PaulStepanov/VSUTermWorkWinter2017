package vsu.by.awesomeProject.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import vsu.by.awesomeProject.DAO.entities.Entity;
import vsu.by.awesomeProject.controllers.JSONObjects.ChangeEntityNameRequest;
import vsu.by.awesomeProject.entities.EntityEntity;
import vsu.by.awesomeProject.servicies.EntityService;

import java.util.List;

/**
 * Created by Андрей on 12.12.2017.
 */
@RestController
@RequestMapping("/entity")
public class EntityController {

    @Autowired
    private EntityService entityService;

    @GetMapping
    public List<Entity> getEntities(){
        EntityEntity entityEntity = new EntityEntity();
        return entityService.getEntities();
    }

    @PostMapping("/changeEntityName")
    public ChangeEntityNameRequest changeEntityName(@RequestBody ChangeEntityNameRequest changeEntityNameRequest){
        entityService.changeEntityName(4, "test");
        return changeEntityNameRequest;
    }
}
