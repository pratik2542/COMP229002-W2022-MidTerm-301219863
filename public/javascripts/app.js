/*
File Name - app.js
Student Name - Pratiksinh Makwana
Student ID - 301219863
Date - 28-02-2022
*/


//delete section
console.log('Goes to the client side.');

if(getTitle == "Favourite Movies List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}