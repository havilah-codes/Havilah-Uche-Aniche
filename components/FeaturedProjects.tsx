import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Reveal from './Reveal';

const projectDetails = [
    {
        label: 'Problem',
        text: 'Sharing an outfit today means posting it into a feed built for everything else — no format, no reaction, no community built around style itself.',
    },
    {
        label: 'What I built',
        text: 'A social app where users post their fits and the community reacts with a simple binary signal — Drip or Skip — backed by real-time messaging.',
    },
    {
        label: 'My role',
        text: 'Solo full-stack engineer and product owner — architecture, backend, frontend, and infrastructure, end to end.',
    },
    {
        label: 'Status',
        text: 'Core product — auth, feed, and real-time messaging — is live in production. Currently building push notifications.',
    },
];

const technologies = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase Auth', 'Supabase', 'Socket.io', 'Vercel'];

const genesisDetails = [
    {
        label: 'Problem',
        text: 'Most portfolio experiments either mimic real software pixel-for-pixel or read like a static case study — neither invites someone to actually explore an interface as a story.',
    },
    {
        label: 'What I built',
        text: 'An interactive, scroll-driven experience where a working macOS-style desktop — menu bar, dock, and draggable windows — visually evolves through five eras of Apple\'s design history as the user scrolls.',
    },
    {
        label: 'My role',
        text: 'Solo designer and frontend engineer — motion design, UI system, and implementation end to end.',
    },
    {
        label: 'Status',
        text: 'In development — desktop shell (menu bar, dock, window system) is built; era transitions and story content are in progress.',
    },
];

const genesisTechnologies = ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand'];

const FeaturedProjects = () => {
    return (
        <section id="work" className="relative overflow-hidden bg-[#080909] px-6 py-20 text-stone-300 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />

            <div className="relative mx-auto max-w-[1580px]">
                <Reveal className="flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-blue-400">
                        02 &mdash; Selected work
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-stone-600">
                        Featured project
                    </span>
                </Reveal>

                <Reveal className="mt-20 grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-20">
                    <Reveal>
                        <div className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-blue-400" />
                            <span className="font-mono text-xs uppercase tracking-[0.16em] text-stone-500">Live in production</span>
                        </div>
                        <h2 className="font-display mt-5 text-6xl font-semibold leading-none tracking-[-0.05em] text-stone-100 sm:text-7xl lg:text-8xl">
                            Drip-Skip
                        </h2>
                        <p className="font-display mt-8 max-w-xl text-xl font-semibold italic leading-[1.35] text-stone-200 sm:text-2xl">
                            A social platform for fashion &mdash; post your fit, let the internet decide.
                        </p>
                        <a
                            href="https://drip-skip.vercel.app"
                            target="_blank"
                            rel="noreferrer"
                            className="font-mono mt-8 inline-flex items-center gap-3 border-b border-blue-400/60 pb-2 text-xs font-medium uppercase tracking-[0.14em] text-blue-400 transition-colors hover:border-blue-300 hover:text-blue-300"
                        >
                            Visit Drip-Skip
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
                        </a>

                        <dl className="mt-16 grid gap-7 border-t border-white/10 pt-8">
                            {projectDetails.map((detail) => (
                                <div key={detail.label} className="grid gap-3 sm:grid-cols-[5.5rem_1fr] sm:gap-8">
                                    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-stone-600">{detail.label}</dt>
                                    <dd className="font-body m-0 max-w-xl text-sm leading-[1.6] text-stone-400">{detail.text}</dd>
                                </div>
                            ))}
                        </dl>

                        <div className="mt-10 flex flex-wrap gap-2">
                            {technologies.map((technology) => (
                                <span key={technology} className="font-mono border border-white/10 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.1em] text-stone-500">
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal index={1} className="relative aspect-[1.12] overflow-hidden border border-white/10 bg-[#0b0c0c]">
                        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />
                        <Image
                            src="/drip-skip.jpg"
                            alt="Drip-Skip app"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="relative z-10 object-cover"
                        />
                    </Reveal>
                </Reveal>

                <Reveal className="mt-36 border-t border-white/10 pt-5">
                    <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-blue-400">
                            03 &mdash; SELECTED WORK
                        </span>
                        <span className="font-mono text-xs uppercase tracking-[0.18em] text-stone-600">
                            FEATURED PROJECT
                        </span>
                    </div>
                </Reveal>

                <Reveal className="mt-20 grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-20">
                    <Reveal>
                        <div className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-amber-400" />
                            <span className="font-mono text-xs uppercase tracking-[0.16em] text-stone-500">IN DEVELOPMENT</span>
                        </div>
                        <h2 className="font-display mt-5 text-6xl font-semibold leading-none tracking-[-0.05em] text-stone-100 sm:text-7xl lg:text-8xl">
                            Genesis
                        </h2>
                        <p className="font-display mt-8 max-w-xl text-xl font-semibold italic leading-[1.35] text-stone-200 sm:text-2xl">
                            A macOS-inspired scroll story of the Apple brand &mdash; from garage to global icon.
                        </p>
                        <a
                            href="https://genesis-story.vercel.app/"
                            className="font-mono mt-8 inline-flex items-center gap-3 border-b border-blue-400/60 pb-2 text-xs font-medium uppercase tracking-[0.14em] text-blue-400 transition-colors hover:border-blue-300 hover:text-blue-300"
                        >
                            VIEW GENESIS
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
                        </a>

                        <dl className="mt-16 grid gap-7 border-t border-white/10 pt-8">
                            {genesisDetails.map((detail) => (
                                <div key={detail.label} className="grid gap-3 sm:grid-cols-[5.5rem_1fr] sm:gap-8">
                                    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-stone-600">{detail.label}</dt>
                                    <dd className="font-body m-0 max-w-xl text-sm leading-[1.6] text-stone-400">{detail.text}</dd>
                                </div>
                            ))}
                        </dl>

                        <div className="mt-10 flex flex-wrap gap-2">
                            {genesisTechnologies.map((technology) => (
                                <span key={technology} className="font-mono border border-white/10 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.1em] text-stone-500">
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal index={1} className="relative aspect-[1.12] overflow-hidden border border-white/10 bg-[#0b0c0c]">
                        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />
                        <Image
                            src="/genesis.jpg"
                            alt="Genesis macOS-inspired scroll story preview"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="relative z-10 object-cover"
                        />
                    </Reveal>
                </Reveal>
            </div>
        </section>
    );
};

export default FeaturedProjects;
