import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/auth';

const FloatingLabelInput = ({ label, type, value, onChange }) => {
    const isActive = value !== '';

    return (
        <div className="relative mb-8">
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="peer w-full px-3 py-2 text-sm border border-gray-300 rounded-md placeholder-transparent focus:outline-none focus:border-purple-800"
                placeholder={label}
            />
            <label
                className={`absolute left-3 px-1 bg-white transition-all ${isActive ? 'top-[-0.7rem] text-xs text-purple-800' : 'top-2.5 text-sm text-gray-400'} peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.7rem] peer-focus:text-xs peer-focus:text-purple-800`}
            >
                {label}
            </label>
        </div>
    );
};

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleLogin = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!password.trim()) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            login(email);
            navigate('/profile');
        }
    };

    return (
        <div className="flex justify-center h-screen bg-gray-100">
            <div className="w-[375px] h-full bg-white p-6 flex flex-col justify-between rounded-xl shadow-md">
                <div className="overflow-y-auto">
                    <h2 className="text-xl font-bold mb-1">Sign in to your <br /> PopX account</h2>
                    <p className="text-sm mb-5 text-gray-600">Enter your credentials to continue.</p>

                    <FloatingLabelInput
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mb-2">{errors.email}</p>
                    )}

                    <FloatingLabelInput
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mb-2">{errors.password}</p>
                    )}
                </div>

                <div className="mt-4">
                    <button
                        onClick={handleLogin}
                        className="w-full py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-900 text-sm font-medium cursor-pointer"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
