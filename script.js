
let AddButton = document.getElementById('AddButton')
AddButton.addEventListener('click', AddTask)
let ParentList = document.getElementById('ParentList');
function AddTask(e) {
    if (ParentList.children[0].className == 'Emptymsg') {
        ParentList.children[0].remove()
    }
    let currentbtn = e.currentTarget;
    let currentInput = currentbtn.previousElementSibling;
    let taskName = currentInput.value

    let newLi = document.createElement('li');
    newLi.className = "list-group-item d-flex justify-content-between"
    newLi.innerHTML = ` <h4 class="flex-grow-1">${taskName}</h4>
            <button class="btn btn-warning mx-5" onclick="EditTask(this)">Edit</button>
             <button class="btn btn-danger"  onclick="RemoveTask(this)">Remove</button>
            </li>`
    ParentList.appendChild(newLi);

}

function RemoveTask(currElement) {
    currElement.parentElement.remove()
    let ParentList = document.getElementById('ParentList');
    if (ParentList.children.length <= 0) {
        let Emptymsg = document.createElement("h3")
        Emptymsg.classList.add('Emptymsg')
        Emptymsg.textContent = "Nothing Is Here."
        ParentList.appendChild(Emptymsg)
    }
}

function EditTask(currElement) {
    if (currElement.textContent == "OK") {
        currElement.textContent = "Edit"
        let currTask = currElement.previousElementSibling.value
        let currHeading = document.createElement('h3')
        currHeading.className = "flex-grow-1"
        currHeading.textContent = currTask
        currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling)
    }
    else {
        currElement.textContent = "OK"
        let currTask = currElement.previousElementSibling.textContent
        let currInput = document.createElement('input')
        currInput.type = 'text'
        currInput.className = 'form-control'
        currInput.placeholder = 'Chapter Name'
        currInput.value = currTask;

        currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling)
    }

}