const VARIABLES = {
	CURRENT_WORD: function (editor) {
		return editor.session.getTextRange(editor.session.getWordRange());
	},
	SELECTION: function (editor, name, indentation) {
		var text = editor.session.getTextRange();
		if (indentation) return text.replace(/\n\r?([ \t]*\S)/g, '\n' + indentation + '$1');
		return text;
	},
	CURRENT_LINE: function (editor) {
		return editor.session.getLine(editor.getCursorPosition().row);
	},
	PREV_LINE: function (editor) {
		return editor.session.getLine(editor.getCursorPosition().row - 1);
	},
	LINE_INDEX: function (editor) {
		return editor.getCursorPosition().row;
	},
	LINE_NUMBER: function (editor) {
		return editor.getCursorPosition().row + 1;
	},
	SOFT_TABS: function (editor) {
		return editor.session.getUseSoftTabs() ? 'YES' : 'NO';
	},
	TAB_SIZE: function (editor) {
		return editor.session.getTabSize();
	},
	CLIPBOARD: function (editor) {
		return clipboard.getText && clipboard.getText();
	},
	// filenames
	FILENAME: function (editor) {
		return /[^/\\]*$/.exec(this.FILEPATH(editor))[0];
	},
	FILENAME_BASE: function (editor) {
		return /[^/\\]*$/.exec(this.FILEPATH(editor))[0].replace(/\.[^.]*$/, '');
	},
	DIRECTORY: function (editor) {
		return this.FILEPATH(editor).replace(/[^/\\]*$/, '');
	},
	FILEPATH: function (editor) {
		return '/not implemented.txt';
	},
	WORKSPACE_NAME: function () {
		return 'Unknown';
	},
	FULLNAME: function () {
		return 'Unknown';
	},
	// comments
	BLOCK_COMMENT_START: function (editor) {
		var mode = editor.session.$mode || {};
		return (mode.blockComment && mode.blockComment.start) || '';
	},
	BLOCK_COMMENT_END: function (editor) {
		var mode = editor.session.$mode || {};
		return (mode.blockComment && mode.blockComment.end) || '';
	},
	LINE_COMMENT: function (editor) {
		var mode = editor.session.$mode || {};
		return mode.lineCommentStart || '';
	},
};
