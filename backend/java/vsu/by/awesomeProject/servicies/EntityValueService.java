package vsu.by.awesomeProject.servicies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import vsu.by.awesomeProject.DAO.EntityDefinitionRepository;
import vsu.by.awesomeProject.DAO.EntityValueRepository;
import vsu.by.awesomeProject.DAO.entities.EntityDefinition;
import vsu.by.awesomeProject.DAO.entities.EntityValue;

import java.util.List;

/**
 * Created by Андрей on 13.12.2017.
 */
@Service
@Scope("singleton")
public class EntityValueService {
    @Autowired
    private EntityValueRepository entityValueRepository;

    @Autowired
    private EntityDefinitionRepository entityDefinitionRepository;

    public EntityValue getEntityValue(Integer id){
        return entityValueRepository.findOne(id);
    }

    public List<EntityValue> getEntityValues(Integer entityDefId){
        EntityDefinition entityDefinition = entityDefinitionRepository.findOne(entityDefId);

        return entityValueRepository.findAllByEntityDefinition(entityDefinition);
    }

    public void addEntityValue(EntityValue entityValue){
        entityValueRepository.save(entityValue);
    }

    public void changeEntityValue(EntityValue entityValue){
        entityValueRepository.save(entityValue);
    }
    public void deleteEntityValue(Integer id){
        entityValueRepository.delete(id);
    }
}

