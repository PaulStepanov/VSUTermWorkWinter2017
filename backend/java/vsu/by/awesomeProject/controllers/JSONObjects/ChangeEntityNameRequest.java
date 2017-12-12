package vsu.by.awesomeProject.controllers.JSONObjects;

import javax.validation.constraints.Min;

/**
 * Created by Андрей on 12.12.2017.
 */
public class ChangeEntityNameRequest {
    @Min(0)
    private Integer id;
    private String name;

    public ChangeEntityNameRequest() {
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
