const loginPage=require('../pageObjects/loginPage')
const requestDeliveryPage=require('../pageObjects/requestDeliveryPage')
const ongoingPage = require('../pageObjects/ongoingPage')
const historyPage = require('../pageObjects/historyPage')

describe('Cancel Order',()=>{
    it('Login to Dashboard Web',()=>{
        browser.url("/")
        expect(browser).toHaveTitle('Stuart')
        loginPage.Login('strt.wa+test@gmail.com','Test!234')
    })
    it('Close PopUps',()=>{   
        loginPage.HandlePopUps()
        browser.pause(5000)
    })
    it('Fill in pick information',()=>{
        requestDeliveryPage.AddSearchAddress('36 Rue de Wattignies, 75012 Paris, France')
        requestDeliveryPage.FillPickUpInformation('Test','Sandbox','Robert Jean-Luc','+33155377378','andra.astalus@gmail.com')
    })
    it('Fill in Drop Off information',()=>{
        requestDeliveryPage.AddDropOffAddress('36 Rue de Wattignies, 75012 Paris, France')
        requestDeliveryPage.SelectVehicle()
        requestDeliveryPage.RequestDelivery()
    })
    it('Request and cancel delivery',()=>{
        ongoingPage.ClickCancelDeliver()
        ongoingPage.SelectReasonCancelDelivery()
        ongoingPage.ConfirmCancelDelivery()
        ongoingPage.GoToHistoryPageAndSelectOrderRow()
    })
    it('Confirm delivery was cancelled',()=>{
        historyPage.ConfirmDeliveryCancelled()
        browser.pause(5000)
    })


})