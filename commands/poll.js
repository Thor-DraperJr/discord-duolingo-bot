module.exports = {
	name: 'poll',
	description: 'polls',
	execute(message) {
		pollEmbed(msg, title, options, timeout, emojiList, forceEndPollEmoji);
	},
};