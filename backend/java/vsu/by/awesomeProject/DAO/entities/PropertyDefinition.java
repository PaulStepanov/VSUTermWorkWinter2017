package vsu.by.awesomeProject.DAO.entities;

import javax.persistence.*;


@Entity(name="property_definition")
@Table(name = "property_definition")
public class PropertyDefinition {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;

    private Integer type;

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="entity_id")
    private EntityDefinition entityDefinition;

    public PropertyDefinition() {
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }
}
