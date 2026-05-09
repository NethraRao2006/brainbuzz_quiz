let body=document.querySelector("body");
let mainPage=document.querySelector(".heading");
let easy=document.querySelector(".list1");
let easyPage=document.querySelector("#easy");
let form=document.querySelector(".easy");
let submit=document.querySelector(".submit");
let questions=document.querySelectorAll(".qn");
let score=document.querySelector("#score");
let printScore=document.querySelector(".score");
let ans=document.querySelectorAll(".correctAns");
let playAgain=document.querySelector(".playAgain");
let home=document.querySelector(".home");
let medium=document.querySelector(".list2");
let questions2=document.querySelectorAll(".qn2");
let mediumPage=document.querySelector("#medium");
let form2=document.querySelector(".medium");
let difficult=document.querySelector(".list3");
let form3=document.querySelector(".difficult");
let difficultPage=document.querySelector("#difficult");
let questions3=document.querySelectorAll(".qn3");

const correctAns=["B","C","B","B","B","B","A","C","C","A","B","B","B","B","B","C","A","A","A","A","A","B","B","C","A"];
const correctAns2=["C","B","B","D","C","A","C","A","A","B","B","B","A","A","B","B","C","C","A","B","B","A","D","C","C"]
const correctAns3=["A","B","B","C","B","A","A","B","B","A","B","C","C","D","A","A","B","D","B","A","D","C","B","A","A"];

easy.addEventListener("click",show1)
function show1(event){
    
 if(event.target.value==="EASY");
 {
 easyPage.style.display="block";
 mainPage.style.display="none";
 }
}

medium.addEventListener("click",show2)
function show2(event){
    
 if(event.target.value==="MEDIUM");
 {
 mediumPage.style.display="block";
 easyPage.style.display="none";
 mainPage.style.display="none";
 }
}

difficult.addEventListener("click",show3)
function show3(event){
 if(event.target.value==="DIFFICULT");
 {
 difficultPage.style.display="block";
 easyPage.style.display="none";
 mediumPage.style.display="none";
 mainPage.style.display="none";
 }
}

let count=0;
form.addEventListener("submit",scorelist)
function scorelist(event){
    event.preventDefault();
    
const userAns=[form.radio1.value,form.radio2.value,form.radio3.value,form.radio4.value,form.radio5.value,form.radio6.value,form.radio7.value,
    form.radio8.value,form.radio9.value,form.radio10.value,form.radio11.value,form.radio12.value,form.radio13.value,form.radio14.value,
    form.radio15.value,form.radio16.value,form.radio17.value,form.radio18.value,form.radio19.value,form.radio20.value,form.radio21.value,form.radio22.value,
    form.radio23.value,form.radio24.value,form.radio25.value];
    userAns.forEach((answer,index)=>{
if(answer===correctAns[index]){
    count++;
    questions[index].classList.add("correct");  
}
else{
    questions[index].classList.add("wrong");
}

score.style.display="block";
printScore.innerText=`You  scored  ${count}  out  of  25!`;
scroll(0,0);

    })
    ans.forEach((a)=>{
        a.innerHTML+="<p class='tick'>&nbsp;&nbsp;&nbsp;✅</p>"
        a.style.color="green";
        
    })
    submit.disabled=true;
}

form2.addEventListener("submit",scorelist2)
function scorelist2(event){
    event.preventDefault();
    
const userAns2=[form2.radio1.value,form2.radio2.value,form2.radio3.value,form2.radio4.value,form2.radio5.value,form2.radio6.value,form2.radio7.value,
    form2.radio8.value,form2.radio9.value,form2.radio10.value,form2.radio11.value,form2.radio12.value,form2.radio13.value,form2.radio14.value,
    form2.radio15.value,form2.radio16.value,form2.radio17.value,form2.radio18.value,form2.radio19.value,form2.radio20.value,form2.radio21.value,form2.radio22.value,
    form2.radio23.value,form2.radio24.value,form2.radio25.value];
    userAns2.forEach((answer2,index2)=>{
if(answer2===correctAns2[index2]){
    count++;
    questions2[index2].classList.add("correct");
}
else{
    questions2[index2].classList.add("wrong");
}
score.style.display="block";
printScore.innerText=`You  scored  ${count}  out  of  25!`;
scroll(0,0);
})
 ans.forEach((a)=>{
        a.innerHTML+="<p class='tick'>&nbsp;&nbsp;&nbsp;✅</p>"
        a.style.color="green";
    })
    submit.disabled=true;
}


form3.addEventListener("submit",scorelist3)
function scorelist3(event){
    event.preventDefault();
    
const userAns3=[form3.radio1.value,form3.radio2.value,form3.radio3.value,form3.radio4.value,form3.radio5.value,form3.radio6.value,form3.radio7.value,
    form3.radio8.value,form3.radio9.value,form3.radio10.value,form3.radio11.value,form3.radio12.value,form3.radio13.value,form3.radio14.value,
    form3.radio15.value,form3.radio16.value,form3.radio17.value,form3.radio18.value,form3.radio19.value,form3.radio20.value,form3.radio21.value,form3.radio22.value,
    form3.radio23.value,form3.radio24.value,form3.radio25.value];
    userAns3.forEach((answer3,index3)=>{
if(answer3===correctAns3[index3]){
    count++;
    questions3[index3].classList.add("correct");
}
else{
    questions3[index3].classList.add("wrong");
}
score.style.display="block";
printScore.innerText=`You  scored  ${count}  out  of  25!`;
scroll(0,0);
    })
    ans.forEach((a)=>{
        a.innerHTML+="<p class='tick'>&nbsp;&nbsp;&nbsp;✅</p>"
        a.style.color="green"; 
    })
    submit.disabled=true;
}


playAgain.addEventListener("click",restart)
function restart(event){
    
    count=0;
    questions.forEach((question)=>{
        question.classList.remove("correct");
         question.classList.remove("wrong");
    })
    questions2.forEach((question2)=>{
        question2.classList.remove("correct");
         question2.classList.remove("wrong");
    })
    questions3.forEach((question3)=>{
        question3.classList.remove("correct");
         question3.classList.remove("wrong");
    })
    score.style.display="none";
    ans.forEach((a)=>{
        let tick=document.querySelector(".tick");
        if(tick){
       tick.remove();
       a.style.color="white";
        }
    })
    let radios=document.querySelectorAll("input[type='radio']");
    radios.forEach((radio)=>{
        radio.checked=false;
    })
    submit.disabled=false;
  
}





