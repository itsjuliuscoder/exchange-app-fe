import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Exchange Frontend App. All rights reserved.</p>
                <nav className="mt-4">
                    {/* <a href="/terms" className="mx-2 hover:underline">Terms of Service</a>
                    <a href="/privacy" className="mx-2 hover:underline">Privacy Policy</a>
                    <a href="/contact" className="mx-2 hover:underline">Contact Us</a> */}
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
