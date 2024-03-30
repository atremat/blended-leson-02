import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([
    {
      id: '1',
      text: 'text',
    },
    {
      id: '2',
      text: 'text-2',
    },
  ]);

  const addToDo = text => {
    const newToDo = {
      id: nanoid(),
      text,
    };
    setTodos([...todos, newToDo]);
  };

  return (
    <>
      <Form onSubmit={addToDo} />
      {todos.length > 0 ? (
        <TodoList toDos={todos} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
