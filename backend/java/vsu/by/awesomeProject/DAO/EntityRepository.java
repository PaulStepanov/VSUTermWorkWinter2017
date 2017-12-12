package vsu.by.awesomeProject.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import vsu.by.awesomeProject.DAO.entities.Entity;

import java.util.List;


public interface EntityRepository extends JpaRepository<Entity, Integer> {
    List<Entity> findByName(String name);

}
