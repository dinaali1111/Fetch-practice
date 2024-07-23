  const form=document.getElementById("form")
  form.addEventListener("submit", function(getinput){
    getinput.preventDefault();
const input= new FormData(form);
console.log(input)

fetch( 'https://jsonplaceholder.typicode.com/users',{
method:'POST',
body:input
})
.then(resolved=>resolved.json())
.then(data=>console.log( 'request is resolve',  data))
.catch(error=>console.log(error))

  })