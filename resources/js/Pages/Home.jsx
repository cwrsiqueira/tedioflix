import { Head, router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const CATEGORY_DESCRIPTIONS = {
    'Tinta Secando':      'Para quem tem tempo livre e pretende continuar assim.',
    'Água Fervendo':      'Tensão máxima. Suspense de tirar o fôlego — literalmente.',
    'Grama Crescendo':    'A natureza em seu ritmo mais adequado: lento e sem justificativa.',
    'Lareira Crepitando': 'Aquecimento emocional sem nenhum comprometimento.',
    'Chuva na Janela':    'Meteorologia contemplativa em resolução compatível com a melancolia.',
};

const DURATIONS = ['10h07', '8h43', '12h00', '6h55', '9h17', '11h33', '10h00', '7h22'];

function fakeDuration(id) {
    return DURATIONS[id % DURATIONS.length] + ' de puro nada';
}

function isAbsoluteCinema(id) {
    return id % 5 === 0;
}

function VideoCard({ video, onClick }) {
    return (
        <button
            onClick={() => onClick(video)}
            className="flex-shrink-0 w-48 text-left cursor-pointer group focus:outline-none"
        >
            <div className="relative overflow-hidden rounded-md">
                <img
                    src={`https://img.youtube.com/vi/${video.youtube_id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
                <div className="absolute bottom-1 right-1 bg-black/70 text-gray-300 text-[10px] px-1.5 py-0.5 rounded">
                    {fakeDuration(video.id)}
                </div>
                {isAbsoluteCinema(video.id) && (
                    <div className="absolute top-1 left-1 bg-yellow-500 text-black text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
                        Absolute Cinema
                    </div>
                )}
            </div>
            <p className="mt-1.5 text-gray-300 text-xs leading-snug line-clamp-2 px-0.5">
                {video.title}
            </p>
        </button>
    );
}

function CategoryRow({ category, videos, onVideoClick }) {
    const description = CATEGORY_DESCRIPTIONS[category];
    return (
        <div className="mb-10">
            <div className="px-6 md:px-10 mb-3">
                <h2 className="text-white text-lg font-semibold">{category}</h2>
                {description && (
                    <p className="text-gray-500 text-xs mt-0.5">{description}</p>
                )}
            </div>
            <div className="flex gap-3 overflow-x-auto pb-3 px-6 md:px-10 scrollbar-hide">
                {videos.map((video) => (
                    <VideoCard key={video.id} video={video} onClick={onVideoClick} />
                ))}
            </div>
        </div>
    );
}

export default function Home({ categories }) {
    const [watched, setWatched] = useState([]);
    const categoryEntries = Object.entries(categories);
    const featuredVideo = categoryEntries[0]?.[1]?.[0];

    useEffect(() => {
        try {
            const stored = JSON.parse(localStorage.getItem('tedioflix_watched') || '[]');
            setWatched(stored);
        } catch {
            setWatched([]);
        }
    }, []);

    function handleVideoClick(video) {
        router.visit(route('watch', video.id));
    }

    return (
        <>
            <Head title="TédioFlix — Streaming de Conteúdo Entediante" />
            <div className="min-h-screen bg-gray-950 text-white">

                {/* Header */}
                <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent px-6 md:px-10 py-4 flex items-center gap-8">
                    <span className="text-2xl font-black text-red-600 tracking-tighter select-none">TédioFlix</span>
                    <nav className="hidden md:flex gap-5 text-sm text-gray-300">
                        <a href="/" className="text-white font-medium">Início</a>
                        <span className="cursor-default">Categorias</span>
                        <span className="cursor-default">Novidades</span>
                    </nav>
                </header>

                {/* Hero */}
                {featuredVideo && (
                    <section className="relative h-[70vh] flex items-end overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(https://img.youtube.com/vi/${featuredVideo.youtube_id}/maxresdefault.jpg)` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
                        <div className="relative z-10 px-6 md:px-10 pb-12 max-w-2xl">
                            <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">Em destaque</p>
                            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-2">{featuredVideo.title}</h1>
                            <p className="text-gray-400 text-sm mb-1">
                                {featuredVideo.category} · {fakeDuration(featuredVideo.id)}
                            </p>
                            <p className="text-gray-500 text-xs mb-6 max-w-md">
                                O único serviço de streaming com garantia contratual de zero adrenalina.
                                Conteúdo rigorosamente selecionado pela Comissão de Avaliação de Nulidade Técnica.
                            </p>
                            <button
                                onClick={() => handleVideoClick(featuredVideo)}
                                className="flex items-center gap-2 bg-white text-black font-bold px-6 py-2.5 rounded hover:bg-gray-200 transition-colors text-sm"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                Assistir
                            </button>
                        </div>
                    </section>
                )}

                {/* Catálogo */}
                <section className="relative z-10 -mt-16 pb-16">

                    {/* Continue Assistindo */}
                    {watched.length > 0 && (
                        <div className="mb-10">
                            <div className="px-6 md:px-10 mb-3">
                                <h2 className="text-white text-lg font-semibold">Continue Assistindo</h2>
                                <p className="text-gray-500 text-xs mt-0.5">Você começou. Por algum motivo, não parou.</p>
                            </div>
                            <div className="flex gap-3 overflow-x-auto pb-3 px-6 md:px-10 scrollbar-hide">
                                {watched.map((video) => (
                                    <VideoCard key={video.id} video={video} onClick={handleVideoClick} />
                                ))}
                            </div>
                        </div>
                    )}

                    {categoryEntries.map(([category, videos]) => (
                        <CategoryRow
                            key={category}
                            category={category}
                            videos={videos}
                            onVideoClick={handleVideoClick}
                        />
                    ))}
                </section>

                <footer className="text-center text-gray-600 text-xs pb-8">
                    © 2026 TédioFlix · Todos os direitos de entediar você reservados
                </footer>
            </div>
        </>
    );
}
