import React from 'react';
import '../components/common/Student.css'; // Ensure you include this CSS file

const Student = () => {
    return (
        <div className="student-page">
            <h2>Student List</h2>
            <table className="student-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Example student data */}
                    <tr>
                        <td>1</td>
                        <td>Eshwar</td>
                        <td>eshwar@react.com</td>
                        <td><button className="btn btn-primary">View</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>PriyaDharashini</td>
                        <td>priyadharashini@react.com</td>
                        <td><button className="btn btn-primary">View</button></td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default Student;
