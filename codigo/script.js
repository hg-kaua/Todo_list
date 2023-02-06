const createBtn = document.querySelector('.create-btn');

createBtn.addEventListener('click', CreateNewTask);

function CreateNewTask() {
    const newTask = document.querySelector('main');
    newTask.innerHTML += ` 
    <section class="list" id="list">
        <input type="checkbox" class="checkbox">
        <input type="text" class="input-task" placeholder="Type here"></input>
    </section>
    `
}
