import CreateBoardPage from '../pages/createBoard.page'
import { CreateBoardPageStrings, BoardPageStrings } from '../helper/constants'

describe('Create Board Page,', () => {
	it('should show mandatory fields', () => {
		CreateBoardPage.sessionNameField.waitForDisplayed()
		CreateBoardPage.selectOwnerDropdown.waitForDisplayed()
	})
	it('should submit board details', () => {
		CreateBoardPage.fillBoardDetails(CreateBoardPageStrings.sessionName)
		expect(CreateBoardPage.confirmationMessage.waitForDisplayed()).to.equal(
			true
		)
		expect(browser.getUrl()).to.include(BoardPageStrings.boardUrl)
	})
})
