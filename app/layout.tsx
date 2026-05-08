import React from "react";
import { Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";

const kalam = Kalam({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
    variable: "--font-kalam",
});

const patrickHand = Patrick_Hand({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-patrick-hand",
});

export const metadata = {
    title: "Maruf Rahman | Portfolio",
    description: "Web Developer and AI/ML Researcher portfolio website.",
    icons: {
    icon: "/profile.jpeg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${kalam.variable} ${patrickHand.variable}`} style={{ fontFamily: 'var(--font-patrick-hand), cursive' }}>
                <div className="container">
                    <header>
                        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontFamily: 'var(--font-kalam)', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                <a href="/">MARUF RAHMAN</a>
                            </div>
                            <ul style={{ fontFamily: 'var(--font-kalam)', display: 'flex', listStyle: 'none', gap: '2rem' }}>
                                <li><a href="/">About</a></li>
                                <li><a href="/projects">Projects</a></li>
                                <li><a href="/research">Research</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </nav>
                    </header>

                    <main>{children}</main>

                    <footer>
                        <p style={{ fontFamily: 'var(--font-kalam)', marginBottom: '1rem' }}>
                            © 2024 MARUF RAHMAN
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                            <a href="https://github.com/maruf-rahman007" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://www.linkedin.com/in/maruf-rahman-s" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://scholar.google.com/citations?user=Tcx17XQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Scholar</a>
                            <a href="mailto:marufrahman.dev@gmail.com">Email</a>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
