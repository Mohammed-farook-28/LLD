const addBtn =  document.querySelector(".add");
const model =  document.querySelector(".model_container");
const priorityContainer =  document.querySelector(".priorityClrContainer");
const textAreaTitle = document.querySelector(".model_textarea_title");
const textAreaDesc =  document.querySelector(".model_textarea_description");
const not_yet_started = document.querySelector(".not_started_content");
const colors = ["pink" , "blue" , "purple" , "green"];
const types =  document.querySelector(".colors");
const delBtn =  document.querySelector(".delete");

window.addEventListener("DOMContentLoaded", () => {
    loadTicketsFromStorage();
    const tickets = document.querySelectorAll('.ticket');
    tickets.forEach(ticket => {
        const ticketId = ticket.querySelector('.ticketId').textContent.trim();
        makeTicketDraggable(ticket, ticketId);
    });
});


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


function getTicketsFromStorage() {
    const tickets = localStorage.getItem("tickets");
    return tickets ? JSON.parse(tickets) : [];
}

function saveTicketsToStorage(tickets) {
    localStorage.setItem("tickets", JSON.stringify(tickets));
}

function createTicket(color, description, title, ticketId) {
    const tickectContainer = document.createElement("div");
    tickectContainer.setAttribute("class", "ticket");

    tickectContainer.innerHTML = `<div class="ticket_priority ${color}">
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

    const notStartedYet = document.querySelector(".not_started_content");
    notStartedYet.appendChild(tickectContainer);
    console.log("ticket Created ");

    // Save to localStorage
    let tickets = getTicketsFromStorage();
    // Avoid duplicate ticketId
    if (!tickets.some(t => t.ticketId === ticketId)) {
        tickets.push({ color, description, title, ticketId });
        saveTicketsToStorage(tickets);
    }

    // handle color
    const tickectColorEle = tickectContainer.querySelector(".ticket_priority");
    tickectColorEle.addEventListener("click", toggleColor);

    // handle lock 
    const lockBtn = tickectContainer.querySelector(".lock_unlock_btn");
    lockBtn.addEventListener("click", (e) => { handleLockUnlock(e) });

    tickectContainer.addEventListener("click", (e) => {
        if (delBtn.classList.contains("activeD")) {
            tickectContainer.remove();
            console.log("ticket removed");
            let tickets = getTicketsFromStorage();
            tickets = tickets.filter(t => t.ticketId !== ticketId);
            saveTicketsToStorage(tickets);
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



function toggleColor(e) {
    const cColor = e.target.classList[1];
    const idx = colors.indexOf(cColor);
    const newIdx = (idx + 1) % colors.length;

    e.target.classList.remove(cColor);
    e.target.classList.add(colors[newIdx]);

    const ticketContainer = e.target.closest(".ticket");
    const ticketId = ticketContainer.querySelector(".ticketId").textContent.trim();
    let tickets = getTicketsFromStorage();
    tickets = tickets.map(t => {
        if (t.ticketId === ticketId) {
            return { ...t, color: colors[newIdx] }; 
        }
        return t;
    });
    saveTicketsToStorage(tickets);
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

const columns = document.querySelectorAll('.not_started_content, .brain_storming_content, .completed_content, .onProgress_content');

columns.forEach(column => {
    column.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    column.addEventListener('drop', (e) => {
        e.preventDefault();
        const ticketId = e.dataTransfer.getData('text/plain');
        const ticket = document.querySelector(`[data-ticket-id="${ticketId}"]`);
        if (ticket) {
            column.appendChild(ticket);

            // Update ticket status in localStorage
            let tickets = getTicketsFromStorage();
            tickets = tickets.map(t => {
                if (t.ticketId === ticketId) {
                    // Save the column's class as status
                    // Use a unique identifier for each column
                    if (column.classList.contains('not_started_content')) t.status = 'not_started_content';
                    else if (column.classList.contains('brain_storming_content')) t.status = 'brain_storming_content';
                    else if (column.classList.contains('completed_content')) t.status = 'completed_content';
                    else if (column.classList.contains('onProgress_content')) t.status = 'onProgress_content';
                }
                return t;
            });
            saveTicketsToStorage(tickets);
        }
    });
});

// Make tickets draggable
function makeTicketDraggable(ticketElement, ticketId) {
    ticketElement.setAttribute('draggable', 'true');
    ticketElement.setAttribute('data-ticket-id', ticketId);

    // Only allow drag when starting from the .ticket container itself
    ticketElement.addEventListener('dragstart', (e) => {
        // Only start drag if the target is the .ticket container, not its children
        if (e.target === ticketElement) {
            e.dataTransfer.setData('text/plain', ticketId);
        } else {
            e.preventDefault();
        }
    });
}

// Patch createTicket to call makeTicketDraggable and allow column placement
const originalCreateTicket = createTicket;
createTicket = function(color, description, title, ticketId, status) {
    // Remove ticket from all columns before creating (avoid duplicates)
    const existingTicket = document.querySelector(`[data-ticket-id="${ticketId}"]`);
    if (existingTicket) existingTicket.remove();

    originalCreateTicket(color, description, title, ticketId);

    // Find the last ticket added (the one just created)
    const tickets = document.querySelectorAll('.ticket');
    const lastTicket = Array.from(tickets).find(t => t.querySelector('.ticketId').textContent.trim() === ticketId);
    if (lastTicket) {
        makeTicketDraggable(lastTicket, ticketId);

        // Place ticket in correct column if status is provided
        if (status) {
            let col = document.querySelector(`.${status}`);
            // Fallback to not_started_content if status is invalid
            if (!col) col = document.querySelector('.not_started_content');
            if (col && col !== lastTicket.parentElement) {
                col.appendChild(lastTicket);
            }
        }
    }
};

// Patch loadTicketsFromStorage to pass status
function loadTicketsFromStorage() {
    const tickets = getTicketsFromStorage();
    for (let i = 0; i < tickets.length; i++) {
        const { color, description, title, ticketId, status } = tickets[i];
        createTicket(color, description, title, ticketId, status);
    }
}
