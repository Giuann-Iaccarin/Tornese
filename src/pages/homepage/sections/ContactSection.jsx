import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin, Instagram, Twitter, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { contactInfo, socialLinks } from '../../../data/contacts';

const icons = {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Instagram,
    Twitter,
    MessageCircle,
};

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState(null); // 'success', 'error', null

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulazione invio form
        if (formData.name && formData.email && formData.message) {
            setFormStatus('success');
            // Reset form dopo successo
            setTimeout(() => {
                setFormData({ name: '', email: '', subject: '', message: '' });
                setFormStatus(null);
            }, 3000);
        } else {
            setFormStatus('error');
            setTimeout(() => setFormStatus(null), 3000);
        }
    };

    return (
        <section id="contatti" className="py-20 px-4 bg-linear-to-br from-gray-50 to-blue-50/30">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-blue-100 px-5 py-2.5 rounded-full mb-6 border border-blue-200">
                        <Send className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">
                            Entra in Contatto
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        Parliamone Insieme
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Hai domande sul progetto? Vuoi collaborare con noi? Sei un ente locale interessato? Contattaci, saremo felici di risponderti.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                        <h3 className="text-2xl font-black text-gray-900 mb-6">
                            Invia un Messaggio
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                                    Nome Completo *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-900"
                                    placeholder="Mario Rossi"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-900"
                                    placeholder="mario.rossi@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                                    Oggetto
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-900"
                                    placeholder="Richiesta informazioni partnership"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                                    Messaggio *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none text-gray-900"
                                    placeholder="Scrivi qui il tuo messaggio..."
                                />
                            </div>

                            {/* Form Status Messages */}
                            {formStatus === 'success' && (
                                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                                    <p className="text-sm text-green-700">
                                        Messaggio inviato con successo! Ti risponderemo al più presto.
                                    </p>
                                </div>
                            )}

                            {formStatus === 'error' && (
                                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                                    <p className="text-sm text-red-700">
                                        Per favore compila tutti i campi obbligatori.
                                    </p>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Invia Messaggio
                            </button>

                            <p className="text-sm text-gray-500 text-center">
                                * Campi obbligatori
                            </p>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                            <h3 className="text-2xl font-black text-gray-900 mb-6">
                                Informazioni di Contatto
                            </h3>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => {
                                    const IconComponent = icons[info.icon];

                                    return (
                                        <a
                                            key={index}
                                            href={info.link}
                                            target={info.title === "Sede" ? "_blank" : undefined}
                                            rel={info.title === "Sede" ? "noopener noreferrer" : undefined}
                                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                                        >
                                            <div
                                                className={`w-12 h-12 bg-linear-to-br ${info.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg`}
                                            >
                                                {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                                                <p className="text-gray-600 whitespace-pre-line">{info.value}</p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                            <h3 className="text-xl font-black text-gray-900 mb-6">
                                Seguici sui Social
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = icons[social.icon];

                                    return (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200 ${social.color} hover:text-white transition-all group`}
                                        >
                                            {IconComponent && (
                                                <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                            )}
                                            <span className="font-bold">{social.name}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="bg-linear-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl">
                            <h3 className="text-xl font-black mb-4">
                                Orari Ufficio
                            </h3>
                            <div className="space-y-2 text-blue-50">
                                <p>🕒 Lunedì - Venerdì: 9:00 - 18:00</p>
                                <p>🕒 Sabato: 9:00 - 13:00</p>
                                <p>🚫 Domenica: Chiuso</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;