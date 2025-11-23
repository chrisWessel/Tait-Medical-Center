import React from 'react';
import { CheckCircle, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-brand-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About Tait Medical Center</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Dedicated to providing exceptional healthcare services to the Rusape community with compassion and expertise.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="lg:w-1/2">
            <img
              src="/images/collage.jpg"
              alt="Tait Medical Center Facilities"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Our Story & Mission</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Tait Medical Center opened its doors in September 2025 with a clear vision: to address the critical shortage of specialized medical services in Rusape and the surrounding regions. Founded and managed by Dr. Walter Mutondori, our facility has quickly become a beacon of hope and healing.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              We believe that quality healthcare should be accessible to everyone. That's why we accept all medical aids and strive to keep our services affordable without compromising on excellence. Our commitment to patient safety and care is reflected in our track record of zero neonatal and maternal deaths since our inception.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center text-gray-700">
                <CheckCircle className="text-brand-green mr-3" size={20} />
                <span>Patient-Centered Care</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="text-brand-green mr-3" size={20} />
                <span>Modern Facilities</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="text-brand-green mr-3" size={20} />
                <span>Experienced Specialists</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="text-brand-green mr-3" size={20} />
                <span>24/7 Availability</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-brand-blue" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Team</h3>
            <p className="text-gray-600">
              A dedicated team of doctors, nurses, and support staff working together to ensure your well-being.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="text-brand-blue" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
            <p className="text-gray-600">
              We adhere to the highest standards of medical practice and continuous improvement in our services.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-brand-blue" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
            <p className="text-gray-600">
              We operate with transparency, honesty, and ethical conduct in all our interactions with patients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
