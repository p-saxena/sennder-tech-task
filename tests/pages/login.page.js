import Page from './Page'

class LoginPage extends Page {
	get emailAddress() {
		return $('input[type="email"]')
	}
	get password() {
		return $('input[type="password"]')
	}
	get loginButton() {
		return $('button[type="submit"]')
	}
	open() {
		super.open('/auth/login')
	}
	loginToSprintBoard(email, password) {
		this.emailAddress.setValue(email)
		this.password.setValue(password)
		this.loginButton.click()
	}
}

export default new LoginPage()
