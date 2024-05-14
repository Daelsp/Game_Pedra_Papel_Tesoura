var player1Name, player2Name;

document.getElementById('next1').addEventListener('click', function() {
    player1Name = document.getElementById('player1').value;
    player2Name = document.getElementById('player2').value;

    if (player1Name && player2Name) {
        document.getElementById('screen1').style.display = 'none';
        document.getElementById('player1Label').textContent = player1Name;
        document.getElementById('player2Label').textContent = player2Name;
        document.getElementById('screen2').style.display = 'block';
    } else {
        alert('Por favor, preencha os nomes dos jogadores.');
    }
});

document.getElementById('next2').addEventListener('click', function() {
    var choice1 = document.getElementById('choice1').value;

    if (choice1) {
        document.getElementById('screen2').style.display = 'none';
        document.getElementById('screen3').style.display = 'block';
    } else {
        alert('Por favor, escolha uma opção.');
    }
});

document.getElementById('next3').addEventListener('click', function() {
    var choice2 = document.getElementById('choice2').value;
    var choice1 = document.getElementById('choice1').value;

    if (choice2) {
        document.getElementById('screen3').style.display = 'none';
        document.getElementById('screen4').style.display = 'block';

        var result = getResult(choice1, choice2);
        var resultParagraph = document.getElementById('result');

        if (result === 'empate') {
            resultParagraph.textContent = 'Empate!';
        } else {
            resultParagraph.textContent = 'O vencedor é: ' + (result === 'player1' ? player1Name : player2Name) + '!';
        }
    } else {
        alert('Por favor, escolha uma opção.');
    }
});

document.getElementById('restart').addEventListener('click', function() {
    document.getElementById('screen4').style.display = 'none';
    document.getElementById('screen1').style.display = 'block';
});

document.getElementById('back-to-1').addEventListener('click', function() {
    document.getElementById('screen4').style.display = 'none';
    document.getElementById('screen2').style.display = 'block';
});

// Função para determinar o vencedor
function getResult(choice1, choice2) {
    if (choice1 === choice2) {
        return 'empate';
    } else if ((choice1 === 'Pedra' && choice2 === 'Tesoura') ||
               (choice1 === 'Papel' && choice2 === 'Pedra') ||
               (choice1 === 'Tesoura' && choice2 === 'Papel')) {
        return 'player1';
    } else {
        return 'player2';
    }
}
