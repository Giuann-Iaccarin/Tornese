import React, { useState } from 'react';
import { Download, Image, FileText, Video, Mail, ExternalLink, Copy, Check, Newspaper, Users, Calendar } from 'lucide-react';

const PressKit = () => {
    const [copiedText, setCopiedText] = useState(null);

    const copyToClipboard = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedText(id);
        setTimeout(() => setCopiedText(null), 2000);
    };

    const logos = [
        { name: 'Logo Principale (PNG)', size: '2048x2048', format: 'PNG', file: 'tornese-logo-main.png' },
        { name: 'Logo White (PNG)', size: '2048x2048', format: 'PNG', file: 'tornese-logo-white.png' },
        { name: 'Logo Black (PNG)', size: '2048x2048', format: 'PNG', file: 'tornese-logo-black.png' },
        { name: 'Logo Horizontal', size: '3000x1000', format: 'PNG', file: 'tornese-logo-horizontal.png' },
        { name: 'Logo Icona', size: '512x512', format: 'SVG', file: 'tornese-icon.svg' }
    ];

    const images = [
        { name: 'Colonnina Smart - Esterno', desc: 'Vista frontale colonnina Tornese', format: 'JPG', size: '4K' },
        { name: 'Colonnina Smart - Interno', desc: 'Dettaglio sensori e tecnologia', format: 'JPG', size: '4K' },
        { name: 'App Mobile - Screenshot', desc: 'Interfaccia app iOS/Android', format: 'PNG', size: '1080x1920' },
        { name: 'Team Photo', desc: 'Foto ufficiale founder', format: 'JPG', size: '4K' },
        { name: 'Installazione Napoli', desc: 'Prima colonnina a Napoli', format: 'JPG', size: '4K' },
        { name: 'Utenti Conferimento', desc: 'Cittadini che usano le colonnine', format: 'JPG', size: '4K' }
    ];

    const documents = [
        { name: 'Press Release - Start Cup', date: '15 Marzo 2025', format: 'PDF', lang: 'IT/EN' },
        { name: 'Fact Sheet', date: 'Novembre 2025', format: 'PDF', lang: 'IT/EN' },
        { name: 'Whitepaper', date: 'Novembre 2025', format: 'PDF', lang: 'IT/EN' },
        { name: 'Company Profile', date: 'Novembre 2025', format: 'PDF', lang: 'IT' },
        { name: 'ESG Impact Report Q1-Q2 2025', date: 'Agosto 2025', format: 'PDF', lang: 'IT' }
    ];

    const boilerplate = {
        short: `Tornese Foundation è una startup napoletana che sta rivoluzionando il riciclo urbano attraverso blockchain e IoT. La nostra rete di colonnine intelligenti premia i cittadini con token TRN ogni volta che riciclano, creando un ecosistema di economia circolare sostenibile e trasparente.`,

        long: `Tornese Foundation S.r.l. è una startup innovativa fondata a Napoli nel 2024 che unisce blockchain, Internet of Things e gamification per incentivare il riciclo urbano. Il sistema si basa su una rete di colonnine intelligenti che riconoscono automaticamente i materiali conferiti (plastica, alluminio, carta, vetro) e premiano istantaneamente gli utenti con token TRN (Tornese Token), una criptovaluta convertibile in benefici reali come carburante, trasporti pubblici e sconti presso partner convenzionati.

La tecnologia proprietaria include sensori AI per il riconoscimento materiali (accuracy 97%+), pesatura di precisione e integrazione blockchain su Ethereum per garantire trasparenza totale. Con oltre 50 colonnine installate in fase pilota e 5.000+ utenti attivi, Tornese ha già permesso il riciclo di 15 tonnellate di materiale, evitando 8.000 kg di CO₂.

Fondata da Angelo Sarvonio (CEO), Emmanuel Marigliano (COO) e Giovanni Celeste Iaccarino (CTO), Tornese Foundation ha vinto la Start Cup Campania 2025 e collabora con il Comune di Napoli per l'espansione del progetto. L'obiettivo è raggiungere 10 città italiane entro il 2027 e diventare il punto di riferimento europeo per la sostenibilità urbana basata su blockchain entro il 2030.`
    };

    const keyFacts = [
        { label: 'Fondazione', value: '2024' },
        { label: 'Sede', value: 'Napoli, Italia' },
        { label: 'Settore', value: 'GreenTech, Blockchain, Circular Economy' },
        { label: 'Finanziamenti', value: '€500K Seed (2024)' },
        { label: 'Team', value: '8 persone' },
        { label: 'Colonnine Attive', value: '50+ (pilota Napoli)' },
        { label: 'Utenti', value: '5.000+ attivi' },
        { label: 'Materiale Riciclato', value: '15 tonnellate' },
        { label: 'CO₂ Evitata', value: '8.000 kg' },
        { label: 'Premi', value: 'Start Cup Campania 2025 (1° premio)' }
    ];

    const contacts = [
        {
            name: 'Maria Rossi',
            role: 'Public Relations Manager',
            email: 'press@tornesefoundation.org',
            phone: '+39 081 123 4567',
            linkedin: 'linkedin.com/in/maria-rossi-tornese'
        },
        {
            name: 'Angelo Sarvonio',
            role: 'CEO & Co-founder',
            email: 'angelo@tornesefoundation.org',
            phone: '+39 333 123 4567',
            linkedin: 'linkedin.com/in/angelosarvonio'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="bg-linear-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <Newspaper className="w-12 h-12" />
                        <h1 className="text-4xl md:text-6xl font-black">
                            Press Kit
                        </h1>
                    </div>
                    <p className="text-2xl text-blue-100 max-w-4xl mb-8">
                        Risorse complete per giornalisti, media e partner: loghi, immagini, documenti ufficiali e contatti stampa.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center gap-2">
                            <Download className="w-5 h-5" />
                            Scarica Press Kit Completo (ZIP)
                        </button>
                        <a
                            href="mailto:press@tornesefoundation.org"
                            className="px-8 py-4 bg-blue-700 text-white rounded-xl font-bold border-2 border-white hover:bg-blue-800 transition-all flex items-center gap-2"
                        >
                            <Mail className="w-5 h-5" />
                            Contatta Ufficio Stampa
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">

                {/* Quick Facts */}
                <section className="mb-16">
                    <h2 className="text-3xl font-black text-gray-900 mb-8">📊 Dati Chiave</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {keyFacts.map((fact, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <div className="text-sm text-gray-600 mb-1">{fact.label}</div>
                                <div className="font-bold text-gray-900">{fact.value}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Company Description */}
                <section className="mb-16">
                    <h2 className="text-3xl font-black text-gray-900 mb-8">📝 Descrizione Azienda</h2>

                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900">Boilerplate Breve (100 parole)</h3>
                                <button
                                    onClick={() => copyToClipboard(boilerplate.short, 'short')}
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                                >
                                    {copiedText === 'short' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                    {copiedText === 'short' ? 'Copiato!' : 'Copia'}
                                </button>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                {boilerplate.short}
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900">Boilerplate Esteso (250 parole)</h3>
                                <button
                                    onClick={() => copyToClipboard(boilerplate.long, 'long')}
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                                >
                                    {copiedText === 'long' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                    {copiedText === 'long' ? 'Copiato!' : 'Copia'}
                                </button>
                            </div>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {boilerplate.long}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Logos */}
                <section className="mb-16">
                    <h2 className="text-3xl font-black text-gray-900 mb-8">🎨 Loghi</h2>
                    <p className="text-gray-600 mb-6">
                        I loghi sono disponibili in formato vettoriale (SVG) e raster (PNG) ad alta risoluzione.
                        Non modificare i colori o le proporzioni senza autorizzazione.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {logos.map((logo, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                                <div className="aspect-square bg-linear-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center mb-4">
                                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-3xl font-black">T</span>
                                    </div>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{logo.name}</h3>
                                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                                    <span>{logo.size}</span>
                                    <span className="px-2 py-1 bg-gray-100 rounded font-mono text-xs">{logo.format}</span>
                                </div>
                                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                                    <Download className="w-4 h-4" />
                                    Scarica
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl">
                        <h4 className="font-bold text-gray-900 mb-2">📐 Linee Guida Logo</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Mantieni uno spazio minimo attorno al logo pari al 25% della sua altezza</li>
                            <li>• Non usare il logo su sfondi con contrasto insufficiente</li>
                            <li>• Colore primario: #0073E6 (RGB: 0, 115, 230)</li>
                            <li>• Per sfondi scuri usa la versione bianca, per sfondi chiari usa quella blu</li>
                        </ul>
                    </div>
                </section>

                {/* Images */}
                <section className="mb-16">
                    <h2 className="text-3xl font-black text-gray-900 mb-8">📸 Immagini & Foto</h2>
                    <p className="text-gray-600 mb-6">
                        Immagini ad alta risoluzione per articoli, presentazioni e materiale promozionale.
                        Crediti fotografici: © Tornese Foundation 2025.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((img, index) => (
                            <div key={index} className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all">
                                <div className="aspect-video bg-linear-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                                    <Image className="w-16 h-16 text-blue-600" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-900 mb-1">{img.name}</h3>
                                    <p className="text-sm text-gray-600 mb-3">{img.desc}</p>
                                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                                        <span>{img.format}</span>
                                        <span>{img.size}</span>
                                    </div>
                                    <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                        <Download className="w-4 h-4" />
                                        Scarica HD
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Documents */}
                <section className="mb-16">
                    <h2 className="text-3xl font-black text-gray-900 mb-8">📄 Documenti Ufficiali</h2>

                    <div className="space-y-4">
                        {documents.map((doc, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                            <FileText className="w-6 h-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">{doc.name}</h3>
                                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {doc.date}
                                                </span>
                                                <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-mono">{doc.format}</span>
                                                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-semibold">{doc.lang}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                                        <Download className="w-4 h-4" />
                                        Scarica
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Video */}
                <section className="mb-16">
                    <h2 className="text-3xl font-black text-gray-900 mb-8">🎥 Video & Media</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                            <div className="aspect-video bg-linear-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                    <Video className="w-8 h-8 text-blue-600" />
                                </div>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Presentazione Tornese (2 min)</h3>
                            <p className="text-sm text-gray-600 mb-4">Video istituzionale che spiega il funzionamento del sistema</p>
                            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                Guarda su YouTube
                            </button>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                            <div className="aspect-video bg-linear-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                    <Video className="w-8 h-8 text-blue-600" />
                                </div>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Demo Colonnina Smart (1 min)</h3>
                            <p className="text-sm text-gray-600 mb-4">Tutorial su come utilizzare le colonnine Tornese</p>
                            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                Guarda su YouTube
                            </button>
                        </div>
                    </div>
                </section>

                {/* Press Contacts */}
                <section className="mb-16">
                    <h2 className="text-3xl font-black text-gray-900 mb-8">📞 Contatti Stampa</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {contacts.map((contact, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Users className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{contact.name}</h3>
                                        <p className="text-sm text-blue-600 font-semibold">{contact.role}</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-gray-400" />
                                        <a href={`mailto:${contact.email}`} className="text-sm text-blue-600 hover:underline">
                                            {contact.email}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-gray-400" />
                                        <a href={`tel:${contact.phone}`} className="text-sm text-gray-700">
                                            {contact.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ExternalLink className="w-4 h-4 text-gray-400" />
                                        <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-linear-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-black mb-4">Richiedi un'Intervista</h3>
                        <p className="text-blue-100 mb-6">
                            Siamo disponibili per interviste, podcast e partecipazioni a eventi.
                            Tempo di risposta: entro 24 ore lavorative.
                        </p>
                        <a
                            href="mailto:press@tornesefoundation.org"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl transition-all"
                        >
                            <Mail className="w-5 h-5" />
                            Contattaci
                        </a>
                    </div>
                </section>

                {/* Social Media */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">🌐 Social Media</h2>

                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <a href="https://linkedin.com/company/tornese-foundation" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">in</span>
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">LinkedIn</div>
                                    <div className="text-sm text-gray-600">@tornese-foundation</div>
                                </div>
                            </a>

                            <a href="https://instagram.com/tornesefoundation" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">IG</span>
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Instagram</div>
                                    <div className="text-sm text-gray-600">@tornesefoundation</div>
                                </div>
                            </a>

                            <a href="https://twitter.com/tornesefnd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">X</span>
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Twitter/X</div>
                                    <div className="text-sm text-gray-600">@tornesefnd</div>
                                </div>
                            </a>

                            <a href="https://t.me/tornesefoundation" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">TG</span>
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Telegram</div>
                                    <div className="text-sm text-gray-600">@tornesefoundation</div>
                                </div>
                            </a>
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Hashtag ufficiali: <span className="font-mono text-blue-600">#TorneseFoundation #GreenTech #CircularEconomy #BlockchainForGood</span>
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default PressKit;