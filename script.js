
  function composeEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phno = document.getElementById("phno").value;
    var message = document.getElementById("message").value;

    var mailtoLink = "mailto:gopugopu3693@gmail.com" +
      "?subject=Contact%20Form%20Submission" +
      "&body=Name:%20" + encodeURIComponent(name) +
      "%0D%0AEmail:%20" + encodeURIComponent(email) +
      "%0D%0APhone:%20" + encodeURIComponent(phno)+
      "%0D%0AMessage:%20" + encodeURIComponent(message);

    window.location.href = mailtoLink;
  }
