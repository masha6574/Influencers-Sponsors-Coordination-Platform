import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5500/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    navigate('/home');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl rounded-xl transform transition-all duration-300 hover:scale-105">
                <h2 className="text-3xl font-bold text-center text-gray-800">Welcome Back</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 text-white bg-blue-500 rounded-lg font-semibold transition-transform duration-200 transform hover:scale-105 hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600">
                    Don't have an account?{" "}
                    <button
                        onClick={() => navigate('/register')} className="text-blue-500 font-semibold hover:underline">
                        Sign Up
                    </button>
                </p>
            </div>
        </div>
    );
};

export default LogIn;
