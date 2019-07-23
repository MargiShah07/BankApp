var transaction = function () {

    expect($('table').isPresent()).toBeTruthy();
    


    var Back = element(by.buttonText('Back'));
    
    var tabledata = element(by.xpath('/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[2]/table[1]/tbody[1]/tr[1]'));

    // var amountcolumn = element(by.xpath('/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[2]/table[1]/thead[1]/tr[1]/td[2]'));

    var amountdata = element(by.xpath('/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[2]'));
    
    var TransactionType = element(by.xpath('/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[3]'));

    var emptytransaction = element(by.tagName('tbody'));

    this.backclick = function () {
        Back.click();
        return require('./3_Cust_ActDetails_spec')
    }

    this.table = function () {
        expect(tabledata.isPresent()).toEqual(true);
    }

    this.amount = function(){
        expect(amountdata.getText()).toEqual(2000);
    }

    this.TransactionType = function(){
        expect(TransactionType.getText()).toEqual('Credit');
    }

    this.emptytrans = function(){
        expect(emptytransaction.isPresent()).toEqual(true);
    }
}
module.exports = new transaction();