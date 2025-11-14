import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const APIDocumentation = () => {
    const navigate = useNavigate();

    const endpoints = [
        {
            method: 'GET',
            path: '/api/v1/user/profile',
            description: 'Recupera il profilo utente'
        },
        {
            method: 'POST',
            path: '/api/v1/transactions',
            description: 'Crea una nuova transazione'
        },
        {
            method: 'GET',
            path: '/api/v1/balance',
            description: 'Ottieni il saldo del wallet'
        },
        {
            method: 'GET',
            path: '/api/v1/rewards',
            description: 'Recupera i reward guadagnati'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Torna alla Home
                </button>

                <h1 className="text-4xl font-black mb-2">API Developer</h1>
                <p className="text-gray-400 mb-8">Documentazione completa delle API Tornese per gli sviluppatori</p>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Base URL</h2>
                        <p className="bg-slate-800 p-4 rounded-lg border border-slate-700 font-mono text-sm">
                            https://api.tornesefoundation.org/v1
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Autenticazione</h2>
                        <p>
                            Tutte le richieste API devono includere un token JWT nel header Authorization. Formato:
                        </p>
                        <p className="bg-slate-800 p-4 rounded-lg border border-slate-700 font-mono text-sm mt-4">
                            Authorization: Bearer {'<token>'}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Endpoint Disponibili</h2>
                        <div className="space-y-3">
                            {endpoints.map((endpoint, index) => (
                                <div key={index} className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`px-3 py-1 rounded text-xs font-bold ${endpoint.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                                                'bg-green-500/20 text-green-400'
                                            }`}>
                                            {endpoint.method}
                                        </span>
                                        <code className="text-gray-300 font-mono text-sm">{endpoint.path}</code>
                                    </div>
                                    <p className="text-gray-400 text-sm">{endpoint.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Rate Limiting</h2>
                        <p>
                            Le API sono limitate a 1000 richieste per ora per API key. Se raggiungi il limite, riceverai una risposta 429 Too Many Requests con il tempo di attesa prima della prossima richiesta disponibile.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Guida Rapida</h2>
                        <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                            <li>Registrati sulla console sviluppatori</li>
                            <li>Genera una nuova API key</li>
                            <li>Includi il token JWT nell'header Authorization</li>
                            <li>Fai le tue richieste agli endpoint sopra elencati</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Codici di Stato HTTP</h2>
                        <div className="space-y-2">
                            <p><span className="font-bold">200</span> - Richiesta completata con successo</p>
                            <p><span className="font-bold">400</span> - Richiesta non valida</p>
                            <p><span className="font-bold">401</span> - Non autorizzato (token mancante o non valido)</p>
                            <p><span className="font-bold">429</span> - Limite di richieste superato</p>
                            <p><span className="font-bold">500</span> - Errore interno del server</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Supporto Tecnico</h2>
                        <p>
                            Per domande o problemi tecnici, contatta il nostro team di sviluppo:
                        </p>
                        <div className="mt-4 space-y-2">
                            <p>Email: <a href="mailto:dev@tornesefoundation.org" className="text-blue-400 hover:text-blue-300">dev@tornesefoundation.org</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default APIDocumentation;
