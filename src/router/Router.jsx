import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
}
