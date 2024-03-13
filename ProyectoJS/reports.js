async function showReports(){
    initialState();// every innerHTML become empty
    //hiddeSecondaryMenus();
    const reportsHTML = document.getElementById("mianreports");
    const tuitions = await load("tuitions");
    const subjects = await load("subjects");
    let total1 = 0;
    let total2 = 0;

    for(tuition of tuitions){
        if(tuition["periodo_id"] == 1){
            total1 += Number(tuition["precio"]);
        }
        else{
            total2 += Number(tuition["precio"]);
        }
    }
    
    reportsHTML.innerHTML = "";// assure that is empty
    
    reportsHTML.innerHTML += `<div class='h2 text-center'>Total for academic period 1: $${total1} </div>`
    reportsHTML.innerHTML += `<div class='h2 text-center'>Total for academic period 2: $${total2} </div>`
    
    listSubject = new Array(subjects.length).fill(0)
    for(tuition of tuitions){
        listSubject[Number(tuition["asignatura_id"])]++;
    }

    maxSubj = -1;
    posSubj = 0;
    for(let i = 0; i < tuitions.length;i++){
        if(listSubject[i] > maxSubj){
            maxSubj = listSubject[i];
            posSubj = i;
        }
    }

    reportsHTML.innerHTML += `<div class='h2 text-center'>Most popular subject: ${subjects[posSubj]["code"]} </div>`

}