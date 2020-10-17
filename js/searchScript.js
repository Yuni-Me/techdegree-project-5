function filter() {
    const searchValue = document.querySelector('#searchInput').value;
    const article = document.querySelectorAll('.gallery a');

    for (let i = 0; i < article.length; i++) {
        if (article[i].getAttribute('data-caption').toLowerCase().includes(searchValue.toLowerCase())) {
            article[i].style.display = '';
        } else {
            article[i].style.display = 'none';
        }
    }
}