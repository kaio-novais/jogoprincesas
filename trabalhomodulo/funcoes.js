
function bt1 () {   /*FUNÇÃO DA PAGINA 1 PRINCESA REAL*/
    var escolha = prompt(`Fugir com o principe encantado, ou matar o dragão?
1 - LUTAR || 2 - FUGIR`)   /*FUNÇÃO PARA DIRECIONAR PARA OUTRA PAGINA!*/

    while (true) {
        if (escolha == 2 || escolha == 1) {
            break;
        }
        else{
            alert("Digite o numero da respectiva opção");
            escolha = prompt(`Escolha novamente: 1- LUTAR || 2 - FUGIR`)
        }
    }
    if (escolha == 2) {
        alert("Parece que esta esquentando...")
        window.location.replace("real2.html");
    }
    
    if (escolha == 1) {
        alert("UMA CHAMA DE CORAGEM SE ACENDE!...")
        window.location.replace("real3.html");

    }
};

/*****************************************/ 

function bt2 () {   /*FUNÇÃO DA PAGINA 1 PRINCESA barbara*/
    var escolha = prompt(`Oque fazer? usar um arco e flecha para acertar o cavaleiro inimigo ou se jogar com a cataputa?
1 - USAR ARCO || 2 - SE JOGAR`)   /*FUNÇÃO PARA DIRECIONAR PARA OUTRA PAGINA!*/

    while (true) {
        if (escolha == 2 || escolha == 1) {
            break;
        }
        else{
            alert("Digite o numero da respectiva opção");
            escolha = prompt(`Escolha novamente: 1- USAR ARCO || 2 - SE JOGAR`)
        }
    }
    if (escolha == 2) {
        alert(`ALGUEM APRENDEU A VOAR...
        pena que foi da forma errada. 
        A pobre princesa se espatifou ao chão.`)
        alert("FIM DE JOGO")
        window.location.replace("index1.html");
    }
    
    if (escolha == 1) {
        alert(`Alguem resolveu aprender a brincar de arqueiro!`)
        alert(`A corajosa princesa direciona seus braços para cima
        e mira atentamente. com um movimento suave a corda dispara a flecha`)
        alert("em um golpe de sorte o artefato derruba o cavaleiro, libertando o principe de suas amarras!")
        alert("FIM DE JOGO, VOCÊ GANHOU!")
        window.location.replace("index1.html");
    }
};

/**************************************************** */

function bt3 () {   /*FUNÇÃO DA PAGINA 1 PRINCESA barbara*/
    var escolha = prompt(`Ajudar a estranha princesa ou salvar o seu principe encantado?
1 - AJUDAR || 2 - SALVAR O PRINCIPE`)   /*FUNÇÃO PARA DIRECIONAR PARA OUTRA PAGINA!*/

    while (true) {
        if (escolha == 2 || escolha == 1) {
            break;
        }
        else{
            alert("Digite o numero da respectiva opção");
            escolha = prompt(`Escolha novamente: 1- USAR ARCO || 2 - SE JOGAR`)
        }
    }
    if (escolha == 2) {
        alert(`A princesa celestial salva seu pobre principe das garras do dragão mas existe um porem, a princesa real foi consumida
                pelas chamas do dragão.`)
        alert("FIM DE JOGO, você Ganhou! Bad end");
        window.location.replace("index1.html");
    }
    
    if (escolha == 1) {
        alert(`Ó NÃO, SEUS esforços foram atoa...infelizmente o grandioso dragão consumiu a princesa real em cinzas.
        você não teve culpa.`);
        alert("FIM DE JOGO, você perdeu! happy end");
        window.location.replace("index1.html");
    }
};

function menureturn() { /*FUNÇÃO EXCLUSIVA PARA RETORNAR AO MENU*/
    window.location.replace("index.html");
}

