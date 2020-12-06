class update{
    constructor(){
        this.location =""
    }
    
    showValues(tempe, name, weat){
        document.getElementById('temp').value = tempe;
        document.getElementById('weed').value = weat;
        document.getElementById('naam').value = name;
    }

    showList(lists){
        const li = document.getElementById('lis');
        lists.forEach(listitem => {
            console.log(listitem);
            li.innerHTML += `<a href="#" class="list-group-item list-group-item-action">${listitem}</a>`
        });
    }
}