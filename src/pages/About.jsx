import Button from '../components/Button';

const About = () => {
    return (
        <>
            <section style={{ backgroundColor: '#1e293b', color: 'white', padding: 'var(--spacing-2xl) 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>Our Story</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem', opacity: 0.9 }}>
                        Redefining modern e-commerce with quality, style, and sustainability.
                    </p>
                </div>
            </section>

            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ marginBottom: '3rem' }}>
                        <h2>Mission</h2>
                        <p className="text-muted" style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                            At ModernShop, we believe that style shouldn't come at the cost of quality.
                            Our mission is to curate the finest products from around the world and bring them to your doorstep
                            with an unparalleled shopping experience. We prioritize sustainable sourcing and honest pricing.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                        <div style={{ padding: '2rem', backgroundColor: '#f3f4f6', borderRadius: 'var(--radius-lg)' }}>
                            <h3>Quality First</h3>
                            <p className="text-muted text-sm">We verify every product for durability and finish.</p>
                        </div>
                        <div style={{ padding: '2rem', backgroundColor: '#f3f4f6', borderRadius: 'var(--radius-lg)' }}>
                            <h3>Customer Focus</h3>
                            <p className="text-muted text-sm">24/7 support and hassle-free returns.</p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <h2>Get in Touch</h2>
                        <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
                            Have questions? We'd love to hear from you.
                        </p>
                        <Button variant="outline">Contact Support</Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
