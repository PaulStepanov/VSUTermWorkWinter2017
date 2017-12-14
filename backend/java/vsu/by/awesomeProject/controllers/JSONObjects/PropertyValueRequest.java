package vsu.by.awesomeProject.controllers.JSONObjects;

/**
 * Created by Андрей on 14.12.2017.
 */
public class PropertyValueRequest {
    private Integer id;

    private String value;

    private Integer propertyId;

    private Integer entityId;

    public PropertyValueRequest() {
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
