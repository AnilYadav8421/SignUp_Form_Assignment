import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../utils/auth';

const FloatingLabelInput = ({ label, type, value, onChange }) => {
    const isActive = value !== '';

    return (
        <div className="relative mb-6">
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="peer w-full px-3 py-2 border border-gray-300 rounded-md placeholder-transparent focus:outline-none focus:border-purple-800 text-sm"
                placeholder={label}
            />
            <label
                className={`absolute left-3 bg-white px-1 transition-all
          ${isActive ? 'top-[-0.7rem] text-xs text-purple-800' : 'top-2.5 text-sm text-gray-400'}
          peer-placeholder-shown:top-2.5
          peer-placeholder-shown:text-sm
          peer-focus:top-[-0.7rem]
          peer-focus:text-xs
          peer-focus:text-purple-800
        `}
            >
                {label}
            </label>
        </div>
    );
};

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [company, setCompany] = useState('');
    const [isAgency, setIsAgency] = useState(null);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSignup = () => {
        const newErrors = {};

        if (!name.trim()) newErrors.name = 'Name is required';
        if (!email.trim()) newErrors.email = 'Email is required';
        if (!password.trim()) newErrors.password = 'Password is required';
        if (!mobile.trim()) newErrors.mobile = 'Mobile number is required';
        if (!company.trim()) newErrors.company = 'Company name is required';
        if (isAgency === null) newErrors.agency = 'Please select an option';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            signup(name, email, password);
            navigate('/profile');
        }
    };

    return (
        <div className="flex justify-center h-screen bg-gray-100">
            <div className="w-[375px] h-full bg-white p-6 flex flex-col justify-between rounded-xl shadow-md">
                <div className="overflow-y-auto">
                    <h2 className="text-2xl font-bold mb-4">Create your<br /> PopX account</h2>

                    <FloatingLabelInput
                        label="Full Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <p className="text-red-500 text-sm -mt-4 mb-4">{errors.name}</p>}

                    <FloatingLabelInput
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className="text-red-500 text-sm -mt-4 mb-4">{errors.email}</p>}

                    <FloatingLabelInput
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p className="text-red-500 text-sm -mt-4 mb-4">{errors.password}</p>}

                    <FloatingLabelInput
                        label="Mobile Number"
                        type="tel"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    {errors.mobile && <p className="text-red-500 text-sm -mt-4 mb-4">{errors.mobile}</p>}

                    <FloatingLabelInput
                        label="Company Name"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                    {errors.company && <p className="text-red-500 text-sm -mt-4 mb-4">{errors.company}</p>}

                    <div className="mb-4">
                        <p className="mb-2 text-sm text-gray-700">Are you an agency?</p>
                        <div className="flex space-x-4">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="agency"
                                    value="yes"
                                    checked={isAgency === true}
                                    onChange={() => setIsAgency(true)}
                                    className="accent-purple-800"
                                />
                                <span className={isAgency === true ? 'text-purple-800 font-medium' : 'text-gray-700'}>
                                    Yes
                                </span>
                            </label>

                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="agency"
                                    value="no"
                                    checked={isAgency === false}
                                    onChange={() => setIsAgency(false)}
                                    className="accent-purple-800"
                                />
                                <span className={isAgency === false ? 'text-purple-800 font-medium' : 'text-gray-700'}>
                                    No
                                </span>
                            </label>
                        </div>
                        {errors.agency && <p className="text-red-500 text-sm mt-2">{errors.agency}</p>}
                    </div>
                </div>

                <div className="mt-4">
                    <button
                        onClick={handleSignup}
                        className="w-full py-3 bg-purple-800 text-white text-sm font-semibold rounded-lg hover:bg-purple-900 cursor-pointer"
                    >
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
