export function getFileType(session) {
	const sessionMode = session.getMode().$id;
	const sessionParts = sessionMode.split('/');
	return sessionParts.pop();
}
