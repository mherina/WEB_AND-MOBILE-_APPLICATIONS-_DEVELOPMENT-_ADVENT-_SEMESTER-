//object school
let school = {
    name: "St_peters_nsambya",
    schoolLocation: "nsambya",
    establishedYear:1999,
    studentsCount:100,
    schoolintroduction: function(){
        return `Hello, the school's name is ${this.name},located in ${this.schoolLocation} with ${this.studentsCount}students.`;
    }
};

console.log(school.schoolintroduction());