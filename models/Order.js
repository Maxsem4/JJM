module.exports = function (sequelize, DataTypes) {

    let Order = sequelize.define("Order",
        {
            customer_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            amount_due: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false
            }
        }
    ); 
    //Customer.sync()
    return Order
}