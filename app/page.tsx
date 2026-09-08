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

            {/* Internship Experience Section */}
            <section style={{ marginTop: '5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-kalam)', fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
                    Work <span className="accent-text-red">Experience</span>
                </h2>
                <div className="hand-card" style={{ rotate: '-0.5deg', padding: '2.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
                        <div>
                            <h3 style={{ fontFamily: 'var(--font-kalam)', fontSize: '1.8rem', margin: 0, color: 'var(--foreground)' }}>
                                Software Engineer Intern
                            </h3>
                            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-blue)', marginTop: '0.2rem' }}>
                                AsthaIT
                            </div>
                        </div>
                        <span style={{
                            fontFamily: 'var(--font-kalam)',
                            fontSize: '0.95rem',
                            padding: '0.3rem 0.8rem',
                            backgroundColor: '#f8f9fa',
                            border: '1.5px dashed var(--accent-red)',
                            borderRadius: '15px',
                            fontWeight: 'bold',
                            color: 'var(--accent-red)'
                        }}>
                            Internship
                        </span>
                    </div>

                    <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem', opacity: 0.9 }}>
                        Architected and delivered high-performance, enterprise-grade full-stack features with a strong focus on backend maintainability, clean design patterns, and responsive user experiences.
                    </p>

                    <div style={{ marginBottom: '1.8rem' }}>
                        <h4 style={{ fontFamily: 'var(--font-kalam)', fontSize: '1.3rem', marginBottom: '0.8rem', color: '#333' }}>
                            Key Achievements & Impact:
                        </h4>
                        <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '1rem', lineHeight: '1.6' }}>
                            <li>
                                <strong>Enterprise Backend Architecture:</strong> Designed and implemented scalable REST APIs in <strong>C#</strong> and <strong>.NET</strong> adhering strictly to <strong>Clean Architecture</strong> principles and the <strong>MediatR pattern (CQRS)</strong> for loose coupling and maintainability.
                            </li>
                            <li>
                                <strong>High-Performance Data Layer:</strong> Modeled complex relational schemas and optimized data access operations using <strong>Entity Framework (EF) Core</strong> and <strong>PostgreSQL</strong>.
                            </li>
                            <li>
                                <strong>Modern Reactive Frontend:</strong> Built dynamic, responsive frontends using <strong>TypeScript</strong> and <strong>Next.js</strong>, integrating <strong>TanStack Query (React Query)</strong> and <strong>Axios</strong> for asynchronous data fetching, caching, and state synchronization.
                            </li>
                            <li>
                                <strong>Secure Core Services:</strong> Engineered end-to-end user <strong>Authentication & Authorization</strong> pipelines alongside automated transactional <strong>Email Notification Services</strong> for seamless user operations.
                            </li>
                        </ul>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingTop: '1.2rem', borderTop: '2px dashed #eee' }}>
                        {[
                            "C#",
                            ".NET Core",
                            "Clean Architecture",
                            "MediatR Pattern",
                            "EF Core",
                            "PostgreSQL",
                            "TypeScript",
                            "Next.js",
                            "TanStack Query",
                            "Axios",
                            "Authentication",
                            "Email Services"
                        ].map((skill) => (
                            <span key={skill} style={{ fontSize: '0.8rem', padding: '0.25rem 0.65rem', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fafafa', fontWeight: 500 }}>
                                {skill}
                            </span>
                        ))}
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
