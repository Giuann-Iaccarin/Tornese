import React, { useState } from 'react';
import { FileText, Download, Share2, BookOpen, ChevronRight, Eye } from 'lucide-react';

const Whitepaper = () => {
    const [activeSection, setActiveSection] = useState('abstract');

    const sections = [
        { id: 'abstract', title: 'Abstract' },
        { id: 'introduction', title: '1. Introduzione' },
        { id: 'problem', title: '2. Il Problema' },
        { id: 'solution', title: '3. La Soluzione Tornese' },
        { id: 'technology', title: '4. Architettura Tecnologica' },
        { id: 'token', title: '5. Token Economics' },
        { id: 'ecosystem', title: '6. Ecosistema & Partnership' },
        { id: 'roadmap', title: '7. Roadmap' },
        { id: 'team', title: '8. Team' },
        { id: 'conclusion', title: '9. Conclusioni' }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-linear-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <FileText className="w-12 h-12" />
                        <div>
                            <h1 className="text-4xl md:text-6xl font-black">
                                Whitepaper
                            </h1>
                            <p className="text-blue-100 text-lg">Tornese Foundation v1.0 - Novembre 2025</p>
                        </div>
                    </div>
                    <p className="text-2xl text-blue-100 max-w-4xl mt-6">
                        Blockchain-Powered Circular Economy: Incentivizing Urban Recycling Through Tokenized Rewards
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center gap-2">
                            <Download className="w-5 h-5" />
                            Scarica PDF
                        </button>
                        <button className="px-8 py-4 bg-blue-700 text-white rounded-xl font-bold border-2 border-white hover:bg-blue-800 transition-all flex items-center gap-2">
                            <Share2 className="w-5 h-5" />
                            Condividi
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Sidebar TOC */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <h3 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                                <BookOpen className="w-5 h-5" />
                                Indice
                            </h3>
                            <nav className="space-y-2">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => setActiveSection(section.id)}
                                        className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all flex items-center justify-between ${activeSection === section.id
                                                ? 'bg-blue-600 text-white font-bold'
                                                : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                    >
                                        {section.title}
                                        {activeSection === section.id && <ChevronRight className="w-4 h-4" />}
                                    </button>
                                ))}
                            </nav>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <p className="text-xs text-gray-500 mb-3">Quick Stats</p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Versione</span>
                                        <span className="font-bold">1.0</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Pagine</span>
                                        <span className="font-bold">32</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Lettura</span>
                                        <span className="font-bold">25 min</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-3">
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg prose prose-lg max-w-none">

                            {/* Abstract */}
                            <section id="abstract" className="mb-12">
                                <h2 className="text-3xl font-black text-gray-900 mb-6">Abstract</h2>
                                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl mb-6">
                                    <p className="text-gray-700 leading-relaxed">
                                        Tornese Foundation propone un ecosistema innovativo che unisce blockchain, Internet of Things (IoT)
                                        e gamification per incentivare il riciclo urbano attraverso ricompense tokenizzate. Il sistema si basa
                                        su una rete di colonnine intelligenti che premiano istantaneamente i cittadini con token TRN (Tornese Token),
                                        convertibili in benefici reali come carburante, trasporti pubblici e sconti presso partner convenzionati.
                                    </p>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Questo whitepaper descrive l'architettura tecnica, il modello economico, la governance e la roadmap di sviluppo
                                    di un progetto che mira a rivoluzionare la gestione dei rifiuti urbani, rendendola trasparente, tracciabile
                                    e economicamente vantaggiosa per tutti gli stakeholder.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                                    <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                                        <div className="text-2xl font-black text-blue-600">50+</div>
                                        <div className="text-xs text-gray-600">Colonnine Pilota</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                                        <div className="text-2xl font-black text-green-600">15t</div>
                                        <div className="text-xs text-gray-600">Materiale Riciclato</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                                        <div className="text-2xl font-black text-purple-600">5K+</div>
                                        <div className="text-xs text-gray-600">Utenti Attivi</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                                        <div className="text-2xl font-black text-orange-600">8K kg</div>
                                        <div className="text-xs text-gray-600">CO₂ Evitata</div>
                                    </div>
                                </div>
                            </section>

                            {/* 1. Introduction */}
                            <section id="introduction" className="mb-12">
                                <h2 className="text-3xl font-black text-gray-900 mb-6">1. Introduzione</h2>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">1.1 Background</h3>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    L'economia circolare è riconosciuta dall'Unione Europea come strategia chiave per la sostenibilità ambientale.
                                    Tuttavia, i tassi di riciclo in Italia rimangono sotto gli obiettivi UE: solo il 49% dei rifiuti urbani viene
                                    riciclato (dati Eurostat 2024), ben lontano dal target del 65% fissato per il 2035.
                                </p>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">1.2 Opportunità di Mercato</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Il mercato globale della gestione smart dei rifiuti è previsto crescere da $2.1B (2024) a $5.8B (2030),
                                    con un CAGR del 18.3% (fonte: MarketsandMarkets). La convergenza di blockchain, IoT e circular economy
                                    rappresenta un'opportunità unica per innovare un settore tradizionalmente statico.
                                </p>

                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-3">Mercato Totale Indirizzabile (TAM)</h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li><strong>SAM (Italia):</strong> €3.2B/anno gestione rifiuti urbani</li>
                                        <li><strong>SOM (Target 2027):</strong> 0.5% market share = €16M revenue potenziale</li>
                                        <li><strong>Espansione EU (2028-2030):</strong> TAM €45B, target 1% = €450M</li>
                                    </ul>
                                </div>
                            </section>

                            {/* 2. Problem */}
                            <section id="problem" className="mb-12">
                                <h2 className="text-3xl font-black text-gray-900 mb-6">2. Il Problema</h2>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">2.1 Sfide Attuali</h3>
                                <div className="space-y-6">
                                    <div className="border-l-4 border-red-500 pl-6">
                                        <h4 className="font-bold text-gray-900 mb-2">Scarso Engagement Cittadini</h4>
                                        <p className="text-gray-700">
                                            Il riciclo è percepito come un dovere senza benefici tangibili. Mancano incentivi economici diretti
                                            che motivino comportamenti virtuosi.
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-red-500 pl-6">
                                        <h4 className="font-bold text-gray-900 mb-2">Mancanza di Trasparenza</h4>
                                        <p className="text-gray-700">
                                            I cittadini non hanno visibilità su dove finiscono i loro rifiuti e sull'impatto ambientale reale
                                            del loro comportamento. Questo genera sfiducia nel sistema.
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-red-500 pl-6">
                                        <h4 className="font-bold text-gray-900 mb-2">Inefficienza Operativa</h4>
                                        <p className="text-gray-700">
                                            I sistemi tradizionali di raccolta differenziata sono costosi, con alto tasso di contaminazione
                                            (15-25%) che riduce la qualità del materiale riciclato e aumenta i costi di trattamento.
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-red-500 pl-6">
                                        <h4 className="font-bold text-gray-900 mb-2">Difficoltà di Misurazione</h4>
                                        <p className="text-gray-700">
                                            Impossibile tracciare con precisione il contributo individuale, rendendo difficile implementare
                                            politiche di incentivazione mirate e metriche ESG accurate.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-2xl mt-6">
                                    <p className="text-gray-700">
                                        <strong>Costo Opportunità:</strong> L'Italia perde annualmente €800M in materiali riciclabili non recuperati
                                        (fonte: Circular Economy Network 2024). Questo rappresenta sia una perdita economica che un danno ambientale evitabile.
                                    </p>
                                </div>
                            </section>

                            {/* 3. Solution */}
                            <section id="solution" className="mb-12">
                                <h2 className="text-3xl font-black text-gray-900 mb-6">3. La Soluzione Tornese</h2>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">3.1 Panoramica</h3>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Tornese Foundation crea un ecosistema integrato che combina:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                                        <div className="text-4xl mb-3">🤖</div>
                                        <h4 className="font-bold text-gray-900 mb-2">Colonnine IoT</h4>
                                        <p className="text-sm text-gray-700">Hardware intelligente con sensori AI per riconoscimento materiali</p>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                                        <div className="text-4xl mb-3">⛓️</div>
                                        <h4 className="font-bold text-gray-900 mb-2">Blockchain</h4>
                                        <p className="text-sm text-gray-700">Token TRN su Ethereum per trasparenza e tracciabilità</p>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                                        <div className="text-4xl mb-3">📱</div>
                                        <h4 className="font-bold text-gray-900 mb-2">App Mobile</h4>
                                        <p className="text-sm text-gray-700">Interfaccia user-friendly per gestire wallet e ricompense</p>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">3.2 Value Proposition</h3>

                                <h4 className="text-xl font-bold text-gray-900 mb-3">Per i Cittadini</h4>
                                <ul className="space-y-2 mb-6 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span><strong>Ricompense immediate:</strong> Token TRN istantanei dopo ogni conferimento</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span><strong>Benefici concreti:</strong> Conversione in carburante, trasporti, sconti</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span><strong>Trasparenza totale:</strong> Tracking on-chain dell'impatto ambientale personale</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span><strong>Gamification:</strong> Sfide, leaderboard, badge per aumentare engagement</span>
                                    </li>
                                </ul>

                                <h4 className="text-xl font-bold text-gray-900 mb-3">Per i Comuni</h4>
                                <ul className="space-y-2 mb-6 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span><strong>Riduzione costi:</strong> -30% costi raccolta grazie a minor contaminazione</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span><strong>Dati real-time:</strong> Dashboard analytics per ottimizzare logistica</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span><strong>Compliance ESG:</strong> Metriche certificate per reporting sostenibilità</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span><strong>Zero investimento:</strong> Modello revenue-sharing senza costi upfront</span>
                                    </li>
                                </ul>

                                <h4 className="text-xl font-bold text-gray-900 mb-3">Per le Aziende Partner</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span><strong>Brand positioning:</strong> Associazione con sostenibilità e innovazione</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span><strong>Customer acquisition:</strong> Accesso a community eco-consapevole</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span><strong>Data insights:</strong> Analytics comportamentali (anonimizzati) per marketing</span>
                                    </li>
                                </ul>
                            </section>

                            {/* 4. Technology */}
                            <section id="technology" className="mb-12">
                                <h2 className="text-3xl font-black text-gray-900 mb-6">4. Architettura Tecnologica</h2>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">4.1 Stack Tecnologico</h3>

                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-6">
                                    <h4 className="font-bold text-gray-900 mb-4">Layer 1: Hardware (Colonnine IoT)</h4>
                                    <ul className="space-y-2 text-gray-700 text-sm">
                                        <li><strong>Sensori:</strong> Fotocamere HD + Computer Vision per riconoscimento materiali</li>
                                        <li><strong>Pesatura:</strong> Celle di carico industriali (precisione ±5g)</li>
                                        <li><strong>Connettività:</strong> 4G/5G + WiFi fallback per comunicazione cloud</li>
                                        <li><strong>Sicurezza:</strong> Serrature elettroniche + anti-vandalo</li>
                                        <li><strong>Display:</strong> Touchscreen 10" per feedback utente</li>
                                        <li><strong>QR Scanner:</strong> Per autenticazione via app</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-6">
                                    <h4 className="font-bold text-gray-900 mb-4">Layer 2: Backend (Cloud Infrastructure)</h4>
                                    <ul className="space-y-2 text-gray-700 text-sm">
                                        <li><strong>Cloud Provider:</strong> AWS (scalabilità + affidabilità)</li>
                                        <li><strong>Database:</strong> PostgreSQL (dati strutturati) + MongoDB (logs)</li>
                                        <li><strong>AI/ML:</strong> TensorFlow per riconoscimento materiali (accuracy 97%+)</li>
                                        <li><strong>API:</strong> REST + GraphQL per integrazioni terze parti</li>
                                        <li><strong>Message Queue:</strong> RabbitMQ per gestione eventi real-time</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-6">
                                    <h4 className="font-bold text-gray-900 mb-4">Layer 3: Blockchain</h4>
                                    <ul className="space-y-2 text-gray-700 text-sm">
                                        <li><strong>Network:</strong> Ethereum (testnet: Sepolia, mainnet: Q4 2025)</li>
                                        <li><strong>Standard:</strong> ERC-20 per token TRN</li>
                                        <li><strong>Smart Contracts:</strong> Solidity 0.8+ (audited by CertiK & Hacken)</li>
                                        <li><strong>Wallet:</strong> HD Wallet (BIP-39/44 compatible)</li>
                                        <li><strong>Gas Optimization:</strong> Layer 2 (Polygon/Arbitrum) per ridurre costi</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4.2 Flusso Operativo</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                                        <div>
                                            <h5 className="font-bold text-gray-900">Autenticazione</h5>
                                            <p className="text-sm text-gray-700">Utente scansiona QR code colonnina con app → autenticazione via JWT</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                                        <div>
                                            <h5 className="font-bold text-gray-900">Conferimento</h5>
                                            <p className="text-sm text-gray-700">Sensori rilevano materiale (tipo + peso) → AI valida correttezza</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                                        <div>
                                            <h5 className="font-bold text-gray-900">Calcolo Reward</h5>
                                            <p className="text-sm text-gray-700">Backend calcola TRN da assegnare (formula: peso × fattore materiale × bonus qualità)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                                        <div>
                                            <h5 className="font-bold text-gray-900">Transazione Blockchain</h5>
                                            <p className="text-sm text-gray-700">Smart contract minta TRN e trasferisce a wallet utente (~ 10 sec su L2)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">5</div>
                                        <div>
                                            <h5 className="font-bold text-gray-900">Conferma</h5>
                                            <p className="text-sm text-gray-700">App mostra notifica push + aggiornamento saldo in tempo reale</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Continue with other sections... */}
                            <section id="token" className="mb-12">
                                <h2 className="text-3xl font-black text-gray-900 mb-6">5. Token Economics</h2>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Il token TRN è progettato come utility token per l'ecosistema Tornese. Non rappresenta una security
                                    né un investimento speculativo. Dettagli completi nella sezione Token del sito.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <div className="text-sm text-gray-600 mb-1">Total Supply</div>
                                        <div className="text-2xl font-black text-blue-600">100M TRN</div>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-xl">
                                        <div className="text-sm text-gray-600 mb-1">Ricompense Riciclo</div>
                                        <div className="text-2xl font-black text-green-600">40%</div>
                                    </div>
                                </div>
                            </section>

                            {/* Footer */}
                            <div className="mt-16 pt-8 border-t border-gray-200">
                                <div className="bg-linear-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-2xl text-center">
                                    <h3 className="text-2xl font-black mb-4">Vuoi Saperne di Più?</h3>
                                    <p className="text-blue-100 mb-6">Contattaci per ricevere il whitepaper completo (32 pagine) in formato PDF</p>
                                    <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl transition-all">
                                        Richiedi Whitepaper Completo
                                    </button>
                                </div>
                            </div>

                        </div>
                    </main>

                </div>
            </div>
        </div>
    );
};

export default Whitepaper;