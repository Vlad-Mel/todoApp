
export const createTodoItem = (label, important = false, done = false) => { 
    return {label, 
            important, 
            done, 
            id: Math.floor(Math.random() * 1000) + Date.now()
    }
};


export const toggleProperty = (id, prev, property) => {
    return prev.map(todo => (todo.id === id) ? { ...todo, [property]: !todo[property]} : todo);
};
    

export const searchTodoData = (items, term) => {
    if (term.length === 0) return items;

    return items.filter((todo) => {
        return todo.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
}


export const filterTodoData = (items, filter) => {
    switch(filter) {
        case 'all': return items;
        case 'active': return items.filter(item => !item.done);
        case 'done': return items.filter(item => item.done);
        default: return items; 
    }
}