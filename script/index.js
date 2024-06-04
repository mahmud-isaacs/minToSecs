let button = document.getElementById('convert')

button.addEventListener('click',function(){
    let minutes = document.querySelector('#minute').value
    if (minutes === ""){
        alert('Please fill out input field!');
        return
    }

    let seconds = minutes * 60;

    document.querySelector('#result').innerHTML = seconds

})