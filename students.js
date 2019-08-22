const students = [];


function newStudent(newStudentName) {
  return {
    name: newStudentName,
    term: 1,
    grades: [],

    addGrade: function(grade) {
      this.grades.push(grade)
    },

    getAverage: function() {
      let sum = 0;

      if (this.grades.length === 0) {
        return 100;
      }

      for (let i = 0; i < this.grades.length; i++) {
        sum = sum + this.grades[i];
      }

      const average = sum / this.grades.length;
      
      return average;
    }
  }
}
