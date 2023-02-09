//DOM Selection

//document.getElementById()
//mengembalikan element

const judul = document.getElementById('judul');
    judul.style.color = 'red';
    judul.innerHTML = 'Rival Nugraha';


//document.getElementsByTagName()
//mengembalikan HTMLCollection

const p = document.getElementsByTagName('p');

p[0].style.backgroundColor = 'lightblue'
