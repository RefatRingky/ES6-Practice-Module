document.getElementById('add-border').addEventListener('click',function () {
    const friends = document.getElementById('Friend-container');
    friends.style.border = '2px solid orange';
})

// Add the Background Color
function addBackground(){
    const Friends = document.getElementsByClassName("friend");
    for(const friend of Friends){
        friend.style.backgroundColor = "orange";
    }
}
// add friend
document.getElementById('add-friend').addEventListener('click',function () {
    const container =document.getElementById('Friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend') ;
    friendDiv.innerHTML = `
    <h3 class="friend-name">Friend-1</h3>
    <p>Lorem, ipsum.</p>`
    container.appendChild(friendDiv);
})