
const tab = document.getElementById("overtable");

function StudentInfo() {
    tab.innerHTML = ''; 
    const students = JSON.parse(localStorage.getItem('student')) || [];
    students.forEach((student, index) => {
        const { reg, Studentname, StuClass, StuSection, eng, tam, mat, sci, soc } = student;

        const totalMarks = Number(eng) + Number(tam) + Number(mat) + Number(sci) + Number(soc);
        const report = totalMarks >= 300 ? "Pass" : "Fail";
        
        const row = document.createElement('tr');

        const keys = [reg, Studentname, StuClass, StuSection, eng, tam, mat, sci, soc,totalMarks];
        keys.forEach((value) => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });

        const reportCell = document.createElement('td');
        reportCell.textContent = report;
        reportCell.style.color = report === "Pass" ? "green" : "red";
        row.appendChild(reportCell);

        tab.appendChild(row);
    });
}

window.onload = StudentInfo;