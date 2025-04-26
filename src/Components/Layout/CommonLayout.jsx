import React from 'react';
import Navbar from '../Common/NavBar';
import Footer from '../Common/Footer';

const CommonLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />


            <main className="flex-1">
                {children}
            </main>
            <Footer />

        </div>
    );
};

export default CommonLayout;
