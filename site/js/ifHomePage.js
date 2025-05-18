setTimeout(seeCommunicationButtons,7333);
function seeCommunicationButtons(){
  console.log('communicationButtons');
  document.querySelector('.messages > a:nth-child(1) > img:nth-child(1)').setAttribute("src","site/img/whatsapp.svg")
  document.querySelector('.messages > a:nth-child(2) > img:nth-child(1)').setAttribute("src","site/img/telegram.svg")
}
