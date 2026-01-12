import { Star, ShoppingCart } from 'lucide-react';
import propTypes from 'prop-types';
import Button from './Button';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card" style={{
            backgroundColor: 'white',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)',
            border: '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            height: '100%'
        }}>
            <style>{`
        .product-card:hover { 
          transform: translateY(-4px); 
          box-shadow: var(--shadow-lg); 
        }
        .product-card:hover .add-to-cart-overlay {
          opacity: 1;
        }
      `}</style>

            <div style={{ position: 'relative', paddingTop: '100%', backgroundColor: '#f3f4f6' }}>
                <img
                    src={product.image}
                    alt={product.title}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
                {product.isNew && (
                    <span style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        background: 'var(--color-primary)',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 'bold'
                    }}>NEW</span>
                )}
            </div>

            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ marginBottom: '0.5rem' }}>
                    <span className="text-muted text-sm">{product.category}</span>
                    <Link to={`/product/${product.id}`} style={{ display: 'block' }}>
                        <h3 style={{ fontSize: '1rem', margin: '0.25rem 0' }}>{product.title}</h3>
                    </Link>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '1rem' }}>
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={14}
                            fill={i < product.rating ? "#f59e0b" : "none"}
                            color={i < product.rating ? "#f59e0b" : "#d1d5db"}
                        />
                    ))}
                    <span className="text-muted text-sm">({product.reviews})</span>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>${product.price}</span>
                    <Button size="sm" variant="outline" aria-label="Add to Cart">
                        <ShoppingCart size={16} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: propTypes.shape({
        id: propTypes.oneOfType([propTypes.string, propTypes.number]),
        title: propTypes.string,
        price: propTypes.number,
        image: propTypes.string,
        rating: propTypes.number,
        category: propTypes.string,
        reviews: propTypes.number,
        isNew: propTypes.bool,
    }).isRequired
};

export default ProductCard;
