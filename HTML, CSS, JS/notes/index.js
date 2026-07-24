let plus = document.querySelector("#plus");
let up = document.querySelector("#up");
let down = document.querySelector("#down");

let notes = document.querySelector(".notes");

let form = document.querySelector(".form");
let mainapp = document.querySelector(".mainapp");
let submit = document.querySelector("button[type='submit']");

let dperror = document.querySelector("#dperror");
let nameerror = document.querySelector("#nameerror");
let bioerror = document.querySelector("#bioerror");
let typeerror = document.querySelector("#typeerror");

let urgent = document.querySelector("#urgent");
let wait = document.querySelector("#wait");
let easy = document.querySelector("#easy");
let noneed = document.querySelector("#noneed");

submit.addEventListener("click", () => {
    
})
plus.addEventListener("click", () => {
    form.style.display = "flex";
    mainapp.style.display = "none";
})
up.addEventListener("click", () => {
    notes.prepend(notes.lastElementChild);
    
})
down.addEventListener("click", () => {
    notes.appendChild(notes.firstElementChild);
})
submit.addEventListener("click", () => {
    let dp = document.querySelector("#note-dp");
    let name = document.querySelector("#name");
    let bio = document.querySelector("#bio");
    const type = document.querySelector('input[name="type"]:checked');

    dperror.style.display = "none";
    nameerror.style.display = "none";
    bioerror.style.display = "none";
    typeerror.style.display = "none";
    if (!dp.value || !name.value || !bio.value || !type.value){
        if (!dp.value) {
            dperror.style.display = "block";
        } else if (!name.value) {
            nameerror.style.display = "block";
        } else if (!bio.value) {
            bioerror.style.display = "block";
        } else if (!type) {
            typeerror.style.display = "block";
        }
     }else{
        console.log(type.value);
        
        newnote(dp.value, name.value, bio.value, type.value);
        form.style.display = "none";
        mainapp.style.display = "flex";
    }

})
function newnote(dp, name, bio, type) {
const noteDiv = document.createElement('div');
noteDiv.className = 'note';

const dpDiv = document.createElement('div');
dpDiv.className = 'dp';
const img = document.createElement('img');
img.src = dp;
img.alt = 'Profile Picture';
dpDiv.appendChild(img);

const nameDiv = document.createElement('div');
nameDiv.className = 'name';
nameDiv.style.margin = '0px 20px';
nameDiv.textContent = name;

const bioDiv = document.createElement('div');
bioDiv.className = 'bio';
bioDiv.style.margin = '0px 20px';
bioDiv.style.color = 'gray';
bioDiv.textContent = bio;

const typeDiv = document.createElement('div');
typeDiv.className = 'type ' + type;

noteDiv.append(dpDiv, nameDiv, bioDiv, typeDiv);

notes.prepend(noteDiv);
}
function short(type) {
let element = Array.from(document.querySelectorAll(".note"));
    element.forEach((note) => {
        note.style.display = "none";
    })
    element.filter((note) => {
        if (note.lastElementChild.classList.contains(type)) {
            note.style.display = "block";
            notes.prepend(note);
        }
    })
}