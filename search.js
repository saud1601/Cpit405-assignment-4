/* Note: Change load type in the jsfiddle 
 * JavaScript setting into body
 */

function doClick() {
  var searchTerm = document.getElementById('search').value;
  var xhttp = new XMLHttpRequest();
  // When the request is successful, finished, and response is ready, execute these function
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var resObj = JSON.parse(xhttp.responseText);
      var ulE = document.createElement("ul");
     
      var i = 0;
      do {
          var l = document.createElement("li");
          var m = document.createElement("img");
          m.style.height = "250px";
          m.style.width = "250px";
          m.src = resObj.data[i].link;

          if(m.src.endsWith("jpg")||(m.src.endsWith("png"))){
            l.appendChild(m);
            ulE.appendChild(l); 

          }
      
  
          i++;
      } while (i < resObj.data.length);
  
      document.body.appendChild(ulE);
  
  }
  }
  console.log("https://api.imgur.com/3/gallery/search/top/all/1?q=" + searchTerm)
  // Send an asynchronous HTTP GET request to the given end point (url)
  xhttp.open("GET", "https://api.imgur.com/3/gallery/search/top/all/1?q=" + searchTerm, true);
  xhttp.setRequestHeader("Authorization",
    "Client-ID 83d248620b4f1a5")
  xhttp.send();

}
