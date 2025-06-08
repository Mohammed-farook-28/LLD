const addBtn =  document.querySelector(".add");
const model =  document.querySelector(".model_container");
const priorityContainer =  document.querySelector(".priorityClrContainer");
const textAreaTitle = document.querySelector(".model_textarea_title");
const textAreaDesc =  document.querySelector(".model_textarea_description");
addBtn.addEventListener('click' ,(e)=>{
    console.log("open the model");
    model.style.display="flex";
});

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
                <div class="ticket_title">
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