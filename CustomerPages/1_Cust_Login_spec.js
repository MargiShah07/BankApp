var Cust_login = function () {

    var customer = element(by.buttonText('Customer Login'));
    // expect(customer.getText()).toBe('Customer Login');
    

    this.customerclick = function () {
        customer.click();
        return require('./2_Cust_YourName_spec.js')
    }

}
module.exports = new Cust_login();