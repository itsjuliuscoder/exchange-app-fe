import React from 'react';
import Sidebar from '../../../components/Shared/Sidebar';
import Footer from '../../../components/Shared/Footer';
import Navbar from '../../../components/Shared/Navbar';

const ProfilePage = () => {
    return (
        <div className="profile-page">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="profile-content">
                    <h1>Profile Page</h1>
                    {/* Add your profile content here */}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default ProfilePage;