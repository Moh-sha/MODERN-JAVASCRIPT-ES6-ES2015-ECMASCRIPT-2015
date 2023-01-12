class Student {
  constructor(sid, sname) {
    this.name = sid;
    this.id = sname;
    this.location = "aiub";
  }
}

const student1 = new Student(20, "shafin");
const student2 = new Student(30, "hiya");
console.log(student1, student2);
