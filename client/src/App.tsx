import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './pages';

const App: FC = () => (
    <div className="App">
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    </div>
);

export default App;
