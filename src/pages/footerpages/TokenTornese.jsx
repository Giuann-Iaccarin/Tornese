import React from 'react';
import { Coins, TrendingUp, Lock, Users, Zap, Shield, PieChart, Gift, AlertTriangle } from 'lucide-react';

const TokenTornese = () => {
    const tokenomics = [
        { label: 'Ricompense Riciclo', percentage: 40, color: 'bg-blue-600' },
        { label: 'Partnership & Ecosistema', percentage: 25, color: 'bg-green-600' },
        { label: 'Team & Sviluppo', percentage: 15, color: 'bg-purple-600' },
        { label: 'Marketing & Community', percentage: 10, color: 'bg-orange-600' },
        { label: 'Riserva', percentage: 10, color: 'bg-gray-600' }
    ];

    const useCases = [
        {
            icon: Gift,
            title: 'Buoni Carburante',
            description: '100 TRN = €5 di carburante presso Eni, Q8, Shell'
        },
        {
            icon: Zap,
            title: 'Trasporto Pubblico',
            description: '50 TRN = 1 biglietto metro/bus ANM Napoli'
        },
        {
            icon: Users,
            title: 'Sconti Partner',
            description: 'Usa TRN per sconti 10-30% in negozi convenzionati'
        },
        {
            icon: TrendingUp,
            title: 'Staking & Yield',
            description: 'Metti in stake i TRN per guadagnare ricompense extra'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-linear-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 border border-white/30">
                            <Coins className="w-12 h-12" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6">
                            Token Tornese (TRN)
                        </h1>
                        <p className="text-2xl text-blue-100 max-w-4xl mx-auto">
                            La criptovaluta della sostenibilità. Guadagna, risparmia e contribuisci all'economia circolare.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
                            <div className="text-3xl font-black mb-1">ERC-20</div>
                            <p className="text-blue-100 text-sm">Standard</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
                            <div className="text-3xl font-black mb-1">100M</div>
                            <p className="text-blue-100 text-sm">Total Supply</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
                            <div className="text-3xl font-black mb-1">Q4 2026</div>
                            <p className="text-blue-100 text-sm">Mainnet Launch</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
                            <div className="text-3xl font-black mb-1">Audited</div>
                            <p className="text-blue-100 text-sm">CertiK & Hacken</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is TRN */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-black text-gray-900 mb-6">
                                Cos'è il Token TRN?
                            </h2>
                            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                                TRN è un <strong>utility token</strong> basato su blockchain Ethereum che alimenta l'ecosistema Tornese.
                                Non è uno strumento di investimento, ma un mezzo per accedere a benefici reali.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Ogni volta che ricicli, ricevi TRN. Puoi poi convertirli in carburante, biglietti del trasporto
                                pubblico, sconti presso partner o persino donarli a progetti ambientali.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl">
                                <p className="text-gray-700">
                                    <strong>💡 Importante:</strong> TRN non è una security né un investimento. Il suo valore è legato
                                    all'utilità all'interno dell'ecosistema Tornese, non a speculazione di mercato.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Shield, label: 'Sicuro', desc: 'Smart contract audited' },
                                { icon: Zap, label: 'Veloce', desc: 'Transazioni in 10 sec' },
                                { icon: Lock, label: 'Trasparente', desc: 'Tutto on-chain' },
                                { icon: Users, label: 'Community', desc: 'Governance DAO' }
                            ].map((item, i) => (
                                <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                    <item.icon className="w-8 h-8 text-blue-600 mb-3" />
                                    <h3 className="font-bold text-gray-900 mb-1">{item.label}</h3>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black text-gray-900 mb-4">
                            Come Usare i Token TRN
                        </h2>
                        <p className="text-xl text-gray-600">
                            Converti i tuoi token in benefici reali e tangibili
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                                        <useCase.icon className="w-7 h-7 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-gray-900 mb-2">{useCase.title}</h3>
                                        <p className="text-gray-600">{useCase.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tokenomics */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <PieChart className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                        <h2 className="text-4xl font-black text-gray-900 mb-4">
                            Tokenomics
                        </h2>
                        <p className="text-xl text-gray-600">
                            Distribuzione trasparente del supply totale di 100 milioni di TRN
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            {tokenomics.map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="font-bold text-gray-900">{item.label}</span>
                                        <span className="text-2xl font-black text-gray-900">{item.percentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                                        <div
                                            className={`${item.color} h-full rounded-full transition-all`}
                                            style={{ width: `${item.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-linear-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200">
                            <h3 className="text-2xl font-black text-gray-900 mb-6">Dettagli Supply</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                    <span className="text-gray-700">Total Supply</span>
                                    <span className="font-bold text-gray-900">100,000,000 TRN</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                    <span className="text-gray-700">Circulating (Testnet)</span>
                                    <span className="font-bold text-gray-900">1,250,000 TRN</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                    <span className="text-gray-700">Burned</span>
                                    <span className="font-bold text-gray-900">0 TRN</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Market Cap (Testnet)</span>
                                    <span className="font-bold text-gray-900">N/A</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Roadmap Token */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black text-gray-900 mb-4">
                            Roadmap Token
                        </h2>
                        <p className="text-xl text-gray-600">
                            Il percorso verso il mainnet launch
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            { phase: 'Q1 2025', title: 'Testnet Launch', status: 'completed', desc: 'Token su Sepolia testnet, primi 1000 utenti' },
                            { phase: 'Q2-Q3 2025', title: 'Beta Pubblica', status: 'in-progress', desc: 'Espansione utenti, bug fixing, audit smart contract' },
                            { phase: 'Q4 2025', title: 'Pre-Mainnet', status: 'planned', desc: 'Bridge testnet → mainnet, snapshot saldi' },
                            { phase: 'Q1 2026', title: 'Mainnet Launch', status: 'planned', desc: 'TRN su Ethereum mainnet, primi listing exchange' }
                        ].map((item, index) => (
                            <div key={index} className={`bg-white p-6 rounded-2xl shadow-lg border-l-4 ${item.status === 'completed' ? 'border-green-500' :
                                    item.status === 'in-progress' ? 'border-blue-500' :
                                        'border-gray-300'
                                }`}>
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="text-sm font-bold text-gray-500 uppercase">{item.phase}</span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === 'completed' ? 'bg-green-100 text-green-700' :
                                            item.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                                                'bg-gray-100 text-gray-700'
                                        }`}>
                                        {item.status === 'completed' ? '✓ Completato' :
                                            item.status === 'in-progress' ? '→ In Corso' : '○ Pianificato'}
                                    </span>
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-r-2xl">
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="w-8 h-8 text-yellow-600 shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    ⚠️ Disclaimer Importante
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• TRN è un <strong>utility token</strong>, non un investimento finanziario</li>
                                    <li>• Non acquistare TRN aspettandoti profitti o rendimenti</li>
                                    <li>• Il valore può fluttuare e potresti perdere tutto</li>
                                    <li>• TRN non è una security né un titolo regolamentato</li>
                                    <li>• Consulta un consulente finanziario prima di decisioni importanti</li>
                                </ul>
                                <p className="mt-4 text-sm text-gray-600">
                                    Leggi il nostro <a href="/Tornese/disclaimer" className="text-blue-600 hover:underline font-semibold">Disclaimer completo</a> e
                                    i <a href="/Tornese/terms-of-service" className="text-blue-600 hover:underline font-semibold">Termini di Servizio</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TokenTornese;