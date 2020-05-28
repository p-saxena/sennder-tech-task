import HomePage from '../pages/home.page'
import CreateBoardPage from '../pages/createBoard.page'

describe('Home Page,', () => {
	it('should contain a link to create board page', () => {
		expect(HomePage.createBoardLink.getText()).to.equal('Create a Board')
	})
	it('should navigate user to create board page', () => {
		HomePage.createBoardLink.click()
		CreateBoardPage.h1HeaderText.waitForDisplayed()
		expect(CreateBoardPage.h1HeaderText.getText()).to.equal('Create a Board')
		expect(browser.getUrl()).to.equal('https://sprintboards.io/boards/create')
	})
})
