// ====================================
//          Loops-Level-1_1
// ====================================

console.log("%c Loops-Level-1_1", "color:yellowgreen; font-size:16px;")

for (let i = 1; i <= 10; i++) {
    console.log("Hello World " + i)
    
}

// ====================================
//          Loops-Level-1_2
// ====================================

console.log("%c Loops-Level-1_2", "color:yellowgreen; font-size:16px;")

const numArray = [];

for (let i = 0; i <= 10; i++) {
    numArray.push(i)
}
console.log(numArray);


// ====================================
//          Loops-Level-1_3
// ====================================

console.log("%c Loops-Level-1_3", "color:yellowgreen; font-size:16px;");

let counter = 0;
while (counter < 10) {
    console.log("Hello World " + counter);
    counter++
}

// ====================================
//          Loops-Level-1_4
// ====================================

console.log("%c Loops-Level-1_4", "color:yellowgreen; font-size:16px;");

const names = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];


for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

// ====================================
//          Loops-Level-1_5
// ====================================

console.log("%c Loops-Level-1_5", "color:yellowgreen; font-size:16px;");

let apple1 = { color: "red", size: "big" };
let apple2 = { color: "green", size: "small" };
let apple3 = { color: "yellow", size: "big" };
let apples = [apple1, apple2, apple3];

for (let i = 0; i < apples.length; i++) {
    console.log(apples[i].size)
}

// ====================================
//          Loops-Level-1_6 & CodeFlow Übung lev2_1
// ====================================

console.log("%c Loops-Level-1_6 & CodeFlow Übung lev2_1", "color:yellowgreen; font-size:16px;");

const images = []

for (let i = 1; i <= 100; i++) {
    images.push(`image_${i}.jpg`)    
}
console.log(images);

// ====================================
//          Loops-Level-1_9
// ====================================

console.log("%c Loops-Level-1_9", "color:yellowgreen; font-size:16px;");

let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];

const searchBox = document.body.querySelector("#lengthSelection");
const output =  document.body.querySelector("#htmlOutput");
const addField = document.body.querySelector("#addField");
const showWords = () => {
    const result = []
    for (let i = 0; i < words.length; i++) {
        if (words[i].length === Number(searchBox.value)) {
            result.push(words[i]);
            console.log(words[i])
        }else {
            console.log("error")
        }
    }
    output.innerHTML = result.join("<br>")
    
} 

const addWord = () => words.push(addField.value);
console.log(words)
