
const tab = document.getElementById("overtable");

function StudentInfo() {
    tab.innerHTML = ''; 
    const students = JSON.parse(localStorage.getItem('student')) || [];
    students.forEach((student, index) => {
        const { reg, Studentname, StuClass, StuSection, eng, tam, mat, sci, soc } = student;

        const totalMarks = Number(eng) + Number(tam) + Number(mat) + Number(sci) + Number(soc);
        
        const row = document.createElement('tr');

        const keys = [reg, Studentname, StuClass, StuSection, eng, tam, mat, sci, soc,totalMarks];
        keys.forEach((value) => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });

        const reportCell = document.createElement('td');
        const report = totalMarks >= 300 ? "Pass" : "Fail";
        reportCell.textContent = report;
        reportCell.style.color = report === "Pass" ? "green" : "red";
        row.appendChild(reportCell);


        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', () => deleteInfo(index));
        const btnCell = document.createElement('td');
        btnCell.appendChild(deleteBtn);
        row.appendChild(btnCell);

        tab.appendChild(row);
    });
}

function deleteInfo(index) {
    const students = JSON.parse(localStorage.getItem('student')) || [];
    students.splice(index, 1);
    localStorage.setItem('student', JSON.stringify(students));
    StudentInfo();
}

window.onload = StudentInfo;