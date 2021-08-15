function toggleTheme(){
    //changing background color
    let colorLink = document.getElementById("color-theme").href
    if(colorLink.substring(colorLink.length-19)=="css/color-light.css")
    {
        document.getElementById("color-theme").href="css/color-dark.css"
        document.getElementById("themeButton").src="images/sun.png"
    }
    else{
        document.getElementById("color-theme").href="css/color-light.css"
        document.getElementById("themeButton").src="images/moon.png"
    }
    //changing element text color to light
    toggleElementColor('primary-color')
}
function toggleElementColor(className){
    var elements = document.getElementsByClassName(className)
    while(elements.length > 0){
        elements[0].classList.remove(className);
        elements[0].classList.add(`light-${className}`)
    }
}

// // this one is jut to wait for the page to load
// document.addEventListener('DOMContentLoaded', () => {

//     const themeStylesheet = document.getElementById('theme');
//     const storedTheme = localStorage.getItem('theme');
//     if(storedTheme){
//         themeStylesheet.href = storedTheme;
//     }
//     const themeToggle = document.getElementById('theme-toggle');
//     themeToggle.addEventListener('click', () => {
//         // if it's light -> go dark
//         if(themeStylesheet.href.includes('light')){
//             themeStylesheet.href = 'dark-theme.css';
//             themeToggle.innerText = 'Switch to light mode';
//         } else {
//             // if it's dark -> go light
//             themeStylesheet.href = 'light-theme.css';
//             themeToggle.innerText = 'Switch to dark mode';
//         }
//         // save the preference to localStorage
//         localStorage.setItem('theme',themeStylesheet.href)  
//     })
// })