// 0 = papel || 1 == pedra | 2 == tesoura
const Imgs = ["./imgs/papel.png","./imgs/pedra.png","./imgs/tesoura.png"]

let jogpa = document.getElementById("jog-papel");
let jogpe = document.getElementById("jog-pedra");
let jogte = document.getElementById("jog-tesoura");

let clickpa = ()=>{TrocaTela(0)}
let clickpe = ()=>{TrocaTela(1)}
let clickte = ()=>{TrocaTela(2)}

jogpa.addEventListener("click",clickpa)
jogpe.addEventListener("click",clickpe)
jogte.addEventListener("click",clickte)


//Funções
    function AtualizaPlacar(param){
        //console.log('entrou')
        const placar_p = document.getElementById("p-contador");
        const placar_c = document.getElementById("c-contador");
        let p_p = parseInt(placar_p.innerHTML)
        let p_c = parseInt(placar_c.innerHTML)
 
        if(param == 1){
            p_p+=1
            placar_p.innerHTML=p_p
        }else{
            p_c+=1
            placar_c.innerHTML=p_c
        }

        if(p_p == 5 || p_c == 5){
            let msg_fin = document.getElementById("final-v-d");

            if(p_p > p_c){
            msg_fin.innerHTML="PARABÉNS, VOCÊ SUPEROU A MÁQUINA!"
            msg_fin.style.fontSize="larger"
            msg_fin.style.fontStyle="bold"
            }else{
            msg_fin.innerHTML="GAME OVER, VOCÊ PERDEU!"
            msg_fin.style.fontSize="larger"
            msg_fin.style.fontStyle="bold"
            }
            jogpa.removeEventListener("click",clickpa)
            jogpe.removeEventListener("click",clickpe)
            jogte.removeEventListener("click",clickte)
        }

    }


    function AposSelecao(indice){
        let jog_pc = Math.floor(Math.random() * 3);
        let back_pc = document.getElementById('jog-computer')
        let back_jg = document.getElementById('jog-player')
        let msg_wl = document.getElementById('vd')
        back_jg.style.backgroundImage="url('"+Imgs[indice]+"')";
        back_pc.style.backgroundImage="url('"+Imgs[jog_pc]+"')";
// 0 = papel | 1 == pedra | 2 == tesoura
        if((indice == 0 && jog_pc == 1) || (indice == 1 && jog_pc == 2) || (indice == 2 && jog_pc == 0)){
            msg_wl.innerHTML="Você ganhou!"
            AtualizaPlacar(1)
        }else if(indice == jog_pc){
            msg_wl.innerHTML="Empate, sem pontos pra ambos!"
        }else{
            AtualizaPlacar(2)
            msg_wl.innerHTML="Você perdeu!"
        }
        
    }

    function TrocaTela(indice){
        let jog_real = document.getElementById('jogadas-realizadas')
        let jog_pos = document.getElementById('jogadas-possiveis')
        let msg_jogada = document.getElementById('msg-jogada')
        let msg_wl = document.getElementById('vd')
        jog_real.style.display="flex";
        jog_pos.style.display="none";
        msg_jogada.innerHTML="Jogadas selecionadas"
       // msg_jogada.innerHTML="Jogadas realizadas"
        AposSelecao(indice);
        setTimeout(()=>{
            jog_real.style.display="none";
            jog_pos.style.display="flex";
            msg_wl.innerHTML=""
            msg_jogada.innerHTML="Selecione sua jogada"
        },2000)
    }
    //AtualizaPlacar(1);
    //AposSelecao(0)
