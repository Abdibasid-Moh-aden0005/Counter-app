
let score = document.querySelector("#score")
let pastScore = document.querySelector("#past")
let addButton = document.querySelectorAll("button")[0]
let saveButton = document.querySelectorAll("button")[1]
let closeButton = document.querySelectorAll("button")[2]

let counter = 0;

addButton.addEventListener("click", () => {
    counter += 1;
    score.textContent = `Score: ${counter}`
})

saveButton.addEventListener("click", function () {
    pastScore.textContent += `-${counter}`
    counter = 0;
    score.textContent = `Score:`
})

closeButton.addEventListener("click", () => {
    counter = 0;
     score.textContent = `Score:`
})

// let firstName = "abdibasid"
// let score = 10.4;

// let typeName = typeof firstName
// let typeScore = typeof score

// console.log(`FirstName is ${typeName} while Score is ${typeScore}`)
// console.log("Fistname is  " + typeof firstName + " while score is a " + typeof score)


// let lastName = "Abubakar";
// let score = 200;
// console.log(`${lastName}'s Score is ${score}`)
