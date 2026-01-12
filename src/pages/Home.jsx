import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/mockData';
import { ArrowRight, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const trendingProducts = products.slice(0, 4);

    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{
                backgroundColor: '#f3f4f6',
                padding: 'var(--spacing-2xl) 0',
                display: 'flex',
                alignItems: 'center',
                minHeight: '600px'
            }}>
                <div className="container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            backgroundColor: 'var(--color-text-main)',
                            color: 'white',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.875rem',
                            marginBottom: '1rem',
                            fontWeight: 600
                        }}>New Collection 2026</span>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            Premium Quality <br />
                            <span style={{ color: 'var(--color-primary)' }}>Authentic Style.</span>
                        </h1>
                        <p className="text-muted" style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '500px' }}>
                            Discover our curated selection of premium products designed for the modern lifestyle.
                        </p>
                        <div className="flex gap-md">
                            <Link to="/shop"><Button size="lg">Shop Now</Button></Link>
                            <Link to="/about"><Button size="lg" variant="outline">Learn More</Button></Link>
                        </div>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '120%',
                            height: '120%',
                            background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, rgba(255,255,255,0) 70%)',
                            zIndex: 0
                        }}></div>
                        <img
                            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
                            alt="Fashion Model"
                            style={{
                                width: '100%',
                                borderRadius: '2rem',
                                position: 'relative',
                                zIndex: 1,
                                boxShadow: 'var(--shadow-lg)'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: 'var(--spacing-xl) 0', borderBottom: '1px solid var(--color-border)' }}>
                <div className="container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {[
                        { icon: Truck, title: "Free Shipping", text: "On all orders over $50" },
                        { icon: ShieldCheck, title: "Secure Payment", text: "100% secure payment" },
                        { icon: RefreshCw, title: "Easy Returns", text: "30 day return policy" },
                    ].map((feature, idx) => (
                        <div key={idx} className="flex gap-md items-center">
                            <div style={{
                                padding: '1rem',
                                backgroundColor: 'var(--color-bg-subtle)',
                                borderRadius: '50%',
                                color: 'var(--color-primary)'
                            }}>
                                <feature.icon size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.125rem' }}>{feature.title}</h3>
                                <p className="text-muted text-sm">{feature.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Categories */}
            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
                        <h2>Shop by Category</h2>
                        <Link to="/shop" className="text-primary font-bold flex items-center gap-2" style={{ color: 'var(--color-primary)' }}>
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--spacing-lg)' }}>
                        {categories.map(cat => (
                            <Link to="/shop" key={cat.id} style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '1/1' }}>
                                <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="zoom-img" />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundColor: 'rgba(0,0,0,0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>{cat.name}</span>
                                </div>
                                <style>{`.zoom-img:hover { transform: scale(1.1); }`}</style>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trending Products */}
            <section style={{ padding: 'var(--spacing-2xl) 0', backgroundColor: '#f9fafb' }}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '3rem' }}>Trending Now</h2>
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 'var(--spacing-lg)' }}>
                        {trendingProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: '3rem' }}>
                        <Link to="/shop"><Button variant="secondary">View All Products</Button></Link>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section style={{ padding: 'var(--spacing-2xl) 0', backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <div className="container text-center" style={{ maxWidth: '600px' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>Join Our Newsletter</h2>
                    <p style={{ opacity: 0.9, marginBottom: '2rem' }}>Sign up for deals, new products and promotions</p>
                    <div className="flex gap-md" style={{ maxWidth: '400px', margin: '0 auto' }}>
                        <input
                            type="email"
                            placeholder="Your email address"
                            style={{
                                flex: 1,
                                padding: '0.75rem 1.5rem',
                                borderRadius: 'var(--radius-full)',
                                border: 'none',
                                outline: 'none'
                            }}
                        />
                        <Button style={{ backgroundColor: '#1e293b', color: 'white' }}>Subscribe</Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
