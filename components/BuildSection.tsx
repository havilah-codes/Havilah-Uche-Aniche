import Reveal from './Reveal';

const principles = [
    {
        label: 'Build',
        title: 'Ship the rough version.',
        text: "Ideas are cheap until they're shipped. I'd rather have something real and imperfect in front of users than something flawless sitting in my head. Momentum beats polish, early.",
    },
    {
        label: 'Learn',
        title: 'Let users tell you what\'s true.',
        text: 'Every interaction is data. I build feedback loops into a product from day one instead of guessing what people want and defending the guess.',
    },
    {
        label: 'Iterate',
        title: "The first version isn't the point.",
        text: "It's the fastest way to find out what the real version should be. I treat engineering and product as the same muscle, exercised on repeat.",
    },
];

const BuildSection = () => {
    return (
        <section id="services" className="relative overflow-hidden bg-[#080909] px-6 py-20 text-stone-300 sm:px-10 sm:py-28 lg:px-20 lg:py-36">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px]" />

            <div className="relative mx-auto max-w-[1760px]">
                <Reveal className="grid items-start gap-8 border-t border-white/10 pt-12 lg:grid-cols-[130px_1fr] lg:gap-5">
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-blue-400">
                        03 &mdash; How I Build
                    </span>
                    <h2 className="font-display m-0 text-left text-4xl font-semibold leading-none tracking-[-0.04em] text-stone-100 sm:text-5xl lg:text-right lg:text-6xl">
                        Build. Learn. Iterate.
                    </h2>
                </Reveal>

                <div className="mt-16 border-t border-white/10">
                    {principles.map((principle, index) => (
                        <Reveal key={principle.label} index={index}>
                        <article
                            key={principle.label}
                            className={`grid gap-8 border-b border-white/10 py-6 sm:grid-cols-[130px_1fr] sm:gap-5 sm:py-5 ${
                                index === 1 ? 'sm:ml-14' : index === 2 ? 'sm:ml-28' : ''
                            }`}
                        >
                            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-blue-400">
                                {principle.label}
                            </span>
                            <div className="max-w-3xl">
                                <h3 className="font-display m-0 text-2xl font-semibold leading-tight tracking-[-0.03em] text-stone-100 sm:text-3xl">
                                    {principle.title}
                                </h3>
                                <p className="font-body mt-4 m-0 max-w-3xl text-sm leading-[1.55] text-stone-400 sm:text-[15px]">
                                    {principle.text}
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

export default BuildSection;