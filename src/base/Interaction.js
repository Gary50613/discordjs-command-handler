class Interaction {
	constructor(name, description, options) {
		this.name = name.toLowerCase()
		this.description = description ?? ""
		this.options = options ?? []
	}

	async execute(bot, interaction) {
	}
}

module.exports = Interaction