import addCardPage from '../pages/addCard.page'

describe('Retrospective cards,', () => {
	it('should show green and red buttons to add cards', () => {
		addCardPage.addWentWellCardButton.waitForDisplayed()
		addCardPage.addDidntGoWellCardButton.waitForDisplayed()
	})
	describe('Submit what went well card,', () => {
		it('should open add a card modal on clicking green button', () => {
			addCardPage.addWentWellCardButton.click()
			addCardPage.addCardModalTitle.waitForDisplayed()
			expect(addCardPage.addCardModalTitle.getText()).to.equal('Add a Card')
		})
		it('should show title and description field on add a card modal', () => {
			addCardPage.addCardTitleField.waitForDisplayed()
			addCardPage.addCardDescriptionField.waitForDisplayed()
		})
		it('should be able to submit what went well card', () => {
			addCardPage.addWentWellCard(
				'Goal was achieved',
				'Sprint was well planned'
			)
			expect(addCardPage.wentWellCardTitle.getText()).to.equal(
				'Goal was achieved'
			)
			expect(addCardPage.wentWellCardDescription.getText()).to.equal(
				'Sprint was well planned'
			)
		})
	})
	describe('Submit what didnt go well card,', () => {
		it('should open add a card modal on clicking red button', () => {
			addCardPage.addDidntGoWellCardButton.click()
			addCardPage.addCardModalTitle.waitForDisplayed()
			expect(addCardPage.addCardModalTitle.getText()).to.equal('Add a Card')
		})
		it('should show title and description field on add a card modal', () => {
			addCardPage.addCardTitleField.waitForDisplayed()
			addCardPage.addCardDescriptionField.waitForDisplayed()
		})
		it('should be able to submit what didnt go well card', () => {
			addCardPage.addDidntGoWellCard('Goal was not achieved')
			expect(addCardPage.didntGoWellCardTitle.getText()).to.equal(
				'Goal was not achieved'
			)
			expect(addCardPage.didntGoWellCardDescription.getText()).to.equal(
				'No description provided.'
			)
		})
	})
})
