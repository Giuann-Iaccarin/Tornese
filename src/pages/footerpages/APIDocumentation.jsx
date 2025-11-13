import React from 'react';
import { ArrowLeft, Code2, Server, Lock, Zap } from 'lucide-react';
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
        <div className="min-h-screen bg-linear-to-b from-slate-950 to-slate-900 text-white pt-24 pb-12">
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
                <p className="text-gray-400 mb-12">Documentazione completa delle API Tornese per gli sviluppatori</p>

                {/* Quick Info */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-slate-800 rounded-lg p-6 border border-blue-500/30">
                        <div className="flex items-center gap-3 mb-3">
                            <Server className="w-5 h-5 text-blue-400" />
                            <h3 className="font-bold">Base URL</h3>
                        </div>
                        <code className="text-gray-300 text-sm">https://api.tornesefoundation.org/v1</code>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-6 border border-green-500/30">
                        <div className="flex items-center gap-3 mb-3">
                            <Lock className="w-5 h-5 text-green-400" />
                            <h3 className="font-bold">Autenticazione</h3>
                        </div>
                        <code className="text-gray-300 text-sm">Bearer Token (JWT)</code>
                    </div>
                </div>

                {/* API Endpoints */}
                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Code2 className="w-6 h-6" />
                            Endpoint Disponibili
                        </h2>
                        <div className="space-y-4">
                            {endpoints.map((endpoint, index) => (
                                <div key={index} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`px-3 py-1 rounded text-xs font-bold ${endpoint.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                                                endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' :
                                                    'bg-orange-500/20 text-orange-400'
                                            }`}>
                                            {endpoint.method}
                                        </span>
                                        <code className="text-gray-300 font-mono text-sm">{endpoint.path}</code>
                                    </div>
                                    <p className="text-gray-400 text-sm ml-16">{endpoint.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Zap className="w-6 h-6" />
                            Guida Rapida
                        </h2>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h3 className="text-white font-bold mb-2">1. Ottieni un API Key</h3>
                                <p>Registrati sulla console sviluppatori e genera una nuova API key.</p>
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-2">2. Autentica le richieste</h3>
                                <p>Includi il token JWT nell'header Authorization di ogni richiesta.</p>
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-2">3. Fai le tue richieste</h3>
                                <p>Usa gli endpoint sopra elencati per interagire con la piattaforma.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Rate Limiting</h2>
                        <p className="text-gray-300">
                            Le API sono limitate a 1000 richieste per ora per API key. Se raggiungi il limite, riceverai una risposta 429 Too Many Requests.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Supporto Tecnico</h2>
                        <p className="text-gray-300 mb-4">
                            Per domande o problemi tecnici, contatta il nostro team di sviluppo:
                        </p>
                        <div className="space-y-2">
                            <p>Email: <a href="mailto:dev@tornesefoundation.org" className="text-blue-400 hover:text-blue-300">dev@tornesefoundation.org</a></p>
                            <p>Discord: <a href="#" className="text-blue-400 hover:text-blue-300">Community Server</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default APIDocumentation;
