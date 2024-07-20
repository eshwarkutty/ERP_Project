import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { MantineProvider } from '@mantine/core'; 
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students'; 
import Staff from './pages/Staff';

function App() {
    return (
        <MantineProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/staff" element={<Staff />} />
                </Routes>
            </Router>
        </MantineProvider>
    );
}

export default App;
