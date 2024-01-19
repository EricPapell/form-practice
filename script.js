const btn = document.querySelector('.btn')
const div = document.querySelector('.div')
const form = document.querySelector('.form')
const title =document.querySelector('.title')
const names =document.querySelector('.names')
const date =document.querySelector('.date')

let background;

 const init = function(){
    title.textContent='Formulario'
    title.style.transform='scale(1)';
    title.style.position='relative';
    title.style.color='blue';
    div.style.top='0%';
    div.style.left='0%';
    form.style.display='flex'
 }
const right = function(){
    title.textContent='Tamo'
    title.style.transform='scale(2)';
    title.style.position='absolute';
    title.style.color='red';
    div.style.top='50%';
    div.style.left='50%';
    form.style.display='none'
}
const wrong = function(){
    title.style.transform='scale(2)';
    title.style.position='absolute';
    title.style.color='red';
    div.style.top='50%';
    div.style.left='50%';
    form.style.display='none'
    title.textContent='NOT THE PERSON I WAS LOOKING FOR'
}

btn.addEventListener('click', function(e){
    e.preventDefault()
    console.log(btn)
    console.log(names.value)
    console.log(date.value)
    const nameCorrect = names.value.toLowerCase()
    const dateString = date.value.toString()
    console.log(nameCorrect)
    console.log(dateString)
    if(nameCorrect === 'pequitas' && dateString === '1995-12-27'){
        right()
    } else {
        wrong()
        background='yellowgreen'
        e.target.style.backgroundColor=background
        setTimeout(init, 3000)
    }
})