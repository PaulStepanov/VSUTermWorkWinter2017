package vsu.by.awesomeProject.DAO;

import org.springframework.data.repository.CrudRepository;
import vsu.by.awesomeProject.DAO.entities.EntityValue;
import vsu.by.awesomeProject.DAO.entities.PropertyDefinition;
import vsu.by.awesomeProject.DAO.entities.PropertyValue;

import java.util.List;

/**
 * Created by Андрей on 14.12.2017.
 */
public interface PropertyValueRepository extends CrudRepository<PropertyValue, Integer>{
    List<PropertyValue> findAllByEntityValue(EntityValue entityValue);
    List<PropertyValue> findAllByPropertyDefinition(PropertyDefinition propertyDefinition);
    PropertyValue findByEntityValue_IdAndPropertyDefinition_Id(Integer row, Integer column);
}
