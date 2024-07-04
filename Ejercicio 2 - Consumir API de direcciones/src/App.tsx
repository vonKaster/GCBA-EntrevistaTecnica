import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddressInput from './components/AddresInput.tsx/AddressInput';
import Results from './components/ResultPage';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<AddressInput />} />
                    <Route path="/resultado" element={<Results />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;