import { Text } from '..';
import { RiDeleteBinLine } from 'react-icons/ri';
import style from './TodoListItem.module.css';

export const TodoListItem = ({ toDo, index }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{index + 1}
      </Text>
      <Text>{toDo.text}</Text>
      <button className={style.deleteButton} type="button">
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
