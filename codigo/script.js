let task;
const display = document.querySelector('main')
const inputTask = document.querySelector('.input-task');


inputTask.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter') {
        task = inputTask.value;

        const list = document.createElement('section');
        list.classList.add('list');

        const yourTask = document.createElement('input');
        yourTask.classList.add('input-task');
        yourTask.value = task;

        display.appendChild(list).appendChild(yourTask);
        inputTask.value = '';
        
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'X';
        list.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', () =>{list.remove()});
    } 
}); 
