import React from 'react';
import {
    Baby,
    Stethoscope,
    Activity,
    Truck,
    FlaskConical,
    Scissors,
    Scan,
    Pill,
    Smile,
    BedDouble
} from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Baby size={48} className="text-brand-green" />,
            title: "Maternity Services",
            description: "Comprehensive care for expectant mothers including antenatal care, labor and delivery, and C-sections. We prioritize the safety of both mother and baby."
        },
        {
            icon: <Activity size={48} className="text-brand-green" />,
            title: "Accident & Emergency",
            description: "24/7 emergency services equipped to handle critical situations with speed and expertise."
        },
        {
            icon: <Scissors size={48} className="text-brand-green" />,
            title: "Theatre & Surgery",
            description: "Modern surgical theatre for major and minor operations, including orthopedic and neurosurgical procedures."
        },
        {
            icon: <Scan size={48} className="text-brand-green" />,
            title: "Radiography (X-rays)",
            description: "Advanced imaging services for accurate diagnosis and treatment planning."
        },
        {
            icon: <FlaskConical size={48} className="text-brand-green" />,
            title: "Laboratory Services",
            description: "On-site laboratory for quick and accurate test results to support clinical decisions."
        },
        {
            icon: <Truck size={48} className="text-brand-green" />,
            title: "Ambulance Services",
            description: "Rapid response ambulance service for patient transport and emergency situations."
        },
        {
            icon: <Stethoscope size={48} className="text-brand-green" />,
            title: "Specialist Clinics",
            description: "Access to specialists in Orthopedics, Urology, ENT, Obstetrics & Gynecology, and Internal Medicine."
        },
        {
            icon: <Smile size={48} className="text-brand-green" />,
            title: "Dental Services",
            description: "Professional dental care for oral health, including check-ups and treatments."
        },
        {
            icon: <Pill size={48} className="text-brand-green" />,
            title: "Pharmacy",
            description: "Well-stocked pharmacy providing prescription medications and health advice."
        },
        {
            icon: <BedDouble size={48} className="text-brand-green" />,
            title: "Admissions",
            description: "Comfortable inpatient wards for recovery and monitoring under constant medical supervision."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-brand-blue mb-4">Our Medical Services</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        At Tait Medical Center, we offer a wide range of specialized medical services to ensure you receive the best possible care under one roof.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 border-t-4 border-t-transparent hover:border-t-brand-green">
                            <div className="mb-6 bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-brand-blue rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Need a Specialist?</h2>
                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                        Our specialist clinics operate on scheduled days. Contact us to book an appointment with our Orthopedic, Urology, ENT, or other specialists.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-brand-green text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-colors"
                    >
                        Book an Appointment
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Services;
