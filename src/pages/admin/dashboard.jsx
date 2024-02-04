import React from 'react';
import '../styles.css';
import Home from '../../components/admin/sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 p-0">
                <Home/>
                </div>

                <div className="col-md-10 p-4">
                    <h1>Admin Dashboard</h1>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;