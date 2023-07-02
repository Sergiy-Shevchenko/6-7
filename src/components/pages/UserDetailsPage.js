import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserId } from 'redux/users/operation';
import { selectUserId } from 'redux/users/selector';
import { Modal } from 'components/Modal/Modal';
import { Link } from 'react-router-dom';

export const UserDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUserId);
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getUserId(userId));
  }, [userId, dispatch]);

  const handleIsOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {user && (
        <>
          <img src={user.avatar} alt="name" />
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.number}</p>
          <p>{user.adress}</p>
          <button type="button" onClick={handleIsOpen}>
            Delete
          </button>
          <Link to="update">Update user</Link>
          {isOpen && <Modal handleClose={handleClose} id={userId} />}
        </>
      )}
    </div>
  );
};
