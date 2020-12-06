const w = new weather;
const upd = new update;
let l="";

document.getElementById('loca').addEventListener('keydown',function(){
    l=document.getElementById('loca');
    w.search(l)
     .then(data =>{
        console.log(data.list);
        upd.showList(data.list);
        
    }
    );
});

document.getElementById('save').addEventListener('mousedown',function(){
    l = document.getElementById('loca').value;
    w.getdata(l)
     .then(data =>{
    console.log(data.weather[0]);
    upd.showValues(data.main.temp, data.name, data.weather[0].description);
});
});








