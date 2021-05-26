document.documentElement.style.display = 'none';
setTimeout(function() {document.documentElement.style.display = '';}, 1000);
window.history.pushState("object or string", "Name Hidden", "/Name_Hidden");
document.title = 'Name Hidden';

// setTimeout(function() {document.title = 'Name Hidden';}, 1000);
