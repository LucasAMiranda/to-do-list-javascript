


function addTask(){
    let taskNameInput = document.getElementById("taskName");
    let taskList = document.getElementById("taskList");

    if(taskNameInput.value === ""){
        alert("Por favor, insira a tarefa que deseja!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskNameInput.value;
    taskList.appendChild(li);
   

    taskNameInput.value = ""; //esse trecho de código limpa o campo de entrada após adicionar a tarefas.

}


