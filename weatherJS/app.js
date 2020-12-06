const w = new weather;
document.getElementById('save').addEventListener('mousedown',function(){
    const location = document.getElementById('loca').value;
});


w.getdata(location)
  .then(function(){
    console.log(location);
});





