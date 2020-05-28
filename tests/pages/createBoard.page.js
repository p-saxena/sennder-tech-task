import Page from './Page'

class CreateBoardPage extends Page {
	get h1HeaderText() {
		return $('#primary-hero h1')
	}
	get sessionNameField() {
		return $('#wrapper-inner input[type="text"]')
	}
	get selectOwnerDropdown() {
		return $(
			'#wrapper-inner form div:nth-child(1) .card-body div .custom-select'
		)
	}
	get selectOwnerDropdownOption() {
		return $(
			'#wrapper-inner form div:nth-child(1) .card-body div .custom-select option:nth-child(2)'
		)
	}
	get createBoardButton() {
		return $('button[type="submit"]')
	}
	get confirmationMessage() {
		return $('//*[contains(text(),"Created")]')
	}
	open() {
		super.open('/boards/create')
	}
	fillBoardDetails(sessionName) {
		this.sessionNameField.setValue(sessionName)
		this.selectOwnerDropdown.click()
		this.selectOwnerDropdownOption.waitForDisplayed()
		this.selectOwnerDropdownOption.click()
		this.createBoardButton.click()
	}
}

export default new CreateBoardPage()
