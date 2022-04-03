class RequestDeliveryPage
{
    get searchAdressPickUp(){
       return $('#pickUpCard-0-fields-field-address')
    }
    get dropdownPickUpAddress(){
       return $('#item-36-rue-de-wattignies-75012-paris')
    }
    get inputFirstNamePickUp(){
        return $('#pickUpCard-0-fields-field-firstname')
    }
    get inputLastNamePickUp(){
        return $('#pickUpCard-0-fields-field-lastname')
    }
    get inputCompanyNamePickUp(){
        return $('#pickUpCard-0-fields-field-company')
    }
    get inputPhonePickUp(){
        return $('#pickUpCard-0-fields-field-phone')
    }
    get inputEmailPickUp(){
        return $('#pickUpCard-0-fields-field-email')
    }
    get pickUpError(){
        return $('#pickUp-error')
    }
    get searchAddressDropOff(){
        return $('#dropOffCard-0-fields-field-address')
    }
    get carRadioBtn(){
        return $('#transport-car')
    }
    get requestDeliveryBtn(){
        return $('#requestButton')
    }

    AddSearchAddress(pickUpAddress){
        this.searchAdressPickUp.setValue(pickUpAddress)
        browser.waitUntil(()=>this.dropdownPickUpAddress.isDisplayed(),{timeout:4000, timeoutMsg:'Not displayed'})
        this.dropdownPickUpAddress.click()
        expect(this.searchAdressPickUp).toHaveValue(pickUpAddress)
    }
    FillPickUpInformation(firstName,lastName,companyName,phoneNumber,email){
        browser.waitUntil(()=>this.inputFirstNamePickUp.isDisplayed(),{timeout:5000, timeoutMsg:'Not displayed'})
        this.inputFirstNamePickUp.setValue(firstName)
        this.inputLastNamePickUp.setValue(lastName)
        this.inputCompanyNamePickUp.setValue(companyName)
        this.inputPhonePickUp.setValue(phoneNumber)
        this.inputEmailPickUp.setValue(email)
        browser.pause(2000)
        this.pickUpError.waitForDisplayed({ reverse: true });

    }
    AddDropOffAddress(dropOffAddress){
        this.searchAddressDropOff.setValue(dropOffAddress)
        browser.waitUntil(()=>this.dropdownPickUpAddress.isDisplayed(),{timeout:4000, timeoutMsg:'Not displayed'})
        this.dropdownPickUpAddress.click()
        expect(this.searchAddressDropOff).toHaveValue(dropOffAddress)
    }
    SelectVehicle(){
        this.carRadioBtn.waitForClickable()
        this.carRadioBtn.click()

    }
    RequestDelivery(){
        browser.waitUntil(()=>this.requestDeliveryBtn.isDisplayed(),{timeout:4000, timeoutMsg:'Not displayed'})
        this.requestDeliveryBtn.click()
        browser.pause(4000)
     

    }
    
  
}

module.exports = new RequestDeliveryPage()