var Withdrawal = function () {
    var Withdrawal1 = element(by.model('amount'));

    var Withdrawl = element(by.buttonText('Withdraw'));

    var withdrwErrMsg = element(by.xpath('/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[4]/div[1]/span[1]'));

    var withdrwsuccess = element(by.xpath('/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[4]/div[1]/span[1]'));

    var TransactionAgain = element(by.buttonText('Transactions'));

    this.withdrawamount = function (amounts) {
        Withdrawal1.sendKeys(amounts);
        return this;
    }

    this.withdrw = function(){
            Withdrawl.click();
            
    }

    this.ErrorMsg = function(){
        expect(withdrwErrMsg.getText()).toEqual("Transaction Failed. You can not withdraw amount more than the balance.");
    }

    this.WithdrwPass = function(){
            expect(withdrwsuccess.getText()).toEqual("Transaction successful");
    }

    this.tranAgain = function(){
            TransactionAgain.click();
            return require('./3_Cust_ActDetails_spec.js');
    }
}
module.exports = new Withdrawal();