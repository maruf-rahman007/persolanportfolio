import React from "react";

export default function AboutPage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="about-hero">
                <div style={{ rotate: '-1deg' }}>
                    <h1 style={{ fontFamily: 'var(--font-kalam)', fontSize: '4rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                        Hi, I'm <span className="accent-text-red">Maruf Rahman</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '500px' }}>
                        A passionate <span className="accent-text-blue">Web Developer</span> and <span className="accent-text-blue">AI/ML Researcher</span> dedicated to building intelligent, user-centric digital experiences with a touch of organic design.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="/projects" className="hand-button">View Projects</a>
                        <a href="/resume.pdf" className="hand-button" style={{ backgroundColor: '#f0f0f0' }} target="_blank">CV / Resume</a>
                    </div>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', opacity: '0.7' }}>
                        <a href="https://github.com/maruf-rahman007" target="_blank">Github</a>
                        <span>•</span>
                        <a href="https://www.linkedin.com/in/maruf-rahman-s" target="_blank">LinkedIn</a>
                        <span>•</span>
                        <a href="https://scholar.google.com/citations?user=Tcx17XQAAAAJ&hl=en" target="_blank">Scholar</a>
                    </div>
                </div>

                <div className="hand-card" style={{ padding: '10px', rotate: '1deg', overflow: 'hidden' }}>
                    <div style={{
                        width: '100%',
                        aspectRatio: '4/3',
                        backgroundColor: '#eee',
                        backgroundImage: 'url("profile.jpeg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '2px'
                    }}>
                        {/* Using a nice unsplash workspace image as fallback */}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section style={{ marginTop: '5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-kalam)', fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
                    What I Do
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div className="hand-card" style={{ rotate: '-0.5deg' }}>
                        <h3 style={{ fontFamily: 'var(--font-kalam)', marginBottom: '1rem' }}>Web Development</h3>
                        <p>Building responsive, high-performance web applications using modern frameworks like Next.js, with a focus on unique aesthetics and seamless user experiences.</p>
                        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', border: '1px solid #ddd', borderRadius: '5px' }}>React</span>
                            <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', border: '1px solid #ddd', borderRadius: '5px' }}>Next.js</span>
                            <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', border: '1px solid #ddd', borderRadius: '5px' }}>Express</span>
                            <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', border: '1px solid #ddd', borderRadius: '5px' }}>Typescript</span>
                        </div>
                    </div>

                    <div className="hand-card" style={{ rotate: '0.5deg' }}>
                        <h3 style={{ fontFamily: 'var(--font-kalam)', marginBottom: '1rem' }}>AI/ML Research</h3>
                        <p>Exploring the boundaries of computer vision and deep learning. Focus on neural surface reconstruction and efficient archival data processing.</p>
                        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', border: '1px solid #ddd', borderRadius: '5px' }}>PyTorch</span>
                            <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', border: '1px solid #ddd', borderRadius: '5px' }}>Computer Vision</span>
                            <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', border: '1px solid #ddd', borderRadius: '5px' }}>DL</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Highlight */}
            <section style={{ marginTop: '5rem', textAlign: 'center' }}>
                <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
                    "Blending creativity with scientific rigor to solve complex problems."
                </p>
            </section>
        </div>
    );
}
