let invoiceList = document.getElementById('invoiceList')

function showInvoices() {
    fetch(`/api/invoices`)
        .then(res => res.json())
        .then(data => {

            for (let item of data) {

                let li = document.createElement('li')

                li.classList.add('listStyle')
                
                invoiceList.appendChild(li)
                
                li.innerHTML = li.innerHTML + item.order_id
                li.innerHTML = li.innerHTML + '  |  ' + item.amount_paid
                li.innerHTML = li.innerHTML + '  |  ' + 'PAID'
                
            }
        })
    
        
}

showInvoices()