
async function loadCitizens(dataDic,name){
    let formHTMl = `
    <form class="align-items-center">
    `;

    for(let key in dataDic){
        if(key === "horario_clases"){
            formHTMl += `
            <label for="${name}-day-input">Select day</label> 
            <select id="${name}-day-input" class="form-select" aria-label="Default select example">
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
            </select> `
            // begin and end hour
            formHTMl += `
            <label for="${name}-hour-input">Select hour of start and end</label> 
            <select id="${name}-hour-input" class="form-select" aria-label="Default select example">
                <option value="06:00 07:00">06:00 07:00</option>
                <option value="07:00 08:00">07:00 08:00</option>
                <option value="08:00 09:00">08:00 09:00</option>
                <option value="09:00 10:00">09:00 10:00</option>
                <option value="10:00 11:00">10:00 11:00</option>
                <option value="11:00 12:00">11:00 12:00</option>
                <option value="12:00 13:00">12:00 13:00</option>
                <option value="13:00 14:00">13:00 14:00</option>
                <option value="14:00 15:00">14:00 15:00</option>
                <option value="15:00 16:00">15:00 16:00</option>
                <option value="16:00 17:00">16:00 17:00</option>
                <option value="17:00 18:00">17:00 18:00</option>
                <option value="18:00 19:00">18:00 19:00</option>
                <option value="19:00 20:00">19:00 20:00</option>
                <option value="20:00 21:00">20:00 21:00</option>
                <option value="21:00 22:00">21:00 22:00</option> 
            </select> `
            //classroom id
            formHTMl +=`
            <label for="${name}-classroom_id-input">Select classroom id</label> 
            <select id="${name}-classroom_id-input" class="form-select" aria-label="Default select example">
            `
            classrooms = await load("classrooms");
            for(classroom of classrooms){
                console.log(classroom)
                formHTMl += `<option value="${classroom["id"]}">${classroom["id"]}</option> `
            }
            formHTMl += `</select>`
        }else if(key !=="id"&&key!=="precio"){
            formHTMl += `
            <div class="form-group">
                <label for="${name}-${key}-input">${key.replaceAll("_"," ")}</label> 
                <textarea class="form-control" id="${name}-${key}-input" rows="1"></textarea>
            </div>`;
        }
    }
    formHTMl += `
    <button type="button" class="btn btn-primary mt-2" onClick="add${name}()">Add ${name}</button>
    </form>
    `;
    
    return formHTMl;
}

document.getElementById("Ciudadano").addEventListener("click", showCiudadano);
document.getElementById("Ciudadano").addEventListener("click", showCiudadano);

// document.getElementById("Teacher").addEventListener("click", teacherOptions);

document.addEventListener('DOMContentLoaded',async ()=>{
    const citizens = await load("ciudadanos");
    await loadCitizens(citizens[0],"ciudadanos");
    analizeForm();
})