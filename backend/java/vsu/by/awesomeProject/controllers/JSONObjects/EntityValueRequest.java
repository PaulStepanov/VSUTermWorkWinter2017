package vsu.by.awesomeProject.controllers.JSONObjects;

import javax.validation.constraints.Min;

/**
 * Created by Андрей on 13.12.2017.
 */
public class EntityValueRequest {
    @Min(0)
    private Integer id;
    private Integer entityId;

    public EntityValueRequest() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getEntityId() {
        return entityId;
    }

    public void setEntityId(Integer entityId) {
        this.entityId = entityId;
    }
}
