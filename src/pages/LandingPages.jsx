import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center h-screen bg-gray-100">
            <div className="w-[375px] h-full bg-gray-100 p-6 flex flex-col justify-end rounded-xl shadow-md">
                <h1 className="text-2xl font-bold mb-1">Welcome to PopX</h1>
                <p className='mb-6 text-gray-700 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit have the bad.</p>
                <button
                    onClick={() => navigate('/signup')}
                    className="w-full font-bold mb-4 px-4 py-2 bg-purple-800 text-white rounded-lg cursor-pointer">
                    Create Account
                </button>
                <button
                    onClick={() => navigate('/login')}
                    className="w-full px-4 py-2 bg-purple-300 font-bold text-white rounded-lg cursor-pointer">
                    Already Registered? Login
                </button>
            </div>
        </div>
    );
};

export default LandingPage;