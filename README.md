# landing-page-with-js
## Introduction
this progect is a landing page .. i used 3 languages to made it html , css , js  i design the page using html & css and js make the page responsive,dynamic &active
 this page consist of **_sections_**
 - ### you can add new section by click add section button that will add it by js function 
##### "put remember most number allowed for sections is 7 "_
 ```
 function addContent() {
    let maxSections = document.querySelectorAll("main section").length;
    if (maxSections == 7) {
        alert("max number of sections is 7");

    } else {
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
        const newnav = document.createElement('li');
        newnav.innerHTML = `<a href="#${string}" class="menu__link" > <h3>${stringg}</h3></a>`;
        myCustomDiv.appendChild(newnav);
        mainNav.appendChild(myCustomDiv);
    }
} 
```


- ### and you can remove sectio also by js code
 ```
function removeContent() {
    let seectionCounter = document.querySelectorAll("main section").length;
    const idstring = "section" + seectionCounter;
    let getElement = document.getElementById(idstring);
    getElement.parentNode.removeChild(getElement); //REMOVE FROM MAIN
    let nnav = document.getElementById("navbar__list").lastElementChild.lastChild;
    nnav.parentNode.removeChild(nnav); //REMOVE FROM navbar

}
```
- ###  you can scroll to any section and navbar will update automatic and point to this section  by js addEventListner code
- ###  you can click on section name in navbar and it will scroll to this  section 
- ### finally in mobile mode navbar will turn to toggle button 
- ### navbar update automatically when add or remove section & also has built by js 
- ### navbar disappear when scrolling and appear when you stop scrolling
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## How to run locally.
>download it from github 
>then run index.html by clicking right click
>then choose open with google chrome "or any browser" 
## Dependencies 
font awesome 
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```
