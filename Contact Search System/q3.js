let names = ["Aaliyaan", "Masharaib", "Adnan"];
let numbers = ["10111", "20222", "30333"];

let searchurName = prompt("Enter Name");
let found = false;

for(let i = 0; i < names.length; i++) {
    if(searchurName == names[i]) {
        alert("Number: " + numbers[i]);
        found = true;
    }
}
if(found == false) {
    alert("Contact Not Found");
}
