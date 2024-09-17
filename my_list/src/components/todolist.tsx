import React from 'react';
import TodoItem from './todoitem';
import styles from './TodoList.module.css';

interface TodoListProps {
  todos: { id: number; text: string; completed: boolean }[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <div className={styles.todoList}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default TodoList;
