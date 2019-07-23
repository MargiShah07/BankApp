var login = function () {
    var customer = element(by.buttonText('Customer Login'));
    expect(customer.getText()).toBe('Customer Login');
    customer.getText().then(function (text) {
        console.log(text);
    });


    element(by.buttonText('Home')).click();

    var bankmanager = element(by.buttonText('Bank Manager Login'));
    expect(bankmanager.getText()).toBe('Bank Manager Login');
    bankmanager.getText().then(function (text) {
        console.log(text);
    });

    this.customerclick = function () {
        customer.click();
        return require('./custXYSbank.js')
    }

    this.bankmanagerclick = function () {
        bankmanager.click();
    }
}
module.exports = new login();