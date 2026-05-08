import React from "react";

export default function ResearchPage() {
    const publications = [
        {
            year: 2024,
            items: [
                {
                    title: "Sentiment Analysis of YouTube Comments: A Comprehensive Study of Machine Learning Models",
                    authors: "Most Jannatul Firdousi Zoti, Asa-ad Mohammad Akib, Maruf Rahman, Sadman Sadik Khan, Syed Shafin Ahmed.",
                    venue: "International Conference on Computing Communication and Networking Technologies (ICCCNT)",
                    link: "https://www.researchgate.net/publication/393884340_Sentiment_Analysis_of_YouTube_Comments_A_Comprehensive_Study_of_Machine_Learning_Models"
                }
            ]
        },
        {
            year: "Ongoing",
            items: [
                {
                    title: "A Semi-Supervised Framework for Generalizable Retinal Lesion Segmentation in Diabetic Retinopathy",
                    authors: "Maruf Rahman, Most. Jannatul Firdousi Zoti",
                    venue: "---------",
                    link: "#"
                },
                
            ]
        }
    ];

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontFamily: 'var(--font-kalam)', fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
                Research <span className="accent-text-red">Publications</span>
            </h1>

            <div className="research-list">
                {publications.map((group) => (
                    <div key={group.year}>
                        <h2 style={{
                            fontFamily: 'var(--font-kalam)',
                            fontSize: '2rem',
                            borderBottom: '2px solid #eee',
                            paddingBottom: '0.5rem',
                            marginBottom: '2rem'
                        }}>
                            {group.year}
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {group.items.map((pub, idx) => (
                                <div key={idx} className="research-item">
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                                        <a href={pub.link} className="hover-underline">{pub.title}</a>
                                    </h3>
                                    <p style={{ opacity: '0.8', fontStyle: 'italic' }}>{pub.authors}</p>
                                    <p style={{ fontWeight: 'bold', fontSize: '0.9rem', marginTop: '0.3rem' }}>{pub.venue}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
