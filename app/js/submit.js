document.getElementById("RequestInviteForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    var thankYouWindow = window.open("", "_parent", "width=400,height=200");
    thankYouWindow.document.write("<h3>Thank You!</h3><p>Your submission has been received.</p>");
    document.getElementById("RequestInviteForm").reset();
    document.getElementById("RequestInviteForm").style.display = "none";
    setTimeout(function() {
        thankYouWindow.close();
    }, 1000);
});
