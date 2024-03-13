// json functions
async function load(url){
    try{
        let returnList = [];
        const response = await fetch(`http://localhost:3000/${url}`);
        if(!response.ok){
            throw new Error(`Error to load ${url} state:`,response.status);
        }
        returnList = await response.json();
        return returnList;
    }catch(error){
        console.error(`error to load the ${url}`,error.message);
    }
}

async function save(newUser,url){
    try{
        const response = await fetch(`http://localhost:3000/${url}`,{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(newUser)
        });
        if(!response.ok){
            throw new Error(`Error to load ${url}. state:`,response.status);
        }
        const createdUser = await response.json();
        console.log("created ${url}:",createdUser);
    }catch(error){
        console.error(`error to load the ${url}`,error.message);
    }
}







function createCard(dataDic) {
    let cardHTML = `
    <div class="col">
        <div class="card">
            <div class="card-body">
    `;
    if (dataDic["id"] !== undefined) {
        cardHTML += `<h5 class="card-title">ID: ${dataDic["id"]}</h5>`;
    } else {
        cardHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
</svg>`;
    }
    cardHTML += `<ul class="list-group mt-2">`;

    for (let key in dataDic) {
        if (key === "class_schedule") {
            cardHTML += `<li class="list-group-item"><span>${key.replaceAll("_", " ")}:</span><ul class="list-group">`;

            for (let schedule of dataDic[key]) {
                cardHTML += `<li class="mt-4">${createCard(schedule)}</li>`;
            }

            cardHTML += `</ul></li>`;
        } else if(key !=="id") {
            cardHTML += `<li class="list-group-item">${key.replaceAll("_", " ")}: ${dataDic[key]}</li>`;
        }
    }

    cardHTML += `</ul></div></div></div>`;
    return cardHTML;
}

    function initialState(){
        //hiddeSecondaryMenus();//make sure to hidde the secundary menus
        const container = document.getElementById("main-container");
        const divs = container.getElementsByTagName("div");
        for(let i = 0; i < divs.length; i++){
            divs[i].innerHTML = "";
        }
    }
