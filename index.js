class Student {
    constructor(name, email, level) {
        this.email = email;
        this.name = name;
        this.level = level;
    }
}

class Bootcamp {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.students = [];
    }

    registerStudent(studentToRegister, level) {
        if (!studentToRegister.name || !studentToRegister.email || !level) {
            console.log("Invalid Name, Email, or Level");
            return false;
        }

        if (this.students.some(student => student.email === studentToRegister.email)) {
            console.log("This email is registered already");
            return false;
        }

        studentToRegister.level = level;
        this.students.push(studentToRegister);
        console.log(`Registered ${studentToRegister.name} for ${this.level} bootcamp`);
        return true;
    }

    listStudents() {
        if (this.students.length === 0) {
            console.log(`No students are registered in this ${this.level} ${this.name} course.`);
            return [];
        } else {
            console.log(`The students registered to the ${this.level} ${this.name} bootcamp.`);
            for (const student of this.students) {
                console.log(`${student.name} - ${student.email} (${student.level})`);
            }
            return this.students;
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const registerStudentButton = document.getElementById('registerStudentButton');
    const listStudentsButton = document.getElementById('listStudentsButton');
    const studentNameInput = document.getElementById('studentNameInput');
    const studentEmailInput = document.getElementById('studentEmailInput');
    const bootcampLevelInput = document.getElementById('bootcampLevelInput');
    const studentListContainer = document.getElementById('StudentList');

    const bootcamp = new Bootcamp("React", "Advanced");

    registerStudentButton.addEventListener('click', function () {
        const newStudent = new Student(studentNameInput.value, studentEmailInput.value);
        bootcamp.registerStudent(newStudent, bootcampLevelInput.value);
        studentNameInput.value = ''; // Clear input after registration
        studentEmailInput.value = ''; // Clear input after registration
    });

    listStudentsButton.addEventListener('click', function () {
        const students = bootcamp.listStudents();
        displayStudents(students);
    });

    function displayStudents(students) {
        studentListContainer.innerHTML = ''; // Clear previous content
        if (students.length === 0) {
            studentListContainer.textContent = `No students are registered in this ${bootcamp.name} course.`;
        } else {
            const list = document.createElement('ul');
            students.forEach(student => {
                const listItem = document.createElement('li');
                listItem.textContent = `${student.name} - ${bootcamp.name} (${student.level})`;
                // if (student.level === 'Easy') {
                //     document.getElementById('#easy').style.color = '#04a777';
                // }
                list.appendChild(listItem);
            });
            studentListContainer.appendChild(list);
        }
    }
});





testStudent = new Student("Bugs Bunny", "bugs@bunny.com");
console.log(testStudent);
if (
  testStudent.name === "Bugs Bunny" &&
  testStudent.email === "bugs@bunny.com"
) {
  console.log("TASK 1: PASS");
}

reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if (
  reactBootcamp.name === "React" &&
  reactBootcamp.level === "Advanced" &&
  Array.isArray(reactBootcamp.students) &&
  reactBootcamp.students.length === 0
) {
  console.log("TASK 2: PASS");
}

const runTest = (bootcamp, student) => {
  const attemptOne = bootcamp.registerStudent(student);
  const attemptTwo = bootcamp.registerStudent(student);
  const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
  if (attemptOne && !attemptTwo && !attemptThree) {
    console.log("TASK 3: PASS");
  }

  bootcamp.registerStudent(new Student("Babs Bunny", "babs@bunny.com"));
  if (bootcamp.listStudents()) {
    console.log("TASK 4: PASS 1/2");
  }
  bootcamp.students = [];
  if (!bootcamp.listStudents()) {
    console.log("TASK 4: PASS 2/2");
  }
};
runTest(reactBootcamp, testStudent);
