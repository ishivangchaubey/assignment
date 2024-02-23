async function allUsersApiCall()
{
    let res = await fetch('http://enl.centralindia.cloudapp.azure.com/assignment/user/userInfo/allUsers', {
    headers: {Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJleGFtcGxlSW5zdXJlciIsInN1YiI6ImpvaG4uZG9lIiwiaWF0IjoxNjQ4NDkzNjI5LCJleHAiOjE2NDg0OTYyMjl9.4gnCo5F-2H34ziV31Q2tKuI46wvGqazMwEms7qUxKMo'}
    })
    .then(resp => resp.json())

    document.getElementById("alluser").innerHTML = res.map((user) => 
    `<tr>
    <td><input type="radio" name="radio" id="${user.userId}"></td>
    <td>${user.userId}</td>
    <td>${user.firstName}</td>
    <td>${nullCheck(user.middleName)}</td>
    <td>${user.lastName}</td>
    </tr>
    `).join("");

    radioCondition = res.map((user) => `if (document.getElementById(${user.userId}).checked) { var checked = ${user.userId};}`).join(" ");

    console.log(radioCondition)
    
    return radioCondition
}

let radioCondition = allUsersApiCall()

function display(){
  eval(radioCondition)
  console.log(checked)
  //var checked = eval(radioCondition)
  if (checked === undefined){
    alert('No User ID Selected')
    console.log('No User ID Selected')
    return
  }
  localStorage.setItem("checked", checked)
  window.location.href="second.html"
  
}


