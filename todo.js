function createTask() {
    const taskName = document.getElementById("taskName").value;
    const taskDescription = document.getElementById("Description").value;

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    const completedCheckbox = document.createElement("input");
    completedCheckbox.type = "checkbox";
    completedCheckbox.onclick = function () {
      if (completedCheckbox.checked) {
        const completedTaskList =
          document.getElementById("completedTaskList");
        completedTaskList.appendChild(li);
      } else {
        taskList.appendChild(li);
      }
    };
    const notCompletedCheckbox = document.createElement("input");
    notCompletedCheckbox.type = "checkbox";
    notCompletedCheckbox.onclick = function () {
      if (notCompletedCheckbox.checked) {
        completedCheckbox.checked = false;
      }
    };
    const label = document.createElement("label");
    label.appendChild(document.createTextNode(taskName));
    li.appendChild(completedCheckbox);
    li.appendChild(notCompletedCheckbox);
    li.appendChild(label);
    taskList.appendChild(li);
  }