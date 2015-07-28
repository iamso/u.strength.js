Passwort strength plugin u.js
====
A simple password strength meter plugin for u.js.

Usage
-----

### Basic Usage:

#### HTML

```html
<div class="input-wrapper">
	<input id="password" type="password" placeholder="password">
	<div id="password-meter"></div>
</div>
```

#### CSS

```css
.input-wrapper {
	position: relative;
}
.input-wrapper input {
	width: 100%;
}
#password-meter {
	background: transparent;
	width: 0%;
	height: 5px;
	-webkit-transition: all 0.4s ease;
          transition: all 0.4s ease;
}
#password-meter.veryweak {
	background: red;
	width: 25%;
}
#password-meter.weak {
	background: orange;
	width: 50%;
}
#password-meter.medium {
	background: gold;
	width: 75%;
}
#password-meter.strong {
	background: limegreen;
	width: 100%;
}
```

#### Javascript

```javascript
u('#password').strength();
```

---


### Advanced Usage:

#### Javascript
You can pass a few options to the constructor. Shown here with the defaults.

```javascript
u('#password').strength({
	meter: '#password-meter', // CSS selector for the meter element
	classes: [ // Classes array for different strengths
		'veryweak',
		'veryweak',
		'weak',
		'medium',
		'strong'
	],
	specialChars: /([!,%,&,@,#,$,^,*,?,_,~])/, // The regex used to check for special characters
	delay: 0 // The delay for the check after the input changes
});
```


License
-------

[MIT License](LICENSE)
