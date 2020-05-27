const nameEl = document.getElementById("customerName");
const addressEl = document.getElementById("customerAddress");
const phoneEl = document.getElementById("customerPhoneNumber");
const emailEl = document.getElementById("customerEmail");

// add click event to the create button
document.getElementById("createBtn").addEventListener("click", function(event) {
  event.preventDefault();
  if (
    phoneEl.value.length > 10 ||
    nameEl.value === "" ||
    addressEl.value === "" ||
    emailEl.value === ""
  ) {
    alert(
      "Error: Each field needs to be filled in order to create a client, phone number must be no more than 10 digits!"
    );
  } else {
    //send data to server
    const data = {
      name: nameEl.value,
      phone_number: phoneEl.value,
      address: addressEl.value,
      email: emailEl.value
    };
    fetch(`/api/customers`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function(res) {
        console.log(res);
        alert("Customer was created successfully!");
        showResultHTML(res.data, newCustomer);
        // reset values
        nameEl.value = "";
        phoneEl.value = "";
        addressEl.value = "";
        emailEl.value = "";
        nameEl.focus();
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
