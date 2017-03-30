# prism-powerbuilder
Simple javascript syntax highlighter for Powerbuilder language. Based on Prism https://github.com/PrismJS/prism
## Usage
Simple download `*.js` and `*.css` files and put this code on your HTML:

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

Example:
![Example](/prism-pb-example.png)
