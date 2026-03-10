if(document.getElementById("achievement-list")){

fetch("http://localhost:5000/achievements")
.then(res => res.json())
.then(data => {

let container = document.getElementById("achievement-list");

data.forEach(item => {

let div = document.createElement("div");

div.className="card";

div.innerHTML = `
<h3>${item.title}</h3>
<p>Student: ${item.student_name}</p>
<p>Category: ${item.category}</p>
<p>${item.description}</p>
`;

container.appendChild(div);

});

});

}

if(document.getElementById("achievementForm")){

document.getElementById("achievementForm").addEventListener("submit",function(e){

e.preventDefault();

let data = {
student_name: document.getElementById("student_name").value,
title: document.getElementById("title").value,
category: document.getElementById("category").value,
description: document.getElementById("description").value
};

fetch("http://localhost:5000/submit",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify(data)
})
.then(res=>res.text())
.then(msg=>{
alert(msg);
});

});

}