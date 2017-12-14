package vsu.by.awesomeProject.DAO.entities;

import vsu.by.awesomeProject.controllers.JSONObjects.EntityDefinitionRequest;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@javax.persistence.Entity(name = "entity_definition")
@Table(name = "entity_definition")
public class EntityDefinition {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;

    public EntityDefinition() {
    }

    public EntityDefinition(EntityDefinitionRequest entityDefinitionRequest){
        this.id = entityDefinitionRequest.getId();
        this.name = entityDefinitionRequest.getName();
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
