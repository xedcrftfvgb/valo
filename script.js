document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.info-title');

    titles.forEach(title => {
        title.addEventListener('click', function() {
            this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block';
        });
    });
});