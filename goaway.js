window.onload = function(){
    const focusedTitle = "RepairItNow - wracaj do nas";
    const onFocusedTitle = "RepairItNow - nie chcemy cię tu";
    document.title = onFocusedTitle;
    document.querySelector("footer").textContent = `Copyright BBUTTER98 ${new Date().getFullYear()} `;
    document.addEventListener("visibilitychange",function(){
        const pageActivity = !document.hidden;
        if(pageActivity){
            document.title = onFocusedTitle;
        }
        else{
            document.title = focusedTitle;
        }
    })
}
document.querySelectorAll("button").forEach(element => {
    element.addEventListener("mousedown",function(e){
        e.target.style.width ='240px';
        e.target.style.height = '55px';
    });
    element.addEventListener("mouseup",function(e){
        e.target.style.width ='250px';
        e.target.style.height = '60px';
    })
});
document.querySelector("a.btn").addEventListener("click",function(){
    document.querySelector("ul").classList.toggle("active");
})