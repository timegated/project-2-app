$(document).ready(() => {
    $('#createCar').on('click', () => {
        // console.log('createCar is clicked')
        let vehicleInfo = {
            make: $('#make').val(),
            model: $('#model').val(),
            year: $('#year').val(),
            price: $('#price').val()
        }
        $.ajax({
            method: 'POST',
            data: vehicleInfo,
            url: '/api/cars'
        }).then(data => {
            console.log(data)
            location.reload()
        })
    })
})


