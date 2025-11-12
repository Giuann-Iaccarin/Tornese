import React, { useState } from 'react';
import { Moon, Sun, Menu, X, Recycle, Coins, TrendingUp } from 'lucide-react';
import ProjectSection from './sections/ProjectSection';
import TeamSection from './sections/TeamSection';
import MediaSection from './sections/MediaSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import Newsletter from './sections/Newsletter';
import TorneseLogo from './TorneseLogo';

const Home = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        setMobileMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen transition-colors duration-300 bg-white">
            {/* Navigation */}
            <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/90 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <TorneseLogo size="medium" />

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['home', 'progetto', 'team', 'media', 'contatti'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`capitalize text-sm font-semibold transition-all ${activeSection === item
                                        ? 'text-blue-600'
                                        : 'text-gray-600 hover:text-blue-600'
                                        }`}
                                >
                                    {item === 'home' ? 'Home' : item === 'progetto' ? 'Progetto' : item === 'media' ? 'Parlano di Noi' : item}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-800"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 bg-white">
                        <div className="px-4 py-4 space-y-3">
                            {['home', 'progetto', 'team', 'media', 'contatti'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="block w-full text-left px-4 py-2 rounded-lg capitalize text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
                                >
                                    {item === 'home' ? 'Home' : item === 'progetto' ? 'Progetto' : item === 'media' ? 'Parlano di Noi' : item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-blue-100 px-5 py-2.5 rounded-full border border-blue-200">
                            <Recycle className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-semibold text-blue-700">
                                Blockchain × Sostenibilità × Economia Circolare
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight">
                            Trasformiamo i rifiuti<br />
                            <span className="bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                in valore reale
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Il primo ecosistema blockchain per la sostenibilità urbana. Ricicla, ricevi criptovalute e contribuisci alla green economy.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                            <button
                                onClick={() => scrollToSection('progetto')}
                                className="px-10 py-5 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 hover:-translate-y-1"
                            >
                                Scopri il Progetto
                            </button>
                            <button className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all transform hover:scale-105">
                                Scarica il Whitepaper
                            </button>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-5xl mx-auto">
                            {[
                                { icon: Recycle, label: 'Materiali Riciclabili', value: '5+', color: 'from-blue-500 to-cyan-500' },
                                { icon: Coins, label: 'Token Tornese', value: 'TRN', color: 'from-blue-600 to-blue-700' },
                                { icon: TrendingUp, label: 'Impatto Ambientale', value: 'ESG', color: 'from-cyan-500 to-blue-500' }
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/20 transition-all transform hover:-translate-y-2 relative overflow-hidden"
                                >
                                    {/* Background Gradient */}
                                    <div className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

                                    {/* Icon */}
                                    <div className={`w-16 h-16 bg-linear-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform`}>
                                        <stat.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Value */}
                                    <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>

                                    {/* Label */}
                                    <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Trust Badge */}
                        <div className="pt-12">
                            <p className="text-sm text-gray-500 mb-4">Sostenuto da</p>
                            <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
                                {['🏛️ Enti Locali', '🌍 Partner ESG', '⚡ Blockchain Network', '♻️ Circular Economy'].map((partner, i) => (
                                    <span key={i} className="text-gray-600 font-medium">{partner}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sections */}
            <ProjectSection />
            <TeamSection />
            <MediaSection />
            <Newsletter />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Home;