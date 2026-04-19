const logos = [
    "assets/premium/086443247515213.69dd70f6ba78e.webp",
    "assets/premium/148b41247515213.69dd70f6b9f1f.webp",
    "assets/premium/177dd7247519413.69dd181300d40.webp",
    "assets/premium/2f6549247515213.69dd70f6bc802.webp",
    "assets/premium/43b3e6247519413.69dd1626cbd20.webp",
    "assets/premium/574eb3247515213.69dd70f6bb4bf.webp",
    "assets/premium/6f40ec247515213.69dd74ae4b549.png",
    "assets/premium/7107a2247519413.69dd1626cb922.png",
    "assets/premium/76092a247519413.69dd181300599.webp",
    "assets/premium/78943f247515213.69dd70f6bcd3a.webp",
    "assets/premium/90c659247515213.69dd70f6bb9b9.webp",
    "assets/premium/9bddc5247519413.Y3JvcCwxOTEwLDE0OTQsODksODk.png"
];

const aplicacoes = [
    "assets/017c20c784eff43c6c6b1823d0c3d184.jpg",
    "assets/068fb8f5eb18fe59c78f4da2ba01d329.jpg",
    "assets/36a9546d3a37637ab935d882cc74da03.jpg",
    "assets/39035ad0b52c3317a2a4bb3276e4a9b4.jpg",
    "assets/3ee7f30d91d7e82b0a006face4aa4892.jpg",
    "assets/64e4d6a36def8d463a84ef9b3fc92f0a.jpg",
    "assets/8d8bba47785c7c883e010d413cfead9f.jpg",
    "assets/9ce7b68b4f2f54334e8ad9145b94f564.jpg",
    "assets/a511de5be303e807c622d212db24f900.jpg",
    "assets/d63b47df1390c152bb73f7eb9d0687c1.jpg",
    "assets/dc194aa1a7af66e044ee2cbf5261275c.jpg",
    "assets/dd9a7b11699acbf9d0e86a261ad4aee9.jpg",
    "assets/e7df790246e57c7031206f7cbe21de66.jpg",
    "assets/eb43df3a5527aa46196cf09a4459d2c2.jpg"
];

document.addEventListener('DOMContentLoaded', () => {
    const logosGrid = document.getElementById('logos-grid');
    const aplicacoesGrid = document.getElementById('aplicacoes-grid');
    const cursor = document.getElementById('custom-cursor');
    const navBtns = document.querySelectorAll('.nav-btn');

    // Initialize grids - Swapped as per user request
    renderGallery(aplicacoes, logosGrid, "Logo Design");
    renderGallery(logos, aplicacoesGrid, "Brand Application");

    // Custom Cursor Logic
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Cursor Hover Effect
    document.querySelectorAll('button, a, .gallery-item').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });

    // Category Switching
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            
            // Update buttons
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update grids
            if (category === 'logos') {
                logosGrid.classList.add('active');
                aplicacoesGrid.classList.remove('active');
            } else {
                logosGrid.classList.remove('active');
                aplicacoesGrid.classList.add('active');
            }
            
            // Scroll to top of gallery smoothly
            document.querySelector('.gallery-section').scrollIntoView({ behavior: 'smooth' });
        });
    });

    function renderGallery(images, grid, titlePrefix) {
        images.forEach((src, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';

            item.innerHTML = `
                <img src="${src}" alt="${titlePrefix} ${index + 1}" loading="lazy">
                <div class="item-overlay">
                    <span class="item-title">${titlePrefix.toUpperCase()} — VOL. ${index + 1}</span>
                </div>
            `;
            
            // Re-apply hover listeners for new items
            item.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
            item.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
            
            grid.appendChild(item);
        });
    }
});
