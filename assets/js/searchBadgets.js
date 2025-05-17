const noResults = document.createElement('p');
noResults.className = 'no-results';
noResults.textContent = 'Nenhum resultado encontrado';
document.querySelector('.card-dex-box-panel').appendChild(noResults);

document.addEventListener('DOMContentLoaded', () => {
    // Campo de busca
    const searchInput = document.querySelector('.input-search'); 
    
    // Todos os badges
    const badges = document.querySelectorAll('.box-icon'); 

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        let hasResults = false;
    
        badges.forEach(badge => {
            const text = badge.querySelector('.main-text').textContent.toLowerCase();
            if (text.includes(query)) {
                badge.style.display = 'flex';
                hasResults = true;
            } else {
                badge.style.display = 'none';
            }
        });
    
        noResults.style.display = hasResults ? 'none' : 'block';
    });
});
