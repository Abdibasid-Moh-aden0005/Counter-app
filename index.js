let parent = document.querySelector("#parent")
let addCard = document.querySelectorAll("button")[0]
console.log(addCard)


addCard.addEventListener("click",()=> addFun())

function addFun () {
    let holder = document.createElement("div")
    holder.setAttribute("class","mx-2")
    holder.innerHTML = `
     
    <!-- card -->
      <div
        class="p-2 shadow-lg shadow-gray-800/50 rounded ring ring-gray-300 transtion duration-700 ease-in-out hover:translate-y-1 hover:scale-105"
      >
        <div class="my-3">
          <h2 class="text-center text-xl font-bold">Counter App</h2>
        </div>
        <!-- Body -->
        <div class="">
          <p class="font-[700] text-2xl text-black text-start" id="score">
            Score:
          </p>
          <div class="mt-[4rem] px-3 flex space-x-4">
            <button
              class="bg-indigo-500 text-white font-[700] text-xl rounded-xl px-3 py-2 hover:bg-indigo-800"
              id="ad"
            >
              Add
            </button>
            <button
              class="bg-indigo-500 text-white font-[700] text-xl rounded-xl px-3 py-2 hover:bg-indigo-800"
              id="save"
            >
              Save
            </button>
            <button
              class="bg-indigo-500 text-white font-[700] text-xl rounded-xl px-3 py-2 hover:bg-indigo-800"
              id="close"
            >
              Close
            </button>
          </div>
          <!-- output: -->
          <div class="py-4 mt-3">
            <p class="text-start capitalize font-[500]" id="past">
              past scores :
            </p>
          </div>
        </div>
      </div>
    `
  parent.appendChild(holder)
  
    // 
    let score = holder.querySelector("#score")
    let pastScore = holder.querySelector("#past")
    let addButton = holder.querySelector("#ad")
    let saveButton = holder.querySelector("#save")
  let closeButton = holder.querySelector("#close")
  console.log(addButton)
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
  
   
}

// let firstName = "abdibasid"
// let score = 10.4;

// let typeName = typeof firstName
// let typeScore = typeof score

// console.log(`FirstName is ${typeName} while Score is ${typeScore}`)
// console.log("Fistname is  " + typeof firstName + " while score is a " + typeof score)


// let lastName = "Abubakar";
// let score = 200;
// console.log(`${lastName}'s Score is ${score}`)
