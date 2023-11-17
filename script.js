// const userImage = document.getElementById('user-img');
// const userName = document.getElementById('user-name');
// const userEmail = document.getElementById('user-email');
const userCard = document.getElementById('profile-card');
const conatiner = document.getElementById('container');


async function fetchData() {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    const users = data.users;
    // console.log(users);
    bindData(users);
}

function bindData(users) {
    users.forEach((user) => {
        const userCardClone = userCard.cloneNode(true);
        const userImage = userCardClone.querySelector('#user-img');
        const userName = userCardClone.querySelector('#user-name');
        const userEmail = userCardClone.querySelector('#user-email');
        // console.log(userCardClone);
        
       userImage.src = user.image;
       userName.innerHTML = `${user.firstName} ${user.lastName}`;
       userEmail.innerHTML = user.email;
       container.appendChild(userCardClone);
    })

    userCard.style.display = "none";
    
}

fetchData();

