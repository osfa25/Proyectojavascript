async function showFees(){
    initialState();// every innerHTML become empty
    const feesHTML = document.getElementById("maindeparments");
    feesHTML.innerHTML = "";// assure that is empty
    feesHTML.innerHTML += "<div class='h2 text-center mt-5'>fees</div>"
    const fees = await load("fees");
    for(fee of fees){
        if((fee["id"]-1)%2 === 0){//the rows that we create only have 1 spaces
            const div = document.createElement("div");
            div.classList.add("row");
            div.classList.add("mb-4");
            feesHTML.appendChild(div);
        }
        let lastRowHTML = feesHTML.querySelectorAll(".row");
        lastRowHTML = lastRowHTML[lastRowHTML.length-1];
        const card = createCard(fee);
        lastRowHTML.innerHTML += card;
    }
}