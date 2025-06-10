const addBtn =  document.querySelector(".add");
const model =  document.querySelector(".model_container");
const priorityContainer =  document.querySelector(".priorityClrContainer");
const textAreaTitle = document.querySelector(".model_textarea_title");
const textAreaDesc =  document.querySelector(".model_textarea_description");
const not_yet_started = document.querySelector(".not_started_content");
const colors = ["pink" , "blue" , "purple" , "green"];
const types =  document.querySelector(".colors");
const delBtn =  document.querySelector(".delete");

delBtn.addEventListener("click" , (e)=>{
    console.log(e.target);
    if(delBtn.classList.contains("activeD")){
        delBtn.classList.remove("activeD");
    }else{
    delBtn.classList.add("activeD");
    }

})

addBtn.addEventListener('click' ,(e)=>{
    console.log("open the model");
    model.style.display="flex";
});

types.addEventListener("click" , (e)=>{

    if(!e.target.classList.contains("color"))return ;
    console.log(e.target);
    const choosedClr = e.target.classList[1];

    const allTickets =  document.querySelectorAll(".ticket");

    for(let i = 0 ; i < allTickets.length ; i++){
        const curTicket =  allTickets[i];
        const ticketPriority = curTicket.querySelector(".ticket_priority");
        const showTheClr  =ticketPriority.classList[1];
        
        if(choosedClr !== showTheClr){
            curTicket.style.display ="none";
        }
        else {
            curTicket.style.display="block";
        }
    }

})

types.addEventListener("dblclick" , (e)=>{

    if(!e.target.classList.contains("color"))return ;
    const allTickets =  document.querySelectorAll(".ticket");

    for(let i = 0 ; i < allTickets.length ; i++){
        const curTicket =  allTickets[i];
            curTicket.style.display="block";
    }

})

model.addEventListener("keypress" ,(e)=>{

    console.log(e);
    if(e.key != "Enter" || e.shiftKey ===  true){
        console.log(e.key);
        return ;
    } 
    if(e.key === "Enter" && e.shiftKey ===  false){
        console.log("Create a new Ticket");
        const activeClrElement =  document.querySelector(".active");
        const curClr = activeClrElement.classList[1];
        console.log(curClr);
        const title = textAreaTitle.value;
        const description = textAreaDesc.value;
        const uuidGen= new ShortUniqueId({length :10});
        const ticketId = uuidGen.rnd();

        createTicket(curClr , description , title , ticketId);
        textAreaDesc.value="";
        textAreaTitle.value="";
        
        model.style.display="none";
    }
})



function createTicket(color , description , title , ticketId){
    const tickectContainer =   document.createElement("div");
    tickectContainer.setAttribute("class" , "ticket");

    tickectContainer.innerHTML=`<div class="ticket_priority ${color}">
                </div>
                <div class="ticketId">
                    ${ticketId}
                </div>
                <div  class="ticket_title">
                    ${title}
                </div>
                <div class="ticket_description">
                    ${description}
                </div>
                <div class="lock_unlock_btn">
                    <i class="fa fa-lock"></i>
                </div>`;


    const notStartedYet =  document.querySelector(".not_started_content");
    notStartedYet.appendChild(tickectContainer);
    console.log("ticket Created ");
     // handle color
    const tickectColorEle = tickectContainer.querySelector(".ticket_priority");
    tickectColorEle.addEventListener("click", toggleColor);
     

     // handle lock 
     const lockBtn =  tickectContainer.querySelector(".lock_unlock_btn");
     lockBtn.addEventListener("click" ,(e) =>{handleLockUnlock(e)});

     // delete when delete is active
     tickectContainer.addEventListener("click" , (e)=>{
        if(delBtn.classList.contains("activeD")){
           tickectContainer.remove(e.target.parentElement);
           console.log("ticket removed");
        }
})
}

function handleLockUnlock(e){
    console.log(e.target);
    const parentTicketContainer = e.target.parentElement.parentElement;
    const textArea_title =  parentTicketContainer.querySelector(".ticket_title");
    const textArea_desc =  parentTicketContainer.querySelector(".ticket_description");
    
    const isLocked =  e.target.classList.contains("fa-lock");

    if(isLocked){
        e.target.classList.remove("fa-lock");
        e.target.classList.add("fa-unlock");
        textArea_desc.setAttribute("contenteditable" , "true");
         textArea_title.setAttribute("contenteditable" , "true");


    }else{
         e.target.classList.remove("fa-unlock");
        e.target.classList.add("fa-lock");
        textArea_desc.setAttribute("contenteditable" , "false");
         textArea_title.setAttribute("contenteditable" , "false");
    }

}



function toggleColor(e){

    const cColor =  e.target.classList[1];
    const idx = colors.indexOf(cColor);
    const newIdx = (idx+1)%4;

    e.target.classList.remove(cColor);
    e.target.classList.add(colors[newIdx]);


}


priorityContainer.addEventListener("click" , (e)=>{

    if(!e.target.classList.contains("priorityClr"))return ;
    if(e.target.classList.contains("active"))return ;
    const selectedClr = e.target.classList[1];
    const priorityClrBoxes =  document.querySelectorAll(".priorityClr");
    for(let  i= 0 ; i < priorityClrBoxes.length ; i++){
        const priorityClrBox = priorityClrBoxes[i];
        const priorityClr =  priorityClrBox.classList[1];

        if(selectedClr == priorityClr){
            priorityClrBox.classList.add("active");
        }else{
            priorityClrBox.classList.remove("active");
        }
    }
})



