var harrypotter = function () {
    var locator = element(by.xpath("//span[@class='fontBig ng-binding']"));
    expect(locator.getText()).toBe('Harry Potter');

    browser.sleep(2000);
    var dollar1 = element(by.css("#accountSelect [value='number:1004']"))

    var dollar = element(by.xpath("//strong[contains(text(),'Dollar')]"));
    expect(dollar.getText()).toBe('Dollar');

    browser.sleep(2000);

    var pound1 = element(by.css("#accountSelect [value='number:1005']"));


    // var pound = element(by.cssContainingText('ng-binding','Pound'));
    // expect(pound.getText()).toBe('Pound');

    // browser.sleep(2000);
    var rupee1 = element(by.css("#accountSelect [value='number:1006']"));

    // var rupee = element(by.xpath("//strong[contains(text(),'Rupee')]"));
    // expect(rupee.getText()).toBe('Rupee');

    var transaction = element(by.buttonText('Transactions'));
    var deposit = element(by.buttonText('Deposit'));

    // var balanceRupee = element(by.xpath("//strong[contains(text(),'2000')]"));
    // expect(balanceRupee.getText()).toBe('2000');
    console.log('balance for Account number 1006 is: 2000')

    var depositsuccess = element(by.xpath('/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[4]/div[1]/span[1]'));

    var withdrawal = element(by.buttonText('Withdrawl'));

    var amt = element(by.tagName('tbody'));
    // var amt;
    // element.all(by.repeater('tx in transactions')).then(function (rows) {
    //     rows.forEach(function (row) {
    //         row.all(by.tagName('td')).then(function (columns) {
    //             columns[1].getAttribute('innerText').then(function (Amount) {
    //                 console.log('Amount: ' + Amount);
    //                 amt = Amount;
    //                 console.log('Amount' + amt);
    //             });
    //         });
    //     });
    // });

    var reset = element(by.buttonText('Reset'));


    this.dollarclick = function () {
        dollar1.click();
    }

    this.poundclick = function () {
        pound1.click();
    }

    this.rupeeclick = function () {
        rupee1.click();
    }

    this.transactionclick = function () {
        transaction.click();
        return require('./4_Cust_Transaction_spec.js')
    }

    this.depositclick = function () {
        deposit.click();
        return require('./5_Cust_Deposit_spec.js')
    }

    this.depositS = function () {
        expect(depositsuccess.getText()).toEqual("Deposit Successful");

        return this;
    }

    this.withdraw = function () {
        withdrawal.click();
        return require('./6_Cust_Withdrawal_spec.js')
    }

    this.transactionAfterWithdrw = function () {
        expect(amt.isPresent()).toEqual(true);
    }

    this.Reset = function () {
        reset.click();
        return require('./4_Cust_Transaction_spec.js');
    }

}
module.exports = new harrypotter();