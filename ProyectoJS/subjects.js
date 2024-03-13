function subjectsOptions(){
    hiddeSecondaryMenus();
    const subjectMenu = document.getElementById("mainsubjects");
    subjectMenu.style.display = 'block';
}

async function showSubjects(){
    initialState();// every innerHTML become empty
    const subjectsHTML = document.getElementById("mainsubjects");
    subjectsHTML.innerHTML = "";// assure that is empty
    subjectsHTML.innerHTML += "<div class='h2 text-center'>subjects</div>"
    const subjects = await load("subjects");
    for(subject of subjects){
        if((subject["id"]-1)%2 === 0){//the rows that we create only have 2 spaces
            const div = document.createElement("div");
            div.classList.add("row");
            div.classList.add("mb-4");
            subjectsHTML.appendChild(div);
        }
        let lastRowHTML = subjectsHTML.querySelectorAll(".row");
        lastRowHTML = lastRowHTML[lastRowHTML.length-1];
        const card = createCard(subject);
        lastRowHTML.innerHTML += card;
    }
}

async function newSubjectForm(){
    initialState();// every innerHTML become empty
    const subjectsHTML = document.getElementById("mainsubjects");
    subjectsHTML.innerHTML = "";// assure that is empty
    subjectsHTML.innerHTML += "<div class='h2 text-center'>New subject</div>"
    const subjects = await load("subjects");
    subjectsHTML.innerHTML += await createPersonForm(subjects[0],"Subject");
    
}

async function addSubject(){
    const subjectList = await load("subjects");



    const courseIdInput = document.getElementById("Subject-curso_id-input");
    const codeInput = document.getElementById("Subject-codigo-input");
    const creditInput = document.getElementById("Subject-creditos-input");
    const teacherIdInput = document.getElementById("Subject-profesor_id-input");
    const spaceAvailableInput = document.getElementById("Subject-cupos_disponibles-input");
    const programIdInput = document.getElementById("Subject-programa_id-input");
    const dayInput = document.getElementById("Subject-day-input");
    const hourInput = document.getElementById("Subject-hour-input");
    const classroomIdInput = document.getElementById("Subject-classroom_id-input");

    const courseId = courseIdInput.value;
    const code = codeInput.value;
    const credit = creditInput.value;
    const teacherId = teacherIdInput.value;
    const spaceAvailable = spaceAvailableInput.value;
    const programId = programIdInput.value;
    const day = dayInput.value;
    const hour = hourInput.value;
    const classroomId = classroomIdInput.value;
    const [startHour, enddHour] = hour.split(" ");

    const newSubject = {
        "id": subjectList.length + 1,
        "course_id": courseId,
        "code": code,
        "credits": credit,
        "teacher_id": teacherId,
        "space_available": spaceAvailable,
        "program_id": programId,
        "class_schedule": [
            {
              "day": day,
              "start_hour": startHour,
              "end_hour": enddHour,
              "classroom_id": classroomId
            }
        ]
    }
    alert("Subject sucessfully created");
    await save(newSubject,"subjects");

    courseIdInput.value ="";
    codeInput.value="";
    creditInput.value="";
    teacherIdInput.value="";
    spaceAvailableInput.value="";
    programIdInput.value="";
    dayInput.value="";
    hourInput.value="";
    classroomIdInput.value="";
    documentProgramIdInput.value="";


}