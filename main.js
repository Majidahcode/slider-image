//Get Slider Item | Array.from [ES6 Feature]
var sliderImage = Array.from(document.querySelectorAll('.slaid-container  img'));
//Get Number Of  Slide
var slidesCount = sliderImage.length;

//Get Current  Slide
var currentSlide = 1;

//Slide Number Element
var slideNumberElement = document.getElementById('slaid-numper');

//Previous And Next Buttons
var nextButon = document.getElementById('next');
var prevButon = document.getElementById('prev');


nextButon.onclick = nextSlide;
prevButon.onclick = pervSlide;


//Creat Click On UL Element
var paginationElement = document.createElement('ul');

//Set ID  On Craeted UL Element 
paginationElement.setAttribute('id', 'pagination-ul');


//Creat List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++){

    //Creat The LI
    var paginationItem = document.createElement('li');

    //Set Custom Attributs
    paginationItem.setAttribute('data-index', i);


    //Set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    //Append Item To The Main Ul
    paginationElement.appendChild(paginationItem);
}

//Add The Crearted Ul To Pag
document.getElementById('indicator').appendChild(paginationElement);



//Get The New Crearted UL
var paginationCreatedUl = document.getElementById('pagination-ul');

//Get pagination Item | Array.from [ES6 Feature]
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));


for (var i = 0; i < paginationBullets.length; i++) {

    paginationBullets[i].onclick = function () {

        currentSlide = parseInt(this.getAttribute('data-index'));
    
        theChecker();
    
    
    }  
}
//Trigger The Checker Funtion
theChecker();



//Next Slide Function
function nextSlide() {

    if (nextButon.classList.contains('disapaled')) {
       
        //Do Nothige
        return false;

    } else {

        currentSlide++;

        theChecker();
    }
}

//previous Slide Function
function pervSlide() {

    if (prevButon.classList.contains('disapaled')){

        //Do Nothige
        return false;

    } else {

        currentSlide--;

        theChecker();
    }
}


//Creat The Checker Function
function theChecker() {
    
    slideNumberElement.textContent  = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

     
    removeAllActive();

    sliderImage[currentSlide - 1].classList.add('active');

    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    //check If Current Slide Is The First
    if (currentSlide == 1){

        //add Disabled Class On Prev Button
        prevButon.classList.add('disapaled');

    } else {

        //remove Disabled Class On Prev Button
        prevButon.classList.remove('disapaled');

    }

    //check If Current Slide Is The last
    if (currentSlide == slidesCount) {

        //add Disabled Class On Prev Button
        nextButon.classList.add('disapaled');

    } else {

        //remove Disabled Class On Prev Button
        nextButon.classList.remove('disapaled');

    }
}

//Created Remove Func
function removeAllActive() {

    sliderImage.forEach(function (img) {

        img.classList.remove('active');
    });

    //loop Bulltes
    paginationBullets.forEach(function (bullet){

        bullet.classList.remove('active')
    });
}