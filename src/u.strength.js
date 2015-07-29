
;(function(u, window, document, undefined) {
	'use strict';

	var pluginName = 'strength',
			defaults = {
				meter: '#password-meter',
				classes: [
					'veryweak',
					'veryweak',
					'weak',
					'medium',
					'strong'
				],
				specialChars: /[^a-zA-Z0-9]/,
				delay: 0,
				min: 8
			};

	function Strength(element, options) {
		this.el = element;
		this._el = u(this.el);
		this.options = u.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	Strength.prototype = {

		init: function() {

			var characters = 0;
			var capitalletters = 0;
			var loweletters = 0;
			var number = 0;
			var special = 0;

			var upperCase = /[A-Z]/;
			var lowerCase = /[a-z]/;
			var numbers = /[0-9]/;
			var specialChars = this.options.specialChars;

			var classes = this.options.classes;
			var meter = u(this.options.meter);
			var min = this.options.min;
			var checkDelay = this.options.delay;
			var checkTimeout;

			function checkStrength(value, total, exponent) {
				exponent = value.length > min ? 1 + (value.length / 100) : 1;
				characters = Math.floor(value.length / (min * exponent)) || -1;
				capitalletters = +!!value.match(upperCase);
				loweletters = +!!value.match(lowerCase);
				number = +!!value.match(numbers);
				special = +!!value.match(specialChars);

				total = characters + capitalletters + loweletters + number + special;

				!value.length && (total = -1);

				updateMeter(total);
			}

			function updateMeter(total) {
				meter.removeClass(classes.join(' '));
				total >= 0 && meter.addClass(classes[Math.min(total, classes.length -1)]);
			}

			this._el.on('input', function(event) {
				clearTimeout(checkTimeout);
				checkTimeout = setTimeout(checkStrength, checkDelay, this.value);
			});

		}
	};

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	u.fn[pluginName] = function(options) {
			return this.each(function() {
					if (!u(this).data(pluginName)) {
							u(this).data(pluginName, new Strength(this, options));
					}
			});
	};

})(u, window, document);
