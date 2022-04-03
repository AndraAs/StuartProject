class OngoingPage
{
  
    get cancelDeliveryBtn(){
       return $('//span[text()="Cancel delivery"]')
    }
    get reasonCancelDelivery(){
        return $('#jobRatingReason-addressError')
    }
    get confirmCancelDeliveryBtn(){
        return $('#cancelDeliveriesModalConfirmButton')
    }
    get historyTabLink(){
        return $('a[href="/history"]')
        
    }
    get firstRowOrder(){
        return $('tbody > tr:nth-child(1)')
    }
    

    ClickCancelDeliver(){
        this.cancelDeliveryBtn.waitForExist()
        this.cancelDeliveryBtn.click()
    }
    SelectReasonCancelDelivery(){
        this.reasonCancelDelivery.waitForExist()
        this.reasonCancelDelivery.click()
    }
    ConfirmCancelDelivery(){
        this.confirmCancelDeliveryBtn.waitForExist()
        this.confirmCancelDeliveryBtn.click()
    }
    GoToHistoryPageAndSelectOrderRow(){
        this.historyTabLink.click()
        browser.pause(3000)
        browser.waitUntil(()=>$("table").isDisplayed(),{timeout:4000, timeoutMsg:'Not displayed'})
        browser.pause(3000)
       this.firstRowOrder.click()
    }
    
    
  
}

module.exports = new OngoingPage()