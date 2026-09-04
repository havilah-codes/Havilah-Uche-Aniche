import Reveal from './Reveal';

const AboutSection = () => {
    return (
        <section
            id="about-detail"
            className="relative overflow-hidden bg-[#f1efe8] px-6 py-20 text-[#171717] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
        >
            <div className="mx-auto max-w-[1580px]">
                <Reveal className="flex items-center justify-between border-b border-black/15 pb-8">
                    <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-blue-800">
                        01 &mdash; About
                    </span>
                    <span className="font-mono hidden text-xs uppercase tracking-[0.18em] text-black/45 sm:block">
                        The person behind the products
                    </span>
                </Reveal>

                <Reveal className="grid gap-16 pt-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:pt-28">
                    <h2 className="font-display max-w-lg text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                        A builder
                        <br />
                        first<span className="text-blue-800">.</span>
                    </h2>

                    <div className="max-w-3xl space-y-8">
                        <p className="font-body text-xl leading-[1.5] text-black/70 sm:text-2xl">
                            Havilah is a startup founder and product thinker based in Nigeria, working at the intersection of engineering, product, and problem-solution-fit.
                        </p>
                        <p className="font-body text-base leading-[1.7] text-black/60 sm:text-lg">
                            The work is simple to describe and difficult to fake: find a problem worth solving, build something people can use, and stay close enough to real users to know what should happen next. The focus is on useful technology, thoughtful interfaces, and products made for African realities.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            {['Engineering', 'Product', 'AI', 'Education'].map((focus) => (
                                <span
                                    key={focus}
                                    className="font-mono border border-black/20 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-black/65"
                                >
                                    {focus}
                                </span>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default AboutSection;
