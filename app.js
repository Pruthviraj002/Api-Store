let products=[]
function geId(products) {
    const idSet = new Set(products.map(el => el.id))
    const id= Array.from(idSet)
    const selectElement= document.querySelector("#select")
    selectElement.innerHTML = `<option>select id</option>`
    id.forEach(el=>{
        selectElement.innerHTML +=
        `<option value=${el}>${el}</option>`
    })  
} 

function handleChange(e) {
    console.log(e.target.value);
    const filterData = products.filter(el => el.id ==e.target.value)
  document.querySelector(".row1").innerHTML =""
    getData(filterData)   
}
 
 
 
 function getData(data) { 
    let data1="" 
    data.map((value)=>{
        let tags=""
        for(const key in value.tags)
            {
                if(value.tags. hasOwnProperty(key))
                    {
                        tags +=
                        `<span>${value.tags[key]}</span>`
                    }
            }
        data1 +=
        `
         <div class="col-md-4">
              <div id="cards">
                        <div class="card">
                            <h1 class="title">${value.id}</h1>

                        <img src="${value.image}" alt="" class="images">
                            <h1 class="title">${value.title}</h1>
                            <p class="category">Price : ${value.price}</p>
                            <p class="category">Category : ${value.category}</p>
                            <p class="category">rate : ${value.rating.rate}</p>
                        </div>
                    </div>  
            </div>
        `
    })
    document.querySelector(".row1").innerHTML =data1 
}
fetch("https://fakestoreapi.com/products")
.then((res)=>res.json())
.then((data)=>{
    products=data
geId(products)
getData(products)
})
.catch((Error)=>{
    console.log(Error)
})