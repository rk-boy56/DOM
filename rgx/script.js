function validateForm() {
    
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let aadhar = document.getElementById("aadhar").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let pan = document.getElementById("pan").value;
    let pincode = document.getElementById("pincode").value;
    let url = document.getElementById("url").value;

    // Regex patterns
    let nameRegex = /^[A-Za-z ]{3,30}$/;
    let mobileRegex = /^[6-9]\d{9}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let aadharRegex = /^\d{12}$/;
    let usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    let passwordRegex = /^[A-Za-z0-9@#$%^&*]{6,20}$/;
    let panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    let pincodeRegex = /^\d{6}$/;
    let urlRegex = /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w\.-]*)*\/?$/;

    if (!nameRegex.test(name)) {
        alert("Invalid Name");
        return false;
    }

    if (!mobileRegex.test(mobile)) {
        alert("Invalid Mobile Number");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Invalid Email");
        return false;
    }

    if (!aadharRegex.test(aadhar)) {
        alert("Invalid Aadhar Number");
        return false;
    }

    if (!usernameRegex.test(username)) {
        alert("Invalid Username");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("Invalid Password");
        return false;
    }

    if (!panRegex.test(pan)) {
        alert("Invalid PAN Number");
        return false;
    }

    if (!pincodeRegex.test(pincode)) {
        alert("Invalid Pin Code");
        return false;
    }

    if (!urlRegex.test(url)) {
        alert("Invalid URL");
        return false;
    }

    alert("Form Submitted Successfully ✅");
    return true;
}
