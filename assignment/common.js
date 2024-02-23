function nullCheck(inputString) {
    if (inputString === null || inputString === undefined) {
        return "";
    } else {
        return inputString;
    }
}

function groupMenuItems(menuItems) {
    const groupedMenuItems = {};

    menuItems.forEach(menuItem => {
        const { menuGroupName, menuItemName } = menuItem;
        if (!groupedMenuItems[menuGroupName]) {
            groupedMenuItems[menuGroupName] = [];
        }
        groupedMenuItems[menuGroupName].push(menuItemName);
    });

    const groupWeights = {
        "Group One": 1,
        "Group Two": 2,
        "Group Three": 3
    };

    const sortedGroupedMenuItems = {};
    Object.keys(groupedMenuItems)
        .sort((a, b) => groupWeights[a] - groupWeights[b])
        .forEach(key => {
            sortedGroupedMenuItems[key] = groupedMenuItems[key];
        });

    return sortedGroupedMenuItems;
}

async function menuItemsApiCall() 
{
        let res = await fetch('http://enl.centralindia.cloudapp.azure.com/assignment/sidebarMenu/menuItems', {
            headers: {Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJleGFtcGxlSW5zdXJlciIsInN1YiI6ImpvaG4uZG9lIiwiaWF0IjoxNjQ4NDkzNjI5LCJleHAiOjE2NDg0OTYyMjl9.4gnCo5F-2H34ziV31Q2tKuI46wvGqazMwEms7qUxKMo'}
        })
        .then(resp => resp.json())
        const groupedMenuItems = groupMenuItems(res);
        console.log(groupedMenuItems);

        var menuBarHTML = "<br> "
        for (var item in groupedMenuItems){
            console.log('Inside for');
            console.log(item);
            menuBarHTML += `<span class="title">Menu ${item}</span> <br>`
            for(var i = 0; i< groupedMenuItems[item].length; i++)
            {
                console.log(groupedMenuItems[item][i]);
                menuBarHTML += `<span class="sub">Menu ${groupedMenuItems[item][i]}</span> <br>`

            }
            menuBarHTML += "<br><br>"
        }

        console.log(menuBarHTML);
        document.getElementById("Menu Item").innerHTML = menuBarHTML

}
menuItemsApiCall();

