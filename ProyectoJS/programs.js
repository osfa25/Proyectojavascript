async function showPrograms(){
    initialState();// every innerHTML become empty
    const programsHTML = document.getElementById("mainprograms");
    programsHTML.innerHTML = "";// assure that is empty
    programsHTML.innerHTML += "<div class='h2 text-center mt-5'>programs</div>"
    const programs = await load("programs");
    for(program of programs){
        if((program["id"]-1)%2 === 0){//the rows that we create only have 1 spaces
            const div = document.createElement("div");
            div.classList.add("row");
            div.classList.add("mb-4");
            programsHTML.appendChild(div);
        }
        let lastRowHTML = programsHTML.querySelectorAll(".row");
        lastRowHTML = lastRowHTML[lastRowHTML.length-1];
        console.log(lastRowHTML);
        const card = createCard(program);
        lastRowHTML.innerHTML += card;
    }
}