(function(){
	var app= angular.module('interests',[]);

	/*this controller is used in Interests page*/
	app.controller('StoreInterests', function(){
		this.skill=interest;
	});
	var interest=[
	{
		name: 'Reading',
		level: 100,
		showLevel: false,
		description: "I am a book dragon! I love reading fiction and enjoy non-fiction, too.",
		description1: "Wondering what to get me for my birthday? Take a hint.",
		images:[
		{
			full:'../images/books.png',
			thumb:'../images/java.png'
		},
		{
			full:'../images/moreBooks.png',
			thumb:''	
		},
		{
			full:'../images/4books.png',
			thumb:''	
		}]
	},
	{
		name: 'Cooking',
		level: 60,
		showLevel: false,
		description: "I like eating more.",
		images:[
		{
			full:'../images/cheeseomlette.png',
			thumb:''
		},
		{
			full:'',
			thumb:''	
		}]
	},
	{
		name: 'Swimming',
		level: 60,
		showLevel: false,
		description: "It is my favorite workout.",
		images:[
		{
			full:'../images/pool.png',
			thumb:''
		},
		{
			full:'',
			thumb:''	
		}]
	}
	];

	app.controller("PanelController",function(){
		this.tab=1;

		this.selectTab=function(setTab){
			this.tab=setTab;
		};

		this.isSelected=function (checkTab) {
			return this.tab===checkTab;
		};
	});

	/*app.controller('SuggestionController',function(){
		this.field=field;
	});
	var field=
		{
			comment:"",
			email:""
		};

	app.controller('ReviewController',function(){
		this.review={};
		this.addReview=function (product) {
			// body...
		};
		this.review={};
	});*/

	/*This controller is for the skills */
	app.controller('SkillController', function(){
		this.skill=skill;
	});

	var skill=[
		{
			name: "Java",
			description: "My fisrt love!",
			level: 50, 
			title: "Java",
			image: "../images/java.png"
		},
		{
			name:"JQuery",
			description:"JavaScript and JQuery",
			level: 70,
			title: "JavaScript/jQuery",
			image:"../images/jquery.png"
		},
		{
			name: "HTML5",
			description: "HTML5",
			level: 95,
			title: "HTML5",
			image: "../images/html5.png"
		},
		{
			name: "CSS3",
			description: "CSS3",
			level: 90,
			title: "CSS3",
			image:"../images/css3.png"
		},
		{
			name: "AJAX",
			description: "AJAX",
			level: 70,
			title: "AJAX",
			image: "../images/ajax.png"
		},
		{
			name: "Bootstrap",
			description: "This site is built on Bootstrap. Checkout the responsiveness!", 
			level: 95,
			title: "BootStrap",
			image: "../images/BootStrap.png"
		},
		{
			name: "AngularJS",
			description: "One of the most amazing JavaScript frameworks. The site heavily uses AngularJS.", 
			level: 50,
			title: "AngularJS",
			image: "../images/angularjs.png"
		},
		{
			name: "RWD",
			description: "Works on all sizes of your chosen device.", 
			level: 90,
			title: "Responsive Web Development",
			image: "../images/rwd.png"
		}

	];

	app.directive('footerDiv', function(){
		return{
			restrict: 'E',
			templateUrl: 'footer-div.html'
		};
	});
})();

