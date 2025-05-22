document.addEventListener('DOMContentLoaded', function() {
    // Получаем ID тренера из URL (например: ?id=1)
    const urlParams = new URLSearchParams(window.location.search);
    const trainerId = parseInt(urlParams.get('id')) || 1;

    // Загружаем данные тренера
    fetch('data/personality.json')
        .then(response => response.json())
        .then(data => {
            const trainer = data.trainers.find(t => t.id === trainerId) || data.trainers[0];
            renderTrainerPage(trainer);
            document.title = `ENERGY GYM - ${trainer.name.split(' ')[0]}`;
        })
        .catch(error => {
            console.error('Error loading trainer data:', error);
            document.getElementById('trainer-content').innerHTML = `
                <div class="error-message">
                    <p>Не удалось загрузить данные тренера. Пожалуйста, попробуйте позже.</p>
                </div>
            `;
        });

    function renderTrainerPage(trainer) {
        const container = document.getElementById('trainer-content');
        
        container.innerHTML = `
            <section class="tittle">
                <img src="${trainer.photo}" alt="Тренер ${trainer.name}" class="trainer-photo">
                <div class="info">
                    <h1>${trainer.name}</h1>
                    <p class="quote">${trainer.quote}</p>
                </div>
            </section>

            <section class="specialization">
                <h2>Специализация:</h2>
                <p>${trainer.specialization}</p>
            </section>

            <section class="achievements">
                <h2>Заслуги и достижения:</h2>
                <ul class="achievements__list">
                    ${trainer.achievements.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </section>

            <section class="events">
                <h2>Участие в мероприятиях:</h2>
                <ul class="events__list">
                    ${trainer.events.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </section>
        `;
    }
});