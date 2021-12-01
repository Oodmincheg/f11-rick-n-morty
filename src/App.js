import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterDetails from './components/CharacterDetails';
import CharacterList from './components/CharactersList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
