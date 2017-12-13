package vsu.by.awesomeProject.DAO;

import org.springframework.data.repository.CrudRepository;
import vsu.by.awesomeProject.DAO.entities.EntityDefinition;
import vsu.by.awesomeProject.DAO.entities.EntityValue;

import java.util.List;

/**
 * Created by Андрей on 13.12.2017.
 */
public interface EntityValueRepository extends CrudRepository<EntityValue, Integer> {
    List<EntityValue> findAllByEntityDefinition(EntityDefinition entityDefinition);
}