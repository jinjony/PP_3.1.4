const formEditAddUser = document.getElementById('formEditUser')
let idEditUser;
let editUserName;
let editPassword;
let editAge;
let editEmail;
let newRole = [];
let currentRole = [];

formEditAddUser.addEventListener('submit', event => {
    event.preventDefault();
    idEditUser = document.getElementById('id').value
    editUserName = document.getElementById('username').value
    editPassword = document.getElementById('password').value
    editAge = document.getElementById('age').value
    editEmail = document.getElementById('email').value
    currentRole = document.getElementById('role').value
    console.log(currentRole)
    console.log(currentRole)
    listRoles.forEach((role) => {
        if(role.id.toString() === currentRole) {
            newRole.push(role)
        }
    })
    // function getRole() {
    //     return fetch("http://localhost:8080/api/users/role")
    //         .then(response => response.json())
    //         .then((roles) => {
    //             roles.forEach((item) => listRoles.push(item));
    //         })
    //
    // }



    // const formData = new FormData(formEditAddUser);
    // formData.forEach((value, key) =>
    //     {
    //         if(key === "editRole") {
    //             if(value === "ROLE_ADMIN") {
    //                 currentRole.push({id:1,name:value})
    //             } else {
    //                 currentRole.push({id:2,name:value})
    //             }
    //         }
    //     }
    // )

    let user = {
        id: idEditUser,
        username: editUserName,
        password: editPassword,
        age: editAge,
        email: editEmail,
        roles: newRole
    }

    console.log(user)

    editUser(user)
        .then(() => reStart());

    currentRole.length = 0;
    newRole.length = 0;

})
listRoles.length = 0;

function editUser(user) {
    return fetch(myUrl + "/edit", {
        method: 'PUT',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(user)

    })
}
