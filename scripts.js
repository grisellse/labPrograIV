
document.getElementById('evento1').addEventListener('click', function() {
    alert('Admiro a mi madre por su dedicación y amor');
});

document.getElementById('evento2').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#f0e68c';
});

document.getElementById('evento2').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#fff';
});

document.getElementById('evento3').addEventListener('dblclick', function() {
    this.innerHTML = 'Mis géneros musicales favoritos son el Rock alternativo, indie, pop y pop rock';
});

document.getElementById('evento4').addEventListener('dblclick', function(event) {
    event.preventDefault(); 
    this.style.color = "violet";
});


document.getElementById('evento5').addEventListener('mouseenter', function() {
    this.style.fontSize = '1.5em';
});

document.getElementById('evento5').addEventListener('mouseleave', function() {
    this.style.fontSize = '1em';
});

document.getElementById('evento6').addEventListener('click', function() {
    this.innerHTML = 'Mi animal favorito es el gato';
});
