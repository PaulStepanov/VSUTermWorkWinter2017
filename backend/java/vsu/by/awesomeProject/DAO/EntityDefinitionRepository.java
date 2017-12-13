package vsu.by.awesomeProject.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import vsu.by.awesomeProject.DAO.entities.EntityDefinition;
import vsu.by.awesomeProject.controllers.JSONObjects.EntityDefinitionRequest;

import java.util.List;


public interface EntityDefinitionRepository extends CrudRepository<EntityDefinition, Integer> {
    EntityDefinition findByName(String name);
}
