function maskcc(){

var cc =  document.getElementById("input_id").value;
    mask = cc.slice(-4),
    cc2 = '';

for(var i = (cc.length)-4; i>0; i--){
    cc2 += 'x';
}

  document.getElementById('output').innerHTML = cc2 + mask ;
  }
