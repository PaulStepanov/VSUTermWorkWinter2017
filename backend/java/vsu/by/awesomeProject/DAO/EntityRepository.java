package vsu.by.awesomeProject.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import vsu.by.awesomeProject.DAO.entities.EntityDefinition;

import java.util.List;


public interface EntityRepository extends JpaRepository<EntityDefinition, Integer> {
    List<EntityDefinition> findByName(String name);
}
