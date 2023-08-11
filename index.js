import entradaDados from 'readline-sync'

console.log('CALCULE SEU JUROS')
// dados de entrada
let divida = entradaDados.question('Em quanto esta sua divida?: ')

 // vai executar se for maior que zero
if(divida > 0){

    let dia = entradaDados.question('Quantos dias de atraso?: ')
    //vai executar se for maior que zero
    if(dia > 0){
      
        // juros
        let juros = (dia > 15)? 10 : 5;

        //caculo da divida 
        let valorDoJuros = (divida / 100) * juros;
        let total = Number(divida) + Number(valorDoJuros)


        console.log(`voce atrasou em ${dia} dias.`)
        console.log(`seu juros é de ${juros}%`)
        console.log(`Sua divida é de R$${total.toFixed(2)}`)
    }else{
        console.log('VOCE ESTA EM DIA !!!')
    }    
}else{
    console.log('O VALOR DO JUROS DEVE SER MAIOR QUE ZERO')
}