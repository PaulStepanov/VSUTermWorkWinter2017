package vsu.by.awesomeProject.DAO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;
import vsu.by.awesomeProject.DAO.entities.Entity;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;

public interface EntityRepository extends Repository<Entity, Integer> {

    List<Entity> findByName(String name);

}
