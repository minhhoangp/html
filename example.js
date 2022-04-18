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
            const message = `<div class="unread-message"> Hi, my email is ${name}. Have a good day </div>`;

            document.querySelector("body").insertAdjacentHTML("beforeend", message);
        }).catch(error => {
            console.log(error);
        })
}


fetchUnreadMsg();
