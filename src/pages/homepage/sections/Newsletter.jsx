import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, Bell } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null); // 'success', 'error', 'loading', null

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validazione email base
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email)) {
            setStatus('error');
            setTimeout(() => setStatus(null), 3000);
            return;
        }

        // Simulazione invio
        setStatus('loading');

        setTimeout(() => {
            setStatus('success');
            setEmail('');

            // Reset status dopo 5 secondi
            setTimeout(() => setStatus(null), 5000);
        }, 1500);
    };

    return (
        <section className="py-20 px-4 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-8">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 border border-white/30">
                        <Bell className="w-8 h-8 text-white animate-pulse" />
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Rimani Aggiornato sul Progetto
                    </h2>
                    <p className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto">
                        Iscriviti alla nostra newsletter per ricevere aggiornamenti esclusivi su sviluppi, partnership, eventi e il lancio delle colonnine nella tua città.
                    </p>
                </div>

                {/* Newsletter Form */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 relative">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Inserisci la tua email"
                                    disabled={status === 'loading'}
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 whitespace-nowrap"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Invio...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Iscriviti
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Status Messages */}
                        {status === 'success' && (
                            <div className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                                <p className="text-sm text-emerald-700 dark:text-emerald-300">
                                    <strong>Perfetto!</strong> Iscrizione completata. Controlla la tua email per confermare.
                                </p>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                                <p className="text-sm text-red-700 dark:text-red-300">
                                    Per favore inserisci un indirizzo email valido.
                                </p>
                            </div>
                        )}

                        {/* Privacy Note */}
                        <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                            Iscrivendoti accetti di ricevere comunicazioni da Tornese Foundation.
                            <br className="hidden md:block" />
                            Leggi la nostra{' '}
                            <a href="#" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                                Privacy Policy
                            </a>
                            . Puoi disiscriverti in qualsiasi momento.
                        </p>
                    </form>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    {[
                        {
                            icon: '🚀',
                            title: 'Aggiornamenti Esclusivi',
                            description: 'Novità e milestone del progetto in anteprima'
                        },
                        {
                            icon: '🎁',
                            title: 'Early Access',
                            description: 'Accesso prioritario a eventi e lanci beta'
                        },
                        {
                            icon: '📊',
                            title: 'Report Mensili',
                            description: 'Dati e metriche sull\'impatto ambientale'
                        }
                    ].map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all"
                        >
                            <div className="text-4xl mb-3">{benefit.icon}</div>
                            <h3 className="text-white font-bold mb-2">{benefit.title}</h3>
                            <p className="text-emerald-50 text-sm">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-12 text-center">
                    <p className="text-emerald-50 text-sm mb-4">
                        Unisciti a oltre <strong className="text-white">2,500+ innovatori</strong> che seguono Tornese Foundation
                    </p>
                    <div className="flex justify-center gap-2">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/40 flex items-center justify-center text-white font-bold text-sm"
                            >
                                {i === 4 ? '...' : '👤'}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;