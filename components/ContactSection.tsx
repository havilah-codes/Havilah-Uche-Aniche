import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Reveal from './Reveal';

const contactLinks = [
    { label: 'Email', href: 'mailto:havilah@ucheaniche.com', external: false },
    { label: 'GitHub', href: 'https://github.com/havilahUAC', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/havilahUAC', external: true },
];

const ContactSection = () => {
    return (
        <section id="contact" className="relative overflow-hidden bg-[#080909] px-6 pb-0 pt-20 text-stone-300 sm:px-10 sm:pt-28 lg:px-20 lg:pt-36">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px]" />

            <div className="relative mx-auto max-w-[1172px] pb-24 sm:pb-32 lg:pb-36">
                <Reveal className="max-w-2xl">
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-blue-400">
                        07 &mdash; Contact
                    </span>
                    <h2 className="font-display mt-4 text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-stone-100 sm:text-6xl lg:text-7xl">
                        Have a problem <em className="text-blue-400">worth</em>
                        <br />
                        building around?
                    </h2>
                    <p className="font-body mt-8 max-w-lg text-base leading-[1.7] text-stone-400 sm:text-lg">
                        I&apos;m always open to talking about products, startups, or an interesting technical problem &mdash; reach out through whichever of these works for you.
                    </p>
                </Reveal>

                <div className="mt-20 border-t border-white/10">
                    {contactLinks.map((link, index) => (
                        <Reveal key={link.label} index={index}>
                        <a
                            href={link.href}
                            target={link.external ? '_blank' : undefined}
                            rel={link.external ? 'noreferrer' : undefined}
                            className="group flex items-center justify-between border-b border-white/10 py-7 text-stone-100 transition-colors hover:text-blue-400 sm:py-8"
                        >
                            <span className="font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{link.label}</span>
                            <FontAwesomeIcon icon={link.external ? faArrowUpRightFromSquare : faArrowUp} className="h-3.5 w-3.5 text-stone-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-blue-400" aria-hidden="true" />
                        </a>
                        </Reveal>
                    ))}
                </div>
            </div>

            <footer className="relative border-t border-white/10">
                <Reveal className="mx-auto flex max-w-[1172px] items-center justify-between py-6">
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-stone-600">
                        &copy; 2026 Havilah Uche-Aniche &mdash; Designed &amp; built in Nigeria
                    </span>
                    <a href="#home" className="font-mono text-[9px] uppercase tracking-[0.12em] text-stone-500 transition-colors hover:text-blue-400">
                        Back to top
                        <FontAwesomeIcon icon={faArrowUp} className="ml-2 h-2.5 w-2.5" aria-hidden="true" />
                    </a>
                </Reveal>
            </footer>
        </section>
    );
};

export default ContactSection;