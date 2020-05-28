let orderList = document.getElementById('orderList')

function showOrders() {
    fetch(`/api/orders`)
        .then(res => res.json())
        .then(data => {

            for (let item of data) {

                let li = document.createElement('li')

                li.classList.add('listStyle')

                let saleButton = document.createElement('button')
                saleButton.setAttribute('id', item.id)
                saleButton.setAttribute('class', "pay-button")
                saleButton.setAttribute('data-sales-order-id', item.id)


                saleButton.innerHTML = 'Pay'
                
                
                li.appendChild(saleButton)

                orderList.appendChild(li)
            
                li.innerHTML = li.innerHTML + item.customer_id
                li.innerHTML = li.innerHTML + '  |  ' + item.description
                li.innerHTML = li.innerHTML + '  |  ' + item.amount_due
            }
    })
    .then(() => {
        for(let button of document.querySelectorAll(".pay-button")){
            button.addEventListener("click", salesOrderPay)
        }
    })

}

showOrders()

function salesOrderPay(event){
    let salesOrderId = (event.target.getAttribute("data-sales-order-id"))
    fetch('/api/orders/pay/'+salesOrderId, {
        method:'PUT'
    })
    .then(res => res.json())
    .then(data => {location.reload();})
}

// document.addEventListener('click', function(e) {
//     console.log(e.target)
//     fetch(`/api/invoices`, {
//         method: "POST",
//         body: JSON.stringify(item),
//         headers: {
//           "Content-Type": "application/json"
//         }
//     })
//     .then(res => res.json())
//     .then(item => console.log(item))

// })