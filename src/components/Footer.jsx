import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-blue text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Tait Medical Center</h3>
                        <p className="text-gray-300 mb-4">
                            Providing comprehensive, compassionate, and quality healthcare services to the Rusape community and beyond.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="flex-shrink-0 text-brand-green" size={20} />
                                <span className="text-gray-300">229 Tait Avenue, Rusape, Zimbabwe</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="flex-shrink-0 text-brand-green" size={20} />
                                <span className="text-gray-300">+263 252 053 372</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="flex-shrink-0 text-brand-green" size={20} />
                                <span className="text-gray-300">info@taitmedical.co.zw</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-800 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Tait Medical Center. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
