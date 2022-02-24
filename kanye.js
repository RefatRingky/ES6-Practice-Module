const  loadQoutes=() => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQoute(data))
}
const displayQoute = quote => {
    
   const qouteElement = document.getElementById('qoute');
   qouteElement.innerText = quote.quote;
}