function client(name, age, doctor, diagnos) {
  this.name = name;
  this.age = age;
  this.doctor = doctor;
  this.diagnos = diagnos;
  this.getinfo = function () {
    console.log(this.age, this.diagnos, this.doctor, this.name);
  };
}

const doctor = {
  name: "doctor1",
  age: "43",
  specify: "psychologist",
};
