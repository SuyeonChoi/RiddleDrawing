
var btn = document.getElementById("openRank");
btn.onclick = function popRankBox(){
  //var modal_backgroud = document.createElemet("div");
  //modal_backgroud.setAttribute("id","modal_backgroud");
  //modal_backgroud.setAttribute("class","modal");

  var modal_content = document.createElement("div");
  modal_content.setAttribute("class","modal_content");

  var close = document.createElement("span");
  close.setAttribute("class","close");
  close.innerHTML = "&times;";

  modal_content.appendChild(close);
  document.getElementById("popModal").appendChild(modal_content);
}
