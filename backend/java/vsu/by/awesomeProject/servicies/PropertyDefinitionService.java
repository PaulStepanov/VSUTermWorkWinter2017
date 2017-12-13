package vsu.by.awesomeProject.servicies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import vsu.by.awesomeProject.DAO.EntityDefinitionRepository;
import vsu.by.awesomeProject.DAO.PropertyDefinitionRepository;
import vsu.by.awesomeProject.DAO.entities.EntityDefinition;
import vsu.by.awesomeProject.DAO.entities.PropertyDefinition;

import java.util.List;

/**
 * Created by Андрей on 13.12.2017.
 */
@Service
@Scope("singleton")
public class PropertyDefinitionService {
    @Autowired
    private PropertyDefinitionRepository propertyDefinitionRepository;

    @Autowired
    private EntityDefinitionRepository entityDefinitionRepository;

    public List<PropertyDefinition> getPropertyDefinitionsByTableName(String tableName){
        EntityDefinition entityDefinition = entityDefinitionRepository.findByName(tableName);
        return propertyDefinitionRepository.findAllByEntityDefinition(entityDefinition);
    }

    public PropertyDefinition getPropertyDefinitionsById(Integer id){
        return propertyDefinitionRepository.findOne(id);
    }

    public void addPropertyDefinition(PropertyDefinition propertyDefinition){
        propertyDefinitionRepository.save(propertyDefinition);
    }

    public void changePropertyDefinition(PropertyDefinition propertyDefinition){
        propertyDefinitionRepository.save(propertyDefinition);
    }

    public void deletePropertyDefinition(Integer id){
        propertyDefinitionRepository.delete(id);
    }
}
