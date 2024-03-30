import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ toDos }) => {
  return (
    <Grid>
      {toDos.map((toDo, index) => (
        <GridItem key={toDo.id}>
          <TodoListItem toDo={toDo} index={index} />
        </GridItem>
      ))}
    </Grid>
  );
};
