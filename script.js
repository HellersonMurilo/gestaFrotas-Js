// Obtendo os elementos do formulário
const pesoChassi = document.getElementById('pesoChassi');
const pesoSemiReboque = document.getElementById('pesoSemiReboque');
const pesoOutrosEquipamentos = document.getElementById('pesoOutrosEquipamentos');
const pesoBrutoTotal = document.getElementById('pesoBrutoTotal');
const btnCalcularFrota = document.getElementById('btnFrotaTotal');
const quantidadeCargaMensal = document.getElementById('quantidadeMensal');
const distanciaIda = document.getElementById('distanciaIda');
const distanciaVolta = document.getElementById('distanciaVolta');
const velocidadeIda = document.getElementById('velocidadeIda');
const velocidadeVolta = document.getElementById('velocidadeVolta');
const tempoCargaDescargaIda = document.getElementById('tempoCargaDescargaIda');
const tempoCargaDescargaVolta = document.getElementById('tempoCargaDescargaVolta');
const jornadaUtil = document.getElementById('jornadaUtil');
const turnosDiarios = document.getElementById('turnosDiarios');
const numeroDiasUteis = document.getElementById('numeroDiasUteis');
const paradasManutencao = document.getElementById('paradasManutencao');
const tipoCarga = document.getElementById('tipoCarga')


btnCalcularFrota.addEventListener('click', () => {



    // Calculando o Peso Total
    const pesoTotalValue = Number(pesoChassi.value) + Number(pesoSemiReboque.value) + Number(pesoOutrosEquipamentos.value);


    // Calculando a Carga Útil do Veículo
    const cargaUtil = parseFloat(pesoBrutoTotal.value) - pesoTotalValue;
    console.log(cargaUtil);

    // Calculando o Número de Viagens Mensais
    const totalDiasMes = 30;
    var numeroViagensMesais = parseFloat(quantidadeCargaMensal.value) / totalDiasMes;
    var numeroFixo = 2
    numeroViagensMesais = numeroViagensMesais.toFixed(numeroFixo)
    console.log(numeroViagensMesais);

    // Calculando o Tempo Total de Viagem
    const minutosPorHora = 60.0;
    const tempoIda = (parseFloat(distanciaIda.value) / parseFloat(velocidadeIda.value)) * minutosPorHora;
    const tempoVolta = (parseFloat(distanciaVolta.value) / parseFloat(velocidadeVolta.value)) * minutosPorHora;
    var tempoViagemTotal = tempoIda + tempoVolta + parseFloat(tempoCargaDescargaIda.value) + parseFloat(tempoCargaDescargaVolta.value);

    tempoViagemTotal = tempoViagemTotal.toFixed(2)
    console.log(tempoViagemTotal);

    // Calculando tempo diario de operação
    var tempoDiarioOperacao = (Number(turnosDiarios.value) * Number(jornadaUtil.value)) / (Number(turnosDiarios.value)) * minutosPorHora
    console.log(tempoDiarioOperacao)

    //numero de viagens de um veiculo por dia 
    var tempoViagemVeiculoDia = tempoDiarioOperacao / tempoViagemTotal
    tempoViagemVeiculoDia = tempoViagemVeiculoDia.toFixed(4)
    console.log(tempoViagemVeiculoDia)

    // Calculo do número total de dias disponiveis no mês
    var diasUteis = Number(numeroDiasUteis.value) - Number(paradasManutencao.value)
    console.log(diasUteis)

    //Calculando o de viagens mensais de um veiculo
    var quantidadeViagensMensaisVeiculo = tempoViagemVeiculoDia * diasUteis
    quantidadeViagensMensaisVeiculo = quantidadeViagensMensaisVeiculo.toFixed(2)
    console.log(quantidadeViagensMensaisVeiculo)

    //Calculo da Frota Necessaria
    var frotaNecessaria = numeroViagensMesais / quantidadeViagensMensaisVeiculo
    frotaNecessaria = Math.ceil(frotaNecessaria)
    console.log(frotaNecessaria)

    document.getElementById('pesoTotal').textContent = frotaNecessaria.toFixed(2);

    $(function () {
        var staticBackdrop = document.getElementById('staticBackdrop');
        var myModal = new bootstrap.Modal(staticBackdrop);
        myModal.show();
    });

    //tratamento de erro
    
    var corpoModal = document.getElementById('corpoModal')
    corpoModal.innerHTML = `
        <h2>Tipo da carga: ${tipoCarga.value}</h2>
        <h5>${frotaNecessaria} veículos necessários</h5>
    `

});

