function fetchPersonalMsg(){
    fetch("https://reqres.in/api/users/2")
        .then(response =>{
            if(!response.ok){
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data =>{
            // const html = data.data.map(user =>{
            //     return `
            //     <div class="user">
            //         <p>Name: ${user.first_name}</p>
            //         <p>Email: ${user.email}</p>
            //     </div>
            //     `;
            // })
            // .join("")

            const name = data.data.first_name
            const message = `Good (time of day), ${name}. You are on a streak of (days)!`;

            document.querySelector(".personal").insertAdjacentHTML("beforeend", message);
        }).catch(error => {
            console.log(error);
        })
}

function fetchUnreadCliName(){
    fetch("https://reqres.in/api/users/2")
        .then(response =>{
            if(!response.ok){
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data =>{
            const name = data.data.last_name
            const notification = `(Title).${name} sent you a message at (time)`;

            document.querySelector(".unread").insertAdjacentHTML("beforeend", notification);
        }).catch(error => {
            console.log(error);
        })
}

function fetchUnreadMsg(){
    fetch("https://reqres.in/api/users/2")
        .then(response =>{
            if(!response.ok){
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data =>{
            const name = data.data.email
            const message = `<div class="collapsible-message"> Hi, my email is ${name}. Have a good day </div>
            `;

            document.querySelector(".unread").insertAdjacentHTML("afterend", message);
        }).catch(error => {
            console.log(error);
        })
}

function fetchLeaderboardData(){
    fetch("https://reqres.in/api/users")
        .then(response =>{
            if(!response.ok){
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data =>{
            const users = data.data.map(user =>{
                return `
                <div class="user">
                    <p>Name: ${user.first_name}</p>
                    <p>Rate: ${user.id}</p>
                </div>
                `;
            })
            .join("")

            document.querySelector(".leaderboard").insertAdjacentHTML("beforeend", users);
    }).catch(error => {
        console.log(error);
    })
}



fetchUnreadCliName();
fetchPersonalMsg();
fetchUnreadMsg();
fetchLeaderboardData();
