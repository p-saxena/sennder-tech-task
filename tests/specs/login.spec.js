import LoginPage from '../pages/login.page'
import { LoginPageStrings, HomePageStrings } from '../helper/constants'
import HomePage from '../pages/home.page'

describe('Login to Sprint Board,', () => {
	it('should open login page', () => {
		LoginPage.open()
		expect(browser.getTitle() === LoginPageStrings.pageTitle)
	})
	it('should contain email address and password field', () => {
		LoginPage.emailAddress.waitForDisplayed()
		LoginPage.password.waitForDisplayed()
	})
	it('should enable user with valid credentials to login', () => {
		LoginPage.open()
		LoginPage.loginToSprintBoard(
			LoginPageStrings.email,
			LoginPageStrings.password
		)
		HomePage.successfulLoginMessage.waitForDisplayed()
		expect(HomePage.successfulLoginMessage.getText()).to.equal(
			HomePageStrings.loginSuccessMessage
		)
	})
})
