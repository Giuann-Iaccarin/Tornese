import React, { useState } from 'react';
import { Cookie, Shield, BarChart, Target, Settings, CheckCircle } from 'lucide-react';

const CookiePolicy = () => {
    const [activeTab, setActiveTab] = useState('tecnici');

    const cookieTypes = {
        tecnici: {
            icon: Shield,
            title: 'Cookie Tecnici',
            color: 'blue',
            description: 'Essenziali per il funzionamento del sito',
            cookies: [
                {
                    name: 'tornese_session',
                    purpose: 'Mantiene la sessione utente attiva',
                    duration: 'Sessione (fino alla chiusura del browser)',
                    provider: 'Tornese Foundation',
                    necessary: true
                },
                {
                    name: 'tornese_consent',
                    purpose: 'Memorizza le preferenze sui cookie',
                    duration: '12 mesi',
                    provider: 'Tornese Foundation',
                    necessary: true
                },
                {
                    name: 'tornese_lang',
                    purpose: 'Memorizza la lingua preferita',
                    duration: '12 mesi',
                    provider: 'Tornese Foundation',
                    necessary: true
                }
            ]
        },
        analytics: {
            icon: BarChart,
            title: 'Cookie Analitici',
            color: 'green',
            description: 'Ci aiutano a capire come migliorare il sito',
            cookies: [
                {
                    name: '_ga',
                    purpose: 'Distingue gli utenti unici (Google Analytics)',
                    duration: '2 anni',
                    provider: 'Google LLC',
                    necessary: false
                },
                {
                    name: '_gid',
                    purpose: 'Distingue gli utenti unici (Google Analytics)',
                    duration: '24 ore',
                    provider: 'Google LLC',
                    necessary: false
                },
                {
                    name: '_gat',
                    purpose: 'Limita le richieste (Google Analytics)',
                    duration: '1 minuto',
                    provider: 'Google LLC',
                    necessary: false
                }
            ]
        },
        marketing: {
            icon: Target,
            title: 'Cookie di Marketing',
            color: 'purple',
            description: 'Personalizzano gli annunci pubblicitari',
            cookies: [
                {
                    name: 'fr',
                    purpose: 'Tracciamento pubblicitario (Facebook Pixel)',
                    duration: '3 mesi',
                    provider: 'Meta Platforms Inc.',
                    necessary: false
                },
                {
                    name: '_fbp',
                    purpose: 'Tracciamento conversioni Facebook',
                    duration: '3 mesi',
                    provider: 'Meta Platforms Inc.',
                    necessary: false
                }
            ]
        }
    };

    const currentCookies = cookieTypes[activeTab];

    return (
        <div className="min-h-screen bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-6">
                        <Cookie className="w-8 h-8 text-orange-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Cookie Policy
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Informazioni dettagliate sui cookie utilizzati dal sito Tornese Foundation e su come gestire le tue preferenze
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        Ultimo aggiornamento: 13 Novembre 2025
                    </p>
                </div>

                {/* Cosa sono i Cookie */}
                <section className="mb-12">
                    <div className="bg-linear-to-br from-orange-50 to-amber-50 p-8 rounded-3xl border border-orange-100">
                        <h2 className="text-2xl font-black text-gray-900 mb-4">
                            🍪 Cosa Sono i Cookie?
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web.
                            Servono a migliorare l'esperienza di navigazione, ricordare le tue preferenze e raccogliere informazioni
                            statistiche anonime.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Utilizziamo cookie sia di prima parte (gestiti direttamente da noi) sia di terze parti (gestiti da partner
                            come Google Analytics o Facebook).
                        </p>
                    </div>
                </section>

                {/* Tipologie di Cookie - Tabs */}
                <section className="mb-12">
                    <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
                        Tipologie di Cookie Utilizzati
                    </h2>

                    {/* Tab Navigation */}
                    <div className="flex flex-wrap gap-4 mb-8 justify-center">
                        {Object.entries(cookieTypes).map(([key, type]) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === key
                                        ? `bg-${type.color}-600 text-white shadow-lg`
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                <type.icon className="w-5 h-5" />
                                {type.title}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`w-12 h-12 bg-${currentCookies.color}-100 rounded-xl flex items-center justify-center`}>
                                <currentCookies.icon className={`w-6 h-6 text-${currentCookies.color}-600`} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-gray-900">
                                    {currentCookies.title}
                                </h3>
                                <p className="text-gray-600">{currentCookies.description}</p>
                            </div>
                        </div>

                        {/* Cookie Table */}
                        <div className="space-y-4">
                            {currentCookies.cookies.map((cookie, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-all border border-gray-200"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <code className="text-sm text-gray-700 font-mono bg-white px-3 py-1 rounded-lg border border-gray-200">
                                                    {cookie.name}
                                                </code>
                                                {cookie.necessary && (
                                                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                                                        NECESSARIO
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-gray-700 mb-2"><strong>Finalità:</strong> {cookie.purpose}</p>
                                            <p className="text-gray-600 text-sm"><strong>Fornitore:</strong> {cookie.provider}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-gray-500 font-semibold">Durata</p>
                                            <p className="text-gray-700">{cookie.duration}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Come Gestire i Cookie */}
                <section className="mb-12">
                    <div className="bg-linear-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Settings className="w-8 h-8" />
                            <h2 className="text-2xl font-black m-0">
                                Come Gestire le Tue Preferenze
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-3">1. Tramite il Banner Cookie</h3>
                                <p className="text-blue-50 leading-relaxed">
                                    Quando visiti il nostro sito per la prima volta, ti viene mostrato un banner dove puoi accettare o rifiutare
                                    i cookie non necessari. Puoi modificare le tue preferenze in qualsiasi momento tramite il pulsante
                                    "Impostazioni Cookie" nel footer del sito.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3">2. Tramite le Impostazioni del Browser</h3>
                                <p className="text-blue-50 leading-relaxed mb-4">
                                    Puoi gestire i cookie direttamente dalle impostazioni del tuo browser:
                                </p>
                                <ul className="space-y-2 text-blue-50">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span><strong>Firefox:</strong> Opzioni → Privacy e sicurezza → Cookie e dati</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span><strong>Safari:</strong> Preferenze → Privacy → Gestisci dati siti web</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                                        <span><strong>Edge:</strong> Impostazioni → Cookie e autorizzazioni sito</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                <p className="text-sm text-blue-100">
                                    ⚠️ <strong>Nota:</strong> Disabilitare i cookie tecnici potrebbe compromettere alcune funzionalità del sito,
                                    come il login o il salvataggio delle preferenze.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cookie di Terze Parti */}
                <section className="mb-12">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">
                        Cookie di Terze Parti
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Google Analytics</h3>
                            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                                Utilizziamo Google Analytics per analizzare il traffico del sito e migliorare l'esperienza utente.
                                I dati raccolti sono anonimi e aggregati.
                            </p>
                            <a
                                href="https://policies.google.com/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline text-sm font-semibold"
                            >
                                Privacy Policy di Google →
                            </a>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Facebook Pixel</h3>
                            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                                Utilizziamo Facebook Pixel per ottimizzare le campagne pubblicitarie e mostrare annunci pertinenti
                                agli utenti interessati al nostro progetto.
                            </p>
                            <a
                                href="https://www.facebook.com/privacy/policy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline text-sm font-semibold"
                            >
                                Privacy Policy di Meta →
                            </a>
                        </div>
                    </div>
                </section>

                {/* Aggiornamenti */}
                <section className="mb-12">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                        <h2 className="text-2xl font-black text-gray-900 mb-4">
                            Aggiornamenti a Questa Policy
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Ci riserviamo il diritto di aggiornare questa Cookie Policy in qualsiasi momento. Le modifiche saranno
                            pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a consultare
                            periodicamente questa pagina per rimanere informato.
                        </p>
                    </div>
                </section>

                {/* Contatti */}
                <section>
                    <div className="bg-linear-to-br from-gray-900 to-gray-800 text-white p-8 rounded-3xl">
                        <h2 className="text-2xl font-black mb-4">
                            Hai Domande?
                        </h2>
                        <p className="text-gray-300 mb-4">
                            Per qualsiasi domanda riguardo ai cookie o alla gestione della privacy:
                        </p>
                        <div className="space-y-2 text-gray-200">
                            <p><strong>Email:</strong> <a href="mailto:privacy@tornesefoundation.org" className="text-blue-400 hover:underline">privacy@tornesefoundation.org</a></p>
                            <p><strong>Indirizzo:</strong> Via Toledo, 256 - 80132 Napoli, Italia</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default CookiePolicy;