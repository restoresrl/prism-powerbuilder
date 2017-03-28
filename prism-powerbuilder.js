Prism.languages.powerbuilder = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}
	],
	'string': /"([^~\"]+|~.)*"|'([^~\']+|~.)*'/g,
	'boolean': /\b(true|false)\b/i,
	'pronoun': /\b(this|parent|super)\b/i,
	'datatype': /\b(any|blob|integer|int|boolean|longlong|byte|long|char|character|real|date|string|datetime|time|decimal|dec|unsignedinteger|unsignedint|uint|double|unsignedlong|ulong)\b/i,
	'date': /\d{4}(-\d{2}){2}/g,
	'time': /\d{2}(:\d{2}){1,2}/g,
	'number': /(?:\b|\B[.-])(?:\d+\.?\d*)(?:E[+-]?\d+)?/i,
	'keyword': /\b(?:blob|boolean|byte|char|character|date|datetime|decimal|dec|double|integer|int|long|longlong|real|string|time|unsignedinteger|unsignedint|uint|unsignedlong|ulong|alias|autoinstantiate|call|case|catch|choose|close|commit|connect|constant|continue|create|cursor|declare|delete|describe|descriptor|destory|disconnect|do|dynamic|else|elseif|end|enumerated|event|execute|exit|external|fetch|finally|first|for|forward|from|function|global|goto|halt|if|immediate|indirect|insert|into|intrinsic|is|last|library|loop|namespace|native|next|not|of|on|open|post|prepare|prior|private|privateread|privatewrite|procedure|protected|protectedread|protectedwrite|prototypes|public|readonly|ref|return|rollback|rpcfunc|select|selectblob|shared|static|step|subroutine|system|systemread|systemwrite|then|throw|throws|to|trigger|try|type|until|update|updateblob|using|variables|while|with|within|_debug)(?:\$|\b)/i,
	'operator': /<[=>]?|>=?|[+\-*\/^=&]|\b(?:and|not|or|xor)\b/i,
	'punctuation': /[&,;(){}\[\]]/
};
