var DepositPage = function () {

    var amount = element(by.model('amount'));

    var deposit = element(by.xpath('/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[4]/div[1]/form[1]/button[1]'));

    this.enteramount = function (amounts) {
        amount.sendKeys(amounts);
        return this;
    }

    this.depositclick1 = function () {
        deposit.click();
        return require('./3_Cust_ActDetails_spec.js');
    }
}
module.exports = new DepositPage();