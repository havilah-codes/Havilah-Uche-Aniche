'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Reveal from './Reveal';

const details = [
    { label: 'Based in', value: 'Port-Harcourt, NG' },
    { label: 'Building', value: 'Drip-Skip' },
    { label: 'Focus', value: 'Eng · AI · Product' },
];

const IntroSegment = () => {
    return (
        <section
            id="about"
            className="relative overflow-hidden border-t border-white/10 bg-[#080909] px-6 py-16 text-stone-300 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
        >
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:72px_72px]" />

            <div className="relative mx-auto grid max-w-[1800px] gap-14 lg:grid-cols-[1.5fr_0.8fr_0.85fr] lg:gap-20">
                <Reveal>
                <p className="font-body max-w-2xl text-lg leading-[1.6] text-stone-400 sm:text-xl">
                    I&apos;m <strong className="font-semibold text-stone-100">Havilah Uche-Aniche</strong> &mdash; I write software, ship real products, and study what it actually takes to build a startup worth building. Right now that means building <strong className="font-semibold text-stone-100">Drip-Skip</strong> and thinking, in public, about AI, education, and building for Africa.
                </p>
                </Reveal>

                <Reveal index={1}>
                <dl className="font-mono grid gap-4 self-end text-xs uppercase tracking-[0.16em] text-stone-500 sm:grid-cols-3 lg:block">
                    {details.map((detail) => (
                        <div key={detail.label} className="flex flex-col gap-2 lg:mb-4 lg:flex-row lg:justify-between lg:gap-6">
                            <dt>{detail.label}</dt>
                            <dd className="m-0 font-medium text-stone-200">{detail.value}</dd>
                        </div>
                    ))}
                </dl>
                </Reveal>

                <Reveal index={2}>
                <a
                    href="#work"
                    className="font-mono group flex items-center justify-between self-end border-b border-stone-700 pb-3 text-xs font-medium uppercase tracking-[0.16em] text-stone-200 transition-colors hover:border-stone-300 hover:text-white"
                >
                    Selected work
                    <span className="ml-4 flex h-9 w-9 items-center justify-center rounded-full border border-stone-700 transition-transform duration-300 group-hover:translate-y-1 group-hover:border-stone-300">
                        <FontAwesomeIcon icon={faArrowDown} className="h-3 w-3" />
                    </span>
                </a>
                </Reveal>
            </div>
        </section>
    );
};

export default IntroSegment;
