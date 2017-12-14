-- entity_definition
insert into entity_definition(id,name) values(1,"users");
insert into entity_definition(id,name) values(2,"customers");
insert into entity_definition(id,name) values(3,"cities");

-- entity_value
insert into entity_value(id,entity_id) values (1,1);
insert into entity_value(id,entity_id) values (2,1);
insert into entity_value(id,entity_id) values (3,2);

-- property_definition
insert into property_definition(id,name,type,entity_id) values (1, "id", 2, 1);
insert into property_definition(id,name,type,entity_id) values (2, "name", 1, 1);
insert into property_definition(id,name,type,entity_id) values (3, "surname", 1, 1);
insert into property_definition(id,name,type,entity_id) values (4, "isVip", 4, 1);

insert into property_definition(id,name,type,entity_id) values (5, "id", 2, 2);
insert into property_definition(id,name,type,entity_id) values (6, "user_id", 2, 2);
insert into property_definition(id,name,type,entity_id) values (7, "customerPersonal", 1, 2);

insert into property_definition(id,name,type,entity_id) values (8, "id", 2, 3);
insert into property_definition(id,name,type,entity_id) values (9, "name", 1, 3);


-- property_value
insert into property_value(id,value, property_id, entity_id) values(1, "1", 1, 1);
insert into property_value(id,value, property_id, entity_id) values(2, "andrey", 2, 1);
insert into property_value(id,value, property_id, entity_id) values(3, "markser", 3, 1);
insert into property_value(id,value, property_id, entity_id) values(4, "true", 4, 1);
 
insert into property_value(id,value, property_id, entity_id) values(5, "1", 1, 1);
insert into property_value(id,value, property_id, entity_id) values(6, "pavel", 2, 1);
insert into property_value(id,value, property_id, entity_id) values(7, "stsiapanau", 3, 1);
insert into property_value(id,value, property_id, entity_id) values(8, "false", 4, 1);

