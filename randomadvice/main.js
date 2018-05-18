document.getElementById('form').addEventListener('submit', getAdvice);

function getAdvice(e){
    e.preventDefault();
    var texts = document.getElementById('input').value;
    
    fetch(`http://api.adviceslip.com/advice/search/${texts}`)
    .then(res => res.json())
    .then(data =>{
var output =``;
         
        if(data.slips != ''){
              data.slips.forEach(result =>{
            
            output += `<div class="card">
   <div class="card-body bg-secondary">
  <div class="card text-white bg-dark mb-3 d-inline-block p-2" style="max-width: 20rem;">
  <div class="card-header text-center">ADVICE</div>
  <div class="card-body">
    <h4 class="card-title text-center">${texts}</h4>
    <p class="card-text">${result.advice}</p>
  </div>
</div>
    </div>
  </div>   `;
            document.getElementById('advice').innerHTML = output;
                  console.log(result);
        })
           }
        else{
            console.log(data);
              output += `<div class="card bg-danger text-white">hello</div>`;
               document.getElementById('wa').innerHTML = output;
           }
     
     
        
        
    })}
