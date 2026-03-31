// Navigation Logic
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(s => s.classList.add('d-none'));
    document.getElementById(sectionId + '-section').classList.remove('d-none');
    document.getElementById('section-title').innerText = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
}

// User Creation Logic (LocalStorage)
document.getElementById('user-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const newUser = {
        name: document.getElementById('reg-name').value,
        school: document.getElementById('reg-school').value,
        role: document.getElementById('reg-role').value
    };
    
    let users = JSON.parse(localStorage.getItem('pu_users') || '[]');
    users.push(newUser);
    localStorage.setItem('pu_users', JSON.stringify(users));
    
    alert(`Account created for ${newUser.name} at ${newUser.school}. Invitation sent!`);
    updateStats();
    this.reset();
});

// Update Dashboard Stats
function updateStats() {
    const users = JSON.parse(localStorage.getItem('pu_users') || '[]');
    document.getElementById('count-students').innerText = users.filter(u => u.role === 'Student').length;
}

// Sidebar Toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('wrapper').classList.toggle('toggled');
});

// Initial Load
updateStats();
