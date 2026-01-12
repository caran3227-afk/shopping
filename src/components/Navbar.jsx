import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar" style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--color-border)'
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '4rem'
            }}>
                {/* Logo */}
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.025em' }}>
                    MODERN<span style={{ color: 'var(--color-primary)' }}>SHOP</span>.
                </Link>

                {/* Desktop Links */}
                <div className="desktop-menu" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
                    <style>{`@media(min-width: 768px) { .desktop-menu { display: flex !important; } }`}</style>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/shop" className="nav-link">Shop</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </div>

                {/* Icons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button aria-label="Search"><Search size={20} /></button>
                    <Link to="/cart" style={{ position: 'relative' }}>
                        <ShoppingBag size={20} />
                        <span style={{
                            position: 'absolute',
                            top: -5,
                            right: -5,
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            fontSize: '0.7rem',
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold'
                        }}>0</span>
                    </Link>
                    <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none' }}>
                        <style>{`@media(max-width: 768px) { .mobile-toggle { display: block !important; } }`}</style>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    borderBottom: '1px solid var(--color-border)',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
