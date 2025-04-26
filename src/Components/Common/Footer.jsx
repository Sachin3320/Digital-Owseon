import React, { useState } from 'react';

// Import icons from a library like react-icons if needed
// This example uses placeholder icon components

const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribing email:', email);
        // Reset form
        setEmail('');
    };

    return (
        <footer className="bg-[#0e3050] text-white">
            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <h2 className="text-2xl  mb-4">DIGITAL WISEON</h2>
                        <p className="mb-6 text-sm">
                            We empower innovation by providing customized audio-visual solutions that cater to your specific needs.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-300">
                                <YoutubeIcon />
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                <FacebookIcon />
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                <InstagramIcon />
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                <LinkedInIcon />
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                <WhatsAppIcon />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links & About Us */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">Home</a></li>
                                <li><a href="#" className="hover:underline">We Design</a></li>
                                <li><a href="#" className="hover:underline">Insights</a></li>
                                <li><a href="#" className="hover:underline">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">About Us</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">About</a></li>
                                <li><a href="#" className="hover:underline">Blog</a></li>
                                <li><a href="#" className="hover:underline">Oracles</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter & Contact */}
                    <div>
                        <div className="mb-6">
                            <form onSubmit={handleSubmit}>
                                <div className="flex">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your Email"
                                        className="px-3 py-2 bg-white text-black w-full"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-gray-200 text-black px-3 py-2 font-medium"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                            <p className="mt-2 text-sm">
                                Stay Updated! Enter your Email to subscribe.
                            </p>
                        </div>

                        <div className="text-sm">
                            <p className="mb-2">
                                4th floor, Govind Bhawan,<br />
                                New dark Banglow Road,<br />
                                Patna-800001, Bihar, India
                            </p>

                            <div className="flex items-center mt-4">
                                <PhoneIcon />
                                <span className="ml-2">+91 9031215222</span>
                            </div>

                            <div className="flex items-center mt-2">
                                <EmailIcon />
                                <span className="ml-2">info@digitalwiseon.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Links */}
            <div className="border-t border-gray-700">
                <div className="container mx-auto px-4 py-4 flex justify-center space-x-8">
                    <a href="#" className="text-sm hover:underline">Terms of Service</a>
                    <a href="#" className="text-sm hover:underline">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;