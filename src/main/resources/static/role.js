let postRoles = document.getElementById("role")
let addRoles = document.getElementById("new-Role")

let listRoles = [

];

function getRole() {
    return fetch("http://localhost:8080/api/users/role")
        .then(response => response.json())
        .then((roles) => {
            roles.forEach((item) => listRoles.push(item));
        })

}

async function startRole() {
    await getRole(listRoles)
    await getAllRoles();

}
function getAllRoles() {
    listRoles.forEach(role =>{
        postRoles.options[postRoles.options.length] = new Option(role.name, role.id)
        addRoles.options[addRoles.options.length] = new Option(role.name, role.id)
    })
}

startRole()
console.log(listRoles)






