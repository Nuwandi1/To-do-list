const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-4 h-4 mr-2"
        />
        <span className={`${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-2 py-1 text-red-600 hover:text-red-800"
      >
        ×
      </button>
    </div>
  );
};

export default TodoItem;