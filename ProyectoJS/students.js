async function showStudents(){
    initialState();// every innerHTML become empty
    const StudentsHTML = document.getElementById("mainstudents");
    StudentsHTML.innerHTML = "";// assure that is empty
    StudentsHTML.innerHTML += "<div class='h2 text-center mt-5'>Students</div>"
    const Students = await load("students");
    for(Student of Students){
        if((Student["id"]-1)%2 === 0){//the rows that we create only have 1 spaces
            const div = document.createElement("div");
            div.classList.add("row");
            div.classList.add("mb-4");
            StudentsHTML.appendChild(div);
        }
        let lastRowHTML = StudentsHTML.querySelectorAll(".row");
        lastRowHTML = lastRowHTML[lastRowHTML.length-1];
        console.log(lastRowHTML);
        const card = createCard(Student);
        lastRowHTML.innerHTML += card;
    }
}

async function newStudentForm(){
    
    initialState();// every innerHTML become empty
    const studentsHTML = document.getElementById("mainstudents");
    studentsHTML.innerHTML = '';// assure that is empty
    studentsHTML.innerHTML += "<div class='h2 text-center'>New student</div>"
    const students = await load("students");
    studentsHTML.innerHTML += await createPersonForm(students[0],"Student");
    
}

async function addStudent(){
    const studentList = await load("students");

    const documentTypeInput = document.getElementById("Student-tipo_documento-input");
    const documentNumberInput = document.getElementById("Student-numero_documento-input");
    const documentFirstNameInput = document.getElementById("Student-nombre-input");
    const documentLastNameInput = document.getElementById("Student-apellido-input");
    const documentResidentCityInput = document.getElementById("Student-ciudad_residencia-input");
    const documentDirectionInput = document.getElementById("Student-direccion-input");
    const documentPhoneInput = document.getElementById("Student-telefono-input");
    const documentBirthdateInput = document.getElementById("Student-fecha_nacimiento-input");
    const documentGenderInput = document.getElementById("Student-sexo-input");
    const documentProgramIdInput = document.getElementById("Student-programa_id-input");

    const documentType = documentTypeInput.value;
    const documentNumber = documentNumberInput.value;
    const documentFirstName = documentFirstNameInput.value;
    const documentLastName = documentLastNameInput.value;
    const documentResidentCity = documentResidentCityInput.value;
    const documentDirection = documentDirectionInput.value;
    const documentPhone = documentPhoneInput.value;
    const documentBirthdate = documentBirthdateInput.value;
    const documentGender = documentGenderInput.value;
    const documentProgramId = documentProgramIdInput.value;

    const newStudent = {
        "id": studentList.length + 1,
        "first_name": documentFirstName,
        "last_name": documentLastName,
        "document_type": documentType,
        "document_number": documentNumber,
        "resident_city": documentResidentCity,
        "direction": documentDirection,
        "phone": documentPhone,
        "birthdate": documentBirthdate,
        "gender": documentGender,
        "program_id": documentProgramId
    }

    await save(newStudent,"students");

    documentTypeInput.value ="";
    documentNumberInput.value="";
    documentFirstNameInput.value="";
    documentLastNameInput.value="";
    documentResidentCityInput.value="";
    documentDirectionInput.value="";
    documentPhoneInput.value="";
    documentBirthdateInput.value="";
    documentGenderInput.value="";
    documentProgramIdInput.value="";

    alert("Student sucessfully created");

}