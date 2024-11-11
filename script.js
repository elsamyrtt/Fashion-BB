/*CARGAR PAGINA*/
var pageContent = document.querySelectorAll("body > *:not(#wifi-loader)");
pageContent.forEach(function(element) {
    element.style.display = "none";
});
window.onload = function() {
    document.getElementById("wifi-loader").remove();
    var pageContent = document.querySelectorAll("body > *:not(#wifi-loader)");
    pageContent.forEach(function(element) {
        element.style.display = "block";
    });
};