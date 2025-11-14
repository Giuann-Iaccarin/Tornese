import React, { useState } from 'react';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const navigate = useNavigate();
    const [expandedPost, setExpandedPost] = useState(null);

    const blogPosts = [
        {
            id: 1,
            title: 'Blockchain e Sostenibilità: Il Futuro del Riciclaggio',
            content: 'La blockchain è molto più di una tecnologia per le criptovalute. Nel nostro ecosistema Tornese, la utilizziamo per creare trasparenza totale nel processo di riciclaggio. Ogni rifiuto riciclato viene registrato in modo immutabile, garantendo che le ricompense siano sempre corrette e verificabili. Questo approccio non solo incentiva comportamenti sostenibili, ma crea anche un sistema audit trail completo che può essere ispezionato da chiunque.',
            category: 'Blockchain',
            author: 'Giovanni Rossi',
            date: '15 Gennaio 2025'
        },
        {
            id: 2,
            title: 'Come Iniziare a Guadagnare con Tornese',
            content: 'Se sei nuovo su Tornese, questa guida ti aiuterà a capire i primi passi. Dalla registrazione al primo riciclaggio, ti guideremo attraverso ogni fase. Per iniziare, dovrai: 1) Registrarti sulla piattaforma, 2) Completare la verifica dell\'identità, 3) Ricevere il tuo wallet digitale, 4) Visitare un punto di raccolta autorizzato, 5) Scansionare il codice QR con i tuoi rifiuti, 6) Ricevere immediatamente i token TORNESE nel tuo wallet.',
            category: 'Tutorial',
            author: 'Maria Bianchi',
            date: '12 Gennaio 2025'
        },
        {
            id: 3,
            title: 'Napoli: Una Città Più Verde Grazie a Tornese',
            content: 'Negli ultimi tre mesi, abbiamo raccolto più di 50 tonnellate di rifiuti riciclabili grazie alla partecipazione della comunità napolitana. I numeri sono straordinari: oltre 5000 utenti attivi, 150 punti di raccolta sparsi per la città e una crescita del 200% mese su mese. La comunità ha dimostrato che quando viene incentivato il comportamento sostenibile, le persone sono disposte a impegnarsi attivamente per l\'ambiente.',
            category: 'Sostenibilità',
            author: 'Carlo Verdi',
            date: '10 Gennaio 2025'
        },
        {
            id: 4,
            title: 'Roadmap 2025: Cosa Aspettarsi da Tornese',
            content: 'Quest\'anno abbiamo grandi piani per Tornese. Nel Q1 lanceremo le app mobile per iOS e Android, nel Q2 espanderemo a 5 nuove città italiane, nel Q3 introdurremo nuove funzionalità di governance che consentiranno ai token holder di votare sulle decisioni della piattaforma, e nel Q4 lanceremo il nostro exchange decentralizzato interno per facilitare il trading di token TORNESE.',
            category: 'Annunci',
            author: 'Andrea Neri',
            date: '8 Gennaio 2025'
        },
        {
            id: 5,
            title: 'Staking di Token TORNESE: Guida Completa',
            content: 'Lo staking è uno dei modi migliori per far crescere il tuo portafoglio senza fare nulla. Mettendo in staking i tuoi token TORNESE, guadagnerai ricompense passive direttamente proporzionali alla quantità di token che stakki e alla durata dello staking. Attualmente offriamo APY (Annual Percentage Yield) del 12% per il lockup a 3 mesi, 18% per il lockup a 6 mesi e 25% per il lockup a 12 mesi. Maggiore è il periodo di lockup, maggiori sono i guadagni.',
            category: 'Tutorial',
            author: 'Sofia Russo',
            date: '5 Gennaio 2025'
        },
        {
            id: 6,
            title: 'Partnership con Ethereum Foundation',
            content: 'Siamo entusiasti di annunciare una partnership strategica con la Ethereum Foundation. Questo accordo ci aiuterà a migliorare l\'efficienza energetica del nostro ecosistema, passando da un modello Proof-of-Work a uno Proof-of-Stake. La partnership includerà anche supporto tecnico, mentoring e accesso alle risorse della Foundation per sviluppare soluzioni sostenibili di blockchain.',
            category: 'Annunci',
            author: 'Marco Lombardi',
            date: '1 Gennaio 2025'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Torna alla Home
                </button>

                <h1 className="text-4xl font-black mb-2">Blog Tornese</h1>
                <p className="text-gray-400 mb-8">Notizie, tutorial e insight dal team Tornese</p>

                {/* Blog Posts */}
                <div className="space-y-6">
                    {blogPosts.map((post, index) => (
                        <div
                            key={post.id}
                            className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-colors"
                        >
                            <button
                                onClick={() => setExpandedPost(expandedPost === index ? null : index)}
                                className="w-full px-6 py-4 flex items-start justify-between hover:bg-slate-700/50 transition-colors text-left"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded">
                                            {post.category}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-white text-lg mb-2">{post.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            {post.author}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </div>
                                    </div>
                                </div>
                            </button>

                            {expandedPost === index && (
                                <div className="px-6 py-4 bg-slate-700/30 border-t border-slate-700">
                                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">{post.content}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
