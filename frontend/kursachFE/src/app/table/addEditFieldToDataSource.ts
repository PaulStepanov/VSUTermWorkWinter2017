import {MatTableDataSource} from "@angular/material";

/**
 * Это костыль что б отрисовывался значек редактирования
 * и да это значит что с MatTableDataSource мы будем работать как просто с массивом,
 * и использовать интересные фишки нету времени
 * @param {Array<any>} data
 * @return {MatTableDataSource<any>}
 */

export function addEditFieldToDataSource(data:Array<any>):MatTableDataSource<any>{

  data.forEach(elem=>{
    Object.defineProperty(elem, "edit",{value:"edit", enumerable:true, writable : false})
  })

  let dataSource:MatTableDataSource<any> = new MatTableDataSource(data)

  return dataSource;

}
