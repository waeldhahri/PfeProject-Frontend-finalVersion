import {Role} from "./role";

export class Employee {

  employeeId!: number;

  username !: String;

  identifiant!:String;

  password!: String;

  email !:String ;

  createDate!:Date;

  lastModifiedDate!:Date;

  roles!: Role;


}
