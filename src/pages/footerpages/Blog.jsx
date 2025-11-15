import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, User, Tag, TrendingUp, Search, ArrowRight, Filter } from 'lucide-react';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('tutti');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { id: 'tutti', label: 'Tutti gli Articoli', count: 12 },
        { id: 'news', label: 'News & Aggiornamenti', count: 4 },
        { id: 'tecnologia', label: 'Tecnologia', count: 3 },
        { id: 'sostenibilita', label: 'Sostenibilità', count: 3 },
        { id: 'guide', label: 'Guide', count: 2 }
    ];

    const articles = [
        {
            id: 1,
            title: 'Tornese Foundation vince la Start Cup Campania 2025',
            excerpt: 'Un traguardo storico per il nostro progetto: il primo premio nella categoria innovazione tecnologica per la sostenibilità urbana.',
            category: 'news',
            author: 'Angelo Sarvonio',
            date: '15 Marzo 2025',
            readTime: '5 min',
            image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop',
            featured: true,
            tags: ['StartCup', 'Premi', 'Innovazione']
        },
        {
            id: 2,
            title: 'Come funzionano le colonnine intelligenti Tornese',
            excerpt: 'Scopri la tecnologia IoT e AI che permette alle nostre colonnine di riconoscere automaticamente i materiali e premiarti istantaneamente.',
            category: 'tecnologia',
            author: 'Giovanni Celeste Iaccarino',
            date: '8 Marzo 2025',
            readTime: '8 min',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
            featured: false,
            tags: ['IoT', 'AI', 'Hardware']
        },
        {
            id: 3,
            title: 'Il token TRN: utility token per l\'economia circolare',
            excerpt: 'Approfondiamo la tokenomics di TRN e come la blockchain Ethereum può accelerare la transizione ecologica delle città.',
            category: 'tecnologia',
            author: 'Giovanni Celeste Iaccarino',
            date: '1 Marzo 2025',
            readTime: '10 min',
            image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop',
            featured: true,
            tags: ['Blockchain', 'Token', 'Crypto']
        },
        {
            id: 4,
            title: 'Riciclo e blockchain: il futuro della sostenibilità urbana',
            excerpt: 'Come la tecnologia distribuita può risolvere il problema dei rifiuti urbani e incentivare comportamenti virtuosi nei cittadini.',
            category: 'sostenibilita',
            author: 'Emmanuel Marigliano',
            date: '22 Febbraio 2025',
            readTime: '7 min',
            image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=500&fit=crop',
            featured: false,
            tags: ['Sostenibilità', 'Smart Cities', 'Green']
        },
        {
            id: 5,
            title: 'Partnership con il Comune di Napoli: 50 colonnine pilota',
            excerpt: 'Annunciamo la collaborazione storica con il Comune di Napoli per l\'installazione delle prime 50 colonnine Tornese nella città.',
            category: 'news',
            author: 'Angelo Sarvonio',
            date: '15 Febbraio 2025',
            readTime: '4 min',
            image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=500&fit=crop',
            featured: false,
            tags: ['Partnership', 'Napoli', 'Pilota']
        },
        {
            id: 6,
            title: 'Guida: Come iniziare a riciclare con Tornese',
            excerpt: 'Una guida passo-passo per creare il tuo account, trovare le colonnine e iniziare a guadagnare token TRN oggi stesso.',
            category: 'guide',
            author: 'Maria Rossi',
            date: '8 Febbraio 2025',
            readTime: '6 min',
            image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=500&fit=crop',
            featured: false,
            tags: ['Tutorial', 'Guida', 'Getting Started']
        },
        {
            id: 7,
            title: 'L\'impatto ambientale di Tornese: primi dati ESG',
            excerpt: 'Report sui primi 3 mesi di operatività: 15 tonnellate di plastica riciclata e 8.000 kg di CO2 evitata grazie alla nostra community.',
            category: 'sostenibilita',
            author: 'Emmanuel Marigliano',
            date: '1 Febbraio 2025',
            readTime: '9 min',
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop',
            featured: true,
            tags: ['ESG', 'Report', 'Impatto']
        },
        {
            id: 8,
            title: 'Smart Contract TRN: l\'audit di CertiK',
            excerpt: 'I risultati dell\'audit di sicurezza dei nostri smart contract da parte di CertiK, leader mondiale nella blockchain security.',
            category: 'tecnologia',
            author: 'Giovanni Celeste Iaccarino',
            date: '25 Gennaio 2025',
            readTime: '12 min',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
            featured: false,
            tags: ['Security', 'Audit', 'Smart Contract']
        },
        {
            id: 9,
            title: 'Economia circolare: il modello Tornese Foundation',
            excerpt: 'Come stiamo costruendo un ecosistema sostenibile che unisce cittadini, aziende ed enti pubblici in un ciclo virtuoso.',
            category: 'sostenibilita',
            author: 'Angelo Sarvonio',
            date: '18 Gennaio 2025',
            readTime: '11 min',
            image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=500&fit=crop',
            featured: false,
            tags: ['Economia Circolare', 'Vision', 'Business Model']
        },
        {
            id: 10,
            title: 'Roadmap 2026: cosa ci aspetta quest\'anno',
            excerpt: 'Espansione in Campania, mainnet launch, nuove partnership e molto altro. Ecco i nostri obiettivi per il 2026.',
            category: 'news',
            author: 'Angelo Sarvonio',
            date: '10 Gennaio 2025',
            readTime: '5 min',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
            featured: false,
            tags: ['Roadmap', '2026', 'Obiettivi']
        },
        {
            id: 11,
            title: 'Come convertire i token TRN in buoni carburante',
            excerpt: 'Tutorial completo per convertire i tuoi token Tornese in buoni carburante utilizzabili presso le stazioni di servizio partner.',
            category: 'guide',
            author: 'Maria Rossi',
            date: '5 Gennaio 2025',
            readTime: '4 min',
            image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800&h=500&fit=crop',
            featured: false,
            tags: ['Tutorial', 'Conversione', 'Token']
        },
        {
            id: 12,
            title: 'Tornese Foundation alla COP29: il nostro intervento',
            excerpt: 'Abbiamo presentato il nostro modello alla conferenza ONU sul clima. Ecco cosa abbiamo imparato e i feedback ricevuti.',
            category: 'news',
            author: 'Angelo Sarvonio',
            date: '20 Dicembre 2024',
            readTime: '8 min',
            image: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=800&h=500&fit=crop',
            featured: false,
            tags: ['COP29', 'Conferenze', 'Internazionale']
        }
    ];

    const filteredArticles = articles.filter(article => {
        const matchesCategory = selectedCategory === 'tutti' || article.category === selectedCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const featuredArticles = articles.filter(a => a.featured).slice(0, 3);
    const latestArticles = filteredArticles.slice(0, 9);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-linear-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 border border-white/30">
                        <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6">
                        Blog Tornese Foundation
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        News, approfondimenti e guide sul mondo della blockchain sostenibile e dell'economia circolare
                    </p>

                    {/* Search Bar */}
                    <div className="mt-8 max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Cerca articoli, tag, parole chiave..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-transparent rounded-xl focus:ring-2 focus:ring-white focus:border-white outline-none transition-all text-gray-900 shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">

                {/* Categories Filter */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Filter className="w-5 h-5 text-gray-600" />
                        <h2 className="text-xl font-bold text-gray-900">Filtra per Categoria</h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-5 py-3 rounded-xl font-bold transition-all ${selectedCategory === cat.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {cat.label}
                                <span className="ml-2 text-sm opacity-75">({cat.count})</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Articles */}
                {selectedCategory === 'tutti' && !searchQuery && (
                    <div className="mb-16">
                        <div className="flex items-center gap-2 mb-6">
                            <TrendingUp className="w-6 h-6 text-blue-600" />
                            <h2 className="text-2xl font-black text-gray-900">Articoli in Evidenza</h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {featuredArticles.map((article) => (
                                <div
                                    key={article.id}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl hover:border-blue-500 transition-all transform hover:-translate-y-2"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                                                IN EVIDENZA
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {article.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {article.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-black text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <User className="w-4 h-4" />
                                                {article.author}
                                            </div>
                                            <button className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Leggi
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* All Articles Grid */}
                <div>
                    <h2 className="text-2xl font-black text-gray-900 mb-6">
                        {selectedCategory === 'tutti' ? 'Tutti gli Articoli' : categories.find(c => c.id === selectedCategory)?.label}
                    </h2>

                    {latestArticles.length === 0 ? (
                        <div className="text-center py-12">
                            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Nessun articolo trovato
                            </h3>
                            <p className="text-gray-600">
                                Prova a modificare i filtri o la ricerca
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {latestArticles.map((article) => (
                                <article
                                    key={article.id}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-500 transition-all transform hover:-translate-y-1"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-full">
                                                {categories.find(c => c.id === article.category)?.label}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {article.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {article.readTime}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-black text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                            {article.title}
                                        </h3>

                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                            {article.excerpt}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {article.tags.slice(0, 2).map((tag, i) => (
                                                <span key={i} className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg">
                                                    <Tag className="w-3 h-3" />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <User className="w-4 h-4" />
                                                {article.author}
                                            </div>
                                            <button className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Leggi
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>

                {/* Newsletter CTA */}
                <div className="mt-16 bg-linear-to-r from-blue-600 to-cyan-600 text-white p-8 md:p-12 rounded-3xl text-center">
                    <h2 className="text-2xl md:text-3xl font-black mb-4">
                        Non Perdere i Nostri Articoli
                    </h2>
                    <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                        Iscriviti alla newsletter per ricevere ogni settimana i migliori articoli su blockchain, sostenibilità e innovazione.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="La tua email"
                            className="flex-1 px-6 py-4 rounded-xl text-gray-900 outline-none"
                        />
                        <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl hover:shadow-white/30 transition-all transform hover:scale-105">
                            Iscriviti
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;