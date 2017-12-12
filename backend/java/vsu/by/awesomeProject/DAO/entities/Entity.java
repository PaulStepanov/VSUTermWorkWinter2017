package vsu.by.awesomeProject.DAO.entities;

import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by Андрей on 12.12.2017.
 */
@javax.persistence.Entity(name = "entity_definition")
@Table(name = "entity_definition")
public class Entity {
    @Id
    private Integer id;

    private String name;

    public Entity() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
