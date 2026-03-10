import { DepartmentData } from "./companyModel";

export class CompanyDto {
  constructor({
    id = null,
    companyName = "",
    industry = "",
    mailId = "",
    phoneNo = "",
    companySize = 0,
    companyCode = "",
    projects = [],
    departmentData = []
  } = {}) {
    this.id = id;
    this.companyName = companyName;
    this.industry = industry;
    this.mailId = mailId;
    this.phoneNo = phoneNo;
    this.companySize = companySize;
    this.companyCode = companyCode;
    this.projects = projects;
    this.departmentData = departmentData.map(
      dept => new DepartmentData(dept)
    );
  }
}