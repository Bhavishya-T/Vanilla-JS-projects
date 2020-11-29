function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function Tab(){}

Tab.prototype.addbook = function(book){
    const bod = document.getElementById("book-list");
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td>
                     <td>${book.author}</td>
                     <td>${book.isbn}</td>
                     <td><a href= '#' class="delete">X<a></td>`;
    bod.appendChild(row);
}

Tab.prototype.err = function(msg, c){
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(msg));
    div.className = `alert ${c}`;
    const cunt = document.querySelector('.container');
    const forum = document.querySelector('#bookform');
    cunt.insertBefore(div, forum);
    setTimeout(function(){
        document.querySelector(`.${c}`).remove();
    }, 2000);
}

document.getElementById("bookform").addEventListener("submit", function(e){
    const tit = document.getElementById('book-title').value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;
    const book = new Book(tit,author,isbn);
    const table = new Tab();
    if(tit ==='' || author ==='' || isbn ===''){
        table.err('Enter valid deets', 'error');
    }
    else{
    table.err('Success', 'success');    
    table.addbook(book);
    table.clearfunc();}
    e.preventDefault();
});

Tab.prototype.clearfunc = function(){
    document.getElementById('book-title').value = '';
    document.getElementById("author").value = '';
    document.getElementById("isbn").value = '';
}



document.getElementById('book-list').addEventListener('click',function(e){
    if(e.target.className ==='delete'){
        document.querySelector('a').parentElement.parentElement.remove();
    }
})





