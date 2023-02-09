//DOM Selection

//document.getElementById()
//mengembalikan element

const judul = document.getElementById('judul')
    judul.style.color = 'red'
    judul.innerHTML = 'Rival Nugraha'


//document.getElementsByTagName()
//mengembalikan HTMLCollection

const p = document.getElementsByTagName('p')

for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue'
}


//document.getElementsByClassName()
//mengembalikan HTMLCollection

const p1 = document.getElementsByClassName('p1')
p1[0].innerHTML = 'Ini dirubah dari javascript'
