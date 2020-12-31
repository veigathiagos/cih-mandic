function entrar(){
   let resp = document.getElementById('resp')

   if (resp.value == 'rainha' || resp.value == 'Rainha' || resp.value == 'RAINHA'){
      $("#acertou").modal('toggle');
   } else {
      $("#errou").modal('toggle');
   }
}

function sair(){
   localStorage.clear()
   window.location.href = "index.html";
}