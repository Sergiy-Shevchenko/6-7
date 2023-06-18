import {Routes, Route} from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from './pages/HomePage';
import { UserPages } from './pages/UserPages';

export const App = () => {
  return (
    <Routes>
      <Route path='/'element={<Layout/>} >
      <Route index element={<HomePage/>}/>
      <Route path='users' element={<UserPages/>}/>
    </Route>
    </Routes>
  );
};
