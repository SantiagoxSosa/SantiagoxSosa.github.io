(() => {
    // ---------- Mobile nav toggle ----------
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');

    if (toggle && links) {
        toggle.addEventListener('click', () => {
            const open = links.classList.toggle('open');
            toggle.classList.toggle('open', open);
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });

        // Close menu when a link is clicked (mobile)
        links.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                links.classList.remove('open');
                toggle.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ---------- Gallery filters ----------
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length) {
        const items = document.querySelectorAll('.masonry-item');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                items.forEach(item => {
                    const cat = item.dataset.category;
                    item.style.display = (filter === 'all' || filter === cat) ? '' : 'none';
                });
            });
        });
    }

    // ---------- Research sidebar active state ----------
    const sidebarLinks = document.querySelectorAll('.research-sidebar a');
    if (sidebarLinks.length) {
        const targets = Array.from(sidebarLinks)
            .map(a => document.querySelector(a.getAttribute('href')))
            .filter(Boolean);

        const setActive = () => {
            let current = targets[0];
            const y = window.scrollY + 160;
            targets.forEach(t => { if (t.offsetTop <= y) current = t; });
            sidebarLinks.forEach(a => {
                a.classList.toggle('active', a.getAttribute('href') === `#${current.id}`);
            });
        };

        window.addEventListener('scroll', setActive, { passive: true });
        setActive();
    }
})();
