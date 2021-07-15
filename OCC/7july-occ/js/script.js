// const languages = new Array();
// const ul = document.createElement("ul");
// function onClick(event) {
//     const language = document.getElementById("language").value;
//     languages.push(language);
//     console.log(languages);
//     updateList(languages.length-1);
// }

// function updateList(i){
//     const li = document.createElement("li");// step2
//     li.innerText = languages[i];//step 3
//     ul.appendChild(li);//step 4    
// // // //5.append Ul on index.html
//     const root=document.getElementById("root");
//     root.appendChild(ul);
// }

const items = new Array();

$(document).ready(function() {
  $('#target').click(function() {
      var content = $('#items').val();
     items.push(content)
      console.log(items);
      if (typeof(Storage)!=="undefined"){
        localStorage.setItem(items.length,content);
      }
          
            
      $('#output').append("<li id='"+content+"_"+items.length+"' >"+content+" &nbsp;<button id='" + content + "_"+items.length+"' class='remove'>remove</button></li> ");
  })
  $('#output').on('click','.remove',function(){
 
    var id = this.id;
    const myArr = id.split("_");

    $("#" + id).remove();
    localStorage.removeItem(myArr[1]);

  
   }); 
 
});

 