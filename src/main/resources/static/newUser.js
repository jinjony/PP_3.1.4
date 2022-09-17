const username = document.getElementById('new-username')
const password = document.getElementById('new-password')
const age = document.getElementById('new-age')
const email = document.getElementById('new-eMail')
const addForm = document.querySelector('.addForm')



let currentRoleNew = [];

addForm.addEventListener('submit', e => {
    let addRole = document.getElementById('new-Role').value
    listRoles.forEach((role) => {
        if (role.id.toString() === addRole) {
            console.log("прошло")
            currentRoleNew.push(role)
        }
    })
    // const formDataNewUser = new FormData(addForm);
    // formDataNewUser.forEach((value, key) =>
    //     {
    //         if(key === "new-Role") {
    //             if(value === "ROLE_ADMIN") {
    //                 currentRoleNew.push({id:1,name:value})
    //             } else {
    //                 currentRoleNew.push({id:2,name:value})
    //             }
    //         }
    //     }
    // )
    e.preventDefault();



    fetch("/api/users/new", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user = {
            username: username.value,
            password: password.value,
            age: age.value,
            email: email.value,
            roles: currentRoleNew
        })
    }).then(()=> reStart())
        .then(() => addForm.reset())
    currentRoleNew.length = 0;
    return show('showUsers','addUser')
})

