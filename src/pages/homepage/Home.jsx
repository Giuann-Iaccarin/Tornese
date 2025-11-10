import React, { useState } from 'react';
import { Moon, Sun, Menu, X, Leaf, Recycle, Coins, TrendingUp } from 'lucide-react';
import ProjectSection from './sections/ProjectSection';
import TeamSection from './sections/TeamSection';
import MediaSection from './sections/MediaSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import Newsletter from './sections/Newsletter';

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
        <div className={`min-h-screen transition-colors duration-300 bg-white`}>
            {/* Navigation */}
            <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-linear-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                                <Leaf className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-linear-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                                Tornese Foundation
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['home', 'progetto', 'team', 'media', 'contatti'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`capitalize text-sm font-medium transition-colors ${activeSection === item
                                        ? 'text-emerald-500'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-emerald-500'
                                        }`}
                                >
                                    {item === 'home' ? 'Home' : item === 'progetto' ? 'Progetto' : item === 'media' ? 'Parlano di Noi' : item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                        <div className="px-4 py-4 space-y-3">
                            {['home', 'progetto', 'team', 'media', 'contatti'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="block w-full text-left px-4 py-2 rounded-lg capitalize text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                                >
                                    {item === 'home' ? 'Home' : item === 'progetto' ? 'Progetto' : item === 'media' ? 'Parlano di Noi' : item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full">
                            <Recycle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                                Blockchain × Sostenibilità × Economia Circolare
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                            Trasformiamo i rifiuti<br />
                            <span className="bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                                in valore reale
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Il primo ecosistema blockchain per la sostenibilità urbana. Ricicla, ricevi criptovalute e contribuisci alla green economy.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={() => scrollToSection('progetto')}
                                className="px-8 py-4 bg-linear-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all transform hover:scale-105"
                            >
                                Scopri il Progetto
                            </button>
                            <button className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-xl font-semibold border-2 border-gray-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all">
                                Scarica il Whitepaper
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
                            {[
                                { icon: Recycle, label: 'Materiali Riciclabili', value: '5+' },
                                { icon: Coins, label: 'Token Tornese', value: 'TRN' },
                                { icon: TrendingUp, label: 'Impatto Ambientale', value: 'ESG' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                                    <stat.icon className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Placeholder sections */}
            <ProjectSection />

            <TeamSection />

            <MediaSection />

            <ContactSection />

            <Newsletter />

            <Footer />
        </div>
    );
};

export default Home;