import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Heart, Clock, Shield } from 'lucide-react';

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/exterior.jpg"
                        alt="Tait Medical Center Building"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-blue/80"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Advanced Healthcare <br /> for Rusape & Beyond
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl text-blue-100">
                        Providing comprehensive, compassionate, and affordable medical services 24/7. Your health is our priority.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/contact"
                            className="bg-brand-green hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center"
                        >
                            Book Appointment <ArrowRight className="ml-2" size={20} />
                        </Link>
                        <Link
                            to="/services"
                            className="bg-white hover:bg-gray-100 text-brand-blue px-8 py-3 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center"
                        >
                            Our Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow border-t-4 border-brand-green">
                            <Clock className="text-brand-blue mb-4" size={40} />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Emergency</h3>
                            <p className="text-gray-600">Always open to handle medical emergencies with speed and care.</p>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
                            <Activity className="text-brand-blue mb-4" size={40} />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Facilities</h3>
                            <p className="text-gray-600">Equipped with state-of-the-art theatre, lab, and radiology services.</p>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow border-t-4 border-brand-green">
                            <Heart className="text-brand-blue mb-4" size={40} />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Care</h3>
                            <p className="text-gray-600">Led by Dr. Walter Mutondori and a team of dedicated specialists.</p>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
                            <Shield className="text-brand-blue mb-4" size={40} />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable</h3>
                            <p className="text-gray-600">We accept all medical aids and strive to provide accessible healthcare.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Preview Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <img
                                src="/images/wards.jpg"
                                alt="Modern Wards at Tait Medical Center"
                                className="rounded-2xl shadow-xl w-full"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-brand-blue mb-6">Committed to Your Well-being</h2>
                            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                Tait Medical Center is a premier private hospital in Rusape, dedicated to bridging the gap in specialized medical services. Since opening in September 2025, we have been serving the community with a wide range of services including maternity, surgery, and specialist clinics.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                                    Zero neonatal and maternal deaths to date
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                                    Comprehensive maternity and surgical care
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                                    Serving 35-55 outpatients daily
                                </li>
                            </ul>
                            <Link
                                to="/about"
                                className="text-brand-blue font-semibold hover:text-blue-800 flex items-center"
                            >
                                Learn More About Us <ArrowRight className="ml-2" size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-brand-blue text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Medical Attention?</h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Visit us at 229 Tait Avenue, Rusape or call us for immediate assistance. We are here for you 24/7.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-brand-green text-white hover:bg-green-600 px-8 py-3 rounded-full font-bold text-lg transition-colors inline-block"
                    >
                        Contact Us Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
