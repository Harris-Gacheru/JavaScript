// Create a class called FourthYearStudent. Add a constructor to it. The constructor takes arguments for the name, age, and units properties, and initializes them. Add a static method called getYearOfStudy that returns the value 4. Add another method called getStudentAge that returns the age of a particuclar student(instance). Create a new instance of FourthYearStudent with a name (string), age (number), and units (an array of strings. The strings are the units that the student is taking throughout the semester). Log the student's properties to the console. Call the getStudentAge method on the instance.

class FourthYearStudent {
    constructor(name, age, units){
        this.name = name;
        this.age = age;
        this.units = units;
    }

    static getYearOfStudy(){
        return 4;
    }

    getStudentAge(){
        return this.age;
    }
}

// create instance
let student1 = new FourthYearStudent('Martin Lurther', 23, ['web development', 'data structures', 'OOP']);

// Log properties
console.log(`Name: ${student1.name}
Age: ${student1.age}
Units: ${student1.units}`);

// Log getStudentAge method
console.log(`Student Age: ${student1.getStudentAge()}
Year of study: ${FourthYearStudent.getYearOfStudy()}`);