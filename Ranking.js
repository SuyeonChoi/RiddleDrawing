
var btn = document.getElementById("openRank");

btn.onclick = function popRankBox(){
  var modal_backgroud = document.body;
  modal_backgroud.style.display = "block";
  modal_backgroud.style.position = "fixed";
  modal_backgroud.style.left = 0;
  modal_backgroud.style.right = 0;
  modal_backgroud.style.widht = "100%";
  modal_backgroud.style.height = "100%";
  modal_backgroud.style.overflow = "auto";

  var modal_content = document.createElement("div");
  modal_content.setAttribute("class","modal_content");
  modal_content.style.backgroundColor = "#fefefe";
  modal_content.style.margin = "auto";
  modal_content.style.padding = "40px";
  modal_content.style.border = "1px solid #888";
  modal_content.style.width = "50%";
  modal_content.style.height = "50%";
  modal_content.style.overflow = "auto";
  modal_content.style.position = "relative";
  modal_content.style.backgroundColor = "rgba(0,0,0,0.2)";

  var close = document.createElement("span");
  close.setAttribute("class","close");
  close.innerHTML = "&times;";
  close.style.color = "black";
  close.style.position = "absolute";
  close.style.right = "10px";
  close.style.top = "0px";
  close.style.fontSize = "28px";
  close.style.fontWeight = "bold";
  close.onmouseover = function mouseOver(){
    close.style.color = "rgba(0,0,0,0.5)";
    close.style.cursor = "pointer";
  }
  close.onmouseout = function mouseOut(){
    close.style.color = "black";
  }

  var ranktable = document.createElement("div");
  ranktable.style.position = "relative";
  var ranking = document.createElement("span");
  ranking.innerHTML = "Ranking";
  ranking.style.fontSize = "30px";
  ranking.style.fontWeight = "bold";
  ranking.style.position = "absolute";
  ranking.style.left = "20px";

  var point = document.createElement("span");
  point.innerHTML = "point";
  point.style.position = "absolute";
  point.style.top = "15px";
  point.style.right = "30px";

  ranktable.appendChild(ranking);
  ranktable.appendChild(point);

  modal_content.appendChild(close);
  modal_content.appendChild(ranktable);
  modal_backgroud.appendChild(modal_content);


  //modal 창 닫기
  close.onclick = function(){
    modal_backgroud.removeChild(modal_content);
  }
  window.onclick = function(event){
    if(event.target == modal_backgroud){
      modal_backgroud.removeChild(modal_content);
    }
  }

}
