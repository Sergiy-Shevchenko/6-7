import { useEffect } from 'react';
import { getUsers } from 'redux/users/operation';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from 'redux/users/selector';
import { Link } from 'react-router-dom';

export const UserPages = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {users.map(({ name, id }) => (
          <li key={id}>
            <Link to={id}>{name}</Link>
          </li>
        ))}
      </ul>
      <Link to="add">Add user</Link>
    </div>
  );
};
