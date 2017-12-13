package vsu.by.awesomeProject.controllers.JSONObjects;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by Андрей on 13.12.2017.
 */

public class EntityValueResponse {
    private Integer id;

    @JsonProperty("entityId")
    private Integer entityId;

    private String tableName;

    public Integer getId() {
        return id;
    }

    public String getTableName() {
        return tableName;
    }

    public void setTableName(String tableName) {
        this.tableName = tableName;
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
