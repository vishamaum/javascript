//   Initialize Firebase
  var config = {
    apiKey: "AIzaSyA2NquKeeehEh6-1t9q1lIjWwwBhDkAu08",
    authDomain: "my-project-1-196415.firebaseapp.com",
    databaseURL: "https://my-project-1-196415.firebaseio.com",
    projectId: "my-project-1-196415",
    storageBucket: "my-project-1-196415.appspot.com",
    messagingSenderId: "1048256545520"
  };
  firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');

    
document.getElementById('sub').addEventListener('submit',Post);

function Post(e){
    e.preventDefault();
    //get input data through form 
   var input = document.getElementById('in').value;
    
    

    
    //set data to firebase
  messagesRef.push(input);
    //get the element 
   fetchfire();
        
    document.getElementById('sub').reset();
    
    }
    

    //



function fetchfire(){
    //get database ref of firebase databse
    database = firebase.database();
     var datas = document.getElementById('datas');
    datas.innerHTML = "";
    
    //get database ref of firebase
    var ref = database.ref('messages');
    ref.on('value', gotTodo);
    
    //function to get data from firebase
    function gotTodo(data){
        data.forEach(val =>{
          var todo = val.val(); 
          var date  = new Date();
        var x =    date.getDate();
        var y =    date.getHours();
        var z =    date.getMinutes();
        var w =    date.getSeconds();
            
            datas.innerHTML +=`<div class="card w3-cyan ">    
                <div class="card-body w3-aqua shadow-lg rounded">
                      <button onclick="remove"  type="button" class="close del"  aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                     </button>
                    <div class="card-text">${'D-'+x}</div>
                    <div class="card-text">${todo}</div>
                  
                     </div>
                    </div>`;
            
        })
            
        
    }
    
}



// Listen for form submit

//// Save data
//function Post(e){
//  // Get form values
//  var todo =document.getElementById('in').value;
//  
//
//  if(!validateForm(todo)){
//    return false;
//  }
//
//  var data = {
//    name: todo,
//  }
//
//  /*
//    // Local Storage Test
//    localStorage.setItem('test', 'Hello World');
//    console.log(localStorage.getItem('test'));
//    localStorage.removeItem('test');
//    console.log(localStorage.getItem('test'));
//  */
//
//  // Test if datas is null
//  if(localStorage.getItem('datas') === null){
//    // Init array
//    var datas = [];
//    // Add to array
//    datas.push(data);
//    // Set to localStorage
//    localStorage.setItem('datas', JSON.stringify(datas));
//  } else {
//    // Get datas from localStorage
//    var datas = JSON.parse(localStorage.getItem('datas'));
//    // Add data to array
//    datas.push(data);
//    // Re-set back to localStorage
//    localStorage.setItem('datas', JSON.stringify(datas));
//  }
//
//  // Clear form
//  document.getElementById('sub').reset();
//
//  // Re-fetch datas
//  fetchdatas();
//
//  // Prevent form from submitting
//  e.preventDefault();
//}
//
//// Delete data
//function deletedata(name){
//  // Get datas from localStorage
//  var datas = JSON.parse(localStorage.getItem('datas'));
//  // Loop through the datas
//  for(var i =0;i < datas.length;i++){
//    if(datas[i].name == name){
//      // Remove from array
//      datas.splice(i, 1);
//    }
//  }
//  // Re-set back to localStorage
//  localStorage.setItem('datas', JSON.stringify(datas));
//
//  // Re-fetch datas
//  fetchdatas();
//}
//
//// Fetch datas
//function fetchdatas(){
//  // Get datas from localStorage
//  var datas = JSON.parse(localStorage.getItem('datas'));
//  // Get output id
//  var datasResults = document.getElementById('datasResults');
//
//  // Build output
//  datasResults.innerHTML = '';
//  for(var i = 0; i < datas.length; i++){
//    var todo = datas[i].name;
//
//    datasResults.innerHTML += `<div class="card w3-cyan ">    
//                <div class="card-body w3-aqua shadow-lg rounded">
//                      <button onclick="deletedata\``+todo+`\`" id="del"  type="button" class="close" aria-label="Close">
//                             <span aria-hidden="true">&times;</span>
//                     </button>
//                    <div class="card-text">${todo}</div>
//                    
//                </div>
//          
//        </div>`;
//  }
//}
//
//// Validate Form
//function validateForm(todo){
//  if(!todo){
//    alert('Please fill input field');
//    return false;
//  }
//
//
//
//  return true;
//}
