import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: uuidv4(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Todo List
        </h1>
        <TodoForm onAdd={addTodo} />
        <div className="space-y-2">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </div>
        {todos.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No todos yet. Add one above!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;