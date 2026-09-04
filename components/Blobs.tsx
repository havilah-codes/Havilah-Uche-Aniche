'use client';

import Navbar from "./Navbar";
import HeroMain from "./HeroMain";
import IntroSegment from "./IntroSegment";
// import FeaturedProjects from "./FeaturedProjects";

const Blobs = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950">
            <Navbar />
            <HeroMain />
            <IntroSegment />
            <div className="pointer-events-none absolute inset-0">
                <div className="animate-blob-1 absolute left-[10%] top-[10%] h-96 w-96 rounded-full bg-violet-600/40 blur-3xl" />
                <div className="animate-blob-2 absolute right-[10%] top-[20%] h-80 w-80 rounded-full bg-cyan-400/40 blur-3xl" />
                <div className="animate-blob-3 absolute bottom-[10%] left-[25%] h-[28rem] w-[28rem] rounded-full bg-emerald-400/30 blur-3xl" />
                <div className="animate-blob-4 absolute bottom-[15%] right-[15%] h-72 w-72 rounded-full bg-rose-500/30 blur-3xl" />
                <div className="animate-blob-5 absolute left-[45%] top-[45%] h-64 w-64 rounded-full bg-amber-400/25 blur-3xl" />
            </div>

            <style>{`
                @keyframes blob1 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                33% { transform: translate(60px, -80px) scale(1.15); }
                66% { transform: translate(-40px, 40px) scale(0.9); }
                }
                @keyframes blob2 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                33% { transform: translate(-70px, 60px) scale(0.85); }
                66% { transform: translate(50px, -50px) scale(1.2); }
                }
                @keyframes blob3 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                33% { transform: translate(80px, 30px) scale(1.1); }
                66% { transform: translate(-60px, -60px) scale(0.95); }
                }
                @keyframes blob4 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                33% { transform: translate(-50px, -70px) scale(1.1); }
                66% { transform: translate(70px, 50px) scale(0.9); }
                }
                @keyframes blob5 {
                0%, 100% { transform: translate(-50%, -50%) scale(1); }
                33% { transform: translate(-50%, -50%) translate(40px, 60px) scale(1.2); }
                66% { transform: translate(-50%, -50%) translate(-60px, -30px) scale(0.85); }
                }
                .animate-blob-1 { animation: blob1 18s ease-in-out infinite; }
                .animate-blob-2 { animation: blob2 22s ease-in-out infinite; }
                .animate-blob-3 { animation: blob3 26s ease-in-out infinite; }
                .animate-blob-4 { animation: blob4 20s ease-in-out infinite; }
                .animate-blob-5 { animation: blob5 24s ease-in-out infinite; transform: translate(-50%, -50%); }
            `}</style>
            </div>
    )
}

export default Blobs;