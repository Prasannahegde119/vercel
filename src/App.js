import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Form';
import View from './View';
import NavigationPage from './NavigationPage';
import Update from './Update';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationPage/>}>
          <Route path="View" element={<View/>} />
          <Route path="Form" element={<Form />} />
          <Route path="/Update/:name" element={<Update />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
