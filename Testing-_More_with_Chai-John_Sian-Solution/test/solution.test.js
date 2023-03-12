// Write your tests here!
const expect = require('chai').expect;
const findStudentByName = require('../src/solution');

describe('findStudentByName', () => {
    it('Return null for not finding student.', () => {
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
          let name = null;
          const result = findStudentByName(students, name);
          expect(result).to.be.null;
    });

    it('A correct student name is given.', () => {
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
          for(let student of students){
            const result = findStudentByName(students, student.name);
            const expected = student;
            expect(result).to.eql(expected);
          }
    });

});