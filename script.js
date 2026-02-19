function inserir(num) {
    document.querySelector('.tela').innerHTML += num;
};

function limpar() {
    document.querySelector('.tela').innerHTML = '';
};

function back() {
    let tela = document.querySelector('.tela').innerHTML;
    document.querySelector('.tela').innerHTML = tela.substring(0, tela.length -1

    );
    
};

function calcular() {
    let tela = document.querySelector('.tela').innerHTML;

    try {
        document.querySelector('.tela').innerHTML = eval(tela);
    } catch {
        document.querySelector('.tela').innerHTML = 'Erro';
    };
};

function toggleTheme() {
    document.body.classList.toggle('Dark');
};