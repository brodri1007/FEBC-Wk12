
const url = 'http://localhost:3000/cars'


$.get(url).then((data) =>
    data.map((car) => {
        $('#car_list').append(
            $(`           
                     <div class="col p-3 border bg-light">
                        <div><span>${car.id}</span> <img alt="${car.model}" src="car.png" width="150px"/></div>
                        <span>${car.make}</span> 
                        <span>${car.model}</span> <br> 
                        <span>Miles: ${car.mileage}</span>  
                        <span>Year: ${car.year}</span><br>  
                        <span>Price: $${car.price}</span>  
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

    // fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify({
    //         id: $('#idUpdate').val(),
    //         make: $('#makeUpdate').val(),
    //         model: $('#modelUpdate').val(),
    //         mileage: $('#mileageUpdate').val(),
    //         year: $('#yearUpdate').val(),
    //         price: $('#priceUpdate').val()
    //     }),
    //     headers: { "Content-type": "application/json; charset=UTF-8" }
    // });



    if ($('#idUpdate').val() != "") {

        $.ajax({
            type: 'POST',
            url: url,
            contentType: 'application/json',
            data: JSON.stringify({
                "id": $('#idUpdate').val(),
                "make": $('#makeUpdate').val(),
                "model": $('#modelUpdate').val(),
                "mileage": $('#mileageUpdate').val(),
                "year": $('#yearUpdate').val(),
                "price": $('#priceUpdate').val()
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" } // access in body
        }).done(function () {
            console.log('SUCCESS');
        }).fail(function (msg) {
            console.log('FAIL');
        }).always(function (msg) {
            console.log('ALWAYS');
        });
    } else {
        alert("Please enter some information.")
    }

}




function updateCar() {

    // const requestOptions = {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         id: $('#idUpdate').val(),
    //         make: $('#makeUpdate').val(),
    //         model: $('#modelUpdate').val(),
    //         mileage: $('#mileageUpdate').val(),
    //         year: $('#yearUpdate').val(),
    //         price: $('#priceUpdate').val()
    //     })
    // };

    // //alert(requestOptions.body);

    // fetch(url + '/' + $('#idUpdate').val(), requestOptions)
    //     .then(response => response.json());
    // JSON.stringify({
    //     "firstname": fname,
    //     "lastname": lname,
    //     "grade": grade    
    //   })


    if ($('#idUpdate').val() != "") {
        $.ajax({
            type: 'PUT',
            url: url + '/' + $('#idUpdate').val(),
            contentType: 'application/json',
            data: JSON.stringify({
                "id": $('#idUpdate').val(),
                "make": $('#makeUpdate').val(),
                "model": $('#modelUpdate').val(),
                "mileage": $('#mileageUpdate').val(),
                "year": $('#yearUpdate').val(),
                "price": $('#priceUpdate').val()
            }), // access in body
        }).done(function () {
            console.log('SUCCESS');
        }).fail(function (msg) {
            console.log('FAIL');
        }).always(function (msg) {
            console.log('ALWAYS');
        });
    }
    else {
        alert("Please enter some information.")
    }

};

