var main = document.querySelector(".main")
var newarr = []
var itemPerPage = 12    
fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
.then(x=> x.json())
.then(arr=>{
    newarr = arr
    console.log(arr[0])
    for(var i = 0; i < itemPerPage; i++){
        var tmp = `
        <div class="card" style="width: 18rem;">
  <img src="${arr[i].image_link}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">${arr[i].description}</p>
    <button class="show">show more</button>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>  
        `
        main.innerHTML += tmp
    }
})
setTimeout(() => {
    
    var show = document.querySelectorAll(".show")
    var counter = 0
    console.log(show)
    for(var i of show){
        i.addEventListener("click",function(){
            counter++
            if(counter%2!=0){
            this.parentNode.children[1].style.height = "auto"
            this.innerText = "show more"
            }
            else{
                this.parentNode.children[1].style.height = "120px"
                this.innerText = "show less"
            }
        })
    }  
}, 2000);




setTimeout(() => {
    
    
    console.log(newarr)
    var pagecount = parseInt(newarr.length/itemPerPage)+1
    var divpages = document.querySelector(".divpages")
    for(var i =1; i <=pagecount;i++){
       var atag = document.createElement("a")
       atag.classList.add("page")
       atag.href = "#"
       atag.innerText = i
       divpages.appendChild(atag)
       console.log(atag)
       console.log(divpages)
    } 
    var pages = document.querySelectorAll(".page")
    for(var i of pages){
        i.addEventListener("click",function(){
            main.innerHTML = ""
           for(var i = (this.innerText-1)*itemPerPage; i < this.innerText*itemPerPage;i++){
            var tmp = `
            <div class="card" style="width: 18rem;">
      <img src="${newarr[i].image_link}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">${newarr[i].description}</p>
        <button class="show">show more</button>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>  
            `
            main.innerHTML += tmp
            console.log(this.innerText)
           }
        })
    }
}, 2000);






