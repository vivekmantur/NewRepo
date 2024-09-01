document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('customerFirstName').value;
    const vehicleName = document.getElementById('vehicleName').value;
    const price = document.getElementById('price').value;
    const kilometersDriven = document.getElementById('kilometersDriven').value;

    const customer = {
        firstName: firstName,
        vehicleName: vehicleName,
        price: price,
        kilometersDriven: kilometersDriven
    };

    let customers = localStorage.getItem('customers');
    if (customers) {
        customers = JSON.parse(customers);
    } else {
        customers = [];
    }
    customers.push(customer);
    localStorage.setItem('customers', JSON.stringify(customers));
    alert('Customer registered successfully');
});
