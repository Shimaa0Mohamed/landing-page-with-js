/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

let mainNav = document.querySelector("nav ul");
let mainSections = document.querySelectorAll("main section");
const mainn = document.querySelector("main");

/**
 * End Global Variables

 * 
*/


/**

 * Begin Events
 * 
*/


//hide navbar on scrolling
const startingTime1 = performance.now();
let timer = null;
window.addEventListener('scroll', function() {
    if (timer !== null) {
        clearTimeout(timer);
        document.getElementById("navbar__menu").style.display = "none";
    }
    timer = setTimeout(function() {
        document.getElementById("navbar__menu").style.display = "block";

    }, 50);
}, false);
const endingTime1 = performance.now();
console.log('This code took ' + (endingTime1 - startingTime1) + ' milliseconds.');
//////////////////////////////////////////////////////////////////////////////////////

// build fixed navbar from existing sections
const startingTime2 = performance.now();
//create div to put navbar links on it
const myCustomDiv = document.createElement('div');
myCustomDiv.setAttribute("id", "navSections");
//create links from currently exict sections that will scroll to it on clicking
mainSections.forEach(link => {
    const newnav = document.createElement('li');
    let r = link.getAttribute("data-nav");
    let rr = link.getAttribute("id");
    newnav.innerHTML = `<a href="#${rr}" class="menu__link" > <h3>${r}</h3></a>`;
    myCustomDiv.appendChild(newnav);
});
mainNav.appendChild(myCustomDiv);
const endingTime2 = performance.now();
console.log('This code took ' + (endingTime2 - startingTime2) + ' milliseconds.');
/////////////////////////////////////////////////////////////////////////////////////////////



//make sections responsive to navbar
const startingTime3 = performance.now();
/*determine when section is on top of screen 
then add class active to it and point to it in navbar*/
document.addEventListener("scroll", function() {
    let fromTop = window.scrollY;
    let mainNavLinks = document.querySelectorAll("nav ul li a");

    mainNavLinks.forEach(linkk => {
        let section = document.querySelector(linkk.hash);
        //when setion under navbar  at top of viewport "no space between them"
        if (
            section.offsetTop <= parseInt((fromTop) + 50) &&
            section.offsetTop + parseInt((section.offsetHeight) - 50) > fromTop
        ) {
            linkk.classList.add("active");

        } else { //scroll to another position
            linkk.classList.remove("active");

        }
    });
});
const endingTime3 = performance.now();
console.log('This code took ' + (endingTime3 - startingTime3) + ' milliseconds.');
////////////////////////////////////////////////////////////////
//create toggle button to use in mobile mode
const toggl = document.getElementById('toggle__button');
const navToggl = document.getElementById('navSections');
toggl.addEventListener("click", function() {
    navToggl.classList.toggle('activee');
});
//////////////////////////////////////////////////////////////////////////////////////////////


/*
 *end of events
 *start functions
 *
 */
//add new section to mai &navbar
const startingTime4 = performance.now();

function addContent() {
    let maxSections = document.querySelectorAll("main section").length;
    //most number of sections allowed is 7
    if (maxSections == 7) {
        alert("max number of sections is 7");
        //create new section on click if it less than 7
    } else {
        //CREATE NEW SECTION AND PUT IT IN MAIN
        let sectionCounter = document.querySelectorAll("main section").length + 1; //PUT NEW SECTION ID
        const neww = document.createElement('section');
        const string = "section" + sectionCounter;
        const stringg = "section" + ' ' + sectionCounter;
        neww.setAttribute('id', string);
        neww.setAttribute('data-nav', stringg);
        neww.innerHTML = ` <div class="landing__container">
  <h2>${stringg}</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Morbi fermentum metus faucibus lectus pharetra dapibus.
  Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue.
  Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis.
  Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, 
  nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue.
  Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis,
  aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non,
  faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus.
  Sed congue et odio sed euismod.</p>
  <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit,
  vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor.
  Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
</div>`
        mainn.appendChild(neww);
        //create link to new section in navbar
        const newnav = document.createElement('li');
        newnav.innerHTML = `<a href="#${string}" class="menu__link" > <h3>${stringg}</h3></a>`;
        myCustomDiv.appendChild(newnav);
        mainNav.appendChild(myCustomDiv);
    }
}
const endingTime4 = performance.now();
console.log('This code took ' + (endingTime4 - startingTime4) + ' milliseconds.');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//remove section from main navbar
function removeContent() {
    let seectionCounter = document.querySelectorAll("main section").length;
    const idstring = "section" + seectionCounter;
    let getElement = document.getElementById(idstring);
    getElement.parentNode.removeChild(getElement); //REMOVE FROM MAIN
    let nnav = document.getElementById("navbar__list").lastElementChild.lastChild;
    nnav.parentNode.removeChild(nnav); //REMOVE FROM navbar

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
