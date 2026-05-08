import React from "react";

export default function ContactPage() {
    return (
        <div style={{ maxWidth: '700px', margin: '4rem auto', textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'var(--font-kalam)', fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                Get in <span className="accent-text-red">touch</span>
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '4rem' }}>
                I'm always open to discussing new projects, research opportunities, or just having a chat about tech and design.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                <div className="hand-card" style={{ rotate: '-1deg' }}>
                    <h2 style={{ fontFamily: 'var(--font-kalam)', fontSize: '1.5rem', marginBottom: '1rem', color: '#666' }}>
                        CORRESPONDENCE
                    </h2>
                    <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                        <a href="mailto:marufrahman.dev@gmail.com" className="accent-text-blue">marufrahman.dev@gmail.com</a>
                    </p>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Email for formal inquiries and research collaborations.</p>
                </div>

                <div className="hand-card" style={{ rotate: '1deg' }}>
                    <h2 style={{ fontFamily: 'var(--font-kalam)', fontSize: '1.5rem', marginBottom: '1rem', color: '#666' }}>
                        SOCIALS
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                        <a href="https://www.linkedin.com/in/maruf-rahman-s/" target="_blank" className="hand-button" style={{ width: '100%', maxWidth: '200px' }}>LinkedIn</a>
                        <a href="https://github.com/maruf-rahman007" target="_blank" className="hand-button" style={{ width: '100%', maxWidth: '200px' }}>GitHub</a>
                        <a href="https://www.instagram.com/_marufrahman__" target="_blank" className="hand-button" style={{ width: '100%', maxWidth: '200px' }}>Instagram</a>
                    </div>
                </div>
            </div>

            <div className="hand-card" style={{ marginTop: '3rem', rotate: '-0.5deg', backgroundColor: '#fdf3f3' }}>
                <h2 style={{ fontFamily: 'var(--font-kalam)', marginBottom: '1rem' }}>Location</h2>
                <p>Currently based in Dhaka, Bangladesh. Working globally.</p>
            </div>
        </div>
    );
}
