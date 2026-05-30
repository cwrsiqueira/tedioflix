import { Head, Link } from '@inertiajs/react';

export default function Watch({ video }) {
    return (
        <>
            <Head title={`${video.title} — TédioFlix`} />
            <div className="min-h-screen bg-gray-950 text-white flex flex-col">

                {/* Header */}
                <header className="flex items-center gap-4 px-6 md:px-10 py-4 bg-black/80">
                    <Link
                        href={route('home')}
                        className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Voltar
                    </Link>
                    <span className="text-xl font-black text-red-600 tracking-tighter">TédioFlix</span>
                </header>

                {/* Player */}
                <main className="flex-1 flex flex-col items-center px-4 py-8 gap-6">
                    <div className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                        <iframe
                            src={`https://www.youtube.com/embed/${video.youtube_id}?autoplay=1&rel=0`}
                            title={video.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>

                    <div className="w-full max-w-5xl">
                        <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-1">
                            {video.category}
                        </p>
                        <h1 className="text-2xl font-bold text-white mb-4">{video.title}</h1>
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
                </main>

            </div>
        </>
    );
}
