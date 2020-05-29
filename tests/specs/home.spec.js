import HomePage from '../pages/home.page'
import { HomePageStrings, CreateBoardPageStrings } from '../helper/constants'
import CreateBoardPage from '../pages/createBoard.page'

describe('Home Page,', () => {
	it('should contain a link to create board page', () => {
		expect(HomePage.createBoardLink.getText()).to.equal(
			HomePageStrings.createBoardLinkText
		)
	})
	it('should navigate user to create board page', () => {
		HomePage.createBoardLink.click()
		CreateBoardPage.h1HeaderText.waitForDisplayed()
		expect(CreateBoardPage.h1HeaderText.getText()).to.equal(
			CreateBoardPageStrings.h1HeaderText
		)
		expect(browser.getUrl()).to.equal(CreateBoardPageStrings.url)
	})
})
