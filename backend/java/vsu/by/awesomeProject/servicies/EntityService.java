package vsu.by.awesomeProject.servicies;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import vsu.by.awesomeProject.controllers.JSONObjects.ChangeEntityNameRequest;

/**
 * Created by Андрей on 12.12.2017.
 */
@Service
@Scope("singleton")
public class EntityService {
    public ChangeEntityNameRequest changeEntityName(Integer id, String name){
        System.out.println("request DAO");
        return null;
    }
}
