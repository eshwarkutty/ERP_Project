import React from 'react';
import '../components/common/Staff.css'; // Ensure you include this CSS file

const Staff = () => {
    return (
        <div className="staff-page">
            <h2>Staff List</h2>
            <table className="staff-table">
                <thead>
                    <tr>``
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Example staff data */}
                    <tr>
                        <td>1</td>
                        <td>Emily Johnson</td>
                        <td>Teacher</td>
                        <td>emily.johnson@example.com</td>
                        <td><button className="btn btn-primary">View</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Michael Brown</td>
                        <td>Administrator</td>
                        <td>michael.brown@example.com</td>
                        <td><button className="btn btn-primary">View</button></td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default Staff;
