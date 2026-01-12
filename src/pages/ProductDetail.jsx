import { useParams } from 'react-router-dom';
import { products } from '../data/mockData';
import Button from '../components/Button';
import { Star, Truck, ShieldCheck, Heart } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="container" style={{ padding: '5rem', textAlign: 'center' }}>
                <h2>Product not found</h2>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: 'var(--spacing-xl) 0' }}>
            <div className="product-detail-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'start'
            }}>
                <style>{`
                    @media(max-width: 768px) {
                        .product-detail-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
                    }
                `}</style>

                {/* Image Section */}
                <div style={{ backgroundColor: '#f3f4f6', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </div>

                {/* Info Section */}
                <div>
                    <div style={{ marginBottom: '1rem' }}>
                        <span className="text-muted" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {product.category}
                        </span>
                        <h1 style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>{product.title}</h1>
                        <div className="flex items-center gap-md" style={{ marginBottom: '1.5rem' }}>
                            <div className="flex items-center gap-xs">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill={i < product.rating ? "#f59e0b" : "none"}
                                        color={i < product.rating ? "#f59e0b" : "#d1d5db"}
                                    />
                                ))}
                                <span className="text-muted text-sm" style={{ marginLeft: '0.5rem' }}>({product.reviews} reviews)</span>
                            </div>
                        </div>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '2rem' }}>
                            ${product.price}
                        </div>
                    </div>

                    <p className="text-muted" style={{ marginBottom: '2rem', lineHeight: 1.8 }}>
                        Elevate your lifestyle with the {product.title}. Crafted with premium materials and designed for modern living.
                        Features exceptional durability and a sleek aesthetic that complements any style.
                    </p>

                    <div className="flex gap-md" style={{ marginBottom: '2rem' }}>
                        <Button size="lg" style={{ flex: 1 }}>Add to Cart</Button>
                        <Button variant="outline" size="lg" aria-label="Add to Wishlist">
                            <Heart size={20} />
                        </Button>
                    </div>

                    <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
                        <div className="flex gap-lg text-muted text-sm">
                            <div className="flex items-center gap-sm">
                                <Truck size={18} /> Free Shipping
                            </div>
                            <div className="flex items-center gap-sm">
                                <ShieldCheck size={18} /> 2 Year Warranty
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
