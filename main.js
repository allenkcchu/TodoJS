
var submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function (e) {
    var todoInput = document.getElementById('todo-input').value;
    var result = document.getElementById('result');
    if (todoInput !== '') {
        var todo = document.createElement('li');
        todo.innerHTML = todoInput + '<button>x</button>'
        result.appendChild(todo);
        document.getElementById('todo-input').value = '';
    } else {
        alert('Please enter something to do!');
    }
})

result.addEventListener('click', function (e) {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
})