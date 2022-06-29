export class TodoService{

    getTodos() {
        return fetch('/getAll').then(res => res.json());
    }

    getTodoById(identifier){
        return fetch('/get?id='+identifier).then(res => res.json());
    }
    
    saveTodo(todo){
        return fetch('/add',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
    }

    delete(todo){
        return fetch('/delete',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
    }

    update(todo){
        return fetch('/update',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        });
    }
}