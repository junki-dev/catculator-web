import Layout from '../layouts/Layout';
import Catculator from '../pages/Catculator';
import Enterence from '../pages/Entrance';
import Guide from '../pages/Guide';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Enterence />} />

          <Route path="/catculator" element={<Catculator />} />
          <Route path="/guide" element={<Guide />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
