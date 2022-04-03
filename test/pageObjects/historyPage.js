class HistoryPage
{
    get jobDetailsBanner(){
       return $('#jobDetails-banner')
    }
    get cancelMesage(){
       return $('p[class="status-canceled"] span')
    }
    
    ConfirmDeliveryCancelled(){
        browser.waitUntil(()=>this.jobDetailsBanner.isDisplayed(),{timeout:4000, timeoutMsg:'Not displayed'})
        expect(this.cancelMesage).toHaveTextContaining('You cancelled this delivery')
    }
  
    
  
}

module.exports = new HistoryPage()