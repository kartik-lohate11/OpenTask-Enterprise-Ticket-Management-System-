import EmployeeData from "./EmployeeData";

export default class User {
  constructor({
    id,
    userName,
    mail,
    password,
    role,
    employeeData
  }) {
    this.id = id;
    this.userName = userName;
    this.mail = mail;
    this.password = password;
    this.role = role;
    this.employeeData = employeeData
      ? new EmployeeData(employeeData)
      : null;
  }
}