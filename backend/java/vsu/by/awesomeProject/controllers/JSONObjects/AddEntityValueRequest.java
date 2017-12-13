package vsu.by.awesomeProject.controllers.JSONObjects;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

/**
 * Created by Андрей on 13.12.2017.
 */
public class AddEntityValueRequest {
    @NotNull
    @Min(0)
    @JsonProperty("entity_id")
    private Integer entityId;

    public AddEntityValueRequest() {
    }

    public Integer getEntityId() {
        return entityId;
    }

    public void setEntityId(Integer entityId) {
        this.entityId = entityId;
    }
}
