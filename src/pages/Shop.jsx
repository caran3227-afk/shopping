import { useState } from 'react';
import { products, categories } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState(500);

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesPrice = product.price <= priceRange;
        return matchesCategory && matchesPrice;
    });

    return (
        <div className="container" style={{ padding: 'var(--spacing-xl) 0' }}>
            {/* Header */}
            <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
                <h1>Shop</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span className="text-muted text-sm">{filteredProducts.length} Products</span>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
                        Sort by <ChevronDown size={16} />
                    </button>
                </div>
            </div>

            <div className="grid-shop-layout" style={{
                display: 'grid',
                gridTemplateColumns: '250px 1fr',
                gap: '3rem'
            }}>
                <style>{`
                    @media(max-width: 768px) {
                        .grid-shop-layout { grid-template-columns: 1fr !important; }
                        .shop-sidebar { display: none; }
                    }
                `}</style>

                {/* Sidebar */}
                <aside className="shop-sidebar">
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Filter size={18} /> Filters
                        </h3>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Categories</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={selectedCategory === 'All'}
                                        onChange={() => setSelectedCategory('All')}
                                    />
                                    All
                                </label>
                                {categories.map(cat => (
                                    <label key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input
                                            type="radio"
                                            name="category"
                                            checked={selectedCategory === cat.name}
                                            onChange={() => setSelectedCategory(cat.name)}
                                        />
                                        {cat.name}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Max Price: ${priceRange}</h4>
                            <input
                                type="range"
                                min="0"
                                max="1000"
                                value={priceRange}
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <main>
                    {filteredProducts.length > 0 ? (
                        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '3rem' }}>
                            <p className="text-muted">No products found matching your filters.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Shop;
