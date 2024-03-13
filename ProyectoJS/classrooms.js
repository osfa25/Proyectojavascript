async function showClassrooms(){
    initialState();// every innerHTML become empty
    const ClassroomsHTML = document.getElementById("maindeparments");
    ClassroomsHTML.innerHTML = "";// assure that is empty
    ClassroomsHTML.innerHTML += "<div class='h2 text-center mt-5'>Classrooms</div>"
    const Classrooms = await load("classrooms");
    for(Classroom of Classrooms){
        if((Classroom["id"]-1)%2 === 0){//the rows that we create only have 1 spaces
            const div = document.createElement("div");
            div.classList.add("row");
            div.classList.add("mb-4");
            ClassroomsHTML.appendChild(div);
        }
        let lastRowHTML = ClassroomsHTML.querySelectorAll(".row");
        lastRowHTML = lastRowHTML[lastRowHTML.length-1];
        const card = createCard(Classroom);
        lastRowHTML.innerHTML += card;
    }
}