$(document).ready(() => {
    //Posting new cars to cars_db

    $('#createCar').on('click', () => {
        // console.log('createCar is clicked')
        let vehicleInfo = {
            make: $('#make').val(),
            model: $('#model').val(),
            year: $('#year').val(),
            image: $('#image').val(),
            price: $('#price').val(),
            description: $('#description').val()
        }
        $.ajax({
            method: 'POST',
            data: vehicleInfo,
            url: '/api/cars'
        }).then(data => {
            // console.log(data.Cars.datavalues)
            location.reload()
        }).catch(err => {
            console.log(err)
        })
    })
    //Storing user information in db with ajax call to signup route
   $('#signup').on('click', () => {
       let userInfo = {
           username: $('#username').val(),
           password: $('#password').val()
       }
    $.ajax({
        method:'POST',
        data: userInfo,
        url: '/signup'
    })
    .then(data => {
        console.log(data)
    })
   })
   //Updating status of cars from false (not ready) to true (ready to sell) on Vehicles page
   $('#update').on('click', (e) => {
    // console.log('update was clicked.')
        let id = e.currentTarget.getAttribute('data-id')
        let status = e.currentTarget.getAttribute('data-status')
       $.ajax({
           method: 'PUT',
           url: '/models/'
       })

   })
    //Delete method for vehicles page
    $('#delete').on('click', (e) => {

        let id  = e.currentTarget.getAttribute('data-id')
        console.log(id)
        $.ajax({
            method:'DELETE',
            url:'/models/' + id
        }).then((data) => {
            // console.log(data)
            location.reload()
        }).catch((err) => {
            console.log(err)
        })
    })
    
    
})

