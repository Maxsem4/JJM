const accountEl = document.getElementById("account");
const descriptionEl = document.getElementById("description");
const amountEl = document.getElementById("amount");

document.getElementById("createBtn").addEventListener("click", function(event) {
  event.preventDefault();
  if (
    accountEl.value === "" ||
    descriptionEl.value === "" ||
    amountEl.value === "" ||
    !parseInt(amountEl.value)
  ) {
    alert("Every field must be filled. Amount must be number!");
    //   } else {
    //     fetch(`/api/customers/${accountEl.value}`).then(res => {
    //       console.log("length: ", res.data.length);
    //       if (res.data.length === 0) {
    //         alert("Customer account number you entered DOES NOT EXIST!");
    //         accountEl.focus();
  } else {
    const data = {
      customer_id: accountEl.value,
      description: descriptionEl.value,
      amount_due: amountEl.value
    };
    fetch(`/api/orders`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function(res) {
        console.log(res);
        alert("Order was created successfully!");

        // reset values
        accountEl.value = "";
        descriptionEl.value = "";
        amountEl.value = "";
        accountEl.focus();
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
//   }
// });
