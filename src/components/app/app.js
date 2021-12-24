import React, { useState } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import TodoAddItem from "../todo-add-item";

import {createTodoItem, toggleProperty, 
        searchTodoData, filterTodoData} from './app-logic-todo-list';

import './app.css';

const App = () => {
  
  const [todoData, setData] = useState( () => 
    [
      createTodoItem('Drink Coffee'),
      createTodoItem('Make Awesome App', true),
      createTodoItem('Have a lunch')
    ]
  );

  const [{term, filter}, setTodoDataFilter] = useState({
    term: '',
    filter: ''
  })

  const addItem = text => setData((prevData) => 
      [
        ...prevData, 
        {label: text, important: false, id: Date.now() + prevData.length + 1}
      ]
  );

  const amountDoneTodos = todoData.reduce((acc, todo) => acc + (todo.done ? 1 : 0), 0);

  const deleteItem = id => setData((prevData) => prevData.filter(todo => todo.id !== id));
  
  const onToggleImportant = id => setData((prev) => toggleProperty(id, prev, 'important'));

  const onToggleDone = id => setData((prev) => toggleProperty(id, prev, 'done'));

  const onFilterButton = activeButton => {
    setTodoDataFilter(prev => { return {...prev, filter: activeButton.value.toLowerCase() }});
  }

  const visibleItems = filterTodoData(searchTodoData(todoData,term), filter);

  const onFilterInput = term => setTodoDataFilter((prev) => { return {...prev, term}})

  return (
    <div className='app'>
        <AppHeader todo={todoData.length - amountDoneTodos} done={amountDoneTodos}/>
        <SearchPanel onFilterInput={onFilterInput}
                     onFilterButton={onFilterButton}/>
        <TodoList 
          todos={visibleItems}
          onDeleted={(id) => deleteItem(id)}
          onToggleImportant={(id) => onToggleImportant(id)}
          onToggleDone={(id) => onToggleDone(id)}/>
        <TodoAddItem
          onAddItem={addItem}
        />
    </div>
  );
}

export default App;