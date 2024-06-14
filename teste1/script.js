function addtarefas(){    //adiciona uma nova tarefa
    const taskinput = document.getElementById('taskinput'); //obtem o input de tarefa
    const tasklist = document.getElementById('tasklist'); //obtem s lista de tarefa
    const tasktext = taskinput.value.trim(); //obtem o valor do input e remove espaços extras 

    if(tasktext !== '' )  {    //verifica se o texto tarefa nao esta vazio
        const listitem = document.createElement('li'); //cria um novo item
        listitem.textContent = tasktext; //define o texto da lista
        const deletebtn = document.createElement('span'); //cria botao de apagar 
        deletebtn.textContent = 'x'; // define o texto do botao
        deletebtn.className = 'delete'; // define a clase css para botao
        deletebtn.onclick = function(){ //adiciona um evento de clique para apagar a tarefa
            tasklist.removeChild(listitem); // remove o item da lista
        };
            listitem.appendChild(deletebtn);//adiciona o botao de apagar item de lista
            tasklist.appendChild(listitem);//adiciona o item de lista a lista de tarefas
            taskinput.value = '';//limpa o input de tarefa
    
        }
        } //adiciona um evento de tecla ao input de tarefa
    document.getElementById('taskinput').addEventListener('keypress', function(e) {
    if(e.key ==='enter'){//verifica se a tecla pressionada é enter
        addtask();//chama a funçao para adicionar a tarefa
    }

});