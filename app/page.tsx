'use client';

import Navigation from './components/Navigation';
import GlassCard from './components/GlassCard';
import GlassButton from './components/GlassButton';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    // Load Fillout embed script if not already loaded
    if (!document.querySelector('script[src="https://server.fillout.com/embed/v1/"]')) {
      const script = document.createElement('script');
      script.src = 'https://server.fillout.com/embed/v1/';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const services = [
    {
      title: 'Industrial Construction',
      description: 'As industrial builders, it is our goal to construct beautiful and functional facilities while involving you in every phase of the process. By utilizing the newest technology, you can count on Nelson Specialty Industrial for continuous communication about what is going on with your new facility. We believe this ensures a successful project and results in a facility that satisfies our clients. Our project professionals will ensure beauty and uncompromising quality for your industrial facility.',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Industrial Facility Restoration',
      description: 'Nelson Specialty Industrial responds to restoration emergencies with urgency to restore your facility in the quickest possible manner. Loss from fire and water damage is a stressful, traumatic experience and damage begins instantly, so minutes count: Our trained and experienced technicians will begin mitigation efforts as soon as the extent of the damage is assessed.',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Full Facility Renovations',
      description: 'When you select Nelson Specialty Industrial to renovate your facility, you are choosing a locally owned company servicing Louisiana and surrounding areas. Our goal is to redefine the renovation experience by providing outstanding craftsmanship, efficient project management, and second-to-none customer service for industrial facilities.',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'Emergency Response Services',
      description: 'Nelson Specialty Industrial specializes in rapid response to industrial emergencies. Whether it\'s fire damage, water intrusion, or structural issues, our experienced team is available 24/7 to assess and mitigate damage to minimize downtime and protect your operations.',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Navigation */}
      <Navigation
        logo="/NSI_transp.png"
        logoAlt="Nelson Specialty Industrial Logo"
        links={[]}
        cta={{ href: '#contact', label: 'Contact Us' }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-cyan-400/20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Nelson Specialty
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-800">
              Industrial
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let's get your industrial project started!
            </p>
            <GlassButton variant="primary" href="#contact" className="text-lg px-8 py-4">
              CONTACT US
            </GlassButton>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive industrial construction and restoration services for facilities of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="h-full p-8 hover:scale-105 transition-transform duration-300">
                  <div className="mb-6 flex items-center justify-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hurricane Damage Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-8 md:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                HELPING REBUILD FACILITIES IN THE WAKE OF UNPRECEDENTED HURRICANE DAMAGE
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nelson Specialty Industrial is proud to help businesses across Louisiana rebuild and restore their facilities after devastating natural disasters. Our experienced team understands the urgency of getting your operations back online.
              </p>
              <GlassButton variant="primary" href="#contact" className="text-lg px-8 py-4">
                Contact Us
              </GlassButton>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Contact & About Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* About Us / Our Story */}
              <GlassCard className="p-8 md:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Serving the Louisiana area, Nelson Specialty Industrial specializes in your industrial building and restoration needs. Our company can restore your facility after significant fire or water damage.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Nelson Specialty Industrial responds to restoration emergencies with urgency to restore your facility in the quickest possible manner. Loss from fire and water damage is a stressful, traumatic experience and damage begins instantly, so minutes count: Our trained and experienced technicians will begin mitigation efforts as soon as the extent of the damage is assessed.
                  </p>
                </div>

                {/* Get In Touch */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Get in Touch</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-700">
                        <strong>Location</strong>
                      </p>
                      <p className="text-gray-700">
                        36791 Greenwell Springs Rd. Suite A<br />
                        Greenwell Springs, La. 70739<br />
                        United States
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Phone</strong>
                      </p>
                      <p className="text-gray-700">225-316-0253</p>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Hours</strong>
                      </p>
                      <p className="text-gray-700">
                        Mon - Fri: 9:00 am - 5:00 pm<br />
                        Sat - Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Contact Form */}
              <GlassCard className="p-8 md:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Contact Us</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Send us a message
                </p>
                <div 
                  style={{width:'100%',height:'500px'}} 
                  data-fillout-id="dBu1HhbbZLus" 
                  data-fillout-embed-type="standard" 
                  data-fillout-inherit-parameters 
                  data-fillout-dynamic-resize 
                  data-fillout-domain="forms.discover-nocode.com"
                ></div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Image
                  src="/NSI_transp.png"
                  alt="Nelson Specialty Industrial Logo"
                  width={200}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                Serving Louisiana with industrial construction, facility restoration, and emergency response services. Specializing in industrial fire and water damage restoration.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Industrial Construction
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Facility Restoration
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Facility Renovations
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Emergency Response
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Our Story
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © Copyright {new Date().getFullYear()} Nelson Specialty Industrial. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
