const btn = document.querySelector('.btn')
const title =document.querySelector('.title')
const names =document.querySelector('.names')
const date =document.querySelector('.date')
const email =document.querySelector('.email')

let background;


btn.addEventListener('click', function(e){
    e.preventDefault()
    console.log(btn)
    console.log(names.value)
    console.log(date.value)
    console.log(email.value)
    if(background === undefined || background === 'yellowgreen'){
        background ='red'
         e.target.style.backgroundColor=background 
    } else if(background==='red'){
        background='yellowgreen'
         e.target.style.backgroundColor=background
    }
})