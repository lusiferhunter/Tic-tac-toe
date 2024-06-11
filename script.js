boxes= document.querySelectorAll(".box");

resetBtn= document.querySelector("#reset");

newBtn= document.querySelector("#new-btn");

msgBox= document.querySelector(".msg-box");

msg= document.querySelector("#msg");

turnX=  true;      //player X, player O

winPatterns =[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,4,6],
  [2,5,8],
  [3,4,5],
  [6,7,8]
  
];



resetGame = () => {
   turnX=true;
   enableBoxes();
   msgBox.classList.add("hide");
   count=0;

}

count=0;
boxes.forEach((box) => {
 box.addEventListener("click",() => {
  count=count+1;
  if(turnX){
    box.innerText="X";
    turnX=false;
  
  }
  else{
   box.innerText="O";
   turnX=true;
  }
    box.disabled=true;
     
     checkWinner();
     });
  });
     
     disableBoxes= ()=> {
       for(box of boxes)
     {
        box.disabled= true;
     }
     
     
     }
     
     
     enableBoxes= ()=> {
     for(box of boxes)
     {
     box.disabled= false;
     box.innerText="";
     }
     
     
     }
     
     
     showWinner= (winner) =>{
       msg.innerHTML=`<i><u>Congratulations, Winner is ${winner}</u></i>`;
       msgBox.classList.remove("hide");
       disableBoxes();
     };
   draw= () =>{
  msg.innerHTML=`<i><u>Nobody won! It's a draw.</u></i>`;
  msgBox.classList.remove("hide");
  msg.style.color="red";
  disableBoxes();
  
  };
   checkWinner=()=>{
    isdraw=true;
    for(pattern of winPatterns)
    {
    
     pos1=boxes[pattern[0]].innerText;
     pos2=boxes[pattern[1]].innerText;
     pos3=boxes[pattern[2]].innerText;
     
     if(pos1==="" || pos2==="" || pos3===""){
     isdraw=false;
     }
     
     if(pos1 !="" && pos2 !="" && pos3 !=""  )
     {
       if(pos1 === pos2 && pos2 === pos3)
       {
       
       showWinner(pos1);
       }
       
       
     
     };
      
     
     
     
     
      
    }
   
  
   
   
      if(isdraw){
        draw();
      }
      
   
   };





newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
