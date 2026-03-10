export class DepartmentData {
  constructor({
    id = null,
    name = "",
    status = []
  } = {}) {
    this.id = id;
    this.name = name;
    this.status = status;
  }
}