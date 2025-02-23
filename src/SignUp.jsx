import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5500/register', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="p-6 space-y-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center">Sign Up</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                        placeholder="Enter name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="w-full py-2 text-white bg-blue-500 rounded-lg">
                    Sign Up
                </button>
            </form>
            <p className="text-sm text-center">
                Already have an account?{" "}
                <button onClick={() => navigate("/login")} className="text-blue-500 underline">
                    Login
                </button>
            </p>
        </div>
    );
};

export default Signup;
