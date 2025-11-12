import React, { useState } from 'react';
import { Newspaper, Award, ExternalLink, ChevronLeft, ChevronRight, Trophy, Star } from 'lucide-react';
import { mediaArticles, awards } from '../../../data/media';
const icons = {
    Trophy,
    Award,
    Star,
};

const MediaSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % mediaArticles.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + mediaArticles.length) % mediaArticles.length);
    };

    return (
        <section id="media" className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6 border border-blue-200">
                        <Newspaper className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">
                            Media & Riconoscimenti
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        Parlano di Noi
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        La stampa nazionale e internazionale racconta il nostro impatto sulla sostenibilità urbana e l'innovazione blockchain.
                    </p>
                </div>

                {/* Awards Section */}
                <div className="mb-20">
                    <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">
                        Premi e Riconoscimenti
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {awards.map((award, index) => {
                            const IconComponent = icons[award.icon]; // trova l’icona giusta

                            return (
                                <div
                                    key={index}
                                    className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all"
                                >
                                    {/* Background Gradient */}
                                    <div
                                        className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${award.color} opacity-10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}
                                    />

                                    {/* Icon */}
                                    <div
                                        className={`w-16 h-16 bg-linear-to-br ${award.color} rounded-2xl flex items-center justify-center mb-4 relative z-10 shadow-lg`}
                                    >
                                        {IconComponent ? (
                                            <IconComponent className="w-8 h-8 text-white" />
                                        ) : (
                                            <div className="w-8 h-8 bg-white/30 rounded-md" /> // fallback
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full mb-3">
                                            {award.year}
                                        </span>
                                        <h4 className="text-lg font-black text-gray-900 mb-2">
                                            {award.title}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {award.category}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Articles Carousel */}
                <div className="mb-12">
                    <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">
                        Rassegna Stampa
                    </h3>

                    <div className="relative">
                        {/* Carousel Container */}
                        <div className="overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                            >
                                {mediaArticles.map((article, index) => (
                                    <div
                                        key={index}
                                        className="w-full shrink-0 px-2"
                                    >
                                        <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl">
                                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                                {/* Logo/Icon */}
                                                <div className="shrink-0">
                                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl flex items-center justify-center text-5xl md:text-6xl shadow-lg border border-gray-100">
                                                        {article.logo}
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 text-center md:text-left">
                                                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                                                        <span className="font-black text-blue-600 text-lg">
                                                            {article.outlet}
                                                        </span>
                                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                                                            {article.date}
                                                        </span>
                                                    </div>

                                                    <h4 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
                                                        {article.title}
                                                    </h4>

                                                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                                        {article.excerpt}
                                                    </p>

                                                    <a
                                                        href={article.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/50"
                                                    >
                                                        Leggi l'articolo
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors z-10"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors z-10"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-8">
                            {mediaArticles.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === activeSlide
                                        ? 'bg-blue-600 w-8'
                                        : 'bg-gray-300 hover:bg-blue-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Press Kit CTA */}
                <div className="text-center bg-linear-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <Newspaper className="w-16 h-16 text-white mx-auto mb-6" />
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                        Sei un giornalista?
                    </h3>
                    <p className="text-blue-50 text-lg mb-6 max-w-2xl mx-auto">
                        Scarica il nostro press kit completo con loghi, immagini ad alta risoluzione, comunicati stampa e materiale informativo.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl hover:shadow-white/30 transition-all transform hover:scale-105">
                            Scarica Press Kit
                        </button>
                        <a
                            href="mailto:press@tornesefoundation.org"
                            className="px-8 py-4 bg-blue-700 text-white rounded-xl font-bold border-2 border-white hover:bg-blue-800 transition-all"
                        >
                            Contatta Ufficio Stampa
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MediaSection;