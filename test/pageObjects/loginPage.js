class LoginPage
{
    get email(){
       return $('#email')
    }
    get password(){
       return $('#password')
    }
    get loginInBtn(){
        return $('#logInButton')
    }
    get understoodPopUp(){
        return $('//span[text()="Understood"]')
    }
    get closePopUp(){
        return $('#ScenarioTooltipCloseButton')
    }
    get pickUpCard(){
        return $('#pickUpCard-0')
    }
    Login(email,password){
        this.email.setValue(email)
        this.password.setValue(password)
        this.loginInBtn.click()
    }
    HandlePopUps(){
   browser.waitUntil(()=>this.understoodPopUp.isDisplayed(),{timeout:4000, timeoutMsg:'Not displayed'})
   this.understoodPopUp.click()
   this.closePopUp.waitForExist()
   this.closePopUp.click()
   expect(this.pickUpCard).toBeDisplayed()
    }
}

module.exports = new LoginPage()