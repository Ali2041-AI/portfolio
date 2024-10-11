const menu=document.getElementById("menu");
const navBar=document.querySelector("#navContainer");
const navLinks=document.querySelector("#scrollNav");
let darkMode=false;

function openMenu(){
    menu.style.transform="translateX(-16rem)"
}
function closeMenu(){
    menu.style.transform="translateX(16rem)"
    
}

window.addEventListener("scroll",()=>{

        if(scrollY>50){
            navBar.classList.add("bg-white","bg-opacity-60","shadow-sm","dark:bg-darkTheme","dark:shadow-white/20");
            navLinks.classList.remove("bg-white","bg-opacity-50","shadow-md","dark:border","dark:border-white/50");
        }
        else{
         
            navBar.classList.remove("bg-white","bg-opacity-60","shadow-sm","dark:bg-darkTheme","dark:shadow-white/20");
            navLinks.classList.add("bg-white","bg-opacity-50","shadow-md","dark:border","dark:border-white/50");
        }

         
})








// If dark mode is detected in the system other wise light mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

//for manually chaning dark theme

function toggleTheme(){
    document.documentElement.classList.toggle("dark")
 if(document.documentElement.classList.contains("dark")){
    localStorage.theme='dark';
    darkMode=true;
  }
  else{
    localStorage.theme='light';
    darkMode=false;
  }

}