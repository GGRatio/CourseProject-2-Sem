document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    let lastScroll = 0;
    const scrollThreshold = 10; // Порог скрола в пикселях
    
    function handleScroll() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScroll <= 0) {
            // В самом верху страницы - всегда показываем хедер
            header.classList.remove('header--hidden');
            return;
        }
        
        if (Math.abs(currentScroll - lastScroll) < scrollThreshold) {
            // Игнорируем мелкие скролы
            return;
        }
        
        if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
            // Скроллим вниз - скрываем хедер
            header.classList.add('header--hidden');
        } else {
            // Скроллим вверх - показываем хедер
            header.classList.remove('header--hidden');
        }
        
        lastScroll = currentScroll;
    }
    
    // Оптимизация с requestAnimationFrame
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
});