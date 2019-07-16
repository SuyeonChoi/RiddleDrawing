function popupRankBox(data){
  if(document.querySelector('#ranking-modal') !== null){
    switchRankinModal();
    return;
  }
  
  let rankingModal = document.createElement('div');
  rankingModal.id = 'ranking-modal';
  rankingModal.style.display = 'none';
  rankingModal.innerHTML = '<table id="ranking-table"><thead><tr><th colspan="2">ranking</th><th>point</th></tr></thead><tbody></tbody></table>'
  
  let tbody = rankingModal.querySelector('tbody');
  const sortedData = sortRankData(data);
  
  for(index in sortedData){
      appendRankingInTable(Number(index)+1, sortedData[index], tbody);
  }
  document.body.appendChild(rankingModal);
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
  let rankingModal = document.querySelector('#ranking-modal');
  if(rankingModal.style.display === 'none'){
      document.querySelector('#ranking-modal').style.display = 'block';
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
  } else{
      document.querySelector('#ranking-modal').style.display = 'none';
      document.body.style.backgroundColor = 'unset';
  }
  
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
}