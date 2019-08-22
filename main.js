const addStudentButton = document.querySelector('.add-student');
addStudentButton.onclick = handleNewStudent;


function displayStudent(student) {
  const studentListing = document.createElement('li');
  studentListing.style.display = 'flex';
  studentListing.style.width = `500px`;
  studentListing.style.justifyContent = 'space-between';
  
  const studentInfo = document.createElement('p');
  studentInfo.innerText = `${student.name} - ${student.getAverage()}`
  
  const addGradeInput = document.createElement('input');
  addGradeInput.type = 'text';
  addGradeInput.className = 'add-grade-input';
  
  const addGradeButton = document.createElement('button');
  addGradeButton.innerText = "Add Grade"
  addGradeButton.onclick = addNewGrade;
  
  studentListing.appendChild(studentInfo);
  studentListing.appendChild(addGradeInput);
  studentListing.appendChild(addGradeButton);
  
  const listArea = document.querySelector('.students-list');
  listArea.appendChild(studentListing);
}

// TODO: given a name, make a new student object and put it in our data.
function addStudent(name) {
  const student = newStudent(name);

  students.push(student);
}

function handleNewStudent() {
  const inputBox = document.querySelector('.new-student-input');
  const newStudentName = inputBox.value;

  addStudent(newStudentName);

  const newestStudent = students[students.length - 1];
  displayStudent(newestStudent);
}

function addNewGrade() {
  const listArea = document.querySelector('.students-list');
  const studentListing = this.parentNode;
  const inputBox = studentListing.querySelector('.add-grade-input');
  const newGrade = Number(inputBox.value);

  const studentListings = Array.from(listArea.children);
  const i = studentListings.indexOf(studentListing);

  studentListing.remove();
  
  // TODO: Given our i, find the appropriate student and give them the new grade in `newGrade`. Then display them on the page again using `displayStudent`.

  const student = students[i];
  student.addGrade(newGrade);

  displayStudent(student);
}