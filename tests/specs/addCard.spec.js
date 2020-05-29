import addCardPage from '../pages/addCard.page'
import { BoardPageStrings } from '../helper/constants'

describe('Retrospective cards,', () => {
	it('should show green and red buttons to add cards', () => {
		addCardPage.addWentWellCardButton.waitForDisplayed()
		addCardPage.addDidntGoWellCardButton.waitForDisplayed()
	})
	describe('Submit what went well card,', () => {
		it('should open add a card modal on clicking green button', () => {
			addCardPage.addWentWellCardButton.click()
			addCardPage.addCardModalTitle.waitForDisplayed()
			expect(addCardPage.addCardModalTitle.getText()).to.equal(
				BoardPageStrings.addCardModalTitle
			)
		})
		it('should show title and description field on add a card modal', () => {
			addCardPage.addCardTitleField.waitForDisplayed()
			addCardPage.addCardDescriptionField.waitForDisplayed()
		})
		it('should be able to submit what went well card', () => {
			addCardPage.addWentWellCard(
				BoardPageStrings.wentWellCardTitle,
				BoardPageStrings.wentWellCardDescription
			)
			expect(addCardPage.wentWellCardTitle.getText()).to.equal(
				BoardPageStrings.wentWellCardTitle
			)
			expect(addCardPage.wentWellCardDescription.getText()).to.equal(
				BoardPageStrings.wentWellCardDescription
			)
		})
	})
	describe('Submit what didnt go well card,', () => {
		it('should open add a card modal on clicking red button', () => {
			addCardPage.addDidntGoWellCardButton.click()
			addCardPage.addCardModalTitle.waitForDisplayed()
			expect(addCardPage.addCardModalTitle.getText()).to.equal(
				BoardPageStrings.addCardModalTitle
			)
		})
		it('should show title and description field on add a card modal', () => {
			addCardPage.addCardTitleField.waitForDisplayed()
			addCardPage.addCardDescriptionField.waitForDisplayed()
		})
		it('should be able to submit what didnt go well card', () => {
			addCardPage.addDidntGoWellCard(BoardPageStrings.didntGoWellCardTitle)
			expect(addCardPage.didntGoWellCardTitle.getText()).to.equal(
				BoardPageStrings.didntGoWellCardTitle
			)
			expect(addCardPage.didntGoWellCardDescription.getText()).to.equal(
				BoardPageStrings.didntGoWellCardDescription
			)
		})
	})
})
