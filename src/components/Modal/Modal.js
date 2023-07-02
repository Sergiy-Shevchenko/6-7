import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from 'redux/users/operation';

export const Modal = ({ handleClose, id }) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const deleteUsr = () => {
    dispatch(deleteUser(id));
    navigation('/users');
  };

  return (
    <div>
      <p> Are you sure?</p>
      <button type="button" onClick={deleteUsr}>
        yes
      </button>
      <button type="button" onClick={handleClose}>
        No
      </button>
    </div>
  );
};
