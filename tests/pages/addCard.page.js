import Page from './Page'

class AddCardPage extends Page {
	get addWentWellCardButton() {
		return $('#wrapper div:nth-child(1) div:nth-child(1) div.card-deck button')
	}
	get addDidntGoWellCardButton() {
		return $('#wrapper div:nth-child(1) div:nth-child(2) div.card-deck button')
	}
	get addCardModalTitle() {
		return $('#add-card-modal')
	}
	get addCardTitleField() {
		return $('.modal-body form div input[type="text"]')
	}
	get addCardDescriptionField() {
		return $('.modal-body form div:nth-child(2) p textarea')
	}
	get addCardButton() {
		return $('.modal-content div:nth-child(3) form p button')
	}
	get wentWellCardTitle() {
		return $('#wrapper h6')
	}
	get wentWellCardDescription() {
		return $(
			'#wrapper div div:nth-child(2) div div .card-deck .card div .card-body p'
		)
	}
	get didntGoWellCardTitle() {
		return $(
			'#wrapper div div:nth-child(2) div:nth-child(2) div:nth-child(2) h6'
		)
	}
	get didntGoWellCardDescription() {
		return $(
			'#wrapper div div:nth-child(2) div:nth-child(2) div:nth-child(2) div:nth-child(1) p'
		)
	}
	get likeButtonForWentWellCard() {
		return $(
			'#wrapper div div:nth-child(2) div div .card-deck .card div .card-body div:nth-child(3) ul li:nth-child(3) button'
		)
	}
	get deleteButtonForDidntGoWellCard() {
		return $(
			'#wrapper div div:nth-child(2) div:nth-child(2) div:nth-child(2) div:nth-child(1) div:nth-child(2) div:nth-child(3) ul li:nth-child(2) button'
		)
	}
	get deleteModalTitle() {
		return $('.modal-title.h4')
	}
	get deleteModalDescriptionText() {
		return $('.modal-body p')
	}
	get confirmButtonOnDeleteModal() {
		return $('.modal-footer button')
	}

	addWentWellCard(title, description) {
		this.addCardTitleField.setValue(title)
		this.addCardDescriptionField.setValue(description)
		this.addCardButton.click()
	}
	addDidntGoWellCard(title) {
		this.addCardTitleField.setValue(title)
		this.addCardButton.click()
	}
}

export default new AddCardPage()
