function Jogar(){
    let nome = document.getElementById('nome').value;
    document.getElementById("PerguntascorretasSection").style.display = 'none';
    document.getElementById("PerguntasincorretasSection").style.display = 'none';
    document.getElementById("Perguntascorretas").innerHTML = "";
    document.getElementById("Perguntasincorretas").innerHTML = "";
    document.getElementById("jogarNovamente").style.display = 'none';

    if(nome.length <=0){
        alert("Por favor, digite o seu nome");
    }else{
        document.getElementById('Inicial').style.display='none';
        document.getElementById('Fase1').style.display='block';
        document.getElementById('Ola').innerHTML = 'Olá, '+nome+'<br/>Vamos Jogar?'
    }
    
}
function categoriaPaises(){
    document.getElementById('Fase1').style.display='none';
   let pergunta1 = prompt("Quais os países que têm a maior e a menor expectativa de vida do mundo?\n" +
   " A- Japão e Serra Leoa\n B- Austrália e Afeganistão\n C- Itália e Chade\n D- Brasil e Congo\n E- EUA e Angola");
    if (pergunta1 === "A" || pergunta1 === "a") {
        let questionCorrect1 = document.getElementById("Perguntascorretas")
        questionCorrect1.innerHTML += "<br/>pergunta1";
    }
    else {
        let questionIncorrect1 = document.getElementById("Perguntasincorretas")
        questionIncorrect1.innerHTML += "<br/>pergunta1";
    }

    let pergunta2 = prompt("Qual a nacionalidade de Che Guevara? \n" + "A- Cubana\n B- Peruano\n C- Panamenha\n D- Columbiana\n E- Argentina");
    if (pergunta2 === "E" || pergunta2 === "e") {
        let questionCorrect2 = document.getElementById("Perguntascorretas");
        questionCorrect2.innerHTML += "<br/>pergunta2";
    }
    else {
        let questionIncorrect2 = document.getElementById("Perguntasincorretas")
        questionIncorrect2.innerHTML += "<br/>pergunta2";
    }

    let pergunta3 = prompt("Em qual local da Ásia o portugues é lingua oficial? \n" + "A- Índia\n B- Filipinas\n C- Moçambique\n D- Macau\n E- Portugual");
    if (pergunta3 === "D" || pergunta3 === "d") {
        let questionCorrect3 = document.getElementById("Perguntascorretas")
        questionCorrect3.innerHTML += "<br/>pergunta3";
    }
    else {
        let questionIncorrect3 = document.getElementById("Perguntasincorretas")
        questionIncorrect3.innerHTML += "<br/>pergunta3";
    }
    document.getElementById("PerguntascorretasSection").style.display = 'block';
    document.getElementById("PerguntasincorretasSection").style.display = 'block';
    document.getElementById("jogarNovamente").style.display = 'block';
}

function categoriaHP(){
    document.getElementById('Fase1').style.display='none';
    let pergunta1 = prompt("Harry Potter é um bruxo?\n" +
                            "A- Verdadeiro\nB- Falso");
    if (pergunta1 === "A" || pergunta1 === "a"){
        let questionCorrect1 = document.getElementById("Perguntascorretas");
        questionCorrect1.innerHTML += "<br/>pergunta1";
    
    }
    else {
        let questionIncorrect1 = document.getElementById("Perguntasincorretas");
        questionIncorrect1.innerHTML += "<br/>pergunta1";
    }
    let pergunta2 = prompt("Hermione e Draco são os melhores amigos de Harry?\n" +
                            "A- Verdadeiro\nB- Falso");
    if (pergunta2 === "B" || pergunta2 === "b"){
        let questionCorrect2 = document.getElementById("Perguntascorretas");
        questionCorrect2.innerHTML += "<br/>pergunta2";
    }
    else {
        let questionIncorrect2 = document.getElementById("Perguntasincorretas");
        questionIncorrect2.innerHTML += "<br/>pergunta2";
    }    
    let pergunta3 = prompt("Minerva McGonagall é uma professora de Hogwarts?\n" +
                            "A- Verdadeiro\nB- Falso");
    if (pergunta3 === "A" || pergunta3 === "a"){
        let questionCorrect3 = document.getElementById("Perguntascorretas");
        questionCorrect3.innerHTML += "<br/>pergunta3";
    }
    else {
        let questionIncorrect3 = document.getElementById("Perguntasincorretas");
        questionIncorrect3.innerHTML += "<br/>pergunta3";
    }
    document.getElementById("PerguntascorretasSection").style.display = 'block';
    document.getElementById("PerguntasincorretasSection").style.display = 'block';
    document.getElementById("jogarNovamente").style.display = 'block';
}