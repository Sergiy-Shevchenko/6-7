import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from './pages/HomePage';
import { UserPages } from './pages/UserPages';
import { UserDetails } from './pages/UserDetailsPage';
import { AddUser } from './pages/AddUser/AddUser';
import { UserUpdate } from './pages/UserUpdate/UserUpdatePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UserPages />} />
        <Route path="users/:userId" element={<UserDetails />} />
        <Route path="users/add" element={<AddUser />} />
        <Route path="users/:userId/update" element={<UserUpdate />} />
      </Route>
    </Routes>
  );
};
