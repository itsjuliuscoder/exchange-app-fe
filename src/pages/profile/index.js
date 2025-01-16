import React from 'react';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

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