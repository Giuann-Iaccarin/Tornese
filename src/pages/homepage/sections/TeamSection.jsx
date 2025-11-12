import React from 'react';
import { Linkedin, Mail, Award } from 'lucide-react';

const TeamSection = () => {
    const team = [
        {
            name: 'Angelo Sarvonio',
            role: 'CEO & Co-founder',
            bio: 'Esperto in innovazione sostenibile e strategie di business green. Visionario nel combinare tecnologia blockchain e impatto ambientale per creare valore condiviso.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
            linkedin: '#',
            email: 'angelo@tornesefoundation.org',
            skills: ['Business Strategy', 'Green Economy', 'Fundraising']
        },
        {
            name: 'Emmanuel Marigliano',
            role: 'COO & Co-founder',
            bio: 'Specialista in operations e sviluppo di reti distribuite. Coordina l\'implementazione delle colonnine intelligenti e le partnership con enti locali e aziende.',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
            linkedin: '#',
            email: 'emmanuel@tornesefoundation.org',
            skills: ['Operations', 'Supply Chain', 'Partnerships']
        },
        {
            name: 'Giovanni Celeste Iaccarino',
            role: 'CTO & Co-founder',
            bio: 'Architetto blockchain ed esperto di smart contracts. Guida lo sviluppo tecnologico dell\'ecosistema Tornese, dalla tokenomics all\'integrazione IoT delle colonnine.',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
            linkedin: '#',
            email: 'giovanni@tornesefoundation.org',
            skills: ['Blockchain', 'Smart Contracts', 'IoT']
        },
        {
            name: 'Maria Rossi',
            role: 'Public Relations Manager',
            bio: 'Specialista in comunicazione corporate e relazioni istituzionali. Costruisce e mantiene i rapporti con media, istituzioni e stakeholder per amplificare l\'impatto di Tornese Foundation.',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
            linkedin: '#',
            email: 'maria@tornesefoundation.org',
            skills: ['Media Relations', 'Corporate Communication', 'Stakeholder Management']
        }
    ];

    return (
        <section id="team" className="py-20 px-4 bg-linear-to-br from-gray-50 to-blue-50/30">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6 border border-blue-200">
                        <Award className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">
                            Il Nostro Team
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        Le Menti Dietro Tornese
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Un team di innovatori, tecnologi e visionari uniti dalla missione di rendere la sostenibilità accessibile e vantaggiosa per tutti.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden bg-linear-to-br from-blue-500 to-cyan-500">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Social Links - Appear on Hover */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-lg"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-lg"
                                    >
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-black text-gray-900 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-blue-600 font-bold text-sm mb-4">
                                    {member.role}
                                </p>

                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {member.bio}
                                </p>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {member.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-blue-500 to-cyan-500 opacity-10 transform rotate-45 translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-300" />
                        </div>
                    ))}
                </div>

                {/* CTA - Join Team */}
                <div className="mt-16 text-center">
                    <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 shadow-2xl">
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                            Vuoi Far Parte del Team?
                        </h3>
                        <p className="text-blue-50 text-lg mb-6 max-w-2xl mx-auto">
                            Siamo sempre alla ricerca di talenti appassionati di sostenibilità, blockchain e innovazione. Unisciti a noi nel costruire il futuro green.
                        </p>
                        <a
                            href="mailto:careers@tornesefoundation.org"
                            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl hover:shadow-white/30 transition-all transform hover:scale-105"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Invia la Tua Candidatura
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TeamSection;