import React from 'react';
import { Mail, MapPin, Linkedin, Instagram, Twitter, MessageCircle, ExternalLink, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const footerLinks = {
        progetto: [
            { label: 'Come Funziona', action: () => scrollToSection('progetto') },
            { label: 'Token Tornese', action: () => scrollToSection('progetto') },
            { label: 'Roadmap', action: () => scrollToSection('progetto') },
            { label: 'Whitepaper', href: '#' }
        ],
        azienda: [
            { label: 'Chi Siamo', action: () => scrollToSection('team') },
            { label: 'Team', action: () => scrollToSection('team') },
            { label: 'Carriere', href: 'mailto:careers@tornesefoundation.org' },
            { label: 'Press Kit', action: () => scrollToSection('media') }
        ],
        risorse: [
            { label: 'Blog', href: '#' },
            { label: 'FAQ', href: '#' },
            { label: 'Documentazione', href: '#' },
            { label: 'API Developer', href: '#' }
        ],
        legale: [
            { label: 'Privacy Policy', href: '#' },
            { label: 'Cookie Policy', href: '#' },
            { label: 'Termini di Servizio', href: '#' },
            { label: 'Disclaimer', href: '#' }
        ]
    };

    const socialLinks = [
        { icon: Linkedin, url: 'https://linkedin.com/company/tornese-foundation', name: 'LinkedIn' },
        { icon: Instagram, url: 'https://instagram.com/tornesefoundation', name: 'Instagram' },
        { icon: Twitter, url: 'https://twitter.com/tornesefnd', name: 'Twitter' },
        { icon: MessageCircle, url: 'https://t.me/tornesefoundation', name: 'Telegram' }
    ];

    const partners = [
        '🏛️ Comune di Napoli',
        '🌍 UN SDG Alliance',
        '⚡ Ethereum Foundation',
        '♻️ Circular Economy Network'
    ];

    return (
        <footer className="bg-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* Main Footer Content */}
                <div className="py-12 border-b border-slate-800">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

                        {/* Brand Column */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center space-x-3 mb-6">
                                <svg viewBox="1700 800 600 600" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                                    <circle fill="#0073E6" cx="2000" cy="1136.32" r="258.42" />
                                    <g fill="#FFFFFF">
                                        <path d="M2040.02,1015.67c0,0-23.2,3.48-33.64,25.52c0,0-12.76-17.4-37.12-25.52h-97.45l26.68,44.08h47.56
                        c0,0,30.16,8.12,30.16,32.48v163.18h52.2v-167.82c0,0,1.16-24.36,25.52-27.84h48.72l25.52-44.08H2040.02z"/>
                                        <polygon points="1899.65,1256.97 1943.73,1217.52 1943.73,1085.27 1899.65,1085.27" />
                                        <polygon points="2057.42,1217.52 2101.51,1256.97 2101.51,1085.27 2057.42,1085.27" />
                                    </g>
                                </svg>
                                <div>
                                    <span className="text-xl font-black">TORNESE</span>
                                    <p className="text-xs text-gray-400 -mt-1">Foundation</p>
                                </div>
                            </div>

                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Costruiamo il primo ecosistema blockchain per la sostenibilità urbana. Trasformiamo il riciclo in valore reale per cittadini e ambiente.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <a
                                    href="mailto:info@tornesefoundation.org"
                                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group"
                                >
                                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm">info@tornesefoundation.org</span>
                                </a>
                                <a
                                    href="https://maps.google.com/?q=Via+Toledo+256+Napoli"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group"
                                >
                                    <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm">Via Toledo, 256 - Napoli</span>
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-3 mt-6">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Links Columns */}
                        <div>
                            <h3 className="font-black text-white mb-4">Progetto</h3>
                            <ul className="space-y-3">
                                {footerLinks.progetto.map((link, index) => (
                                    <li key={index}>
                                        {link.href ? (
                                            <a
                                                href={link.href}
                                                className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-1 group"
                                            >
                                                {link.label}
                                                {link.label === 'Whitepaper' && (
                                                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                )}
                                            </a>
                                        ) : (
                                            <button
                                                onClick={link.action}
                                                className="text-gray-400 hover:text-blue-400 transition-colors text-sm text-left"
                                            >
                                                {link.label}
                                            </button>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-black text-white mb-4">Azienda</h3>
                            <ul className="space-y-3">
                                {footerLinks.azienda.map((link, index) => (
                                    <li key={index}>
                                        {link.href ? (
                                            <a
                                                href={link.href}
                                                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                                            >
                                                {link.label}
                                            </a>
                                        ) : (
                                            <button
                                                onClick={link.action}
                                                className="text-gray-400 hover:text-blue-400 transition-colors text-sm text-left"
                                            >
                                                {link.label}
                                            </button>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-black text-white mb-4">Risorse</h3>
                            <ul className="space-y-3">
                                {footerLinks.risorse.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-black text-white mb-4">Legale</h3>
                            <ul className="space-y-3">
                                {footerLinks.legale.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Partners Section */}
                <div className="py-8 border-b border-slate-800">
                    <p className="text-center text-gray-500 text-sm mb-4">Partner e Sostenitori</p>
                    <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
                        {partners.map((partner, index) => (
                            <span key={index} className="hover:text-blue-400 transition-colors">
                                {partner}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span>© 2025 Tornese Foundation.</span>
                            <span className="hidden md:inline">•</span>
                            <span className="flex items-center gap-1">
                                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Napoli
                            </span>
                        </div>

                        <div className="flex items-center gap-6">
                            <span className="text-gray-500 text-xs">P.IVA: IT12345678901</span>
                            <button
                                onClick={scrollToTop}
                                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 group"
                                aria-label="Torna su"
                            >
                                <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Decorative Bottom Border */}
            <div className="h-1 bg-linear-to-r from-blue-600 via-cyan-500 to-blue-600" />
        </footer>
    );
};

export default Footer;