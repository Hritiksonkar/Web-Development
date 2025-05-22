document.getElementById('login').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.body.style.overflow = 'hidden';
});

document.querySelector('.ri-search-line').parentElement.addEventListener('click', function () {
    document.getElementById('searchForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
});

function closeLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function closeSearchForm() {
    document.getElementById('searchForm').style.display = 'none';
}

// Close forms when clicking outside
window.addEventListener('click', function (e) {
    if (!e.target.closest('#loginForm') && !e.target.closest('#login') &&
        !e.target.closest('#searchForm') && !e.target.closest('.ri-search-line')) {
        closeLoginForm();
        closeSearchForm();
    }
});

document.getElementById('overlay').addEventListener('click', closeLoginForm);

// Close on escape key press
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeLoginForm();
    }
});
