function popupRankBox(data){
  if(document.querySelector('#ranking-modal') !== null){
    switchRankinModal();
    return;
  }
<<<<<<< HEAD
  
  let rankingBackground = document.createElement('div');
  rankingBackground.id = 'ranking-background';
  rankingBackground.innerHTML = '<div id="ranking-wrapper" style="display:none"><div id="ranking-modal"><table id="ranking-table"><thead><tr><th colspan="2">ranking</th><th>point</th></tr></thead><tbody></tbody></table></div><div id="retry-btn">RETRY</div><div id="exit-btn">EXIT</div></div>'
  
  let tbody = rankingBackground.querySelector('tbody');
  const sortedData = sortRankData(data);
  
=======

  let rankingBackground = document.createElement('div');
  rankingBackground.id = 'ranking-background';
  rankingBackground.innerHTML = '<div id="ranking-wrapper" style="display:none"><div id="ranking-modal"><table id="ranking-table"><thead><tr><th colspan="2">ranking</th><th>point</th></tr></thead><tbody></tbody></table></div><div id="retry-btn">RETRY</div><div id="exit-btn">EXIT</div></div>'

  let tbody = rankingBackground.querySelector('tbody');
  const sortedData = sortRankData(data);

>>>>>>> 74f48c0df1785cab06bc8b7fd5e38239b529cc60
  for(index in sortedData){
      appendRankingInTable(Number(index)+1, sortedData[index], tbody);
  }
  document.body.appendChild(rankingBackground);
  switchRankinModal();
}
function appendRankingInTable(rank, data, tbody){
  let tr = document.createElement('tr');
  switch(rank){
      case 1:
          rank = '<i class="fas fa-trophy" style="color: gold;"></i>';
          break;
      case 2:
          rank = '<i class="fas fa-trophy" style="color: silver;"></i>'
          break;
      case 3:
          rank = '<i class="fas fa-trophy" style="color: rgb(160, 83, 75);">'
          break;
  }
  tr.innerHTML = `<td>${rank}</td><td>${data[0]}</td><td>${data[1]}</td>`
  tbody.appendChild(tr)
}
function switchRankinModal(){
  let rankingWrapper = document.querySelector('#ranking-wrapper');
  if(rankingWrapper.style.display === 'none'){
    rankingWrapper.style.display = 'block';
      document.querySelector("#ranking-background").style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  } else{
      rankingWrapper.style.display = 'none';
      document.querySelector("#ranking-background").style.backgroundColor = 'unset';
  }
<<<<<<< HEAD
  
=======

>>>>>>> 74f48c0df1785cab06bc8b7fd5e38239b529cc60
}

function sortRankData(data){
return object2Array(data).sort(function(a, b){
  return b[1] - a[1];
})
}

function object2Array(data){
return Object.keys(data).map(function(key) {
  return [key, data[key]];
});
}

function getRandomData(){
  function randomString() {
      var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
      var string_length = 7+Math.floor(Math.random() * 8);
      var randomstring = '';
      for (var i=0; i<string_length; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
          randomstring += chars.substring(rnum,rnum+1);
      }
      return randomstring;
  }
<<<<<<< HEAD
  
=======

>>>>>>> 74f48c0df1785cab06bc8b7fd5e38239b529cc60
  function randomScore(){
      return Math.floor(Math.random() * 100)+Math.floor(Math.random() * 300)+Math.floor(Math.random() * 50);
  }

  let randomData = new Object();
  for(var i = 0; i<10+Math.floor(Math.random() * 37); i++){
      randomData[randomString()] = randomScore();
  }
  return randomData;
}

window.onclick = function(event){
  console.log(event.target);
  if(event.target == document.body){
      switchRankinModal();
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 74f48c0df1785cab06bc8b7fd5e38239b529cc60
