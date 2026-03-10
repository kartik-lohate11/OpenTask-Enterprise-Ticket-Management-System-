export default class EmployeeData {
    constructor({
        id,
        companyName,
        designation,
        reportingManager,
        level,
        department,
        phoneNo,
        projects
    }) {
        this.id = id;
        this.companyName = companyName;
        this.designation = designation;
        this.reportingManager = reportingManager;
        this.level = level;
        this.department = department;
        this.phoneNo = phoneNo;
        this.projects = projects || [];
    }
}