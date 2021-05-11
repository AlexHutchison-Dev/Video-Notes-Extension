// Put all the javascript code here, that you want to execute after page load.
const video = document.getElementsByTagName("video");

checktime();

function checktime(){
    setTimeout(() =>{
        alert(video[0].currentTime);
        checktime();
        }, 3000)
}
