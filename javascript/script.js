$(function(){

    let currentIndex=0;
    setInterval(function(){
        if(currentIndex<2){
            currentIndex++;
        }else{
            currentIndex=0;
        }
        let slidePosition=currentIndex*(-300)+"px";
        $('.slide').animate({top:slidePosition},300);
    },3000);
})