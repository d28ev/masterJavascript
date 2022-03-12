function updateBooks(books){
    var output = '';
    books.forEach(book => {
        output += `<li> testing boy Name : ${book.name}, Author : ${book.author} </li>`;
    })

    document.getElementById('books').innerHTML = output;
}

function error(error){
    console.log('error message : '+ error);
}

function fetchData(){
    alert('testing');

    //Using promise
   /* var promise = fetch('https://www.abibliadigital.com.br/api/books');
    promise.then(res => {
        return res.json();
    })
    .then(updateBooks)
    .catch(error); */

    //using async await 
    console.log("before async function");
    
    fetchDataAsync();

    console.log("after async function");
    
}

async function fetchDataAsync(){
    var promise = await fetch('https://www.abibliadigital.com.br/api/books');
    var data = await promise.json();
    updateBooks(data);
}