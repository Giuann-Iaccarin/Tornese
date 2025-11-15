import React, { useState } from 'react';
import { Code, Key, Zap, Shield, Book, Terminal, Copy, Check, ExternalLink } from 'lucide-react';

const APIDocumentation = () => {
    const [copiedCode, setCopiedCode] = useState(null);

    const copyCode = (code, id) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(id);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const endpoints = [
        {
            method: 'GET',
            path: '/api/v1/user/balance',
            description: 'Ottieni il saldo TRN di un utente',
            auth: true,
            params: [
                { name: 'wallet_address', type: 'string', required: true, description: 'Indirizzo wallet pubblico' }
            ]
        },
        {
            method: 'GET',
            path: '/api/v1/stations',
            description: 'Lista tutte le colonnine disponibili',
            auth: false,
            params: [
                { name: 'lat', type: 'float', required: false, description: 'Latitudine' },
                { name: 'lng', type: 'float', required: false, description: 'Longitudine' },
                { name: 'radius', type: 'integer', required: false, description: 'Raggio in km (default: 10)' }
            ]
        },
        {
            method: 'POST',
            path: '/api/v1/recycle',
            description: 'Registra un conferimento di materiale',
            auth: true,
            params: [
                { name: 'station_id', type: 'string', required: true, description: 'ID colonnina' },
                { name: 'material_type', type: 'string', required: true, description: 'plastic, aluminum, paper, glass' },
                { name: 'weight_kg', type: 'float', required: true, description: 'Peso in kg' }
            ]
        },
        {
            method: 'GET',
            path: '/api/v1/transactions',
            description: 'Storico transazioni utente',
            auth: true,
            params: [
                { name: 'wallet_address', type: 'string', required: true, description: 'Indirizzo wallet' },
                { name: 'limit', type: 'integer', required: false, description: 'Max risultati (default: 50)' },
                { name: 'offset', type: 'integer', required: false, description: 'Paginazione' }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Header */}
            <div className="bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 py-20 px-4 border-b border-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <Code className="w-12 h-12 text-blue-400" />
                        <h1 className="text-4xl md:text-5xl font-black">
                            API Developer
                        </h1>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mb-8">
                        Integra Tornese nella tua applicazione. API REST, SDK e webhook per creare esperienze innovative.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <div className="px-6 py-3 bg-blue-600 rounded-xl font-bold">
                            REST API v1.0
                        </div>
                        <div className="px-6 py-3 bg-gray-800 rounded-xl">
                            Base URL: <code className="text-blue-400">https://api.tornesefoundation.org</code>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">

                {/* Quick Start */}
                <section className="mb-16">
                    <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                        <Zap className="w-8 h-8 text-blue-400" />
                        Quick Start
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-2xl font-black">1</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Ottieni API Key</h3>
                            <p className="text-gray-400 text-sm mb-4">Registrati su developer.tornesefoundation.org</p>
                            <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center gap-1">
                                Richiedi Accesso <ExternalLink className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-2xl font-black">2</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Installa SDK</h3>
                            <p className="text-gray-400 text-sm mb-4">Disponibile per Node.js, Python, Go</p>
                            <code className="text-sm text-blue-400">npm install @tornese/sdk</code>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-2xl font-black">3</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Prima Chiamata</h3>
                            <p className="text-gray-400 text-sm mb-4">Testa l'API in 30 secondi</p>
                            <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                                Vedi Esempio →
                            </button>
                        </div>
                    </div>

                    {/* Code Example */}
                    <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
                        <div className="bg-gray-900 px-6 py-3 border-b border-gray-700 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Terminal className="w-4 h-4 text-gray-400" />
                                <span className="text-sm font-mono text-gray-400">example.js</span>
                            </div>
                            <button
                                onClick={() => copyCode(`import Tornese from '@tornese/sdk';

const tornese = new Tornese({
  apiKey: 'your_api_key_here'
});

// Ottieni saldo utente
const balance = await tornese.getBalance('0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb');
console.log(\`Saldo: \${balance.trn} TRN\`);

// Lista colonnine nelle vicinanze
const stations = await tornese.getStations({
  lat: 40.8518,
  lng: 14.2681,
  radius: 5
});
console.log(\`Trovate \${stations.length} colonnine\`);`, 'example')}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                {copiedCode === 'example' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                        </div>
                        <pre className="p-6 overflow-x-auto">
                            <code className="text-sm text-gray-300 font-mono">{`import Tornese from '@tornese/sdk';

const tornese = new Tornese({
  apiKey: 'your_api_key_here'
});

// Ottieni saldo utente
const balance = await tornese.getBalance('0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb');
console.log(\`Saldo: \${balance.trn} TRN\`);

// Lista colonnine nelle vicinanze
const stations = await tornese.getStations({
  lat: 40.8518,
  lng: 14.2681,
  radius: 5
});
console.log(\`Trovate \${stations.length} colonnine\`);`}</code>
                        </pre>
                    </div>
                </section>

                {/* Authentication */}
                <section className="mb-16">
                    <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                        <Key className="w-8 h-8 text-blue-400" />
                        Autenticazione
                    </h2>

                    <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                        <p className="text-gray-300 mb-6">
                            Tutte le richieste API richiedono una chiave API valida inviata nell'header <code className="text-blue-400 bg-gray-900 px-2 py-1 rounded">Authorization</code>.
                        </p>

                        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                            <p className="text-sm text-gray-400 mb-2">Esempio Header:</p>
                            <pre className="text-blue-400 font-mono text-sm">
                                {`Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}
                            </pre>
                        </div>

                        <div className="mt-6 bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-xl">
                            <p className="text-yellow-200 text-sm">
                                <strong>⚠️ Sicurezza:</strong> Non esporre mai la tua API key in codice client-side. Usa sempre server-side o variabili d'ambiente.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Endpoints */}
                <section className="mb-16">
                    <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                        <Book className="w-8 h-8 text-blue-400" />
                        Endpoints
                    </h2>

                    <div className="space-y-6">
                        {endpoints.map((endpoint, index) => (
                            <div key={index} className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
                                <div className="bg-gray-900 px-6 py-4 flex items-center justify-between border-b border-gray-700">
                                    <div className="flex items-center gap-4">
                                        <span className={`px-3 py-1 rounded-lg font-bold text-sm ${endpoint.method === 'GET' ? 'bg-blue-600' :
                                                endpoint.method === 'POST' ? 'bg-green-600' :
                                                    'bg-yellow-600'
                                            }`}>
                                            {endpoint.method}
                                        </span>
                                        <code className="text-blue-400 font-mono">{endpoint.path}</code>
                                    </div>
                                    {endpoint.auth && (
                                        <div className="flex items-center gap-2 text-yellow-400 text-sm">
                                            <Shield className="w-4 h-4" />
                                            <span>Auth Required</span>
                                        </div>
                                    )}
                                </div>

                                <div className="p-6">
                                    <p className="text-gray-300 mb-6">{endpoint.description}</p>

                                    <h4 className="text-lg font-bold mb-4">Parametri</h4>
                                    <div className="space-y-3">
                                        {endpoint.params.map((param, i) => (
                                            <div key={i} className="bg-gray-900 p-4 rounded-xl border border-gray-700">
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <code className="text-blue-400 font-mono text-sm">{param.name}</code>
                                                        <span className="text-xs text-gray-500">{param.type}</span>
                                                        {param.required && (
                                                            <span className="text-xs bg-red-900/50 text-red-300 px-2 py-0.5 rounded">required</span>
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-400">{param.description}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="text-lg font-bold mb-3">Response Example</h4>
                                        <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                                            <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                                                {`{
  "success": true,
  "data": {
    // Response data here
  }
}`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Rate Limits */}
                <section className="mb-16">
                    <h2 className="text-3xl font-black mb-6">Rate Limits</h2>
                    <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-black text-blue-400 mb-2">1000</div>
                                <p className="text-gray-400">Richieste/ora (Free)</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-black text-blue-400 mb-2">10,000</div>
                                <p className="text-gray-400">Richieste/ora (Pro)</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-black text-blue-400 mb-2">∞</div>
                                <p className="text-gray-400">Richieste (Enterprise)</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support */}
                <section>
                    <div className="bg-linear-to-r from-blue-600 to-cyan-600 p-8 md:p-12 rounded-3xl text-center">
                        <h2 className="text-3xl font-black mb-4">Serve Aiuto?</h2>
                        <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                            Il nostro team di sviluppatori è disponibile per supportarti nell'integrazione
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:developers@tornesefoundation.org"
                                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl transition-all"
                            >
                                Contatta il Team
                            </a>
                            <a
                                href="https://discord.gg/tornese"
                                className="px-8 py-4 bg-blue-700 text-white rounded-xl font-bold border-2 border-white hover:bg-blue-800 transition-all"
                            >
                                Join Discord
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default APIDocumentation;