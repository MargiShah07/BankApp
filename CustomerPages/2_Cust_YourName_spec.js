var XYZbank = function () {

    var dropdown= element(by.css("#userSelect [value='2']"))

    var login = element(by.buttonText('Login'))

    this.yourNameclick=function(){
        dropdown.click();
    }
    
    this.loginclick = function(){
        login.click();
        return require('./3_Cust_ActDetails_spec.js')
    }
}
module.exports = new XYZbank();