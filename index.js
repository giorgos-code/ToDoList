const textfield = document.getElementById("textfield");
const result = document.getElementById("result");

function add() {
    const taskText = textfield.value.trim();
    if (taskText === "") return;
    const taskDiv = document.createElement("div");
    const checkbox = document.createElement("input");
    const deletebox = document.createElement("button");
    deletebox.textContent = "Delete";
    deletebox.style.marginLeft = "10px";

    deletebox.onclick = function() {
        result.removeChild(taskDiv);
    };
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    label.textContent = " " + taskText + " ";
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    taskDiv.appendChild(deletebox);
    result.appendChild(taskDiv);
    textfield.value = "";
}

