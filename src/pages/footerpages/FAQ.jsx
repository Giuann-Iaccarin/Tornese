import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, Coins, Recycle, Shield, MapPin, Users, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('tutti');
    const [openItems, setOpenItems] = useState([]);

    const categories = [
        { id: 'tutti', label: 'Tutti', icon: HelpCircle },
        { id: 'generale', label: 'Generale', icon: HelpCircle },
        { id: 'token', label: 'Token TRN', icon: Coins },
        { id: 'colonnine', label: 'Colonnine', icon: Recycle },
        { id: 'sicurezza', label: 'Sicurezza', icon: Shield },
        { id: 'partnership', label: 'Partnership', icon: Users },
        { id: 'tecnico', label: 'Tecnico', icon: Zap }
    ];

    const faqData = [
        // GENERALE
        {
            category: 'generale',
            question: 'Cos\'è Tornese Foundation?',
            answer: 'Tornese Foundation è una startup innovativa che combina blockchain e sostenibilità per incentivare il riciclo. Abbiamo creato una rete di colonnine intelligenti che premiano i cittadini con token TRN quando conferiscono materiali riciclabili.'
        },
        {
            category: 'generale',
            question: 'Come funziona il sistema Tornese?',
            answer: 'È semplice: 1) Trovi una colonnina Tornese nella tua città, 2) Inserisci materiali riciclabili (plastica, lattine, carta, vetro), 3) Ricevi immediatamente token TRN nel tuo wallet digitale, 4) Converti i token in buoni carburante, biglietti dei mezzi pubblici o sconti presso partner.'
        },
        {
            category: 'generale',
            question: 'Dove posso trovare le colonnine Tornese?',
            answer: 'Le prime colonnine pilota sono installate a Napoli. Stiamo espandendo in tutta la Campania nel 2026. Puoi trovare la mappa interattiva delle colonnine nella sezione "Trova Colonnine" della nostra app mobile.'
        },
        {
            category: 'generale',
            question: 'Il servizio è gratuito?',
            answer: 'Sì! Non costa nulla utilizzare le colonnine Tornese. Anzi, vieni premiato con token TRN ogni volta che ricicli. L\'unica cosa che ti serve è scaricare la nostra app e creare un account gratuito.'
        },
        {
            category: 'generale',
            question: 'Devo avere conoscenze di blockchain per usare Tornese?',
            answer: 'Assolutamente no! Abbiamo progettato il sistema per essere semplice e intuitivo. Non serve conoscere la blockchain: l\'app gestisce tutto automaticamente. Basta conferire i rifiuti e i token arrivano nel tuo wallet.'
        },

        // TOKEN TRN
        {
            category: 'token',
            question: 'Cos\'è il token TRN?',
            answer: 'TRN (Tornese Token) è la criptovaluta dell\'ecosistema Tornese. È un utility token basato su blockchain Ethereum-compatible che puoi guadagnare riciclando e utilizzare per accedere a benefici reali come sconti, buoni carburante e biglietti dei mezzi pubblici.'
        },
        {
            category: 'token',
            question: 'Come guadagno token TRN?',
            answer: 'Puoi guadagnare TRN in diversi modi: conferendo materiali riciclabili nelle colonnine (metodo principale), partecipando a eventi e sfide green, invitando amici tramite referral, completando missioni sostenibili nell\'app, e attraverso partnership con aziende.'
        },
        {
            category: 'token',
            question: 'Quanto valgono i token TRN?',
            answer: 'Il valore di conversione dipende dal tipo di ricompensa. Ad esempio: 100 TRN = €5 di buono carburante, 50 TRN = 1 biglietto metro, 200 TRN = 10% sconto in negozi partner. I valori sono aggiornati in tempo reale nell\'app.'
        },
        {
            category: 'token',
            question: 'I token TRN sono un investimento?',
            answer: 'NO. TRN è un utility token, non uno strumento finanziario. Non comprare TRN aspettandoti profitti. Il suo scopo è incentivare comportamenti sostenibili e può essere convertito in servizi e sconti, non in denaro diretto.'
        },
        {
            category: 'token',
            question: 'Posso vendere o trasferire i miei token TRN?',
            answer: 'Puoi trasferire TRN ad altri utenti Tornese tramite l\'app. La vendita su exchange sarà possibile dopo il listing pubblico (previsto Q4 2026). Ricorda che TRN è progettato per essere usato, non per speculazione.'
        },
        {
            category: 'token',
            question: 'I token TRN scadono?',
            answer: 'No, i token TRN non hanno scadenza e rimangono nel tuo wallet a tempo indeterminato. Tuttavia, alcune promozioni speciali potrebbero avere termini temporali specifici.'
        },
        {
            category: 'token',
            question: 'Quanti token ricevo per ogni conferimento?',
            answer: 'Dipende dal materiale e dalla quantità: Plastica (PET): 5-10 TRN per bottiglia, Lattine alluminio: 8-12 TRN per lattina, Carta/Cartone: 3-7 TRN per kg, Vetro: 10-15 TRN per bottiglia. Bonus durante eventi speciali!'
        },

        // COLONNINE
        {
            category: 'colonnine',
            question: 'Quali materiali posso conferire?',
            answer: 'Le colonnine Tornese accettano: bottiglie in plastica PET, lattine in alluminio, carta e cartone, bottiglie in vetro. Ogni colonnina ha sensori che riconoscono automaticamente il materiale e lo pesano per calcolare i token.'
        },
        {
            category: 'colonnine',
            question: 'Devo pulire i materiali prima di conferirli?',
            answer: 'Sì, è importante. I materiali devono essere vuoti e preferibilmente sciacquati. Le bottiglie di plastica vanno schiacciate per ridurre volume. Questo garantisce un riciclo di qualità e massimizza i token ricevuti.'
        },
        {
            category: 'colonnine',
            question: 'Cosa succede se la colonnina è piena?',
            answer: 'L\'app ti avvisa in tempo reale se una colonnina è piena o in manutenzione. Puoi vedere lo stato di tutte le colonnine vicine sulla mappa. Il nostro team svuota le colonnine regolarmente, di solito entro 24 ore.'
        },
        {
            category: 'colonnine',
            question: 'Le colonnine sono accessibili 24/7?',
            answer: 'Dipende dalla location. Le colonnine all\'aperto sono accessibili 24/7, mentre quelle in aree private (centri commerciali, scuole) seguono gli orari della struttura. Verifica sempre sull\'app prima di recarti.'
        },
        {
            category: 'colonnine',
            question: 'Come funziona il riconoscimento dei materiali?',
            answer: 'Le colonnine usano sensori avanzati (fotocamere, bilance, lettori RFID) e intelligenza artificiale per identificare automaticamente tipo e quantità di materiale. Il sistema è molto accurato e previene frodi o errori.'
        },
        {
            category: 'colonnine',
            question: 'Posso usare qualsiasi colonnina o devo registrarmi?',
            answer: 'Devi prima creare un account gratuito sull\'app Tornese. Poi puoi usare qualsiasi colonnina della rete. Al momento del conferimento, scannerizzi il QR code della colonnina con l\'app per ricevere i token.'
        },

        // SICUREZZA
        {
            category: 'sicurezza',
            question: 'I miei dati sono al sicuro?',
            answer: 'Sì. Utilizziamo crittografia end-to-end, server sicuri certificati ISO 27001, e siamo conformi al GDPR europeo. I tuoi dati personali non vengono mai venduti a terzi. Leggi la nostra Privacy Policy per dettagli.'
        },
        {
            category: 'sicurezza',
            question: 'Chi ha accesso al mio wallet?',
            answer: 'Solo tu! Tornese Foundation non memorizza le tue chiavi private. Tu sei l\'unico responsabile della custodia del wallet. Ti consigliamo di attivare l\'autenticazione a due fattori (2FA) per maggiore sicurezza.'
        },
        {
            category: 'sicurezza',
            question: 'Cosa succede se perdo le mie chiavi private?',
            answer: 'Purtroppo, se perdi le chiavi private, perdi l\'accesso permanente ai tuoi token TRN. Noi non possiamo recuperarle. Per questo è fondamentale fare backup sicuri e conservare la seed phrase in luoghi protetti.'
        },
        {
            category: 'sicurezza',
            question: 'Gli smart contract sono stati auditati?',
            answer: 'Sì, i nostri smart contract sono stati auditati da società di sicurezza blockchain indipendenti (CertiK e Hacken). Gli audit report sono pubblici e consultabili sul nostro GitHub.'
        },
        {
            category: 'sicurezza',
            question: 'Come prevenite le frodi?',
            answer: 'Usiamo molteplici livelli di sicurezza: riconoscimento materiali tramite AI, limiti giornalieri per utente, blockchain immutabile per tracciare transazioni, sistema anti-abuso che rileva comportamenti sospetti, e verifica KYC per grandi volumi.'
        },

        // PARTNERSHIP
        {
            category: 'partnership',
            question: 'Come posso diventare partner di Tornese?',
            answer: 'Ottimo! Invia una richiesta a partnerships@tornesefoundation.org con: descrizione della tua attività, tipo di collaborazione proposta (es. installazione colonnina, sconti per utenti), e i tuoi contatti. Ti risponderemo entro 5 giorni lavorativi.'
        },
        {
            category: 'partnership',
            question: 'Quali benefici hanno le aziende partner?',
            answer: 'I partner ottengono: visibilità verso una community eco-consapevole, certificazione ESG e sostenibilità, aumento del traffico in negozio/sito, brand positioning green, dati aggregati sul comportamento utenti (anonimi), e possibilità di co-marketing.'
        },
        {
            category: 'partnership',
            question: 'I comuni possono collaborare con Tornese?',
            answer: 'Assolutamente sì! Collaboriamo già con 3 comuni campani. Offriamo: installazione colonnine gratuite, gestione completa del servizio, report ESG per documentare l\'impatto ambientale, e coinvolgimento cittadini nelle politiche green.'
        },
        {
            category: 'partnership',
            question: 'Posso installare una colonnina nella mia azienda?',
            answer: 'Sì! Offriamo soluzioni customizzate per aziende, scuole, centri commerciali. Contattaci per un preventivo personalizzato. L\'installazione include hardware, manutenzione, e personalizzazione con il tuo brand.'
        },

        // TECNICO
        {
            category: 'tecnico',
            question: 'Su quale blockchain è basato TRN?',
            answer: 'TRN è un token ERC-20 su blockchain Ethereum-compatible. Inizialmente su testnet, migreremo a mainnet nel 2026. Valutiamo anche Layer 2 (Polygon, Arbitrum) per ridurre costi e aumentare velocità.'
        },
        {
            category: 'tecnico',
            question: 'Posso integrare Tornese nella mia app?',
            answer: 'Sì! Offriamo API REST e SDK per integrare il sistema Tornese. Consulta la documentazione sviluppatori su docs.tornesefoundation.org. Le API includono: verifica saldo TRN, storico transazioni, conversione token, e geolocalizzazione colonnine.'
        },
        {
            category: 'tecnico',
            question: 'Quali wallet sono compatibili con TRN?',
            answer: 'Essendo ERC-20, TRN è compatibile con: MetaMask, Trust Wallet, Ledger (hardware), Coinbase Wallet, e ovviamente il wallet integrato nell\'app Tornese. Puoi importare/esportare TRN tra questi wallet.'
        },
        {
            category: 'tecnico',
            question: 'Le transazioni TRN hanno commissioni (gas fees)?',
            answer: 'Sì, le transazioni on-chain richiedono gas fees Ethereum. Tuttavia, le transazioni interne all\'app Tornese (conferimento → wallet) sono gratuite perché off-chain. Pagate solo quando trasferite TRN fuori dall\'app.'
        },
        {
            category: 'tecnico',
            question: 'Il codice di Tornese è open source?',
            answer: 'Gli smart contract sono open source e verificati su Etherscan. Parte dell\'app è open source su GitHub. L\'hardware delle colonnine e alcuni algoritmi proprietari (AI riconoscimento materiali) sono closed source per sicurezza.'
        }
    ];

    const toggleItem = (index) => {
        if (openItems.includes(index)) {
            setOpenItems(openItems.filter(i => i !== index));
        } else {
            setOpenItems([...openItems, index]);
        }
    };

    const filteredFaqs = faqData.filter(faq => {
        const matchesCategory = activeCategory === 'tutti' || faq.category === activeCategory;
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleNavigateToSection = (sectionId) => {
        navigate('/');
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.warn(`Sezione ${sectionId} non trovata`);
            }
        }, 500);
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50/30 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                        <HelpCircle className="w-8 h-8 text-blue-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Domande Frequenti
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Trova rapidamente risposte alle domande più comuni su Tornese Foundation
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-8">
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Cerca nelle FAQ..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-900 shadow-lg"
                        />
                    </div>
                </div>

                {/* Category Filters */}
                <div className="mb-12">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all ${activeCategory === cat.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                                    }`}
                            >
                                <cat.icon className="w-4 h-4" />
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {filteredFaqs.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                                <HelpCircle className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Nessun risultato trovato
                            </h3>
                            <p className="text-gray-600">
                                Prova a cercare con parole diverse o seleziona un'altra categoria
                            </p>
                        </div>
                    ) : (
                        filteredFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-blue-500 transition-all shadow-sm hover:shadow-lg"
                            >
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                                            {faq.question}
                                        </h3>
                                        <span className="text-xs font-semibold text-blue-600 uppercase">
                                            {categories.find(c => c.id === faq.category)?.label}
                                        </span>
                                    </div>
                                    <div className={`shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center transition-transform ${openItems.includes(index) ? 'rotate-180' : ''
                                        }`}>
                                        <ChevronDown className="w-5 h-5 text-blue-600" />
                                    </div>
                                </button>

                                {openItems.includes(index) && (
                                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-gray-50">
                                        <p className="text-gray-700 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>

                {/* Contact CTA */}
                <div className="mt-16 bg-linear-to-r from-blue-600 to-cyan-600 text-white p-8 md:p-12 rounded-3xl text-center">
                    <h2 className="text-2xl md:text-3xl font-black mb-4">
                        Non hai trovato la risposta?
                    </h2>
                    <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                        Il nostro team è qui per aiutarti. Contattaci e ti risponderemo entro 24 ore.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:support@tornesefoundation.org"
                            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl hover:shadow-white/30 transition-all transform hover:scale-105"
                        >
                            Contatta il Supporto
                        </a>
                        <button
                            onClick={() => handleNavigateToSection('contatti')}
                            className="px-8 py-4 bg-blue-700 text-white rounded-xl font-bold border-2 border-white hover:bg-blue-800 transition-all"
                        >
                            Vai ai Contatti
                        </button>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <a
                        href="/Tornese/documentazione"
                        className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg group"
                    >
                        <MapPin className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Documentazione</h3>
                        <p className="text-gray-600 text-sm">Guide complete e tutorial passo-passo</p>
                    </a>

                    <a
                        href="/Tornese/api-developer"
                        className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg group"
                    >
                        <Zap className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                        <h3 className="text-lg font-bold text-gray-900 mb-2">API Developer</h3>
                        <p className="text-gray-600 text-sm">Integra Tornese nella tua app</p>
                    </a>

                    <a
                        href="/Tornese/blog"
                        className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg group"
                    >
                        <HelpCircle className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Blog</h3>
                        <p className="text-gray-600 text-sm">Articoli, news e aggiornamenti</p>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default FAQ;