import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ toDos, onDelete, selectToDo }) => {
  return (
    <Grid>
      {toDos.map((toDo, index) => (
        <GridItem key={toDo.id}>
          <TodoListItem
            toDo={toDo}
            index={index}
            onDelete={onDelete}
            selectToDo={selectToDo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
