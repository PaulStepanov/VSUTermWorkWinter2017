# kursach
## entity_definition Controller //Таблица
GET api/entity_definition - возвращает все Таблицы
GET api/entity_definition/{id} - возвращает таблицу по id
GET api/entity_definition/{name} - возвращает таблицу по name
POST api/entity_definition - добавляет таблицу 
PUT api/entity_definition - изменяет таблицу 
DELETE api/entity_definition - удаляет таблицу

## entity_value //строка Таблицы
GET api/entity_value/id/{id} - возвращает строку по id
GET api/entity_value/entity_id/{entity_id} - возвращает все строки Таблицы(entity_definition) по entity_id
POST api/entity_value/ - добавляет значение строки Таблицы
PUT api/entity_value/ - изменяет значение строки Таблицы
DELETE api/entity_value/ - удаляет значение строки Таблицы


## property_defenition //свойство столбца
GET api/property_defenition/{tableName} - возвращает все столбцы Таблицы по имени этой самой таблицы
GET api/property_defenition/{id} - возвращает столбец по таблице
POST api/property_defenition - добавляет столбец 
PUT api/property_defenition - изменяет столбец
DELETE api/property_defenition - удаляет стобец

## property_value //значение столбца
* entity_id - id в entity_value таблице 
GET api/property_valuen/{entity_id}  - возвращает все значения которые храняться в строке , тоесть в entity_id
GET api/property_value/{property_defenition_id} - id это property_defenition возвращает значение столбца по id property_defenition
GET api/property_value/?entity_id=smth&property_defenition_id=smth  - возвращает значение конкретного столбца(roperty_defenition_id) в конкретной строке(entity_id)
* ТО что написанно выше надо писать @GetMapprng() без юрл, а эти 2 параметра @RequestParam'ом в метод 
POST api/property_value - добавляет значение столбца
PUT api/property_value - изменяет значение столбца
DELETE api/property_value - удаляет значение столбца


