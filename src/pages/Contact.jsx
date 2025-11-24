import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import Map from '../components/Map';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us. We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-brand-blue mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We are here to help. Reach out to us for appointments, inquiries, or emergency services.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-white rounded-2xl shadow-sm p-8">
                        <h2 className="text-2xl font-bold text-brand-blue mb-8">Get in Touch</h2>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <MapPin className="text-brand-blue" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
                                    <p className="text-gray-600">229 Tait Avenue, Rusape, Zimbabwe</p>
                                    <p className="text-sm text-gray-500 mt-1">Located near the town center</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <Phone className="text-brand-blue" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Phone Numbers</h3>
                                    <p className="text-gray-600">Main: +263 252 053 372</p>
                                    <p className="text-gray-600">Ambulance: +263 78 438 7258</p>
                                    <p className="text-sm text-gray-500 mt-1">Available 24/7 for emergencies</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <MessageCircle className="text-brand-blue" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
                                    <p className="text-gray-600">+263 71 652 0228</p>
                                    <p className="text-sm text-gray-500 mt-1">For quick inquiries</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <Mail className="text-brand-blue" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Email Address</h3>
                                    <p className="text-gray-600">info@taitmedical.co.zw</p>
                                    <p className="text-sm text-gray-500 mt-1">For general inquiries</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <Clock className="text-brand-blue" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Opening Hours</h3>
                                    <p className="text-gray-600">Monday - Sunday: 24 Hours</p>
                                    <p className="text-sm text-gray-500 mt-1">We never close</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="mt-8 h-80 bg-gray-200 rounded-xl overflow-hidden shadow-md">
                            <Map />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-sm p-8">
                        <h2 className="text-2xl font-bold text-brand-blue mb-8">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                                    placeholder="+263 77 000 0000"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-green hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                            >
                                Send Message <Send className="ml-2" size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
