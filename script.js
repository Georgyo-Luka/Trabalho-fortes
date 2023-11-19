function saudacao() {
    const agora = new Date();
    const hora = agora.getHours();
  
    let mensagem;
  
    if (hora >= 5 && hora < 12) {
      mensagem = 'Bom dia!';
    } else if (hora >= 12 && hora < 18) {
      mensagem = 'Boa tarde!';
    } else {
      mensagem = 'Boa noite!';
    }
  
    document.getElementById('saudacao').innerText = mensagem;
  }
  saudacao();

  function pegardiasemana(){
    const dias = [ 'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const diaAtual = new Date();
    const diaDaSemana = diaAtual.getDay();
    const nomediasemana = dias[diaDaSemana];
    const elementoDiaSemana = document.getElementById('saudacao-dia');
    elementoDiaSemana.textContent = `Hoje é ${nomediasemana}`;
  }
  pegardiasemana();

  
  