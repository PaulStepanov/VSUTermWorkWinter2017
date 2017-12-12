package vsu.by.awesomeProject.servicies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import vsu.by.awesomeProject.DAO.CustomEntityDAO;
import vsu.by.awesomeProject.DAO.EntityRepository;
import vsu.by.awesomeProject.DAO.entities.Entity;
import vsu.by.awesomeProject.controllers.JSONObjects.ChangeEntityNameRequest;

import java.util.List;

/**
 * Created by Андрей on 12.12.2017.
 */
@Component
@Scope("singleton")
public class EntityService {
    @Autowired
    private EntityRepository entityRepository;

    @Autowired
    private CustomEntityDAO customEntityDAO;

    public ChangeEntityNameRequest changeEntityName(Integer id, String name){
        System.out.println("request DAO");

        return null;
    }

    public List<Entity> getEntities(){
        return customEntityDAO.getAllEntities();
    }
}
