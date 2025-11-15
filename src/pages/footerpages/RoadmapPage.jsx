import React, { useState } from 'react';
import { Calendar, CheckCircle, Circle, Target, Rocket, Globe, TrendingUp, Users, Zap } from 'lucide-react';

const RoadmapPage = () => {
    const [activeYear, setActiveYear] = useState('2025');

    const roadmapData = {
        '2025': {
            quarters: [
                {
                    quarter: 'Q1 2025',
                    status: 'completed',
                    title: 'Fondazione & MVP',
                    milestones: [
                        { text: 'Costituzione Tornese Foundation S.r.l.', completed: true },
                        { text: 'Seed funding €500K da angel investors', completed: true },
                        { text: 'Primo prototipo colonnina intelligente', completed: true },
                        { text: 'Testnet launch token TRN su Sepolia', completed: true },
                        { text: 'Team di 8 persone assemblato', completed: true }
                    ]
                },
                {
                    quarter: 'Q2 2025',
                    status: 'in-progress',
                    title: 'Pilota Napoli',
                    milestones: [
                        { text: 'Partnership con Comune di Napoli', completed: true },
                        { text: 'Installazione 50 colonnine pilota', completed: true },
                        { text: 'App mobile beta (iOS + Android)', completed: true },
                        { text: 'Onboarding primi 1000 utenti', completed: false },
                        { text: 'Audit smart contract (CertiK)', completed: false }
                    ]
                },
                {
                    quarter: 'Q3 2025',
                    status: 'in-progress',
                    title: 'Validazione & Crescita',
                    milestones: [
                        { text: 'Raggiungere 5000 utenti attivi', completed: false },
                        { text: '20 tonnellate di materiale riciclato', completed: false },
                        { text: 'Partnership con 3 aziende di trasporto', completed: false },
                        { text: 'Espansione a 100 colonnine Campania', completed: false },
                        { text: 'Serie A funding round (€2M target)', completed: false }
                    ]
                },
                {
                    quarter: 'Q4 2025',
                    status: 'planned',
                    title: 'Pre-Mainnet',
                    milestones: [
                        { text: 'Audit sicurezza completo (Hacken)', completed: false },
                        { text: 'Beta testing mainnet migration', completed: false },
                        { text: 'Documentazione API per sviluppatori', completed: false },
                        { text: 'Partnership con 10 brand retail', completed: false },
                        { text: 'Community di 10K+ utenti', completed: false }
                    ]
                }
            ]
        },
        '2026': {
            quarters: [
                {
                    quarter: 'Q1 2026',
                    status: 'planned',
                    title: 'Mainnet Launch',
                    milestones: [
                        { text: 'TRN su Ethereum mainnet', completed: false },
                        { text: 'Listing su primi 2 exchange (DEX)', completed: false },
                        { text: '200+ colonnine operative in Campania', completed: false },
                        { text: 'Espansione team a 20 persone', completed: false },
                        { text: 'Certificazione ESG riconosciuta', completed: false }
                    ]
                },
                {
                    quarter: 'Q2 2026',
                    status: 'planned',
                    title: 'Espansione Regionale',
                    milestones: [
                        { text: 'Lancio in Lazio (Roma)', completed: false },
                        { text: 'Lancio in Lombardia (Milano)', completed: false },
                        { text: '500+ colonnine totali', completed: false },
                        { text: 'Governance DAO attivata', completed: false },
                        { text: '50K utenti attivi', completed: false }
                    ]
                },
                {
                    quarter: 'Q3 2026',
                    status: 'planned',
                    title: 'Scale Nazionale',
                    milestones: [
                        { text: 'Presenza in 10 città italiane', completed: false },
                        { text: '1000+ colonnine attive', completed: false },
                        { text: 'Listing su exchange centralizzati', completed: false },
                        { text: 'Staking program lanciato', completed: false },
                        { text: '100K utenti milestone', completed: false }
                    ]
                },
                {
                    quarter: 'Q4 2026',
                    status: 'planned',
                    title: 'Consolidamento',
                    milestones: [
                        { text: 'Serie B funding (€10M)', completed: false },
                        { text: 'Partnership con catene GDO', completed: false },
                        { text: '100+ tonnellate riciclate/mese', completed: false },
                        { text: 'API pubbliche per terze parti', completed: false },
                        { text: 'Premio innovazione italiana', completed: false }
                    ]
                }
            ]
        },
        '2027-2030': {
            quarters: [
                {
                    quarter: '2027',
                    status: 'planned',
                    title: 'Internazionalizzazione',
                    milestones: [
                        { text: 'Espansione in 3 paesi EU (Francia, Spagna, Germania)', completed: false },
                        { text: '5000+ colonnine network europeo', completed: false },
                        { text: '500K utenti attivi', completed: false },
                        { text: 'Carbon credits tokenizzati', completed: false },
                        { text: 'Partnership con UN SDG', completed: false }
                    ]
                },
                {
                    quarter: '2028-2030',
                    status: 'planned',
                    title: 'Leader Europeo',
                    milestones: [
                        { text: 'Presenza in 10 paesi europei', completed: false },
                        { text: '10,000+ colonnine distribuite', completed: false },
                        { text: '1M+ utenti community globale', completed: false },
                        { text: 'Layer 2 proprietario lanciato', completed: false },
                        { text: 'IPO o acquisizione strategica', completed: false }
                    ]
                }
            ]
        }
    };

    const years = Object.keys(roadmapData);
    const currentRoadmap = roadmapData[activeYear];

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed': return 'from-green-500 to-emerald-500';
            case 'in-progress': return 'from-blue-500 to-cyan-500';
            default: return 'from-gray-400 to-gray-500';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed': return CheckCircle;
            case 'in-progress': return Zap;
            default: return Circle;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-linear-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-24 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 border border-white/30">
                        <Rocket className="w-8 h-8" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6">
                        Roadmap 2025-2030
                    </h1>
                    <p className="text-2xl text-blue-100 max-w-4xl mx-auto">
                        Il nostro percorso verso un'Europa più sostenibile, milestone dopo milestone
                    </p>
                </div>
            </section>

            {/* Stats Overview */}
            <section className="py-12 px-4 bg-gray-50 border-b border-gray-200">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-4xl font-black text-green-600 mb-2">✓ 8</div>
                            <p className="text-gray-600 text-sm">Milestone Completate</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-black text-blue-600 mb-2">→ 7</div>
                            <p className="text-gray-600 text-sm">In Corso</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-black text-gray-600 mb-2">○ 35</div>
                            <p className="text-gray-600 text-sm">Pianificate</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-black text-purple-600 mb-2">16%</div>
                            <p className="text-gray-600 text-sm">Completamento</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Year Selector */}
            <section className="py-12 px-4 sticky top-0 bg-white z-40 border-b border-gray-200">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-center gap-4">
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setActiveYear(year)}
                                className={`px-8 py-4 rounded-xl font-black text-lg transition-all ${activeYear === year
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Roadmap Timeline */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-16">
                        {currentRoadmap.quarters.map((quarter, index) => {
                            const StatusIcon = getStatusIcon(quarter.status);

                            return (
                                <div key={index} className="relative">
                                    {/* Timeline Line */}
                                    {index < currentRoadmap.quarters.length - 1 && (
                                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-24 w-1 h-full bg-gray-200 -z-10" />
                                    )}

                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        {/* Left: Quarter Info */}
                                        <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                                            <div className="inline-block">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className={`px-4 py-2 bg-linear-to-r ${getStatusColor(quarter.status)} text-white rounded-xl font-bold text-sm shadow-lg`}>
                                                        {quarter.status === 'completed' ? '✓ Completato' :
                                                            quarter.status === 'in-progress' ? '→ In Corso' : '○ Pianificato'}
                                                    </span>
                                                </div>
                                                <h3 className="text-3xl font-black text-gray-900 mb-2">
                                                    {quarter.title}
                                                </h3>
                                                <p className="text-xl font-bold text-blue-600">
                                                    {quarter.quarter}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Center: Icon */}
                                        <div className="hidden md:flex md:w-2/12 justify-center">
                                            <div className={`w-16 h-16 bg-linear-to-br ${getStatusColor(quarter.status)} rounded-full flex items-center justify-center shadow-xl border-4 border-white z-10`}>
                                                <StatusIcon className="w-8 h-8 text-white" />
                                            </div>
                                        </div>

                                        {/* Right: Milestones */}
                                        <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                                            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-6">
                                                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                    <Target className="w-5 h-5 text-blue-600" />
                                                    Milestone
                                                </h4>
                                                <ul className="space-y-3">
                                                    {quarter.milestones.map((milestone, i) => (
                                                        <li key={i} className="flex items-start gap-3">
                                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${milestone.completed
                                                                    ? 'bg-green-500'
                                                                    : 'bg-gray-300'
                                                                }`}>
                                                                {milestone.completed && (
                                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                                )}
                                                            </div>
                                                            <span className={`text-sm ${milestone.completed
                                                                    ? 'text-gray-900 font-medium'
                                                                    : 'text-gray-600'
                                                                }`}>
                                                                {milestone.text}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Vision 2030 */}
            <section className="py-20 px-4 bg-linear-to-br from-blue-600 via-blue-700 to-cyan-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <Globe className="w-20 h-20 mx-auto mb-8" />
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                        Vision 2030
                    </h2>
                    <p className="text-2xl text-blue-100 leading-relaxed mb-12">
                        Entro il 2030, Tornese sarà il punto di riferimento europeo per la sostenibilità urbana basata su blockchain,
                        con 1 milione di utenti attivi che contribuiscono ogni giorno all'economia circolare.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <Users className="w-12 h-12 mx-auto mb-4" />
                            <div className="text-5xl font-black mb-2">1M+</div>
                            <p className="text-blue-100">Utenti Globali</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <Globe className="w-12 h-12 mx-auto mb-4" />
                            <div className="text-5xl font-black mb-2">10</div>
                            <p className="text-blue-100">Paesi Europei</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                            <div className="text-5xl font-black mb-2">10K+</div>
                            <p className="text-blue-100">Colonnine Smart</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-black text-gray-900 mb-6">
                        Vuoi Far Parte di Questa Storia?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Unisciti a noi come utente, partner o investitore
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contatti" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
                            Contattaci
                        </a>
                        <a href="/team" className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all">
                            Conosci il Team
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RoadmapPage;