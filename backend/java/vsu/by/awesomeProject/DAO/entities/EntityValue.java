package vsu.by.awesomeProject.DAO.entities;

import vsu.by.awesomeProject.controllers.JSONObjects.EntityValueRequest;

import javax.persistence.*;

/**
 * Created by Андрей on 12.12.2017.
 */
@Entity(name = "entity_value")
@Table(name = "entity_value")
public class EntityValue {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "entity_id")
    private EntityDefinition entityDefinition;

    public EntityValue() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public EntityDefinition getEntityDefinition() {
        return entityDefinition;
    }

    public void setEntityDefinition(EntityDefinition entityDefinition) {
        this.entityDefinition = entityDefinition;
    }
}
