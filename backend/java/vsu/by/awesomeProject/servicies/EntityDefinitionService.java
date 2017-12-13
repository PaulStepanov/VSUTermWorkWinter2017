package vsu.by.awesomeProject.servicies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import vsu.by.awesomeProject.DAO.CustomEntityDAO;
import vsu.by.awesomeProject.DAO.EntityDefinitionRepository;
import vsu.by.awesomeProject.DAO.entities.EntityDefinition;
import vsu.by.awesomeProject.controllers.JSONObjects.EntityDefinitionRequest;

import java.util.List;

/**
 * Created by Андрей on 12.12.2017.
 */
@Service
@Scope("singleton")
public class EntityDefinitionService {
    @Autowired
    private EntityDefinitionRepository entityDefinitionRepository;

    @Autowired
    private CustomEntityDAO customEntityDAO;

    public List<EntityDefinition> getEntityDefinitions(){
        return (List<EntityDefinition>) entityDefinitionRepository.findAll();
    }

    public EntityDefinition getEntityDefinitionById(Integer id){
        return entityDefinitionRepository.findOne(id);
    }

    public EntityDefinition getEntityDefinitionByName(String name){
        return entityDefinitionRepository.findByName(name);
    }

    public void addEntityDefinition(EntityDefinition entityDefinition) {
        entityDefinitionRepository.save(entityDefinition);
    }

    public void changeEntityDefinition(EntityDefinition entityDefinition){
        entityDefinitionRepository.save(entityDefinition);
    }

    public void deleteEntityDefinition(Integer id){
        entityDefinitionRepository.delete(id);
    }


}
