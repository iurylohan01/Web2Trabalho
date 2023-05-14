var verMaisBotao = document.querySelector("#btn-mostrar");
var verMenosBotao = document.querySelector("#btn-reverter");
var conteudoDivs = document.querySelectorAll(".atencao");
var conteudoContainer = document.querySelector(".cent-atn");
var conteudoDivsMostradas = 8;

verMaisBotao.addEventListener("click", function() {
  for (var i = 0; i < 8; i++) {
    if (conteudoDivs[conteudoDivsMostradas + i]) {
      conteudoDivs[conteudoDivsMostradas + i].style.display = "block";
    }
  }
  conteudoDivsMostradas += 8;
  if (conteudoDivsMostradas >= conteudoDivs.length) {
    verMaisBotao.style.display = "none";
    verMenosBotao.style.display = "block";
    verMenosBotao.style.marginRight = "auto";
    verMenosBotao.style.marginLeft = "auto";
  }
});

verMenosBotao.addEventListener("click", function() {

  conteudoDivsMostradas -= 8;
  for (var i = conteudoDivsMostradas; i < conteudoDivs.length; i++) {
    conteudoDivs[i].style.display = "none";
  }
  if (conteudoDivsMostradas <= 8) {
    verMenosBotao.style.display = "none";
    verMaisBotao.style.display = "block";
    verMaisBotao.style.marginRight = "auto";
    verMaisBotao.style.marginLeft = "auto";
  }
});
