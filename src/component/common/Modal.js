import React, { useEffect } from 'react';

const ContactModal = ({ isOpen, onClose }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => document.body.style.overflow = 'auto';
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4 overflow-y-auto">
            <div 
                className="bg-white w-full max-w-[90%] md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto" 
                onClick={(e) => e.stopPropagation()} 
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-3 right-3 text-white bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
                    ✕
                </button>
                <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-4 text-center">Contact Us</h2>

                <form className="space-y-4">
                    <div>
                        <label className="font-bold text-md mb-2 block">Which country are you interested in? <span className="text-red-500">*</span></label>
                        <select className="w-full border border-gray-300 rounded p-2">
                            <option value="">Choose country of interest</option>
                            <option value="usa">USA</option>
                            <option value="canada">Canada</option>
                            <option value="india">India</option>
                            <option value="china">China</option>
                        </select>
                    </div>

                    <div>
                        <label className="font-bold text-md mb-2 block">Looking for solutions or career opportunities with us? <span className="text-red-500">*</span></label>
                        <select className="w-full border border-gray-300 rounded p-2">
                            <option value="">Please select from dropdown</option>
                            <option value="solutions">Solutions</option>
                            <option value="career">Job Opportunities</option>
                        </select>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="font-bold">First Name: <span className="text-red-500">*</span></label>
                            <input 
                                type="text" 
                                className="w-full mt-1 p-2 border rounded-lg" 
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label className="font-bold">Last Name: <span className="text-red-500">*</span></label>
                            <input 
                                type="text" 
                                className="w-full mt-1 p-2 border rounded-lg" 
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="font-bold">Your Email ID: <span className="text-red-500">*</span></label>
                        <input 
                            type="email" 
                            className="w-full mt-1 p-2 border rounded-lg" 
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full mt-4 px-4 py-2 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;