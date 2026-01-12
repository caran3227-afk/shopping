import propTypes from 'prop-types';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
    const baseStyles = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
        borderRadius: 'var(--radius-full)',
        cursor: 'pointer',
        transition: 'all var(--transition-fast)',
        border: 'none',
        outline: 'none',
    };

    const variants = {
        primary: {
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            border: '1px solid transparent',
        },
        secondary: {
            backgroundColor: 'var(--color-bg-subtle)',
            color: 'var(--color-text-main)',
            border: '1px solid transparent',
        },
        outline: {
            backgroundColor: 'transparent',
            color: 'var(--color-primary)',
            border: '1px solid var(--color-primary)',
        }
    };

    const sizes = {
        sm: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
        md: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
        lg: { padding: '1rem 2rem', fontSize: '1.125rem' },
    };

    // Hover effects (simplified inline, ideally handling via CSS class)
    // We'll rely on global CSS utility classes if possible, but for now inline is fine for dynamic styles
    // Actually, let's use className for specific overrides but style for dynamic

    return (
        <button
            className={`btn-${variant} ${className}`}
            style={{ ...baseStyles, ...variants[variant], ...sizes[size] }}
            {...props}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: propTypes.node,
    variant: propTypes.oneOf(['primary', 'secondary', 'outline']),
    size: propTypes.oneOf(['sm', 'md', 'lg']),
    className: propTypes.string,
};

export default Button;
