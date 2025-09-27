const Home = () => {
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data.slice(0, 6));
            setLoading(false);
        } catch (error) {
            console.error('Error fetching posts:', error);
            setLoading(false);
        }
    };

    if (loading) {
        return React.createElement('div', { className: 'loading' }, 'Loading posts...');
    }

    return React.createElement('div', { className: 'home-page' },
        React.createElement('h1', null, 'Welcome to Our App'),
        React.createElement('div', { className: 'posts-grid' },
            posts.map(post => 
                React.createElement(Card, {
                    key: post.id,
                    title: post.title,
                    content: post.body.substring(0, 100) + '...'
                })
            )
        )
    );
};
