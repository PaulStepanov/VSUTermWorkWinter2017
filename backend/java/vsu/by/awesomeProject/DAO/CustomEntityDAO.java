package vsu.by.awesomeProject.DAO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import vsu.by.awesomeProject.DAO.entities.EntityDefinition;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;

/**
 * Created by Андрей on 12.12.2017.
 */
@Repository
public class CustomEntityDAO {
    @Autowired
    private EntityManager entityManager;

    public List<EntityDefinition> getAllEntities(){
        Query query = entityManager.createQuery("SELECT e FROM entity_definition e");
        return (List<EntityDefinition>)query.getResultList();
    }
}
