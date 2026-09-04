import Reveal from './Reveal';

const currentFocus = [
    {
        label: 'Building',
        title: 'Drip-Skip',
        description: 'A social platform for fashion — post your fit, let the internet decide.',
    },
    {
        label: 'Exploring',
        title: 'AI-native products',
        description: 'Early concepts — Cognify and TanoAI.',
    },
    {
        label: 'Learning',
        title: 'Algorithms & product development',
        description: 'Software engineering fundamentals, systems thinking, and how to evaluate an idea before building it.',
    },
];

const CurrentlySection = () => {
    return (
        <section id="currently" className="relative overflow-hidden bg-[#f1efe8] px-6 py-20 text-[#171717] sm:px-10 sm:py-28 lg:px-20 lg:py-36">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />

            <div className="relative mx-auto max-w-[1172px]">
                <Reveal className="flex items-end justify-between border-t border-black/15 pt-12">
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-blue-800">
                        06 &mdash; Currently
                    </span>
                    <h2 className="font-display m-0 text-right text-5xl font-semibold leading-none tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                        Right now.
                    </h2>
                </Reveal>

                <div className="mt-16 overflow-hidden border border-black/15">
                    {currentFocus.map((item, index) => (
                        <Reveal key={item.label} index={index}>
                        <article className="grid gap-6 border-b border-black/15 px-7 py-8 last:border-b-0 sm:grid-cols-[200px_1fr] sm:items-center sm:px-8 sm:py-7">
                            <div className="font-mono flex items-center gap-3 text-[10px] uppercase tracking-[0.12em] text-black/50">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-700" />
                                {item.label}
                            </div>
                            <div>
                                <h3 className="font-display m-0 text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">
                                    {item.title}
                                </h3>
                                <p className="font-body m-0 mt-2 border-b border-blue-800/60 pb-3 text-sm leading-[1.5] text-black/60 sm:text-[15px]">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CurrentlySection;