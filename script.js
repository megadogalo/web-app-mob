// Simulação de dados de jogos
const gamesData = [
    { name: "Milwaukee Bucks vs Boston Celtics", location: "Arena Fiserv Forum", date: "2024-04-01" },
    { name: "Charlotte Hornets vs Miami Heat", location: "Arena Spectrum Center", date: "2024-04-15" },
    // Adicione mais jogos conforme necessário
];

// Função para renderizar a lista de jogos
function renderGameList(games) {
    const gameList = document.getElementById('gameList');
    gameList.innerHTML = '';
    games.forEach(game => {
        const gameCard = `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${game.name}</h5>
                    <p class="card-text">Local: ${game.location}</p>
                    <p class="card-text">Data: ${game.date}</p>
                    <a href="#" class="btn btn-primary btn-block">Comprar Ingresso</a>
                </div>
            </div>
        `;
        gameList.innerHTML += gameCard;
    });
}

// Renderizar lista de jogos ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    renderGameList(gamesData);
});

// Filtrar jogos por data
document.getElementById('gameDate').addEventListener('change', function () {
    const selectedDate = this.value;
    const filteredGames = gamesData.filter(game => game.date === selectedDate);
    renderGameList(filteredGames);
});

// Pesquisar jogos por nome
document.getElementById('gameSearch').addEventListener('input', function () {
    const searchTerm = this.value.trim().toLowerCase();
    const filteredGames = gamesData.filter(game => game.name.toLowerCase().includes(searchTerm));
    renderGameList(filteredGames);
});

// Controlar a opacidade do footer ao rolar
let lastScrollTop = 0;
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll down
        document.querySelector('.footer').style.opacity = "1"; // Torna o footer totalmente visível
    } else {
        // Scroll up
        document.querySelector('.footer').style.opacity = "0.5"; // Torna o footer parcialmente transparente
    }
    lastScrollTop = scrollTop;
});
