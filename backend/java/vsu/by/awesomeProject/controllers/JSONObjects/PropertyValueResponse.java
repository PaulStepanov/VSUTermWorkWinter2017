package vsu.by.awesomeProject.controllers.JSONObjects;

/**
 * Created by Андрей on 14.12.2017.
 */
public class PropertyValueResponse {
    private Integer id;

    private String name;

    private Integer propertyId;

    private Integer entityId;

    public PropertyValueResponse() {
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

    public Integer getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(Integer propertyId) {
        this.propertyId = propertyId;
    }

    public Integer getEntityId() {
        return entityId;
    }

    public void setEntityId(Integer entityId) {
        this.entityId = entityId;
    }
}
