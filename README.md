# prism-powerbuilder
Simple web syntax highlighter for Powerbuilder code. Based on Prism https://github.com/PrismJS/prism

![Example](/prism-pb-example.png)

## Usage
Put `prism.min.js`, `prism-powerbuilder.js`, `prism.css`,  and `prism-powerbuilder.css` into static/assets site folder and reference it from HTML pages:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>prism-powerbuilder</title>
  <link href="prism.css" rel="stylesheet" />
  <link href="prism-powerbuilder.css" rel="stylesheet" />
</head>

<body>
  ...
  <pre><code class="language-powerbuilder">
	/* Some PB code */
 	for li_idx = li_count to 1 /* a strange comment here */ step -1
		this.swapinto(la_array, li_idx, li_idx + 1)
	next
 
	return li_idx + 1
  </code></pre>

  <script src="prism.min.js"></script>
  <script src="prism-powerbuilder.js"></script>
</body>
</html>
```
