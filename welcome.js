document.querySelector(".here").addEventListener("click",function(){
    document.querySelector(".vdo").setAttribute("src","6.mp4");
    setTimeout(function(){
        window.location.href="main.html"},5000);
})