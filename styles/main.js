
document.addEventListener('DOMContentLoaded', function() {
    console.log('App loaded successfully!');
  
    const email = 'test@example.com';
    console.log('Email validation:', Utils.validateEmail(email));
    console.log('Current date:', Utils.formatDate(new Date()));
    
    api.get('/users/1')
        .then(user => {
            console.log('User data:', user);
            
            const userInfo = document.createElement('div');
            userInfo.innerHTML = `<h3>User from API: ${user.name}</h3><p>Email: ${user.email}</p>`;
            userInfo.className = 'card';
            document.body.appendChild(userInfo);
        })
        .catch(error => console.error('Error fetching user:', error));
    
 
    initializeEventListeners();
});

function initializeEventListeners() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
    
    
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', Utils.debounce(handleSearch, 300));
    }
}

function handleButtonClick(event) {
    console.log('Button clicked:', event.target.textContent);
    alert('Button clicked! Check console for details.');
}

function handleSearch(event) {
    console.log('Search term:', event.target.value);
}
