let customerList = document.getElementById('customerList')

function showCustomers() {
    fetch(`/api/customers`)
        .then(res => res.json())
        .then(data => {

            for (let item of data) {

                let li = document.createElement('li')

                li.classList.add('listStyle')
            
                customerList.appendChild(li)
            
                li.innerHTML = li.innerHTML + item.name
                li.innerHTML = li.innerHTML + '  |  ' + item.phone_number
                li.innerHTML = li.innerHTML + '  |  ' + item.address
                li.innerHTML = li.innerHTML + '  |  ' + item.email
            }
        })
}

showCustomers()