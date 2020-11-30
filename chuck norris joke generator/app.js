document.getElementById('sub').addEventListener('click', getjokes);

function getjokes(e){
    const number = document.querySelector('#num').value;
    
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function(){
        
        if(this.status === 200){
            let main ='';
            const resp = JSON.parse(this.responseText);
            
            resp.value.forEach(function(joke){
                main += `<li>${joke.joke}</li>`;
            });
            document.querySelector('.list').innerHTML = main;
        }
        
    }
    xhr.send();
    e.preventDefault();
}