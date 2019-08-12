$('#createCar').on('click', () => {
    let newCar = {
        make: $('#make').val(),
        model: $('#model').val(),
        year: $('#year').val(),
        price: $('#price').val()
    }
    $.ajax({
        type:'POST',
        url:'/api/vehicles',
        body:JSON.stringify(newCar),
        headers: {
            'Content-type' : 'application/json'
        }
    }).then(results => {
        console.log(results)
    })
})