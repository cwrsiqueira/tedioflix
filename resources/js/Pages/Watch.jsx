import { Head, Link, router } from '@inertiajs/react';
import { useEffect } from 'react';

const DURATIONS = ['10h07', '8h43', '12h00', '6h55', '9h17', '11h33', '10h00', '7h22'];
function fakeDuration(id) {
    return DURATIONS[id % DURATIONS.length] + ' de puro nada';
}

export default function Watch({ video, related }) {
    useEffect(() => {
        try {
            const stored = JSON.parse(localStorage.getItem('tedioflix_watched') || '[]');
            const filtered = stored.filter((v) => v.id !== video.id);
            const updated = [video, ...filtered].slice(0, 10);
            localStorage.setItem('tedioflix_watched', JSON.stringify(updated));
        } catch {
            // silencia erros de localStorage
        }
    }, [video.id]);

    return (
        <>
            <Head title={`${video.title} — TédioFlix`} />
            <div className="min-h-screen bg-gray-950 text-white flex flex-col">

                {/* Header */}
                <header className="flex items-center gap-4 px-6 md:px-10 py-4 bg-black/80">
                    <Link
                        href={route('catalogo')}
                        className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Voltar
                    </Link>
                    <Link href={route('landing')} className="text-xl font-black text-red-600 tracking-tighter">TédioFlix</Link>
                </header>

                {/* Player */}
                <main className="flex-1 flex flex-col items-center px-4 py-8 gap-8">
                    <div className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                        <iframe
                            src={`https://www.youtube.com/embed/${video.youtube_id}?autoplay=1&rel=0`}
                            title={video.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>

                    {/* Info */}
                    <div className="w-full max-w-5xl">
                        <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-1">
                            {video.category}
                        </p>
                        <h1 className="text-2xl font-bold text-white mb-1">{video.title}</h1>
                        <p className="text-gray-500 text-sm mb-4">{fakeDuration(video.id)}</p>

                        {video.description && (
                            <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-800 pt-4 mt-2 mb-4">
                                {video.description}
                            </p>
                        )}

                        <div className="flex items-center gap-3 flex-wrap">
                            <button
                                type="button"
                                className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-5 py-2 rounded text-sm uppercase tracking-wide transition-colors shadow-lg"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Emitir Laudo de Tédio
                            </button>
                            <p className="text-gray-600 text-xs italic">
                                Certificação oficial pela Agência Nacional de Conteúdo Entediante (ANCE)
                            </p>
                        </div>
                    </div>

                    {/* Recomendações */}
                    {related.length > 0 && (
                        <div className="w-full max-w-5xl border-t border-gray-800 pt-8">
                            <p className="text-gray-400 text-sm mb-1">
                                Porque você assistiu <span className="text-white font-semibold">"{video.title}"</span>,
                                nosso algoritmo recomenda com <span className="text-green-400 font-bold">97,3% de precisão</span>:
                            </p>
                            <p className="text-gray-600 text-xs mb-5 italic">
                                (Metodologia certificada pelo Instituto Brasileiro de Recomendações Desnecessárias — IBRD)
                            </p>
                            <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide">
                                {related.map((r) => (
                                    <button
                                        key={r.id}
                                        onClick={() => router.visit(route('watch', r.id))}
                                        className="flex-shrink-0 w-44 text-left group focus:outline-none"
                                    >
                                        <div className="relative overflow-hidden rounded-md">
                                            <img
                                                src={`https://img.youtube.com/vi/${r.youtube_id}/hqdefault.jpg`}
                                                alt={r.title}
                                                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                                                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                            <div className="absolute bottom-1 right-1 bg-black/70 text-gray-300 text-[10px] px-1.5 py-0.5 rounded">
                                                {fakeDuration(r.id)}
                                            </div>
                                        </div>
                                        <p className="mt-1.5 text-gray-400 text-xs leading-snug line-clamp-2">
                                            {r.title}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </main>

            </div>
        </>
    );
}
