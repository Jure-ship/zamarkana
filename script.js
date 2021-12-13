




const button1 = document.querySelector("#push");

function outputtask() {
  if (document.querySelector("#newtask input").value.length != 0) {
    const info = document.querySelector("#newtask input").value;
    const outputtime = document.querySelector("#time").value;

    console.log(info);
    console.log(outputtime);

    document.querySelector('#tasks').innerHTML
    +=`<div class="task">
    <span id="taskname" contenteditable="true">${document.querySelector("#newtask input").value}
    </span>
    <span id="date">${document.querySelector("#time").value}</span>
    
    <button class="delete">X</button>
    <button class="check">D</button>
    </div>`;



    const deletetext=document.querySelector("#zaobrisat");
    deletetext.value="";

  } 
  else if (document.querySelector("#newtask input").value.length == 0) {
    alert("Molim vas, unesite podatke u polje!");
  }
}

button1.addEventListener("click", outputtask);


const x = document.querySelectorAll(".delete");
const y=document.querySelector(".task");

x.addEventListener("click",function() 
{
  console.log('poruka')
}
);

for (var i = 0; i < x.length; i++) {
  x[i].onclick = function () {
    console.log('poruka');
    y.remove();
    
  }
}

var zadatci = document.querySelectorAll(".task");

function checked() {
  this.classList.toggle("done");
}


for (var i = 0; i < zadatci.length; i++) {
  zadatci[i].onclick = function () {
    this.classList.toggle("done");
  };
}

var vrijeme = document.querySelectorAll("#time").value;

function writeData() {
  firebase.database().ref("User").set({
    task: document.querySelector("#newtask input").value,
    date: document.querySelector("#time").value
  });
}

const editbtn=document.getElementsByClassName(".check");

editbtn.addEventListener("click",function() {
  document.querySelector("#taskname").style.textDecoration="line-through";
});