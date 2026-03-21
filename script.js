function openPopup(product){
  var phone = "918490022110";
  var message = "Hello, I want price for " + product;
  window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(message));
}

function scrollToProducts(){
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
}

console.log("Synergy site loaded");
