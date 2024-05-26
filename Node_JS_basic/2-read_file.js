/*eslint-disable*/
const fs = require('fs');

function countStudents(filePath) {
	try {
		const data = fs.readFileSync(filePath, 'utf8');
		const lines = data.split('\n').filter(line => line.trim() !== '');
		if (lines.length === 0) {
			throw new Error('Cannot load the database');
		}

		const header = lines[0].split(',');
		const students = lines.slice(1);
		if (students.length === 0) {
			console.log('Number of students: 0');
			return;
		}

		const studentsByField = {};
		students.forEach((line) => {
			const [firstname, lastname, age, field] = line.split(',');
			if (!firstname || !lastname || !age || !field) {
				return;
			}
			if (!studentsByField[field]) {
				studentsByField[field] = [];
			}
			studentsByField[field].push(firstname);
		});

		const totalStudents = Object.values(studentsByField).reduce((acc, students) => acc + students.length, 0);

		console.log(`Number of students: ${totalStudents}`);
		for (const [field, students] of Object.entries(studentsByField)) {
			console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
		}
	} catch (error) {
		console.error('Cannot load the database');
	}
}

module.exports = countStudents;
