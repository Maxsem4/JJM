module.exports = function (sequelize, DataTypes) {

    let Invoice = sequelize.define("Invoice",
        {
            order_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            amount_paid: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false
            },
            has_paid: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        }
    ); 
    //Customer.sync()
    return Invoice
}