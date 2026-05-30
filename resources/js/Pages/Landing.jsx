import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

const TEXTO_FILOSOFICO = `
O ser humano contemporâneo vive em estado de hiperatividade cognitiva permanente. Notificações. Alertas. Atualizações. O psicólogo Mihaly Csikszentmihalyi descreveu o "estado de flow" como condição ideal de engajamento humano — aquele momento em que desafio e habilidade se equilibram perfeitamente. O TédioFlix não oferece isso.

O TédioFlix oferece o oposto.

Estudos publicados no British Journal of Psychology por Sandi Mann e Rebekah Cadman demonstraram que o tédio aumenta significativamente a criatividade. Participantes expostos a tarefas entediantes apresentaram desempenho superior em testes de pensamento divergente. Em outras palavras: assistir água ferver pode, clinicamente, tornar você uma pessoa melhor.

Albert Camus, em O Mito de Sísifo, argumentou que a existência humana é fundamentalmente absurda — um eterno retorno de ações sem propósito último. Sísifo empurra sua pedra. A água ferve. A tinta seca. O ciclo se repete. Camus concluiu que devemos imaginar Sísifo feliz. Nós concluímos que devemos imaginar Sísifo assistindo ao TédioFlix.

A filosofia oriental do Wu Wei — conceito taoísta de não-ação, de agir sem esforço, de fluir com o natural — encontra sua expressão digital mais pura em uma lareira crepitando em loop de 10 horas. Não há enredo. Não há conflito. Não há resolução. Há apenas fogo.

Em 2014, o cineasta britânico Charlie Shackleton submeteu à censura do Reino Unido um filme de dez horas de tinta secando. O propósito era forçar os censores a assistirem ao filme completo para cobrar a taxa máxima de certificação. Era um protesto. Era arte. Era, acima de tudo, entediante por design. O TédioFlix herda essa tradição.

Martin Heidegger distinguia entre dois tipos de tédio: o tédio superficial — aquele que sentimos enquanto esperamos o ônibus — e o tédio profundo — aquele que nos acomete sem causa aparente e nos confronta com a vacuidade do ser. O TédioFlix não garante qual dos dois você vai experimentar. Mas garante que você vai experimentar um deles.

Não somos uma plataforma de entretenimento. Somos uma plataforma de desaceleração cognitiva certificada. Nosso catálogo foi rigorosamente selecionado pela Comissão de Avaliação de Nulidade Técnica com base nos seguintes critérios: ausência total de narrativa, impossibilidade de spoiler e incapacidade de gerar qualquer tipo de adrenalina mensurável.

Você foi avisado.
`;

export default function Landing() {
    const [aberto, setAberto] = useState(false);

    return (
        <>
            <Head title="TédioFlix" />
            <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">

                {/* Gradiente de fundo sutil */}
                <div className="absolute inset-0 bg-gradient-radial from-red-950/20 via-transparent to-transparent pointer-events-none" />

                {/* Conteúdo central */}
                <div className="relative z-10 flex flex-col items-center text-center max-w-xl w-full">

                    {/* Logo */}
                    <h1 className="text-7xl md:text-9xl font-black text-red-600 tracking-tighter leading-none mb-4 select-none">
                        TédioFlix
                    </h1>

                    {/* Tagline */}
                    <p className="text-gray-400 text-sm md:text-base mb-10 max-w-sm">
                        O único serviço de streaming com garantia contratual de zero adrenalina.
                    </p>

                    {/* Botão iniciar */}
                    <Link
                        href={route('catalogo')}
                        className="bg-white text-black font-black text-lg px-10 py-3 rounded hover:bg-gray-200 transition-colors tracking-wide uppercase mb-12"
                    >
                        Começar a Não Fazer Nada
                    </Link>

                    {/* Toggle Saiba mais */}
                    <button
                        onClick={() => setAberto(!aberto)}
                        className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors text-sm"
                    >
                        Saiba mais
                        <svg
                            className={`w-4 h-4 transition-transform duration-300 ${aberto ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Texto filosófico */}
                    <div className={`overflow-hidden transition-all duration-500 ${aberto ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
                        <div className="text-left text-gray-400 text-sm leading-relaxed space-y-4 border-t border-gray-800 pt-8 pb-4">
                            <h2 className="text-white font-bold text-base mb-4">
                                Sobre o TédioFlix: Uma Análise Comportamental, Filosófica e Razoavelmente Desnecessária
                            </h2>
                            {TEXTO_FILOSOFICO.trim().split('\n\n').map((paragrafo, i) => (
                                <p key={i}>{paragrafo}</p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <p className="absolute bottom-6 text-gray-700 text-xs">
                    © 2026 TédioFlix · Todos os direitos de entediar você reservados
                </p>
            </div>
        </>
    );
}
