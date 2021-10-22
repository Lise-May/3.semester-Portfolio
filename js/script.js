//----------------------------------------------------------------Burgermenu-------------------------------------------------------
//adgang til hamburger og nav-menu class
const hamburger = document.querySelector(".hamburger"); 
const navMenu = document.querySelector(".nav-menu");

//add en event lisenter til hamburger
hamburger.addEventListener("click", () => { //activer classen der ændre mine bar til et X og den class der viser menuen
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

//Søger for at min nav lukker sig og bliver "normal" når man klikker på et link. 
document.querySelectorAll(".nav-link").forEach(n => n. //add en eventlistener
    addEventListener("click", () => { //click event, der vil fjerne active class
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
})) 


//-----------------------------------------------------------------text rotate typer på forsiden------------------------------------------------------

//adgang til classen type-text
const typedTextSpan = document.querySelector(".typed-text");

//fjern blike effecten mens den skriver 
const cursorSpan = document.querySelector(".cursor");

//definere de variabler jeg skal bruge -array med strings
const textArray = ["frontend developer", "multimediedesigner", "web-designer", "studerende"]
const typingDelay = 200; //delaiy inden den "skriver" det nye ord
const erasingDelay = 100; //delay inden den skal slette det den har skrevet
const newTextDelay = 2000; //delay mellem den nuværende og den næste string
let textArrayIndex = 0; //starter med den første karakter - Jeg benytter let her i  stedte for const da jeg forventer omplacering af value af de variabler
let charIndex = 0; //starter med den første karakter

//implimenter typing funktion / skrive funktionen
//den funktion skal skrive en karakter, og pause eller vente for typing delay før den kalder sig selv igen. 
function type() { 
    if(charIndex < textArray[textArrayIndex].length) {// skriv den næste karakter hvis den sidste karakter i stringen ikke allerede er skrevet
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");//tilføje cursor element som fjerne blinke animationen hvis den ikek allerede er der
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex); //tager den aktuelle tekstinghold span += den aktuelle string og for at få the carakter gør jeg rbug afcharAt metode der returne det specifikke character i car undex 
        charIndex++;  //Øger car index med en, så den går videre til den næste carakter. 
        setTimeout(type, typingDelay);  //type refere til en funktion og ikke direkte kald - gør brug af setTimeout metoden. for at kalde type funktionen igen efter at vente på delay
    }
    else { //slette den viste tekst, inden den skriver den næste string
        cursorSpan.classList.remove("typing");//når den er færdig med at type vil jeg have blinke animationen tilbage - fjerne typing class
        setTimeout(erase, newTextDelay); //vent et par sek. før jeg kalder slet funktionen
    }
}

//Slet funktionen (fungere lidt ligesom type bare ovendt)
function erase(){
    if(charIndex > 0) { //hvis charIndex er større end 0 (som betyder at the string ikke er helt slette endu)
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing"); //fjerne blike mens den sletter
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1); //slette en karakter, text content fra typed text span = substring of den nuværende string, starte fra index 0 (alså starte med den første karakter) intil index -1
        charIndex --; //reduse carindex med en
        setTimeout(erase, erasingDelay); //call erase funktionen igen efter et lille delay
    } 
    else { //når hele stringen er slette vil den kalde type funktioen, til at type den næste string efter det lille delay
        cursorSpan.classList.remove("typing"); //tilføje bliker med det samme den er færidg med at slette
        textArrayIndex++; //øge array index med en, så vi går videre til den næste string 
        if(textArrayIndex>=textArray.length) textArrayIndex=0; //tjek om text array index er større eller lig med text array.length. Reset text array index tilbage til 0 så den kan fortsætte i det uendelige loop igennem string i array
        setTimeout(type, typingDelay + 1100); //kalle type string til at skrive den næste string efter et lille delay (typingdelay + 1100 ms)
    }
}

//Eventlisenter
document.addEventListener("DOMContentLoaded", function(){ 
    if(textArray.length) setTimeout(type, newTextDelay + 250); //være sikekr på at text array ikke er tomt før jeg kalder type funktion - delay før jeg kalder type funktionen 2sek +250 mili sekunder
    
})

//----------------------------------------------------------------- Til top knap ------------------------------------------------------

//få knappen
var mybutton = document.getElementById("myBtn");

// Når man ruller 20px ned fra toppen vises knappen
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Når man klikker på knappen så ruller den til toppen
function topFunction() {
  document.body.scrollTop = 0; //så den virker i safari
  document.documentElement.scrollTop = 0; //så jeg er sikker på at den virker i chrome
}