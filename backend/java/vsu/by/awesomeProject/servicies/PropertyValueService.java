package vsu.by.awesomeProject.servicies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import vsu.by.awesomeProject.DAO.EntityValueRepository;
import vsu.by.awesomeProject.DAO.PropertyDefinitionRepository;
import vsu.by.awesomeProject.DAO.PropertyValueRepository;
import vsu.by.awesomeProject.DAO.entities.EntityValue;
import vsu.by.awesomeProject.DAO.entities.PropertyDefinition;
import vsu.by.awesomeProject.DAO.entities.PropertyValue;
import vsu.by.awesomeProject.controllers.JSONObjects.PropertyValueRequest;

import java.util.List;

/**
 * Created by Андрей on 14.12.2017.
 */
@Service
@Scope("singleton")
public class PropertyValueService {
    @Autowired
    private PropertyValueRepository propertyValueRepository;

    @Autowired
    private EntityValueRepository entityValueRepository;

    @Autowired
    private PropertyDefinitionRepository propertyDefinitionRepository;

    public List<PropertyValue> getPropertyValuesByEntityValueId(Integer id){
        EntityValue entityValue = entityValueRepository.findOne(id);
        return propertyValueRepository.findAllByEntityValue(entityValue);
    }

    public List<PropertyValue> getColumn(Integer id){
        PropertyDefinition propertyDefinition = propertyDefinitionRepository.findOne(id);
        return propertyValueRepository.findAllByPropertyDefinition(propertyDefinition);
    }

    public PropertyValue getSeal(Integer row, Integer column){
        return propertyValueRepository.findByEntityValue_IdAndPropertyDefinition_Id(row, column);
    }

    public void addSealColumn(PropertyValue propertyValue) {
        propertyValueRepository.save(propertyValue);
    }
}
