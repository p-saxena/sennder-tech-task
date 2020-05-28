import Page from './Page'

class HomePage extends Page {
	get successfulLoginMessage() {
		return $('.alert p')
	}
	get createBoardLink() {
		return $('=Create a Board')
	}
	open() {
		super.open('/')
	}
}

export default new HomePage()
