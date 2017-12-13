package vsu.by.awesomeProject.DAO;

import org.springframework.data.repository.CrudRepository;
import vsu.by.awesomeProject.DAO.entities.EntityDefinition;
import vsu.by.awesomeProject.DAO.entities.PropertyDefinition;

import java.util.List;

/**
 * Created by Андрей on 13.12.2017.
 */
public interface PropertyDefinitionRepository extends CrudRepository<PropertyDefinition, Integer>{
    List<PropertyDefinition> findAllByEntityDefinition(EntityDefinition entityDefinition);
}
