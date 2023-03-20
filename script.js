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


let textoFormatado = [];

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
      
                                        textoFormatado.push(palavraAtual);
                                        //SEGURANÇA E VERIFICAÇÃO
                                        if ((array[proximoElemento(array.indexOf((palavraAtual)))] !== undefined)) {
                                            //FORMATA A PROXIMA PALAVRA DO ARRAY
                                            textoFormatado.push(formatarPalavra(array[proximoElemento(array.indexOf(palavraAtual))]));
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
                                    textoFormatado.push(palavraAtual);
                                }
                            //SE FOR A ULTIMA PALAVRA DO ARRAY
                            } else {
                                //SE A PALAVRA ATUAL FORMATADA FOR DIFERENTE DA ANTERIOR, IMPRIMA A PALAVRA NORMAL
                                if (formatarPalavra(palavraAtual) !== ultimaPalavra(textoFormatado)) {
                                    textoFormatado.push(palavraAtual);
                                }
                            }

                        }

                    }
   
           }
   
       }
    );
   }
    
   
   
   formatarTexto(array = frase.split(" "));
   console.log(textoFormatado.join(' '));
    
}


console.log("finalmente isso deu certo =)");
console.log("esse é a saida:");
textoEntrada("finalmente isso deu certo =)");