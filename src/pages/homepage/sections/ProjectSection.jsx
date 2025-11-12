import React from 'react';
import { Recycle, Coins, ShoppingBag, Shield, Leaf, Zap, Globe, TrendingUp } from 'lucide-react';
import { howItWorks, features, roadmap } from '../../../data/project';

const icons = {
    Recycle,
    Coins,
    ShoppingBag,
    Shield,
    Leaf,
    Zap,
    Globe
};

const ProjectSection = () => {
    return (
        <section id="progetto" className="py-20 px-4 bg-white reveal reveal-delay-1">
            <div className="max-w-7xl mx-auto">

                {/* Mission & Vision */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        Il Progetto Tornese
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Tornese sta costruendo la prima rete di <span className="text-blue-600 font-semibold">colonnine intelligenti per il riciclo</span> integrate con blockchain,
                        che trasforma l'azione quotidiana del riciclo in un incentivo economico reale. La nostra missione è accelerare
                        la transizione verso un'<span className="text-blue-600 font-semibold">economia circolare sostenibile</span>,
                        rendendo la sostenibilità accessibile e vantaggiosa per tutti.
                    </p>
                </div>

                {/* How It Works - 3 Steps */}
                <div className="mb-24">
                    <h3 className="text-3xl font-black text-center text-gray-900 mb-12">
                        Come Funziona
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {howItWorks.map((item, index) => {
                            const IconComponent = icons[item.icon]; // <-- prende il componente corretto dinamicamente

                            return (
                                <div key={index} className={`relative group reveal reveal-delay-${index+1}`}>
                                    {/* Connecting Line */}
                                    {index < howItWorks.length - 1 && (
                                        <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-linear-to-r from-blue-500 to-cyan-500 opacity-30" />
                                    )}

                                    <div className={`relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/20 transition-all transform hover:-translate-y-2`}>
                                        {/* Step */}
                                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-linear-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-black shadow-lg">
                                            {item.step}
                                        </div>

                                        {/* Icon */}
                                        <div className={`w-16 h-16 bg-linear-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                                            {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                                        </div>

                                        {/* Content */}
                                        <h4 className="text-2xl font-black text-gray-900 mb-3 text-center">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-600 text-center leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Tornese Token & Blockchain */}
                <div className="mb-24 bg-linear-to-br from-blue-50 to-cyan-50 rounded-3xl p-12 reveal reveal-delay-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6 border border-blue-200">
                                <Coins className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-semibold text-blue-700">
                                    Tornese Token (TRN)
                                </span>
                            </div>

                            <h3 className="text-3xl font-black text-gray-900 mb-6">
                                La Criptovaluta della Sostenibilità
                            </h3>

                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Il <strong>token Tornese (TRN)</strong> è il cuore del nostro ecosistema. Basato su blockchain Ethereum-compatible,
                                garantisce sicurezza, trasparenza e interoperabilità con l'intero mondo DeFi.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    'Smart Contract audited e open-source',
                                    'Convertibile in valuta fiat o altre crypto',
                                    'Governance decentralizzata tramite DAO',
                                    'Certificazione ESG on-chain'
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {features.map((feature, i) => {
                                const IconComponent = icons[feature.icon]; // Prende il componente corretto

                                return (
                                    <div
                                        key={i}
                                        className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all reveal reveal-delay-${(i % 4) + 1}`}
                                    >
                                        {/* Icona dinamica */}
                                        {IconComponent ? (
                                            <IconComponent className="w-10 h-10 text-blue-600 mb-4" />
                                        ) : (
                                            <div className="w-10 h-10 mb-4 bg-blue-100 rounded-lg" /> // fallback
                                        )}

                                        <h5 className="font-bold text-gray-900 mb-2">{feature.title}</h5>
                                        <p className="text-sm text-gray-600">{feature.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Roadmap */}
                <div>
                    <h3 className="text-3xl font-black text-center text-gray-900 mb-4">
                        Roadmap 2026–2030
                    </h3>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Il nostro percorso di crescita verso un futuro più sostenibile
                    </p>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-blue-500 via-cyan-500 to-blue-600 opacity-30" />

                        <div className="space-y-12">
                            {roadmap.map((phase, index) => (
                                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} reveal reveal-delay-${(index % 4) + 1}`}>
                                    {/* Timeline Dot */}
                                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-linear-to-br from-blue-600 to-blue-700 rounded-full items-center justify-center z-10 border-4 border-white shadow-lg">
                                        <TrendingUp className="w-4 h-4 text-white" />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                                        <div className={`bg-white rounded-2xl p-6 shadow-xl border-2 ${phase.status === 'in-progress'
                                            ? 'border-blue-600 shadow-blue-500/20'
                                            : 'border-gray-100'
                                            } hover:shadow-2xl transition-all`}>

                                            <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                                <span className="text-3xl font-black text-blue-600">{phase.year}</span>
                                                {phase.quarter && (
                                                    <span className="text-sm font-medium text-gray-500">{phase.quarter}</span>
                                                )}
                                                {phase.status === 'in-progress' && (
                                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                                                        IN CORSO
                                                    </span>
                                                )}
                                            </div>

                                            <h4 className="text-xl font-black text-gray-900 mb-4">
                                                {phase.title}
                                            </h4>

                                            <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                                {phase.milestones.map((milestone, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-blue-600 shrink-0">•</span>
                                                        <span className="text-gray-700 text-sm">{milestone}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProjectSection;