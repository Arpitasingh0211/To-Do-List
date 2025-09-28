const input = document.getElementById("input");
const listItem = document.getElementById("list-item");
// const checked = document.getElementById("checked");

function addTask(){
    if(input.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listItem.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}

listItem.addEventListener("click", (element) => {
    if(element.target.tagName === "LI"){
        element.target.classList.toggle("checked");
        saveData();
    }
    else if(element.target.tagName === "SPAN"){
        element.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data", listItem.innerHTML);
}

function showTask(){
    listItem.innerHTML = localStorage.getItem("data");
}
showTask();