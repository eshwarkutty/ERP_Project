import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthData } from '../redux/slices/authSlice';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../components/common/Login.css'; // Ensure you include this CSS file

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://reqres.in/api/login', {
                email: username,
                password: password,
            });
            dispatch(setAuthData({ token: response.data.token, username }));
            Swal.fire('Success', 'Logged in successfully', 'success');
        } catch (error) {
            Swal.fire('Error', 'Login failed', 'error');
        }
    };

    return (
        <div className="login-container d-flex justify-content-center">
            <div className="login-box card p-4 shadow-lg">
                <img className="user mx-auto d-block mb-3" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px" alt="User" />
                <h3 className="text-center">Sign in here</h3>
                <form onSubmit={handleSubmit}>
                    <div className="inputBox mb-3">
                        <input
                            id="uname"
                            type="text"
                            name="Username"
                            className="form-control"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            id="pass"
                            type="password"
                            name="Password"
                            className="form-control mt-3"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <input type="submit" className="btn btn-primary btn-block" value="Login" />
                </form>
                <a href="#" className="d-block text-center mt-3">Forget Password</a>
                <div className="text-center mt-2">
                    <p style={{ color: '#59238F' }}>Sign-Up</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
