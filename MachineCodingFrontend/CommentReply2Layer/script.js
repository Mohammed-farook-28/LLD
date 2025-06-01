const sumbmitButton = document.querySelector('.submit');
const newComment =document.querySelector('.text');
const replay_container = document.querySelector(".replay_container");
sumbmitButton.addEventListener('click', (e)=> {
    let  commentText = newComment.value.trim();
    addNewComment(commentText);
    newComment.value ="";

});
replay_container.addEventListener("click" ,(e)=>{
    let element = e.target;
   if(element.classList.contains("replay-button")){
        console.log(element);
    const parentComment = element.parentElement;
    console.log(parentComment);
    let value =  parentComment.querySelector(".inner_text").value;
    console.log(value);
    parentComment.querySelector(".inner_text").value='';
    const newInnerReply =  document.createElement('div');
    newInnerReply.innerHTML=`<div class="single_replay">
                    <p >${value}</p>
                </div>`;

const innerReplayContainer = parentComment.querySelector(".inner_replay_container");
innerReplayContainer.appendChild(newInnerReply);

    
   }
})
function addNewComment(commentText){
    console.log("comment added ");
    const  seperateReplayDiv =  document.createElement('div');
    seperateReplayDiv.classList.add("seperate_replay");
    console.log(commentText);
    seperateReplayDiv.innerHTML=` 
        <p>${commentText}</p>
        <button class="replay-button">Replay</button>
        <Textarea class="inner_text" placeholder="Write your Replay..."></Textarea>
        <div class="inner_replay_container"></div>
    `;
    console.log(replay_container);
    replay_container.appendChild(seperateReplayDiv);

}



