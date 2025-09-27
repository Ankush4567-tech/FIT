const Header = ({ title, onMenuToggle }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        const newState = !isMenuOpen;
        setIsMenuOpen(newState);
        if (onMenuToggle) onMenuToggle(newState);
    };

    return React.createElement('header', { className: 'header' },
        React.createElement('nav', { className: 'nav' },
            React.createElement('div', { className: 'logo' },
                React.createElement('h1', null, title || 'My App')
            ),
            
            React.createElement('button', {
                className: 'menu-toggle',
                onClick: toggleMenu,
                'aria-label': 'Toggle menu'
            }, '☰'),
            
            React.createElement('ul', { 
                className: `nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`
            },
                React.createElement('li', null, 
                    React.createElement('a', { href: '#home' }, 'Home')
                ),
                React.createElement('li', null, 
                    React.createElement('a', { href: '#about' }, 'About')
                ),
                React.createElement('li', null, 
                    React.createElement('a', { href: '#contact' }, 'Contact')
                )
            )
        )
    );
};
