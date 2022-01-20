const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup,index)=>{
    cup.addEventListener("click",()=>{
        highlightCups(index);
    })
})

updateBigCup();

function highlightCups(index){
    
    //if we click (means click fill and again click means empty) on the small cups 
    if(index === (smallCups.length-1) && smallCups[index].classList.contains("full"))
      index--;
    else if(smallCups[index].classList.contains("full") && !smallCups[index].nextElementSibling.classList.contains("full")){
        index--;
    }

   smallCups.forEach((cup,localIndex)=>{
       if(localIndex <= index){
          // console.log("full")
           cup.classList.add("full");
       }
       else{
        cup.classList.remove("full");
       // console.log("not full")
       }
   })
   updateBigCup();

}

function  updateBigCup(){

    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;

    if(fullCups === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    }
    else{
        percentage.style.visibility = 'visible';
        percentage.innerText = `${fullCups / totalCups *100}% `;
        percentage.style.height =`${fullCups / totalCups *330}px`;
    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }
    else{
        remained.style.visibility = 'visible';
        liters.innerText = `${2-(250*fullCups /1000)}L`
    }
}
