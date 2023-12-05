// export function getCurrentFileType(session) {
// 	const sessionMode = session.getMode().$id;
// 	const sessionParts = sessionMode.split('/');
// 	return sessionParts.pop();
// }
export function getCurrentFileType(session) {
	/*
    returns the file type of current file 
    */
	const sessionNme = session.getMode().$id;
	const sessionNmeParts = sessionNme.split('/');
	return sessionNmeParts[sessionNmeParts.length - 1];
}
