let winston = require('winston');
const logger = winston.createLogger({
	level: 'info',
	format: winston.format.json(),
	transports: [
		//
		// - Write to all logs with level `info` and below to `combined.log` 
		// - Write all logs error (and below) to `error.log`.
		//
		new winston.transports.File({ filename: './reports/winstonBasicLog.log', level: 'info' }),

	]
});

//this will give log into console
if (process.env.NODE_ENV !== 'production') {
	logger.add(new winston.transports.Console({
		format: winston.format.simple()
	}));
}

var data = require('./test/dataE2E.json');
var LoginPage = require('./BankingE2E/LoginPage.js');

describe('Banking E2E Automation', function () {

	beforeEach(function () {
		browser.manage().window().maximize();
		browser.get(data.url);
	})

	it('Validate Login Page', function () {
		LoginPage.presentButton('customer');
		logger.info("Customer Login is present.")
		LoginPage.presentButton('manager');
		logger.info("Bank Manager is present.")
	})

	it('Manager Login Page', function () {
		var manager = LoginPage.goToManager();
		logger.info("Bank Manager Button clicked.")
		manager.presentButton('AddCustomer');
		logger.info("Add Customer is present.")
		manager.presentButton('OpenAccount');
		logger.info("Open Account is present.")
		manager.presentButton('Customers');
		logger.info("Customers is present.")
	})

	it('Add customer to manager', function () {
		var manager = LoginPage.goToManager();
		manager.addCustomerDetails(data.newCust.fname, data.newCust.lname, data.newCust.pcode);
		logger.info("Customer data entered.")
	})

	it('Add Account Dollar', function () {
		var manager = LoginPage.goToManager();
		manager.openAccountDetails(data.addAccount.custName, data.addAccount.currency[0], data.addAccount.msg);
		logger.info("Automatic Account generated in dollar.")
	})

	it('Add Account Pound', function () {
		var manager = LoginPage.goToManager();
		manager.openAccountDetails(data.addAccount.custName, data.addAccount.currency[1], data.addAccount.msg);
		logger.info("Automatic Account generated in pound.")
	})

	it('Add Account Rupee', function () {
		var manager = LoginPage.goToManager();
		manager.openAccountDetails(data.addAccount.custName, data.addAccount.currency[2], data.addAccount.msg);
		logger.info("Automatic Account generated in rupee.")
	})

	it("Delete Customer", function () {
		var manager = LoginPage.goToManager();
		manager.deleteCustomer(data.deleteCust.custName);
		logger.info("Named Customer deleted.")
	})

	it('For Customer Login', function () {
		var customer = LoginPage.goToCustomer();
		var account = customer.selectAccount(data.account.name);
		logger.info("Customer Harry Potter Name selected.")
		account.checkAccount(data.account.name);
		logger.info("Harry Potter Customer Login Page displayed.")
		account.goToTransactions();
		logger.info("Harry Potter transaction Page displayed.")
	})

	it('verify Currnecy Type', function () {
		var customer = LoginPage.goToCustomer();
		var account = customer.selectAccount(data.account.name);
		account.selectAccountNo(data.account.accNo[0]);
		logger.info("Account Number 1004 selected.")
		account.verifyCurrency(data.account.currency[0]);
		logger.info("Account Number 1004 Currency type is Dollar.")
		account.selectAccountNo(data.account.accNo[1]);
		logger.info("Account Number 1005 selected.")
		account.verifyCurrency(data.account.currency[1]);
		logger.info("Account Number 1005 Currency type is pound.")
		account.selectAccountNo(data.account.accNo[2]);
		logger.info("Account Number 1006 selected.")
		account.verifyCurrency(data.account.currency[2]);
		logger.info("Account Number 1006 Currency type is rupee.")
	})

	it('Initial Transaction', function () {
		var customer = LoginPage.goToCustomer();
		var account = customer.selectAccount(data.account.name);
		account.goToTransactions();
		account.validateTransaction();
	})

	it('Deposit Money', function () {
		var customer = LoginPage.goToCustomer();
		var account = customer.selectAccount(data.deposit.name);
		account.selectAccountNo(data.deposit.accNo);
		account.deposit(data.deposit.amnt, data.deposit.successMsg);
	})

	it('Transaction after Deposit', function () {
		var customer = LoginPage.goToCustomer();
		var account = customer.selectAccount(data.deposit.name);
		account.selectAccountNo(data.deposit.accNo);
		//		account.deposit(data.deposit.amnt,data.deposit.successMsg);
		account.goToTransactions();
		account.validateTracsactionAmnt(data.deposit.amnt, "Credit");
	})

	it('Withdrawl Error', function () {
		var customer = LoginPage.goToCustomer();
		var account = customer.selectAccount(data.withdrawFail.name);
		account.selectAccountNo(data.withdrawFail.accNo);
		account.withDraw(data.withdrawFail.amnt, data.withdrawFail.failMsg);
	})

	it('Withdrawl Success', function () {
		var customer = LoginPage.goToCustomer();
		var account = customer.selectAccount(data.withdrawSucc.name);
		account.selectAccountNo(data.withdrawSucc.accNo);
		account.withDraw(data.withdrawSucc.amnt, data.withdrawSucc.successMsg);
	})

	it('Transaction after withdraw', function () {
		var customer = LoginPage.goToCustomer();
		var account = customer.selectAccount(data.withdrawSucc.name);
		account.selectAccountNo(data.withdrawSucc.accNo);
		account.withDraw(data.withdrawSucc.amnt, data.withdrawSucc.successMsg);
		browser.sleep(5000);
		account.goToTransactions();
		account.validateTracsactionAmnt(data.withdrawSucc.amnt, "Debit");
	})

	it("Transaction Reset", function () {
		var customer = LoginPage.goToCustomer();
		var account = customer.selectAccount(data.account.name);
		account.goToTransactions();
		account.resetTransactions;
		account.validateTransaction();
	})

	it('Go To Main Page', function () {
		var customer = LoginPage.goToCustomer();
		var account = customer.selectAccount(data.account.name);
		account.goToTransactions();
		account.goBack(data.account.name);
	})
	browser.sleep(2000);
	it('To Logout', function () {
		var customer = LoginPage.goToCustomer();
		var account = customer.selectAccount(data.account.name);
		account.letsLogout();
	})
	browser.sleep(4000);
})