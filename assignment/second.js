var checked = localStorage.getItem("checked")
console.log("Selected ID is :"+checked)

async function call()
{
    let res = await fetch(`http://enl.centralindia.cloudapp.azure.com/assignment/user/userInfo/${checked}`, {
    headers: {Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJleGFtcGxlSW5zdXJlciIsInN1YiI6ImpvaG4uZG9lIiwiaWF0IjoxNjQ4NDkzNjI5LCJleHAiOjE2NDg0OTYyMjl9.4gnCo5F-2H34ziV31Q2tKuI46wvGqazMwEms7qUxKMo'}
    })
    .then(resp => resp.json())
    console.log(res)
    document.getElementById("secondtable").innerHTML =  `
    <tr><td>&nbsp; &nbsp;</td></tr>
    <tr><td>User Id &nbsp; &nbsp; &nbsp; ${res.userId}</td></tr> 
    <tr><td>&nbsp;</td></tr>
    <tr><td>Salutation &nbsp; &nbsp; &nbsp;${res.salutation}</td></tr>
    <tr><td>&nbsp;</td></tr>
    <tr><td>Full Name &nbsp; &nbsp; &nbsp;${res.firstName+" "+nullCheck(res.middleName)+" " +res.lastName}</td></tr>
    `;
}
        
call()
