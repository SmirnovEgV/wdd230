document.getElementById("timestamp").value = new Date().toLocaleString();

document.getElementById("submit").addEventListener("click", function() {
    window.location.href = "thankyou.html";
  });