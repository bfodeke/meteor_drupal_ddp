if ( Meteor.users.find().count() === 0 ) {
    Accounts.createUser({
        username: 'admin',
        email: 'admin@example.com',
        password: 'password',
        profile: {
            first_name: 'Bayo',
            last_name: 'Fodeke',
            company: 'Classic',
        }
    });

    Meteor.users.update({"username":"admin"}, {$set: {"emails.0.verified" :true}});
}