import Button from '../components/Button';
import { Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/mockData';

const Cart = () => {
    // Mock cart items
    const cartItems = [
        { ...products[0], quantity: 1 },
        { ...products[3], quantity: 1 }
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 0;
    const total = subtotal + shipping;

    return (
        <div className="container" style={{ padding: 'var(--spacing-xl) 0' }}>
            <h1 style={{ marginBottom: '2rem' }}>Shopping Cart</h1>

            <div className="cart-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 350px',
                gap: '3rem'
            }}>
                <style>{`
                    @media(max-width: 768px) {
                        .cart-grid { grid-template-columns: 1fr !important; }
                    }
                `}</style>

                {/* Cart Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {cartItems.map(item => (
                        <div key={item.id} style={{
                            display: 'flex',
                            gap: '1.5rem',
                            padding: '1.5rem',
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--color-border)'
                        }}>
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
                            />
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <div className="flex justify-between">
                                        <h3 style={{ fontSize: '1.1rem' }}>{item.title}</h3>
                                        <span style={{ fontWeight: 700 }}>${item.price}</span>
                                    </div>
                                    <p className="text-muted text-sm">{item.category}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-sm">
                                        <select style={{
                                            padding: '0.25rem 0.5rem',
                                            borderRadius: 'var(--radius-sm)',
                                            borderColor: 'var(--color-border)'
                                        }}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                    <button className="text-muted hover:text-error" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }}>
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div style={{ position: 'sticky', top: '6rem', height: 'fit-content' }}>
                    <div style={{
                        backgroundColor: '#f9fafb',
                        padding: '2rem',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)'
                    }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Order Summary</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div className="flex justify-between">
                                <span className="text-muted">Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted">Shipping</span>
                                <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                            </div>
                            <div className="flex justify-between" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem', fontWeight: 700, fontSize: '1.1rem' }}>
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <Button style={{ width: '100%' }}>Checkout <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} /></Button>
                        <p className="text-muted text-sm text-center" style={{ marginTop: '1rem' }}>
                            Secure Checkout
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
