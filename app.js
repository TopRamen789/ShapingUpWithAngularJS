//Application name is 'store'
//[] is the dependencies

(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	app.controller('PanelController', function() {
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function() {
		this.review = {};

		//obviously the reviews aren't permanent, but we'll get to it later
		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	//dash "-" in HTML translate to camelCase
	app.directive('productTitle', function() {
		return {
			restrict: 'E', //type of directive
			templateUrl: 'product-title.html' //url of template
		};
	});
	/*
	Alternatively, we could do this as an attribute directive
		restrict: 'A',
		templateUrl: 'product-title.html'

	html would look like:
		<h3 product-title></h3>
	*/

	app.directive('productPanels', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function() {
				this.tab = 1;

				this.selectTab = function(setTab) {
					this.tab = setTab;
				};

				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panel'
		};
	});

	var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: '. . .',
		canPurchase: false,
		soldOut: false,
		images: [
		{
			full: 'Dodecahedron-01-full.jpg',
			thumb: 'Dodecahedron-01-thumb.jpg'
		},
		{
			full: 'Dodecahedron-02-full.jpg',
			thumb: 'Dodecahedron-02-thumb.jpg'
		}],
		reviews: [
		{
			stars: '5',
			body: 'asdfasdfa',
			author: 'joe@thomas.com'
		},
		{
			stars: '1',
			body: 'asdfasdfa',
			author: 'tim@hater.com'
		},
		{
			stars: '3',
			body: 'asdfasdfa',
			author: 'o@k.com'
		}]
	},
	{
		name: "Pentagonal Gem",
		price: 5.95,
		description: ". . .",
		canPurchase: false,
		images: [
		{
			full: 'Pentagonal-01-full.jpg',
			thumb: 'Pentagonal-01-thumb.jpg'
		},
		{
			full: 'Pentagonal-02-full.jpg',
			thumb: 'Pentagonal-02-thumb.jpg'
		}],
		reviews: [
		{
			stars: '5',
			body: 'asdfasdfa',
			author: 'joe@thomas.com'
		},
		{
			stars: '1',
			body: 'asdfasdfa',
			author: 'tim@hater.com'
		},
		{
			stars: '3',
			body: 'asdfasdfa',
			author: 'o@k.com'
		}]
	}];
})();