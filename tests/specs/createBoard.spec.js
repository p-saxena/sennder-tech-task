import CreateBoardPage from '../pages/createBoard.page'

describe('Create Board Page,', () => {
	it('should show mandatory fields', () => {
		CreateBoardPage.sessionNameField.waitForDisplayed()
		CreateBoardPage.selectOwnerDropdown.waitForDisplayed()
	})
	it('should submit board details', () => {
		CreateBoardPage.fillBoardDetails('test123')
		expect(CreateBoardPage.confirmationMessage.waitForDisplayed()).to.equal(
			true
		)
		expect(browser.getUrl()).to.include('https://sprintboards.io/boards')
	})
})
