/**
 * 
 * B
 * pesoBrutoTotal
 * pesoTotalVeiculo = VALOR DA FUNÇÂO
 * 
 * C
 * cargaTotal,
 * capacidadeUtil = VALOR DA FUNÇÂO
 * 
 * D
 * tempoIda
 * tempoVolta
 * tempoCarga
 * tempoDescarga
 * 
 * E
 * numeroTurnoDiario
 * duracaoTurno
 * 
 * F
 * tempoTotalOperação 
 * tempoTotalViagem
 * 
 * G
 * numerosDiasTrabalhados
 * numeroDiasParadosManutencao
 * 
 * H
 * numeroViagensDiarioVeiculo
 * numeroDiasTrabalhadosMes
 * 
 * I
 * numeroViagensNecessarias
 * 
 * (FAZER COM ATENÇÃO O I)
 */

//Calcular o peso total

const pesoChassi = document.getElementById('pesoChassi');
const pesoSemiReboque = document.getElementById('pesoSemiReboque')
const pesoCarroceria = document.getElementById('pesoCarroceria')
const pesoOutrosEquipamentos = document.getElementById('pesoOutrosEquipamentos')
const pesoBrutoTotal = document.getElementById('pesoBrutoTotal')
const btnCalculaPesoTotal = document.getElementById('btnPesoTotal')


btnCalculaPesoTotal.addEventListener('click', () => {
    
    const pesoTotal = document.getElementById('pesoTotal')
    pesoTotal.textContent = +pesoChassi.value + +pesoSemiReboque.value + +pesoCarroceria.value + +pesoOutrosEquipamentos.value

    //Carga Util do Veiculo
    var cargaUtil = pesoBrutoTotal.value - pesoTotal.textContent
    console.log(cargaUtil)

    //numero

})





