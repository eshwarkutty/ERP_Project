import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/common/Dashboard.css'; 

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="dashboard-container">
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <button className="menu-button" onClick={toggleSidebar}>
                    &#9776; 
                </button>
                {isSidebarOpen && (
                    <div className="sidebar-menu">
                        <Link to="/students" className="sidebar-item">Students</Link>
                        <Link to="/staff" className="sidebar-item">Staffs</Link>
                    </div>
                )}
            </div>
            <div className="content">
                <h2>Welcome to the Dashboard</h2>
                <p>Select a menu item to view details.</p>
            </div>
        </div>
    );
};

export default Dashboard;
