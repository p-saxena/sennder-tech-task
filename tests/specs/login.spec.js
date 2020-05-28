import LoginPage from '../pages/login.page'
import HomePage from '../pages/home.page'

describe('Login to Sprint Board,', () => {
	it('should open login page', () => {
		LoginPage.open()
		expect(browser.getTitle() === 'Login - Sprint Boards')
	})
	it('should contain email address and password field', () => {
		LoginPage.emailAddress.waitForDisplayed()
		LoginPage.password.waitForDisplayed()
	})
	it('should enable user with valid credentials to login', () => {
		LoginPage.open()
		LoginPage.loginToSprintBoard('sennderqa3@gmail.com', 'n*H7A7f@&ikbwu')
		HomePage.successfulLoginMessage.waitForDisplayed()
		expect(HomePage.successfulLoginMessage.getText()).to.equal(
			'Success! You are now logged in.'
		)
	})
})
