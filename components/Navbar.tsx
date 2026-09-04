'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import ProfilePic from '../public/profile-pic.jpg';
import {
  faArrowRight,
  faBars,
  faEnvelope,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBehance,
  faDribbble,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/havilahUAC', icon: faGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/havilahUAC', icon: faLinkedinIn },
  { label: 'Dribbble', href: 'https://dribbble.com/havilahUAC', icon: faDribbble },
  { label: 'Behance', href: 'https://behance.net/havilahUAC', icon: faBehance },
];

const pageSections = [
  { label: 'Home', href: '#home' },
  { label: 'Introduction', href: '#about' },
  { label: 'About', href: '#about-detail' },
  { label: 'Selected work', href: '#work' },
  { label: 'How I Build', href: '#services' },
  { label: 'Writing', href: '#writing' },
  { label: 'Currently', href: '#currently' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [brandExpanded, setBrandExpanded] = useState(false);
  const [brandInteracted, setBrandInteracted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (!menuClosing) {
      return;
    }

    const closeTimer = window.setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
    }, 360);

    return () => window.clearTimeout(closeTimer);
  }, [menuClosing]);

  const closeMenu = () => setMenuClosing(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = pageSections
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-transparent"
    >
      <nav
        className={`relative z-10 mx-auto flex items-center px-4 transition-[max-width,justify-content,padding] duration-300 sm:px-6 lg:px-8 ${
          isScrolled
            ? 'max-w-fit justify-between mt-4 rounded-full border border-white/10 bg-slate-950/75 py-1.5 backdrop-blur-xl'
            : 'max-w-6xl justify-between py-4'
        }`}
      >
        {isScrolled ? (
          <Image
            className="h-10 w-10 shrink-0 rounded-full object-cover"
            src={ProfilePic}
            alt="Havilah"
            width={40}
            height={40}
          />
        ) : (
          <button
            type="button"
            onClick={() => {
              setBrandInteracted(true);
              setBrandExpanded((expanded) => !expanded);
            }}
            aria-expanded={brandExpanded}
            aria-label={brandExpanded ? 'Hide Havilah name' : 'Show Havilah name'}
            className={`relative flex h-14 items-center rounded-full text-left transition-[background-color,border-color,padding-right,width] duration-300 ${
              brandExpanded
                ? 'w-40 border border-white/10 bg-white/5 pr-3'
                : 'w-14 bg-transparent'
            }`}
          >
            {!brandInteracted && (
              <span className="pointer-events-none absolute inset-0 animate-ping rounded-full border border-cyan-300/60" />
            )}
            <Image
              className="relative z-10 h-14 w-14 shrink-0 rounded-full object-cover"
              src={ProfilePic}
              alt="Havilah"
              width={56}
              height={56}
            />
            {brandExpanded && (
              <span className="font-display relative z-10 ml-2 text-lg font-semibold tracking-tight text-white">
                Havilah
              </span>
            )}
          </button>
        )}

        <div className={`${isScrolled ? 'hidden' : 'hidden items-center gap-8 md:flex'}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
                className="font-body text-[14px] font-medium text-slate-300 transition hover:text-white md:text-[15px]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className={`${isScrolled ? 'hidden' : 'hidden items-center gap-3 md:flex'}`}>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <FontAwesomeIcon icon={link.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="font-body inline-flex items-center gap-2 rounded-full bg-white p-4 text-[15px] font-semibold leading-none text-slate-950 transition hover:bg-white/90"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            if (menuOpen) {
              closeMenu();
              return;
            }

            setMenuClosing(false);
            setMenuOpen(true);
          }}
          aria-label="Toggle navigation menu"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white ${
            isScrolled ? 'ml-2' : 'md:hidden'
          }`}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="h-4 w-4" />
        </button>
      </nav>

      <div className="fixed right-5 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-3 sm:right-8">
        {pageSections.map((section) => {
          const sectionId = section.href.slice(1);
          const isActive = activeSection === sectionId;

          return (
            <a
              key={section.href}
              href={section.href}
              aria-label={`Go to ${section.label}`}
              aria-current={isActive ? 'location' : undefined}
              title={section.label}
              className="group flex h-5 w-5 items-center justify-center"
            >
              <span
                className={`block rounded-full border-2 border-stone-100 transition-all duration-300 ${
                  isActive
                    ? 'h-5 w-2 bg-stone-100 border border-stone-100'
                    : 'h-5 w-2 bg-stone-400/45 group-hover:bg-stone-200/80'
                }`}
              />
            </a>
          );
        })}
      </div>

      {menuOpen && (
        <div
          className={`${isScrolled ? 'fixed inset-0 z-0 overflow-y-auto border border-white/15 bg-slate-950/60 backdrop-blur-2xl' : 'border-t border-white/10 bg-slate-950/95'} ${
            menuClosing ? 'menu-glass-out' : 'menu-glass-in'
          } ${
            isScrolled ? '' : 'md:hidden'
          }`}
        >
          <div className={`mx-auto flex max-w-6xl flex-col px-4 sm:px-6 ${isScrolled ? 'min-h-screen justify-center pb-12 pt-28' : 'gap-4 py-5'}`}>
            {isScrolled && (
              <div className="menu-panel-content mb-8 flex items-end justify-between border-b border-white/15 pb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-200/70">
                  Navigation
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                  00 / 05
                </span>
              </div>
            )}

            <div className={isScrolled ? 'flex flex-col' : 'flex flex-col gap-4'}>
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={`font-display group flex items-center justify-between border-b border-white/10 py-3 text-3xl font-semibold tracking-tight text-slate-200 transition hover:border-cyan-200/60 hover:text-white sm:text-4xl ${isScrolled ? (menuClosing ? 'menu-link-out' : 'menu-link-in') : 'font-body text-base font-medium'}`}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-[10px] font-normal tracking-normal text-white/30 transition group-hover:text-cyan-200/80">
                      0{index + 1}
                    </span>
                    {item.label}
                  </span>
                  {isScrolled && (
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="h-5 w-5 -translate-x-2 text-cyan-200/0 transition duration-300 group-hover:translate-x-0 group-hover:text-cyan-200"
                    />
                  )}
                </a>
              ))}
            </div>

            <div className={`${isScrolled ? 'mt-10' : 'mt-2'} flex items-center gap-3`}>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200"
                >
                  <FontAwesomeIcon icon={link.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={closeMenu}
              className={`font-body inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-[15px] font-semibold leading-none text-slate-950 transition hover:bg-cyan-100 ${isScrolled ? 'mt-6 w-full' : 'mt-2'}`}
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-3.5 w-3.5" />
              Book a call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
