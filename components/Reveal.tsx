'use client';

import type { CSSProperties, ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type RevealProps = {
    children: ReactNode;
    className?: string;
    index?: number;
};

const Reveal = ({ children, className = '', index = 0 }: RevealProps) => {
    const { ref, inView } = useReveal<HTMLDivElement>();

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${index * 80}ms` } as CSSProperties}
            className={`transition-all duration-600 ease-out ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
            } ${className}`}
        >
            {children}
        </div>
    );
};

export default Reveal;
