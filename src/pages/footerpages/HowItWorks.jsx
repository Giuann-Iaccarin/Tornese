import React from 'react';
import { Smartphone, Scan, Coins, Gift, Recycle, Zap, Shield, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            number: '01',
            icon: Smartphone,
            title: 'Scarica l\'App',
            description: 'Crea il tuo account gratuito in 2 minuti. Disponibile su iOS e Android.',
            details: [
                'Registrazione con email',
                'Wallet automatico generato',
                'Interfaccia semplice e intuitiva',
                'Disponibile in italiano e inglese'
            ],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            number: '02',
            icon: Scan,
            title: 'Trova una Colonnina',
            description: 'Usa la mappa integrata per localizzare la colonnina più vicina a te.',
            details: [
                'Geolocalizzazione in tempo reale',
                'Filtri per materiale accettato',
                'Stato disponibilità colonnina',
                'Indicazioni stradali integrate'
            ],
            color: 'from-purple-500 to-pink-500'
        },
        {
            number: '03',
            icon: Recycle,
            title: 'Conferisci Materiali',
            description: 'Inserisci plastica, lattine o altri materiali. La colonnina riconosce tutto automaticamente.',
            details: [
                'Sensori AI per riconoscimento materiali',
                'Pesatura automatica precisa',
                'Feedback immediato su schermo',
                'Materiali puliti ricevono bonus'
            ],
            color: 'from-green-500 to-emerald-500'
        },
        {
            number: '04',
            icon: Coins,
            title: 'Ricevi Token TRN',
            description: 'I token arrivano istantaneamente nel tuo wallet. Ogni materiale ha un valore diverso.',
            details: [
                'Transazione blockchain in 10 secondi',
                'Tracciabile e trasparente',
                'Nessun costo per te',
                'Accumula e risparmia per obiettivi'
            ],
            color: 'from-yellow-500 to-orange-500'
        },
        {
            number: '05',
            icon: Gift,
            title: 'Converti in Premi',
            description: 'Usa i tuoi token per buoni carburante, biglietti mezzi, sconti o donazioni.',
            details: [
                'Partner convenzionati in crescita',
                'Conversione immediata',
                'Senza commissioni nascoste',
                'Donazioni a progetti green'
            ],
            color: 'from-red-500 to-pink-500'
        }
    ];

    const features = [
        {
            icon: Zap,
            title: 'Instant Reward',
            description: 'Ricevi token in tempo reale, non dopo giorni'
        },
        {
            icon: Shield,
            title: 'Blockchain Sicura',
            description: 'Ogni transazione è tracciabile e immutabile'
        },
        {
            icon: TrendingUp,
            title: 'Impatto Misurabile',
            description: 'Vedi quanto CO₂ hai risparmiato in tempo reale'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-linear-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-24 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6">
                        Come Funziona
                    </h1>
                    <p className="text-2xl text-blue-100 max-w-4xl mx-auto">
                        Riciclare con Tornese è semplice. Segui questi 5 step e inizia a guadagnare oggi stesso.
                    </p>
                </div>
            </section>

            {/* Steps */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                                <div className="flex-1">
                                    <div className="inline-flex items-center gap-3 mb-6">
                                        <div className={`w-16 h-16 bg-linear-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                                            <step.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <span className="text-6xl font-black text-gray-200">{step.number}</span>
                                    </div>
                                    <h2 className="text-4xl font-black text-gray-900 mb-4">
                                        {step.title}
                                    </h2>
                                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                        {step.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {step.details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex-1">
                                    <div className={`aspect-square bg-linear-to-br ${step.color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                                        <step.icon className="w-48 h-48 text-white opacity-20" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black text-gray-900 mb-4">
                            Perché Scegliere Tornese
                        </h2>
                        <p className="text-xl text-gray-600">
                            Tecnologia all'avanguardia per un'esperienza senza precedenti
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <feature.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Demo Placeholder */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-black text-gray-900 mb-4">
                            Guarda il Video
                        </h2>
                        <p className="text-xl text-gray-600">
                            Vedi Tornese in azione in meno di 2 minuti
                        </p>
                    </div>
                    <div className="aspect-video bg-linear-to-br from-blue-100 to-cyan-100 rounded-3xl flex items-center justify-center shadow-2xl">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                <div className="w-0 h-0 border-t-12 border-t-transparent border-l-20 border-l-blue-600 border-b-12 border-b-transparent ml-2" />
                            </div>
                            <p className="text-gray-600 font-semibold">Clicca per guardare</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-linear-to-r from-blue-600 to-cyan-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-black mb-6">
                        Pronto a Iniziare?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Scarica l'app gratuita e ricevi 50 TRN di benvenuto
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2">
                            📱 Scarica App
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-10 py-5 bg-blue-700 text-white rounded-xl font-bold text-lg border-2 border-white hover:bg-blue-800 transition-all">
                            Trova Colonnine
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;