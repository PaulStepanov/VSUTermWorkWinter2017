package vsu.by.awesomeProject.DAO.entities;

import javax.persistence.*;

@Entity(name = "property_value")
@Table(name = "property_value")
public class PropertyValue {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String value;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "property_id")
    private PropertyDefinition propertyDefinition;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "entity_id")
    private EntityValue entityValue;

    public PropertyValue() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public PropertyDefinition getPropertyDefinition() {
        return propertyDefinition;
    }

    public void setPropertyDefinition(PropertyDefinition propertyDefinition) {
        this.propertyDefinition = propertyDefinition;
    }

    public EntityValue getEntityValue() {
        return entityValue;
    }

    public void setEntityValue(EntityValue entityValue) {
        this.entityValue = entityValue;
    }
}
