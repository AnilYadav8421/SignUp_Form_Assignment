import { useNavigate } from 'react-router-dom';
import { getUser, logout } from '../utils/auth';
import { useEffect } from 'react';
import { FaCamera } from 'react-icons/fa';

const ProfilePage = () => {
    const navigate = useNavigate();
    const user = getUser();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user]);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return user ? (
        <div className="flex justify-center h-screen bg-gray-100">
            <div className="w-[375px] h-full bg-white p-6 rounded-xl shadow-md flex flex-col">
                {/* Header */}
                <h2 className="text-xl text-gray-800 mb-7">Account Settings</h2>

                <div className="flex items-center mb-8">
                    <div className="relative w-20 h-20 mr-4">
                        <img
                            src="https://documents.bcci.tv/resizedimageskirti/164_compress.png"
                            alt="Profile"
                            className="w-20 h-20 rounded-full object-cover border-2 border-purple-800"
                        />
                        <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow">
                            <FaCamera className="text-purple-800 text-sm" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">{user.name || 'Virat K.'}</h3>
                        <p className="text-sm text-gray-600">{user.email || 'anil@example.com'}</p>
                    </div>
                </div>

                <div>
                    <p className='text-gray-700 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut tenetur tempore eos labore eligendi eius maiores nobis beatae recusandae saepe?</p>
                </div>

                <div className="mt-auto">
                    <button
                        onClick={handleLogout}
                        className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-semibold"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    ) : null;
};

export default ProfilePage;
