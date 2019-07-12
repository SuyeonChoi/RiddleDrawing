
var btn = document.getElementById("openRank");
btn.onclick = function popRankBox(){
  var modal_backgroud = document.body;
  modal_backgroud.style.display = "block";
  modal_backgroud.style.position = "fixed";
  modal_backgroud.style.left = 0;
  modal_backgroud.style.right = 0;
  modal_backgroud.style.widht = "100%";
  modal_backgroud.style.height = "100%";
  modal_backgroud.style.backgroundColor = "rgba(0,0,0,0.4)";

  var modal_content = document.createElement("div");
  modal_content.setAttribute("class","modal_content");
  modal_content.style.backgroundColor = "#fefefe";
  modal_content.style.margin = "auto";
  modal_content.style.padding = "40px";
  modal_content.style.border = "1px solid #888";
  modal_content.style.width = "70%";
  modal_content.style.height = "50%";

  var close = document.createElement("span");
  close.setAttribute("class","close");
  close.innerHTML = "&times;";
  close.style.color = "#aaaaaa";
  close.style.float = "right";
  close.style.fontSize = "28px";
  close.style.fontWeight = "bold";

  modal_content.appendChild(close);
  modal_backgroud.appendChild(modal_content);
}
