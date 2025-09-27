const Card = ({ title, content, image, onClick, children }) => {
    return React.createElement('div', { 
        className: 'card',
        onClick: onClick
    },
        image && React.createElement('img', {
            src: image,
            alt: title,
            className: 'card-image'
        }),
        
        React.createElement('div', { className: 'card-content' },
            React.createElement('h3', { className: 'card-title' }, title),
            React.createElement('p', { className: 'card-text' }, content),
            children
        )
    );
};
