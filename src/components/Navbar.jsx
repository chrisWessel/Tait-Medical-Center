import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            {/* Top Bar */}
            <div className="bg-brand-blue text-white py-2 px-4 text-sm hidden md:block">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone size={16} />
                            <span>+263 252 053 372</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin size={16} />
                            <span>229 Tait Avenue, Rusape, Zimbabwe</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span>Open 24/7 for Emergencies</span>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-brand-blue">Tait Medical</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`${isActive(item.href)
                                        ? 'text-brand-green font-semibold'
                                        : 'text-gray-600 hover:text-brand-green'
                                    } transition-colors duration-200`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="bg-brand-blue text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors duration-200 font-medium"
                        >
                            Book Appointment
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-brand-blue focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`${isActive(item.href)
                                        ? 'bg-blue-50 text-brand-blue'
                                        : 'text-gray-600 hover:bg-gray-50'
                                    } block px-3 py-2 rounded-md text-base font-medium`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
