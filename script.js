
const url = 'http://localhost:3000/cars'




$.get(url).then((data) =>
    data.map((car) => {
        $('#car_list').append(
            $(`             
                     <div class="col pb-5 pt-5 text-light bg-danger text-center">
                        <div><span>${car.id}</span> <img alt="${car.model}" src="car.png" width="150px"/></div>
                        
                        <span>${car.make}</span> 
                        <span>${car.model}</span> <br> 
                        <span>Miles: ${car.mileage}</span> <br> 
                        <span>Year: ${car.year}</span><br>  
                        <span>Price: $${car.price}</span> <br> 
                        <button onclick="deleteCar(${car.id})"}>🗑</button>
                    </div>              
            `)
        )
    })
)





function deleteCar(id) {

    fetch(`${url}/${id}`, {
      method: "DELETE", 
    })

}


function addCar() {

    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            id: $('#idUpdate').val(),
            make: $('#makeUpdate').val(),
            model: $('#modelUpdate').val(),
            mileage: $('#mileageUpdate').val(),
            year: $('#yearUpdate').val(),
            price: $('#priceUpdate').val()
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    });
    
}




function updateCar() { 
  
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: $('#idUpdate').val(),
            make: $('#makeUpdate').val(),
            model: $('#modelUpdate').val(),
            mileage: $('#mileageUpdate').val(),
            year: $('#yearUpdate').val(),
            price: $('#priceUpdate').val()
        })
    };
  
    //alert(requestOptions.body);
  
    fetch(url + '/' + $('#idUpdate').val(), requestOptions)
        .then(response => response.json());
        
  };

