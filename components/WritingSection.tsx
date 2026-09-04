import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Reveal from './Reveal';

const articles = [
    {
        date: 'Sep 2, 2026',
        title: 'The Art of Being Steve Jobs',
        description: 'The man that defined the world we live in and what we can learn from him.',
    },
    {
        date: 'Aug 28, 2026',
        title: 'Beyond the Olodo Uprising: Attention vs. Competence',
        description: 'A critique of modern fame, the illusion of influence, and the quiet death of real substance.',
    },
    {
        date: 'Aug 16, 2026',
        title: 'Not All Mercenaries Wear Masks. Some Just Send You Offer Letter.',
        description: 'I think we should look at the other side of, Not All Heroes Wear Capes.',
    },
];

const substackUrl = 'https://havilah-uac.substack.com';

const WritingSection = () => {
    return (
        <section id="writing" className="relative overflow-hidden bg-[#f1efe8] px-6 py-20 text-[#171717] sm:px-10 sm:py-28 lg:px-20 lg:py-36">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />

            <div className="relative mx-auto max-w-[1172px]">
                <Reveal className="flex items-end justify-between border-t border-black/15 pt-12">
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-blue-800">
                        05 &mdash; Writing
                    </span>
                    <h2 className="font-display m-0 text-right text-5xl font-semibold leading-none tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                        Thinking in public.
                    </h2>
                </Reveal>

                <Reveal className="font-body mt-24 max-w-2xl text-lg leading-[1.55] text-stone-400 sm:text-xl">
                    I write about AI, product, and building for Africa on my Substack &mdash;{' '}
                    <a href={substackUrl} target="_blank" rel="noreferrer" className="font-semibold text-blue-800 underline decoration-blue-800/50 underline-offset-4 transition-colors hover:text-blue-600">
                        havilah-uac.substack.com
                    </a>
                    .
                </Reveal>

                <div className="mt-16 grid gap-7 lg:grid-cols-3">
                    {articles.map((article, index) => (
                        <Reveal key={article.title} index={index}>
                        <article className="flex min-h-[280px] flex-col border border-black/15 p-7 sm:p-8">
                            <time className="font-mono text-[10px] uppercase tracking-[0.14em] text-black/45">{article.date}</time>
                            <h3 className="font-display mt-6 text-2xl font-semibold leading-[1.1] tracking-[-0.03em]">{article.title}</h3>
                            <p className="font-body mt-5 text-sm leading-[1.6] text-black/60">{article.description}</p>
                            <a href={substackUrl} target="_blank" rel="noreferrer" className="font-mono mt-auto pt-8 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-800 transition-colors hover:text-blue-600">
                                Read on Substack
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 h-3 w-3" aria-hidden="true" />
                            </a>
                        </article>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-12 inline-block">
                <a href={substackUrl} target="_blank" rel="noreferrer" className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-black/55 transition-colors hover:text-blue-800">
                    Read all articles
                    <FontAwesomeIcon icon={faArrowUp} className="ml-2 h-3 w-3" aria-hidden="true" />
                </a>
                </Reveal>
            </div>
        </section>
    );
};

export default WritingSection;