import addCardPage from '../pages/addCard.page'
import { BoardPageStrings } from '../helper/constants'

describe('Like button,', () => {
	it('should be visible', () => {
		addCardPage.likeButtonForWentWellCard.waitForDisplayed()
	})
	it('should be clickable and increment the counter', () => {
		addCardPage.likeButtonForWentWellCard.click()
		addCardPage.likeButtonForWentWellCard.waitUntil(
			() => {
				return addCardPage.likeButtonForWentWellCard.getText() === '1'
			},
			{
				timeout: 5000,
				timeoutMsg: 'expected like counter to be 1',
			}
		)
	})
})
describe('Delete button,', () => {
	it('should be visible', () => {
		addCardPage.deleteButtonForDidntGoWellCard.waitForDisplayed()
	})
	it('should be clickable and shows up a modal', () => {
		addCardPage.deleteButtonForDidntGoWellCard.click()
		addCardPage.deleteModalTitle.waitForDisplayed()
	})
	it('should show correct text on modal', () => {
		expect(addCardPage.deleteModalTitle.getText()).to.equal(
			BoardPageStrings.deleteModalTitle
		)
		expect(addCardPage.deleteModalDescriptionText.getText()).to.equal(
			BoardPageStrings.deleteModalDescriptionText
		)
	})
	it('should delete card on clicking confirm button on modal', () => {
		addCardPage.confirmButtonOnDeleteModal.click()
		addCardPage.didntGoWellCardTitle.waitForDisplayed({ reverse: true })
	})
})
