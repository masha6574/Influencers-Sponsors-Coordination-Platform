import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5500/register", { name, email, password })
            .then((result) => {
                console.log(result);
                navigate("/login");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-2xl rounded-xl">
                <h2 className="text-3xl font-extrabold text-center text-gray-800">Create an Account</h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="Enter your full name"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="Enter a strong password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <button onClick={() => navigate("/login")} className="text-blue-600 hover:underline">
                        Login here
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Signup;
