(function() {
    var app = angular.module('interests', []);

    /*this controller is used in Interests page*/
    app.controller('StoreInterests', function() {
        this.skill = interest;
    });
    var interest = [{
        name: 'Reading',
        level: 100,
        showLevel: false,
        description: "I am a book dragon!",
        description1: "I love reading.",
        description2: "",
        description3: "",
        description4: "",
        images: [{
            full: '../images/books1.png'
        }, {
            full: '../images/books2.png'
        }, {
            full: '../images/books3.png'
        },{
            full: '../images/books4.png'
        },{
            full: '../images/kindle.png'
        },{
            full: '../images/books5.png'
        }]
    }, {
        name: 'Cooking',
        level: 60,
        showLevel: false,
        description: "I like eating more.",
        images: [{
            full: '../images/cheeseomlette.png',
            thumb: ''
        }, {
            full: '',
            thumb: ''
        }]
    }, {
        name: 'Swimming',
        level: 60,
        showLevel: false,
        description: "It is my favorite workout.",
        images: [{
            full: '../images/pool.png',
            thumb: ''
        }, {
            full: '',
            thumb: ''
        }]
    }];

    app.controller("PanelController", function() {
        this.tab = 1;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });
    app.controller('StoreCompanies', function() {
        this.company = company;
    });
    var company = [{
        name: 'TCS',
        fullname: 'TATA Consultancy Services Ltd.',
        project: 'Wealth Management for a bank in Israel',
        duration: '(November 2014 - Present)'
        },
        {
        name: 'B.E.',

        fullname: 'Final Year Project',
        project: 'Image Encryption and Decryption',
        duration: '(September 2013 - May 2014)',
        language: 'Java | Cryptography',
        complexity: 'Developed an algorithm for image encryption and decryption using chaotic maps followed by analysis',

        fullname2: 'Summer Project',
        project2: 'Android Game',
        duration2: '(February 2013 - June 2013)',
        language2: 'HTML5 | CSS3 | JavaScript',
        complexity2: 'Developed a car parking game for android platform',

        fullname3: 'Mini Project',
        project3: 'Software for File Type Conversion ',
        duration3: '(September 2012 - January 2012)',
        language3: 'Java',
        complexity3: 'Developed a software to convert a ﬁle in PDF to Document format and vice-versa'
        },
        {
        name: 'Smart Services',
        fullname: 'Smart Services- Highway Design, Surveying, Estimation and Cost',
        project: 'Designing and Developing a website for a Highway Consultancy'
        },
        {
        name: 'Portfolio',
        fullname: 'A Responsive Resume',
        project: 'Online Resume',
        duration: '(August 2016 - Present)',
        language: 'AngularJS | HTML5 | CSS3 | BootStrap | jQuery | Json',
        complexity: 'Developing a website out of the technologies I learn',
        fullname2: 'Design for a Twitter Feed',
        project2: 'Twitter Feed',
        duration2: '(2 days)',
        language2: 'AngularJS | HTML5 | CSS3 | Basscss | jQuery',
        complexity2: 'Developed a responsive Twitter Feed template.',
        fullname3: 'Design for a Messenger App',
        project3: 'Messenger App\'s download page',
        duration3: '(2 days)',
        language3: 'HTML5 | CSS3',
        complexity3: 'Developed a demo page for a messenger app\'s download screen',
        fullname4: 'My work on codepen',
        project4: 'Few fun projects on codepen',
        duration4: '(Whenever I get time)',
        language4: 'HTML5 | CSS3 | jQuery',
        complexity4: 'Designing and developing small projects using 3D animations, APIs, etc.'
        }
    ];
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
    app.controller('SkillController', function() {
        this.skill = skill;
    });

    var skill = [{
            name: "Java",
            description: "My fisrt love!",
            level: 50,
            title: "Java",
            image: "../images/java.png"
        }, {
            name: "JQuery",
            description: "JavaScript and JQuery",
            level: 70,
            title: "JavaScript/jQuery",
            image: "../images/jquery.png"
        }, {
            name: "HTML5",
            description: "HTML5",
            level: 95,
            title: "HTML5",
            image: "../images/html5.png"
        }, {
            name: "CSS3",
            description: "CSS3",
            level: 90,
            title: "CSS3",
            image: "../images/css3.png"
        }, {
            name: "AJAX",
            description: "AJAX",
            level: 70,
            title: "AJAX",
            image: "../images/ajax.png"
        }, {
            name: "Bootstrap",
            description: "This site is built on Bootstrap. Checkout the responsiveness!",
            level: 95,
            title: "BootStrap",
            image: "../images/BootStrap.png"
        }, {
            name: "AngularJS",
            description: "One of the most amazing JavaScript frameworks. The site heavily uses AngularJS.",
            level: 50,
            title: "AngularJS",
            image: "../images/angularjs.png"
        }, {
            name: "RWD",
            description: "Works on all sizes of your chosen device.",
            level: 90,
            title: "Responsive Web Design",
            image: "../images/rwd.png"
        }

    ];

    app.directive('navigationDiv', function() {
        return {
            restrict: 'E',
            templateUrl: 'navigation-div.html'
        };
    });
    app.directive('footerDiv', function() {
        return {
            restrict: 'E',
            templateUrl: 'footer-div.html'
        };
    });
})();