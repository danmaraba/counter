// initialize the count
let count=0;
const countValue=document.querySelector("#count-value");
const button=document.querySelectorAll(".btn")
console.log(button)
button.forEach(function(button){
    button.addEventListener('click',function(e){
       const target=e.currentTarget.classList;
       if(target.contains('decrease')){
        count--;
    }else if(target.contains('increment')){
        count++;
    } else{
        count=0;
    }
    countValue.textContent=count;
    })
   
});