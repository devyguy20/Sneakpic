const ChatStatusManager = {
	out: {
		status: 'Sent',
		src: require('../assets/ChatOut.png'),
	},
	in: {
		status: 'Tap to view',
		src: require('../assets/ChatInPhoto.png'),
	},
	out_viewed: {
		status: 'Viewed',
		src: require('../assets/ChatViewedPhoto.png'),
	},
	out_seen: {
		status: 'Seen',
		src: require('../assets/ChatOutSeen.png'),
	},
	captured: {
		status: 'Captured',
		src: require('../assets/ChatOutCaptured.png'),
	},
};

export function generateRandomKey() {
	const keys = Object.keys(ChatStatusManager);
	const randomIDX = Math.floor(Math.random() * keys.length);
	const randomKey = keys[randomIDX];
	return ChatStatusManager[randomKey];
}
export default ChatStatusManager;
