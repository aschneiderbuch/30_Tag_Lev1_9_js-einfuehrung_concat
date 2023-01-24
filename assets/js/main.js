console.log("test");

/* 

Frage

concat     aneinanderReihung

const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "programming bike";
const text4 = "and";

in Varibalen speichern

Ausgabe in Html 
    1. Sam is going to school and to the movie theater
    2. Sam is going to movie theater
    3. Susi and Sam are going to school
    4. Susi and Sam are going to gym and to the movie theater
    5. Susi is going to school and to the movie theater
*/




// Varibalen 
const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "programming bike";
const text4 = "and";


console.log(text1.length); // 28
console.log(text1.indexOf("to")); // 13 + 2 dann inkl to

console.log(text1.slice(0, 15));

// concat

let zuPuntk1 = text1.slice(0,15).concat(" school " +text4 + " " + text1.slice(13,15))+" the movie theater";
//            Sam is going to            // school // and  // _      // to           // the movie theater
console.log(zuPuntk1);
document.write(zuPuntk1 + "</br>");

let zuPunkt2 = text1.slice(0,15).concat(" the movie theater");
console.log(zuPunkt2);
document.write(zuPunkt2 + "</br>");

let zuPunkt3 = text2.concat(" " + text4 + " ").concat(text1.slice(0,3)).concat(" are ").concat(text1.slice(7,15)).concat(" school");
console.log(zuPunkt3);
document.write(zuPunkt3 + "</br>");

// 4. 
console.log(zuPunkt3.indexOf("to")); // 23 +2
console.log(zuPunkt3.slice(0,25))
let zuPunkt4 = zuPunkt3.slice(0,25).concat(" gym ").concat(text4).concat(" to the movie theater");
console.log(zuPunkt4);
document.write(zuPunkt4 + "</br>");

// 5. 
console.log(zuPuntk1.indexOf("to")); // 13 + 2
console.log(zuPuntk1.indexOf("theater")); // 40 + 7
console.log("theater".length); // 7
let zuPunkt5 = text2.concat(zuPuntk1.slice(3,15)).concat(zuPuntk1.slice(15,47));
console.log("zu Punkt 5:" + zuPunkt5);
document.write(zuPunkt5 + "</br>");

document.write(zuPuntk1.replace("Sam", "Susi") + "</br>");


