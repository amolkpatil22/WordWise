

if (isLoggedin == "true") {
    loginbtn.style.display = "none";
    signupbtn.style.display = "none";

    menuhome.style.display = "none"
    menulogout.style.display = "block"
    menuaboutusers.style.display = "none"
    menuonboarding.style.display = "none"
    menuloginbtn.style.display = "none"
    menusignupbtn.style.display = "none"
    menuname.style.display = "block"
    menuemail.style.display = "block"

    let link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "afterlogin.css"
    document.head.append(link)


    name.innerText = "Hello, " + storedname + "!"
    name.style.display = "flex"
    menuname.innerText = "👤 " + storedname.toUpperCase() + " " + lastname.toUpperCase()
menuemail.innerText="📧 "+ storedemail.toUpperCase()
}

menulogout.addEventListener("click", function () {
    localStorage.setItem("isLoggedin", false)
})

document.addEventListener("click", function (event) {

    let clickedElement = event.target;


    if (!navbar.contains(clickedElement) && clickedElement !== menu) {
        menu.style.display = "none";
    }
});











