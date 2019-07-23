let winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  // defaultMeta: { service: 'user-service' },
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
var data = require('./Utility/BankAppData.json')
var Cust_login = require('./CustomerPages/1_Cust_Login_spec.js')


describe('Bank Application', function () {
  it('Group Customer', function () {
    browser.get(data.url);
    logger.info("Bank Application Launch URL.")
    let CustName = Cust_login.customerclick();
    logger.info("Customer Login Button clicked.")
    browser.sleep(2000);

    CustName.yourNameclick();
    logger.info("Name of Customer Harry Potter is selected.")
    let Acnt = CustName.loginclick();
    logger.info("Customer Login button clicked.")
    Acnt.dollarclick();
    logger.info("Account number 1004 is clicked.")
    Acnt.poundclick();
    logger.info("Account number 1005 is clicked.")
    Acnt.rupeeclick();
    logger.info("Account number 1006 is clicked.")

    browser.sleep(1000);
    // console.log('Transaction detail is empty.');
    let back = Acnt.transactionclick();
    logger.info("Transaction detail is empty.")
    browser.sleep(2000);
    let details = back.backclick();
    logger.info("Back Button is clicked.")
    browser.sleep(1000);
    details.rupeeclick();
    logger.info("Account number 1006 is clicked.")
    let deposit = details.depositclick();
    logger.info("Deposit button is clicked.")
    browser.sleep(1000);
    deposit.enteramount(data.deposit.Amount);
    logger.info("deposit amount added.")
    // browser.ignoreSynchronization = true;
    browser.sleep(1000);
    let newPage = deposit.depositclick1();
    logger.info("deposit submit button is clicked.");
    // browser.ignoreSynchronization = true;
    newPage.depositS();
    logger.info("deposit successful message displayed.");
    let transactiondata = newPage.transactionclick();
    logger.info("transaction button clicked.");
    browser.sleep(5000);
    // transactiondata.table();
    // logger.info("Table contents are present.");
    // transactiondata.amount();
    // logger.info("Amount value is 2000.");
    // transactiondata.TransactionType();
    // logger.info("Transaction Type is Credit")
    let withrawal = transactiondata.backclick();
    withrawal.rupeeclick();
    logger.info("Account number 1006 is selected.")
    browser.sleep(2000);
    let withdrawpage = withrawal.withdraw();
    logger.info("withdraw button is clicked.")
    browser.sleep(2000);
    withdrawpage.withdrawamount(data.withdrawal.Amount);
    logger.info("withdraw amount entered.")
    browser.sleep(2000);
    withdrawpage.withdrw();
    logger.info("Withdraw button clicked.")
    browser.sleep(2000);
    withdrawpage.ErrorMsg();
    logger.info("Error Message Displayed.");
    browser.sleep(2000);
    withdrawpage.withdrawamount(data.withdrawal.RightAmount);
    logger.info("1000 amount entered in withrawal")
    browser.sleep(2000);
    withdrawpage.withdrw();
    logger.info("Withdrawl Button clicked.")
    browser.sleep(2000);
    withdrawpage.WithdrwPass();
    logger.info("Transaction Successful");
    browser.sleep(2000);
    let transAgain1 = withdrawpage.tranAgain();
    logger.info("Transaction clicked after successful withdrawal.");
    browser.sleep(2000);
    transAgain1.transactionAfterWithdrw();
    logger.info("transaction clicked after withdrawal.");
    browser.sleep(2000);
    let reset1 = transAgain1.Reset();
    logger.info("reset button clicked.");
    browser.sleep(2000);
    reset1.emptytrans();
    logger.info("transaction data is empty.");

    browser.sleep(4000);
  });
});