var ids = []
var x = null
var colorWell;
var defaultColor;
var c;
var h;
var pages = ['PORTFOLIO-->', 'ABOUT ME-->', 'CONTACT-->']
var pageLink = ["portfolio.html", "about.html", "contact.html"]
function setDefault(){
    x = '????????????'
    for (i = 0; i < 37; i ++){
        ids.push('word' + i.toString())
        document.getElementById(ids[i]).innerHTML = x
    
    }
}

function setWord(x = '????????????'){
    if (document.getElementById("x").value && pages.includes(x) == false){
        x = document.getElementById("x").value.toUpperCase();
    }
    for (i = 0; i < ids.length; i ++){
        document.getElementById(ids[i]).innerHTML = x
    }
}

function selector(){
    selectors = document.getElementsByClassName('selector')
    for (i = 0; i < selectors.length; i ++){
        if (selectors[i].checked){
            setWord(selectors[i].value)
        }
    }
}

function selectLink(){
    selectors = document.getElementsByClassName('selector')
    for (i = 0; i < selectors.length; i ++){
        if (selectors[i].checked){
            console.log(pageLink[i])
            return pageLink[i]
        }
    }
}

//color selector and color randomization
function setDefaultColor(){
    var defaultColor = '#' + Math.floor(Math.random()*16777215).toString(16);;
    var c = document.getElementById("c");
    var h = document.getElementById("logo");
    c.style.color = defaultColor
    h.style.color = defaultColor
    colorWell = document.querySelector("#colorWell"); 
    colorWell.value = defaultColor;
    window.addEventListener("load", startup, false); 
}

function startup() {
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
}

function updateFirst(event) {
    if (c) {
        c.style.color = event.target.value;
    }
    if (h) {
        h.style.color = event.target.value;
    }
}
function updateAll(event) {
    document.querySelectorAll("c").forEach(function(c) {
    c.style.color = event.target.value;
    });
    document.querySelectorAll("q").forEach(function(h) {
    h.style.color = event.target.value;
    });
}

var paint = {
    title: '<h1>RGB Color Mixer</h1>',
    medium: 'P5.js game',
    thumbnail: '<img src= "images/paint-machine.gif" onclick= showGallery(paint) class= "image">',
    catagory: 'web',
    galleryTitles: [],
    gallery: ['<iframe  style= "width: 100vw; height: 100vh; position: absolute; "class= "gallery" scrolling="no" frameborder="0" src= "https://editor.p5js.org/Slunchi/embed/SC6exQltu"></iframe>']
}
var zaum = {
    title: '<h1>Posters for Zaum</h1>',
    medium: 'P5.js poster',
    thumbnail: '<img src= "images/zaum.gif" onclick= showGallery(zaum) class= "image">',
    catagory: 'web',
    galleryTitles: [],
    gallery: ['<iframe style= "width: 100vw; height: 100vh; position: absolute; margin-top:15vh;" class= "gallery" scrolling="no" frameborder="0" src="https://editor.p5js.org/Slunchi/embed/5sPbV7eht"></iframe>', '<iframe style= "width: 100vw; height: 100vh; position: absolute; margin-top:15vh; margin-left:70vh;" class= "gallery" scrolling="no" frameborder="0" src="https://editor.p5js.org/Slunchi/embed/xihmHR_nZ"></iframe>']
}
var book = {
    title: '<h1>Fish Book</h1>',
    medium: 'Secret Belgium Binding',
    thumbnail: '<img src= "images/fishbook/middle.jpg" onclick= showGallery(book) class= "image">',
    catagory: 'print',
    galleryTitles: [],
    gallery: ['<img style= "height: 100vh; width: auto; position: absolute;" src= "images/fishbook/page1.jpg">']
}
var shirt = {
    title: '<h1>Screen Printed Shirt</h1>',
    medium: 'screen printing',
    thumbnail: '<img src= "images/Shoot fish.jpg" onclick= showGallery(shirt) class= "image">',
    catagory: 'print',
    galleryTitles: [],
    gallery: ['<img style= "height: 100vh; width: auto; position: absolute; margin-top: -5vh;" src= "images/Shoot fish.jpg">']
}


function setCategory(){
    categories = document.getElementsByClassName('category')
    for (i = 0; i < categories.length; i ++){
        if (categories[i].checked){
            clearGrid()
            fillGrid(categories[i].value);
        }
    }
}

var projectVars = [paint, zaum, book, shirt]

function fillGrid(show){
    elements = document.getElementsByClassName('imagegrid')
    if(show == 'all'){
        for(i = 0; i < projectVars.length; i ++){
            elements[0].innerHTML += projectVars[i].thumbnail
        }
    }
    if(show == 'web'){
        for(i = 0; i < projectVars.length; i ++){
            if (projectVars[i].catagory == 'web'){
                elements[0].innerHTML += projectVars[i].thumbnail
            }
        }
    }
    if(show == 'print'){
        for(i = 0; i < projectVars.length; i ++){
            if (projectVars[i].catagory == 'print'){
                elements[0].innerHTML += projectVars[i].thumbnail
            }
        }
    }
}

function clearGrid(){
    elements = document.getElementsByClassName("imagegrid")
    elements[0].innerHTML = ''
    document.getElementsByClassName("title")[0].innerHTML = '<h1>Portfolio</h1>'
}

function showGallery(project){
    clearGrid()
    document.getElementsByClassName("title")[0].innerHTML = project.title
    for(i = 0; i < project.gallery.length; i ++){
        elements[0].innerHTML += project.gallery[i]
    }
}
