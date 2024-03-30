import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css';

export const EditForm = ({ selectedToDo, onCancel, onEdit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const updatedTodo = { ...selectedToDo, text: e.target.text.value };
    onEdit(updatedTodo);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={onCancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={selectedToDo.text}
        autoFocus
      />
    </form>
  );
};
