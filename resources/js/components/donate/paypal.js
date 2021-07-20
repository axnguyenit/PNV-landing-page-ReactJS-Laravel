paypal.Button.render({
    // Configure environment
    env: 'sandbox',
    client: {
        sandbox: 'ARG0sBLBiJAg84DswFdtgTRN8K7jJdEw9mb90WzktoMZ4Ogx2JjfgAAiKGzNNRacf7MhVeMxeWKI2M8A',
        production: 'demo_production_client_id'
    },
    // Customize button (optional)
    locale: 'en_US',
    style: {
        size: 'large',
        color: 'blue',
        shape: 'pill',
    },

    // Enable Pay Now checkout flow (optional)
    commit: true,

    // Set up a payment
    payment: function(data, actions) {
        console.log(data);
        console.log(actions);
        return actions.payment.create({
            transactions: [{
                amount: {
                    total: '11',
                    currency: 'USD'
                }
            }]
        });
    },
    // Execute the payment
    onAuthorize: function(data, actions) {
        return actions.order.capture().then(function(details) {
            console.log(details);
            // Show a confirmation message to the buyer
            window.alert('Thank you for your purchase!');
            const donation = {
                payment_id: details.id,
                create_at: details.create_time,
                email: details.payer.email_address,
                name: details.purchase_units[0].shipping.name.full_name,
                address: details.purchase_units[0].shipping.address.address_line_1 + ', ' + details.purchase_units[0].shipping.address.country_code,
                purchase: details.purchase_units[0].amount.value,
            }

            console.log(donation);
        });
        // return actions.payment.execute().then(function() {
        //     // Show a confirmation message to the buyer
        //     window.alert('Thank you for your purchase!');
        // });
    }
}, '#paypal-button')