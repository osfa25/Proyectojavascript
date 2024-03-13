

function showHome(){
    const homehtml= document.getElementById("home");
    homehtml.innerHTML= `<div id="principal" class="container-fluid mt-5">
    <h2><b>Your Mind, Enrich Your Future</b></h2>
    <div class="row mb-4">
        <div id="col-1-img" class="col container align-items-center"><button class="btn">Libraries</button></div>
        <div id="col-2-img" class="col container align-items-center"><button class="btn">Alumni</button></div>
        <div id="col-3-img" class="col container align-items-center"><button class="btn">Bussines</button></div>
    </div>
    <div class="row mb-4">
        <div id="col-4-img" class="col container align-items-center"><button class="btn">Museums</button></div>
        <div id="col-5-img" class="col container align-items-center"><button class="btn">Research</button></div>
        <div id="col-6-img" class="col container align-items-center"><button class="btn">Sports</button></div>
    </div>
    
</div>
<div id="programs" class="container-fluid justify-content-center">
    <div class="row">
        <div class="box undergraduate mr-4 ">
            <h1>Undergraduate</h1>
            <button class="btn">Learn more</button>
            <button class="btn">Find your course</button>
        </div>
        <div class="box postgraduate">
            <h1>Postgraduate</h1>
            <button class="btn">Learn more</button>
            <button class="btn">Find your course</button>
        </div>

    </div>
    
</div>`
}