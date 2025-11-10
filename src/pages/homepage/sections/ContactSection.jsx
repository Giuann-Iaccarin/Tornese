import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin, Instagram, Twitter, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { contactInfo, socialLinks } from '../../../data/contacts';

const ContactSection = () => {
    const icons = { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, MessageCircle };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState(null);

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
        <section id="contatti" className="py-20 px-4 bg-linear-to-br from-gray-50 to-emerald-50/30 dark:from-slate-800 dark:to-slate-900">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full mb-6">
                        <Send className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                            Entra in Contatto
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Parliamone Insieme
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Hai domande sul progetto? Vuoi collaborare con noi? Sei un ente locale interessato? Contattaci, saremo felici di risponderti.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-slate-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Invia un Messaggio
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Nome Completo *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                                    placeholder="Mario Rossi"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                                    placeholder="mario.rossi@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Oggetto
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                                    placeholder="Richiesta informazioni partnership"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Messaggio *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-white"
                                    placeholder="Scrivi qui il tuo messaggio..."
                                />
                            </div>

                            {/* Form Status Messages */}
                            {formStatus === 'success' && (
                                <div className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl">
                                    <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                    <p className="text-sm text-emerald-700 dark:text-emerald-300">
                                        Messaggio inviato con successo! Ti risponderemo al più presto.
                                    </p>
                                </div>
                            )}

                            {formStatus === 'error' && (
                                <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0" />
                                    <p className="text-sm text-red-700 dark:text-red-300">
                                        Per favore compila tutti i campi obbligatori.
                                    </p>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-linear-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Invia Messaggio
                            </button>

                            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                * Campi obbligatori
                            </p>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-slate-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Informazioni di Contatto
                            </h3>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => {
                                    const Icon = icons[info.icon];

                                    return (
                                        <a
                                            key={index}
                                            href={info.link}
                                            target={info.title === "Sede" ? "_blank" : undefined}
                                            rel={info.title === "Sede" ? "noopener noreferrer" : undefined}
                                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors group"
                                        >
                                            <div
                                                className={`w-12 h-12 bg-linear-to-br ${info.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                                            >
                                                {Icon && <Icon className="w-6 h-6 text-white" />}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                                    {info.title}
                                                </h4>
                                                <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-slate-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                Seguici sui Social
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = icons[social.icon];

                                    return (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-700 rounded-xl ${social.color} hover:text-white transition-all group border border-gray-200 dark:border-slate-600`}
                                        >
                                            {Icon && (
                                                <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                            )}
                                            <span className="font-medium">{social.name}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="bg-linear-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white shadow-xl">
                            <h3 className="text-xl font-bold mb-4">
                                Orari Ufficio
                            </h3>
                            <div className="space-y-2 text-emerald-50">
                                <p>🕒 Lunedì - Venerdì: 9:00 - 18:00</p>
                                <p>🕒 Sabato: 9:00 - 13:00</p>
                                <p>🚫 Domenica: Chiuso</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-slate-700 overflow-hidden">
                    <div className="aspect-video bg-linear-to-br from-emerald-100 to-teal-100 dark:from-slate-700 dark:to-slate-600 rounded-xl flex items-center justify-center">
                        <div className="text-center">
                            <MapPin className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                                Mappa Interattiva
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                                Via Toledo, 256 - 80132 Napoli, Italia
                            </p>
                            <a
                                href="https://maps.google.com/?q=Via+Toledo+256+Napoli"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 px-6 py-2 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors"
                            >
                                Apri in Google Maps
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;