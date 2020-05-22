module.exports = function (sequelize, DataTypes) {

    let Customer = sequelize.define("Customer",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phone_number: {
                type: DataTypes.STRING
            },
            address: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            }
        }
    ); 
    //Customer.sync()
    return Customer
}