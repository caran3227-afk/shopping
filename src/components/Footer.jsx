const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-bg-subtle)',
            padding: 'var(--spacing-xl) 0',
            marginTop: 'auto',
            borderTop: '1px solid var(--color-border)'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <p className="text-muted text-sm">
                    &copy; {new Date().getFullYear()} ModernShop. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
