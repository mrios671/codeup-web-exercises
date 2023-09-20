// $(document).ready(function () {
//     "use strict";
//
//     function updateStore() {
//         $.get('./json/inventory.json').done((data) => {
//             console.log(data);
//             let html = '';
//             for (let i = 0; i < data.length; i++) {
//                 html += `<tr>
//                       <td> ${data[i].title} </td>
//                       <td> ${data[i].quantity} </td>
//                       <td> ${data[i].price} </td>
//                       <td> ${data[i].categories} </td>
//                     </tr>`
//             }
//             $("#insertProducts").html(html);
//         }).fail((jqXhr, status, error) => {
//             console.log('OH NOOOO!!!');
//             console.log(status);
//             console.log(error);
//         });
//     }
//
//     //-- Calling the function
//     updateStore()
//     // setInterval(updateStore, 6000);
//     $("#refresh").on("click", updateStore)
//
//
// })

(async()=>{
    async function updateStore() {
        const response = await fetch('./json/inventory.json')
            const data = await response.json();
            console.log(data)
        return data
    }
    function displayInventory(data){
        let html = '';
        for (let i = 0; i < data.length; i++) {
            html += `<tr>
                      <td> ${data[i].title} </td>
                      <td> ${data[i].quantity} </td>
                      <td> ${data[i].price} </td>
                      <td> ${data[i].categories} </td>
                    </tr>`
        }
        $("#insertProducts").html(html);
        return html;
    }

    let storedata = await updateStore()
    let displaydata= displayInventory(storedata)
})()

