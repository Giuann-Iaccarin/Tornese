import React from 'react';
import { Recycle, Coins, ShoppingBag, Shield, Leaf, Zap, Globe, TrendingUp } from 'lucide-react';
import { howItWorks, features, roadmap } from '../../../data/project';

const ProjectSection = () => {
    const icons = { Recycle, ShoppingBag, Shield, Leaf, Zap, Globe, Coins };

    return (
        <section id="progetto" className="py-20 px-4 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto">

                {/* Mission & Vision */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Il Progetto Tornese
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Tornese Foundation sta costruendo la prima rete di <span className="text-emerald-500 font-semibold">colonnine intelligenti per il riciclo</span> integrate con blockchain,
                        che trasforma l'azione quotidiana del riciclo in un incentivo economico reale. La nostra missione è accelerare
                        la transizione verso un'<span className="text-emerald-500 font-semibold">economia circolare sostenibile</span>,
                        rendendo la sostenibilità accessibile e vantaggiosa per tutti.
                    </p>
                </div>

                {/* How It Works - 3 Steps */}
                <div className="mb-24">
                    <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                        Come Funziona
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {howItWorks.map((item, index) => {
                            const Icon = icons[item.icon];

                            return (
                                <div key={index} className="relative group">
                                    {/* Connecting Line - desktop only */}
                                    {index < howItWorks.length - 1 && (
                                        <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-linear-to-r from-emerald-500 to-teal-500 opacity-30" />
                                    )}

                                    <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl hover:border-emerald-500 dark:hover:border-emerald-500 transition-all transform hover:-translate-y-2">
                                        {/* Step Number */}
                                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                            {item.step}
                                        </div>

                                        {/* Icon */}
                                        <div
                                            className={`w-16 h-16 bg-linear-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}
                                        >
                                            {Icon && <Icon className="w-8 h-8 text-white" />}
                                        </div>

                                        {/* Content */}
                                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Tornese Token & Blockchain */}
                <div className="mb-24 bg-linear-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full mb-6">
                                <Coins className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                                    Tornese Token (TRN)
                                </span>
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                La Criptovaluta della Sostenibilità
                            </h3>

                            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
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
                                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {features.map((feature, i) => {
                                const Icon = icons[feature.icon];

                                return (
                                    <div
                                        key={i}
                                        className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-slate-700"
                                    >
                                        {Icon && <Icon className="w-10 h-10 text-emerald-500 mb-4" />}
                                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                                            {feature.title}
                                        </h5>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {feature.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Roadmap */}
                <div>
                    <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
                        Roadmap 2026–2030
                    </h3>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        Il nostro percorso di crescita verso un futuro più sostenibile
                    </p>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-emerald-500 via-teal-500 to-cyan-500 opacity-30" />

                        <div className="space-y-12">
                            {roadmap.map((phase, index) => (
                                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    {/* Timeline Dot */}
                                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-linear-to-br from-emerald-500 to-teal-500 rounded-full items-center justify-center z-10 border-4 border-white dark:border-slate-900">
                                        <TrendingUp className="w-4 h-4 text-white" />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                                        <div className={`bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border-2 ${phase.status === 'in-progress'
                                            ? 'border-emerald-500 shadow-emerald-500/20'
                                            : 'border-gray-200 dark:border-slate-700'
                                            } hover:shadow-xl transition-all`}>

                                            <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                                <span className="text-3xl font-bold text-emerald-500">{phase.year}</span>
                                                {phase.quarter && (
                                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{phase.quarter}</span>
                                                )}
                                                {phase.status === 'in-progress' && (
                                                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold rounded-full">
                                                        IN CORSO
                                                    </span>
                                                )}
                                            </div>

                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                                {phase.title}
                                            </h4>

                                            <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                                {phase.milestones.map((milestone, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-emerald-500 shrink-0">•</span>
                                                        <span className="text-gray-700 dark:text-gray-300 text-sm">{milestone}</span>
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