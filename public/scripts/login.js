// login function 

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var data = {
        username: username,
        password: password
    };
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/login", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                window.location.href = "/home";
            } else {
                alert("Login failed");
            }
        }
    }
    xhr.send(JSON.stringify(data));
}