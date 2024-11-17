document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dynamically load experiences items
    const experiencesList = document.getElementById('experiences-list');
    if (experiencesList) {
        const experiencesItems = [
            { year: '2021', title: 'Développeur Web', company: 'Tech Company', description: 'Développement de sites web et applications.' },
            { year: '2019', title: 'Stagiaire Développeur', company: 'Startup', description: 'Participation au développement de projets innovants.' }
            // Add more experiences items here
        ];

        experiencesItems.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${item.year}</strong> - ${item.title} chez ${item.company}<br>${item.description}`;
            experiencesList.appendChild(li);
        });
    }
});