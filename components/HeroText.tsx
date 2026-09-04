'use client';

import { useEffect, useState } from 'react';
import Reveal from './Reveal';

const headline = `Hi, I'm Havilah Uche-Aniche, Startup Founder 
& And A Builder, Creating
whats next.`;

const encryptionCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+-=';

const getEncryptedCharacter = (character: string) => {
    if (character === ' ' || character === '\n') {
        return character;
    }

    return encryptionCharacters[Math.floor(Math.random() * encryptionCharacters.length)];
};

const HeroText = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        let cancelled = false;
        let encryptedText = headline.split('').map(getEncryptedCharacter).join('');
        let resolveIndex = 0;

        const resolveNextCharacter = () => {
            if (cancelled) {
                return;
            }

            while (
                resolveIndex < headline.length &&
                (headline[resolveIndex] === ' ' || headline[resolveIndex] === '\n')
            ) {
                resolveIndex += 1;
            }

            if (resolveIndex >= headline.length) {
                setDisplayedText(headline);
                setAnimationComplete(true);
                return;
            }

            encryptedText =
                encryptedText.slice(0, resolveIndex) +
                headline[resolveIndex] +
                encryptedText.slice(resolveIndex + 1);
            setDisplayedText(encryptedText);
            resolveIndex += 1;
            window.setTimeout(resolveNextCharacter, 45);
        };

        window.setTimeout(() => {
            if (cancelled) {
                return;
            }

            setDisplayedText(encryptedText);
            resolveNextCharacter();
        }, 250);

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <div className="mt-[75px] relative z-10 flex flex-col items-start justify-start px-6 pb-[100px] pt-[100px] text-left sm:px-10 lg:px-16">
            <Reveal>
                <h1
                    aria-label={headline}
                    className="font-display whitespace-pre-line text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                >
                    {displayedText}
                    {!animationComplete && <span className="ml-1 inline-block animate-pulse">|</span>}
                </h1>
            </Reveal>
        </div>
    )
}

export default HeroText;