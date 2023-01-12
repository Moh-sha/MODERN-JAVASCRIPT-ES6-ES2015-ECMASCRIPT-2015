class Parents {
  constructor() {
    this.fname = "De Silva";
  }
}

class Child extends Parent {
  constructor(sname, slocation) {
    super();
    this.name = sname;
    this.slocation = slocation;

    getName();
    {
      return this.fname + this.name;
    }
  }
}

const born1 = new Child("hasaranga", "sylhet");
const born2 = new Child("Chamika", "sylhet");
console.log(born1.getName());
console.log(born2.getName());
