let frase = document.getElementById("textoDeEntrada");
let resultado = document.getElementById("textoDeSaida");
let botarMaiusculo = document.getElementById("botao1");
let botarMinusculo = document.getElementById("botao2");
let botarFormatado = document.getElementById("botao3");

let textoFormatado = [];
let fraseEntrada = frase.value;

// resultado.innerText = textoFormatado;

const formatarPalavra = (palavra) => {
    let primeiraLetra = palavra.charAt(0).toUpperCase();
    let restoPalavra = palavra.substring(1).toLowerCase();
    return palavraFormatada = primeiraLetra + restoPalavra;
}

const ultimoCaracter = (palavra) => {
    let ultimoChar = palavra.slice(-1);
    return ultimoChar;
}

const proximoElemento = (posicao) => {
    let nextPosicao = posicao + 1;
    return nextPosicao;
}

const elementoAnterior = (posicao) => {
    let backPosicao = posicao - 1;
    return backPosicao;
}

const checkMinusculo = (palavra) => {
    if (palavra == palavra.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

const ultimaPalavra = (array) => {
    let lastWord = array[array.length - 1];
    return lastWord;
}

const tudoEmMaiusculo = (texto) => {
    return textoMaiusculo = texto.toUpperCase();
}

botarMaiusculo.addEventListener('click', function(){
    resultado.innerHTML = tudoEmMaiusculo(frase.value);
});

botarMinusculo.addEventListener('click', function(){
    resultado.innerHTML = tudoEmMinusculo(frase.value);
});


const tudoEmMinusculo = (texto) => {
    return textoMinusculo = texto.toLowerCase();
}


const textoEntrada = (frase) => {

    const formatarTexto = (array) => {

        array.forEach(function(palavraAtual){
        
   
           //FORMATA A PRIMEIRA PALAVRA DO TEXTO E SE ELA TERMINAR COM PONTUACAO, A PROXIMA PALAVRA SERA DEVOLVIDA FORMATADA 
           if (array.indexOf(palavraAtual) == 0) {
               textoFormatado.push(formatarPalavra(palavraAtual));
   
               if ((ultimoCaracter(palavraAtual) == '?' | ultimoCaracter(palavraAtual) == '!' | ultimoCaracter(palavraAtual) == '.') &&
                   (proximoElemento(palavraAtual) !== undefined)) {
                    textoFormatado.push(formatarPalavra(array[proximoElemento(array.indexOf(palavraAtual))]));
                   }
   
           //FORMATA TUDO AQUILO QUE NÃO SEJA A PRIMEIRA PALAVRA
           } else {

                   // SE A PALAVRA TERMINA COM PONTUAÇÃO
                   if ((ultimoCaracter(palavraAtual) == '?' | ultimoCaracter(palavraAtual) == '!' | ultimoCaracter(palavraAtual) == '.')
                   )  
                   {
                                //SEGURANÇA E VERIFICAÇÃO
                                if (((array[elementoAnterior(array.indexOf((palavraAtual)))] !== undefined))) {
                                     //SE A PALAVRA ATUAL FORMATADA FOR DIFERENTE DA ANTERIOR, MANDA A PALAVRA NORMAL  
                                    if (formatarPalavra(palavraAtual) !== ultimaPalavra(textoFormatado)) {
      
                                        textoFormatado.push(palavraAtual.toLowerCase());

                                        //SEGURANÇA E VERIFICAÇÃO
                                        if ((array[proximoElemento(array.indexOf((palavraAtual)))] !== undefined)) {

                                            //FORMATA A PROXIMA PALAVRA DO ARRAY
                                            if (array[proximoElemento(array.indexOf(palavraAtual))] !== array[proximoElemento(array.indexOf(palavraAtual))].toUpperCase()) {
                                                textoFormatado.push(formatarPalavra(array[proximoElemento(array.indexOf(palavraAtual))]));
                                            } else {
                                                textoFormatado.push(formatarPalavra(array[proximoElemento(array.indexOf(palavraAtual))]));
                                            }
                                        } else {
                                            return;
                                        }

                                    //SE A PALAVRA ATUAL FORMATADA FOR IGUAL A ANTERIOR
                                    } else {
                                        //SEGURANÇA E VERIFICAÇÃO
                                        if (array[proximoElemento(array.indexOf(palavraAtual))] !== undefined) {
                                            //FORMATA A PRÓXIMA PALAVRA.
                                            textoFormatado.push(formatarPalavra(array[proximoElemento(array.indexOf(palavraAtual))]));
                                        //SE A PALAVRA ATUAL FOR O ULTIMO ELEMENTO DO ARRAY
                                        } else {
                                            //SE A PALAVRA ATUAL FORMATADA FOR DIFERENTE DA ANTERIOR
                                            if (formatarPalavra(palavraAtual) !== ultimaPalavra(textoFormatado)) {
                                                //MANDA A PALAVRA FORMATADA
                                                textoFormatado.push(formatarPalavra(palavraAtual));
                                            }
                                        }
                                        
                                    }
                                        
                                }
   
                    
                    // SE A PALAVRA NAO TERMINA COM PONTUAÇÃO
                    }else {                        
                        //SEGURANÇA E VERIFICAÇÃO
                        if (array[elementoAnterior(array.indexOf(palavraAtual))] !== undefined) {
                            //VERIFICA SE EXISTE PROXIMA PALAVRA
                            if (array[proximoElemento(array.indexOf(palavraAtual))] !== undefined) {
                                //SE A PALAVRA ATUAL FORMATADA FOR DIFERENTE DA ANTERIOR, IMPRIMA A PALAVRA NORMAL
                                if (formatarPalavra(palavraAtual) !== ultimaPalavra(textoFormatado)) {
                                    textoFormatado.push(palavraAtual.toLowerCase());
                                }
                            //SE FOR A ULTIMA PALAVRA DO ARRAY
                            } else {
                                //SE A PALAVRA ATUAL FORMATADA FOR DIFERENTE DA ANTERIOR, IMPRIMA A PALAVRA NORMAL
                                if (formatarPalavra(palavraAtual) !== ultimaPalavra(textoFormatado)) {
                                    textoFormatado.push(palavraAtual.toLowerCase());
                                }
                            }

                        }

                    }
   
           }
   
       }
    );
   }
    
   textoFormatado = [''];
   formatarTexto(frase.split(" "));
   return textoFormatado.join(' ');    
}

botarFormatado.addEventListener('click', function(){
    resultado.innerHTML = textoEntrada(frase.value);
});