package vsu.by.awesomeProject.DAO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import vsu.by.awesomeProject.DAO.entities.EntityDefinition;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;

@Repository
public class CustomEntityDAO {
    @Autowired
    private EntityManager entityManager;

}
