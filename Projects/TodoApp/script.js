let unorderedList = document.querySelector("ul");
let input = document.querySelector(".input");

function addToList() {
  if (input.value === "") {
    alert("You gotta write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    unorderedList.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "&#x2716;";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}


unorderedList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        if(e.target.className === "checked"){
            e.target.className = ""
        }else{
            e.target.className = "checked"
        }
    }
    if(e.target.tagName === 'SPAN'){
        e.target.parentNode.remove()
    }
    saveData()
})


function saveData(){
    localStorage.setItem('data', unorderedList.innerHTML);
}

function showData(){
    unorderedList.innerHTML = localStorage.getItem("data")
}

function clearData(){
    localStorage.clear()
}


showData();
