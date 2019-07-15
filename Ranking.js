
var btn = document.getElementById("openRank");

btn.onclick = function popRankBox(){
  //추후에 form태그에서 받아오기
  var name = "suyeonchoi";
  var score = 234;
  //추후에 firebase에서 데이터 불러오기
  var data = new Object();
  data = {first:500, second:400, third:300, fourth:200, fifth:100, sixth: 0};
  //새로운 값 배열에 삽입 후 정렬
  data[name] = score;

  var sortable = [];
  for(var person in data){
    sortable.push([person, data[person]]);
  }
  sortable.sort(function(a,b){
    return b[1] - a[1];
  })

  var modal_background = document.body;
  modal_background.style.position = "fixed";
  modal_background.style.left = 0;
  modal_background.style.right = 0;
  modal_background.style.widht = "100%";
  modal_background.style.height = "100%";
  modal_background.style.overflow = "auto";
  modal_background.style.backgroundColor = "rgba(0,0,0,0.2)";

  var modal_content = document.createElement("div");
  modal_content.setAttribute("class","modal_content");
  modal_content.style.backgroundColor = "#fefefe";
  modal_content.style.margin = "auto";
  modal_content.style.borderRadius = "10px";
  modal_content.style.border = "1px solid #888";
  modal_content.style.width = "250px";
  modal_content.style.height = "70%";
  modal_content.style.overflow = "auto";
  modal_content.style.position = "relative";
  modal_content.style.backgroundColor = "white";

  var close = document.createElement("span");
  close.setAttribute("class","close");
  close.innerHTML = "&times;";
  close.style.color = "black";
  close.style.position = "absolute";
  close.style.right = "50%";
  close.style.bottom = "0px";
  close.style.fontSize = "28px";
  close.style.fontWeight = "bold";
  close.onmouseover = function mouseOver(){
    close.style.color = "rgba(0,0,0,0.5)";
    close.style.cursor = "pointer";
  }
  close.onmouseout = function mouseOut(){
    close.style.color = "black";
  }
/*
  var ranktable = document.createElement("div");
  ranktable.setAttribute("class","ranktable")
  ranktable.style.backgroundColor = "black";
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
*/
  //데이터 예제(top5보여주기)
  if(sortable.length != 0){
    var table = document.createElement("TABLE");
    table.style.position= "absolute";
    table.style.width = "100%"
    table.style.top = "0px";
    table.style.borderSpacing = "0px";
    table.style.fontFamily = 'Comic Sans MS';

    var tr = document.createElement("TR");
    tr.style.backgroundColor = "black";
    var th1 = document.createElement("TD");
    th1.setAttribute("colspan","2");
    th1.innerHTML = "Ranking";
    th1.style.color = "white";
    th1.style.marginBottom = "10px";
    th1.style.padding = "15px";
    tr.appendChild(th1);
    var th2 = document.createElement("TD");
    th2.innerHTML="points";
    th2.style.color = "white";
    th2.style.textAlign = "right";
    th2.style.fontSize = "12px";
    th2.style.padding = "10px";
    tr.appendChild(th2);
    table.appendChild(tr);

    for(var i=0; i<5; i++){ //i는 순위 표기 변수
      var tr = document.createElement("TR");
      var td = document.createElement("TD");
      td.style.padding = "5px";
      if(i==0){
        var icon = document.createElement("i");
        icon.setAttribute("class",'fas fa-trophy');
        icon.style.color="gold";
        td.appendChild(icon);
      }
      else if(i==1){
        var icon = document.createElement("i");
        icon.setAttribute("class",'fas fa-trophy');
        icon.style.color="silver";
        td.appendChild(icon);
      }
      else if (i == 2){
        var icon = document.createElement("i");
        icon.setAttribute("class",'fas fa-trophy');
        icon.style.color="#a0534b";
        td.appendChild(icon);
      }
      else{//순위권이 넘어가면 숫자로 표기
        td.innerHTML = i+1+".";
      }
      tr.appendChild(td);
      var td1 = document.createElement("TD");
      td1.style.padding = "5px";
      td1.innerHTML = sortable[i][0];
      tr.appendChild(td1);
      var td2 = document.createElement("TD");
      td2.style.padding = "5px";
      td2.style.textAlign = "right";
      td2.innerHTML = sortable[i][1]+"p";
      //자기 점수
      if(sortable[i][0] == name){
        td1.style.color = "red";
        td2.style.color = "red";
        if(i > 2){
          td.style.color = "red";
        }
      }
      tr.appendChild(td2);
      table.appendChild(tr);
    }
  }

  //ranktable.appendChild(ranking);
  //ranktable.appendChild(point);
  //ranktable.appendChild(table);
  //modal_content.appendChild(ranktable);

  modal_content.appendChild(table);
  modal_content.appendChild(close);
  modal_background.appendChild(modal_content);


  //modal 창 닫기
  close.onclick = function(){
    modal_background.removeChild(modal_content);
    modal_background.style.backgroundColor ="white";
  }
  window.onclick = function(event){
    if(event.target == modal_background){
      modal_background.removeChild(modal_content);
      modal_background.style.backgroundColor ="white";
    }
  }
}
