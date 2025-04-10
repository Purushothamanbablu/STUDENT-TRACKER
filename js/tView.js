
document.getElementById("sub").addEventListener('click', () => {
    let reg = document.getElementById("reg").value
    let Studentname = document.getElementById("sname").value
    let StuClass = document.getElementById("cla").value
    let StuSection = document.getElementById("sect").value
    let eng = document.getElementById("eng").value
    let tam = document.getElementById("tam").value
    let mat = document.getElementById("mat").value
    let sci = document.getElementById("sci").value
    let soc = document.getElementById("soc").value

function alp(value) {
    return /^[a-zA-Z]+$/.test(value);
}

if ( reg.length === 5 &&  alp(Studentname) &&  StuClass <= 12 && StuClass > 0 &&  StuSection.length === 1 &&
     alp(StuSection) && [eng, tam, mat, sci, soc].every(value => value <= 100) ) {
    const student = JSON.parse(localStorage.getItem('student')) || [];
    student.push({ reg, Studentname, StuClass, StuSection, eng, tam, mat, sci, soc });
    localStorage.setItem('student', JSON.stringify(student));
    alert('Report added successfully!');
} else {
    alert('Invalid input');
}
})