import { EditForm, Form, Text, TodoList } from 'components';
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

  const [selectedToDo, setSelectedToDo] = useState(null);

  const addToDo = text => {
    const newToDo = {
      id: nanoid(),
      text,
    };
    setTodos([...todos, newToDo]);
  };

  const handleDelete = id => {
    const newTodos = todos.filter(elem => elem.id !== id);
    setTodos(newTodos);
  };

  const selectToDo = todo => {
    setSelectedToDo(todo);
  };

  const onCancel = () => {
    setSelectedToDo(null);
  };

  const handleEdit = todo => {
    const index = todos.findIndex(elem => {
      return elem.id === todo.id;
    });
    const newTodos = todos.toSpliced(index, 1, todo);
    setTodos(newTodos);
    onCancel();
  };

  return (
    <>
      {selectedToDo ? (
        <EditForm
          selectedToDo={selectedToDo}
          onCancel={onCancel}
          onEdit={handleEdit}
        />
      ) : (
        <Form onSubmit={addToDo} />
      )}

      {todos.length > 0 ? (
        <TodoList
          toDos={todos}
          onDelete={handleDelete}
          selectToDo={selectToDo}
        />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
