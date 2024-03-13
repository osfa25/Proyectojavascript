function tuitionOptions(){
    hiddeSecondaryMenus();
    const tuitionMenu = document.getElementById("maintuitions");
    tuitionMenu.style.display = 'block';
}

async function showTuitions(){
    initialState();// every innerHTML become empty
    const tuitionsHTML = document.getElementById("maintuitions");
    tuitionsHTML.innerHTML = "";// assure that is empty
    tuitionsHTML.innerHTML += "<div class='h2 text-center'>tuitions</div>"
    const tuitions = await load("tuitions");
    for(tuition of tuitions){
        if((tuition["id"]-1)%2 === 0){//the rows that we create only have 2 spaces
            const div = document.createElement("div");
            div.classList.add("row");
            div.classList.add("mb-4");
            tuitionsHTML.appendChild(div);
        }
        let lastRowHTML = tuitionsHTML.querySelectorAll(".row");
        lastRowHTML = lastRowHTML[lastRowHTML.length-1];
        const card = createCard(tuition);
        lastRowHTML.innerHTML += card;
    }
}

async function newTuitionForm(){
    initialState();// every innerHTML become empty
    const tuitionsHTML = document.getElementById("maintuitions");
    tuitionsHTML.innerHTML = "";// assure that is empty
    tuitionsHTML.innerHTML += "<div class='h2 text-center'>New tuition</div>"
    const tuitions = await load("tuitions");
    tuitionsHTML.innerHTML += await createPersonForm(tuitions[0],"Tuition");
    tuitionsHTML.innerHTML += `
    <div class='h2 text-center'>enrolled registrations</div>
    <div id="shopping-cart"></div>
    <button type="button" class="btn btn-primary mt-2"  id="shopping-button" onClick="saveAllTuitions()">Register all the tuitions</button>
    `;
}

async function addTuition(){
    const tuitionList = await load("tuitions");
    const shoppingCart = document.getElementById("shopping-cart");


    const studentIdInput = document.getElementById("Tuition-estudiante_id-input");//
    const subjectIdInput = document.getElementById("Tuition-asignatura_id-input");
    const periodIdInput = document.getElementById("Tuition-periodo_id-input");

    const studentId = studentIdInput.value;
    const subjectId = subjectIdInput.value;
    const periodId = periodIdInput.value;




    const feesList = await load("fees");
    const subjectsList = await load("subjects");
    let cost = 0;

    for(subject of subjectsList){
        if(subjectId == subject['id']){
            for(fee of feesList){
                if(periodId == fee['period'] && fee["program_id"] == subject["programa_id"]){
                    cost = Number(fee["cost"])*Number(subject["creditos"]);
                    shoppingCart.innerHTML += `<p>id:${tuitionList.length + 1} student_id:${studentId} subject_id:${subjectId} period_id:${periodId} price:${cost}</p>`;
                }
            }
        }
    }
    studentIdInput.value ="";
    subjectIdInput.value="";
    periodIdInput.value="";

    if(cost == 0){
        alert("Make sure to add valid inputs");
    }

}

async function saveAllTuitions(){
    const shoppingCart = document.getElementById("shopping-cart");
    const ps = shoppingCart.getElementsByTagName("p");

    let text = ps[0].innerHTML;
    text = text.split(" ");

    let newTuition = {
        "id": text[0].split(":")[1],//id
        [text[1].split(":")[0]]: text[1].split(":")[1],//student_id
        [text[2].split(":")[0]]: [],//subject_id
        [text[3].split(":")[0]]: text[3].split(":")[1],//period_id
        [text[4].split(":")[0]]: text[4].split(":")[1],//price
    }

    console.log(newTuition)
    console.log(ps);
    for(let i = 0; i < ps.length ; i++){
        text = ps[i].innerHTML;

        text = text.split(" ");
        console.log(newTuition["subject_id"]);
        newTuition["subject_id"].push(text[2].split(":")[1]);

        ps[i].innerHTML = "";
    }
    await save(newTuition,"tuitions");
}