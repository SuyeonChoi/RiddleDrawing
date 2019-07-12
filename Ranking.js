
var btn = document.getElementById("openRank");

btn.onclick = function popRankBox(){
  //추후에 form태그에서 받아오기
  var name = "suyeonchoi";
  var score = 234;
  //추후에 firebase에서 데이터 불러오기
  var data = new Object();
  data = {first:500, second:400, third:300, fourth:200, fifth:100, sixth: 0};
  //새로운 값 배열에 삽입 후 정렬
  data.name = score;

  var sortable = [];
  for(var person in data){
    sortable.push([person, data[person]]);
  }
  sortable.sort(function(a,b){
    return b[1] - a[1];
  })

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
  point.innerHTML = "points";
  point.style.position = "absolute";
  point.style.top = "15px";
  point.style.right = "30px";

  //데이터 예제(top5보여주기)
  //var keys = Object.keys(data);

  if(sortable.length != 0){
    var table = document.createElement("TABLE");
    table.style.position= "absolute";
    table.style.top = "40px";
    table.style.width = "100%"
    for(var i=0; i<5; i++){ //i는 순위 표기 변수
      var tr = document.createElement("TR");
      var td = document.createElement("TD");
      td.style.padding = "15px";
      td.innerHTML = i+1;
      tr.appendChild(td);
      var td1 = document.createElement("TD");
      td1.style.padding = "15px";
      td1.innerHTML = sortable[i][0];
      tr.appendChild(td1);
      var td2 = document.createElement("TD");
      td2.style.padding = "15px";
      td2.style.textAlign = "right";
      td2.innerHTML = sortable[i][1];
      tr.appendChild(td2);
      table.appendChild(tr);
    }
  }

  ranktable.appendChild(ranking);
  ranktable.appendChild(point);
  ranktable.appendChild(table);

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
