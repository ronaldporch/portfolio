  var app = angular.module('Portfolio', []);
  app.controller('PortfolioController', ['$scope', '$http', function($scope, $http){
    $scope.resetEmail = function(){
      $scope.emailSent = false;
      $scope.sendingEmail = false;
    }
    $scope.emailSent = false;
    $scope.sendingEmail = false;
    $scope.sendEmail = function(){
      $scope.sendingEmail = true;
      $http.post('/sendEmail', $scope.email)
        .then(function(res){
          $scope.sendingEmail = false;
          $scope.emailSent = true;
        })
        .then(function(err){
          console.log(err)
        })
    }
    $scope.media = [
      {
        name: "LinkedIn",
        icon: "fa-linkedin-square",
        url: "https://linkedin.com/in/ronaldporch"
      },
      {
        name: "Github",
        icon: "fa-github-square",
        url: "https://github.com/ronaldporch"
      },
      {
        name: "LinkedIn",
        icon: "fa-twitter-square",
        url: "https://twitter.com/dada5714"
      }
    ]
    $scope.projects = [
      {
        name: "Claimatic",
        logoUrl: "/images/iTunesArtwork@2x.png",
        description: "Application that assigns insurance claims to adjusters. Maintain legacy PHP application while porting old code and any new changes to Symfony. Introduced modern software development factors like unit testing, git/github, agile development, etc. Prototyped major new features using AngularJS and NodeJS.",
        url: "http://www.claimatic.com/",
        libraries: [
          {
            name: "Google Maps",
            url: "https://developers.google.com/maps/"
          },
          {
            name: "Data Tables",
            url: "https://www.datatables.net/"
          },
        ],
      },
      {
        name: "Claimatic (iOS)",
        logoUrl: "/images/iTunesArtwork@2x.png",
        description: "iOS component of Claimatic. Allows desk adjusters to receive instantaneous feedback from field adjusters on their location (via Apple's CoreLocation). Also gives field adjusters the ability to get directions to a claim, check in or out of a claimsend snapshot reports on their findings on the field, and more. Takes advantage of Swift Libraries SwiftyJSON, Alamofire, and KeychainSwift. Written in Swift. Can be find on the iTunes App Store.",
        url: "https://itunes.apple.com/us/app/claimatic/id1074354263?mt=8&ign-mpt=uo%3D4",
        libraries: [
          {
            name: "Alamofire",
            url: "https://github.com/Alamofire/Alamofire"
          },
          {
            name: "SwiftyJSON",
            url: "https://github.com/SwiftyJSON/SwiftyJSON"
          },
          {
            name: "KeychainSwift",
            url: "https://github.com/marketplacer/keychain-swift"
          }
        ]
      },
      {
        name: "Casino Night",
        logoUrl: "http://placehold.it/300x300",
        description: "Personal Project. Allows users to place bets using credits bought with real money on various video game/e-sport matches. Streamers are able to create events that then tie to their streaming service in which users are able to ante into. Plan to integrate challonge.com to handle brackets. Written using Node.js and AngularJS. Takes full advantage of Websockets using the socket.io library.",
        libraries: [
          {
            name: "socket.io",
            url: "http://socket.io"
          },
          {
            name: "Twitter API",
            url: "https://www.npmjs.com/package/twitter"
          },
          {
            name: "Node Mailer",
            url: "https://github.com/nodemailer/nodemailer"
          }
        ],
        url: "http://casinonight.herokuapp.com"
      }
    ]
    $scope.references = [
      {
        copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum commodo magna quis rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi quis gravida metus. Nam nec quam nisi. Mauris eu quam lacinia, fringilla nisl eu, faucibus est. Mauris ut accumsan nisi, sed consequat metus. In rhoncus nunc quis ornare laoreet. Donec rhoncus, felis quis maximus pellentesque, ligula sapien lacinia nunc, non volutpat est urna a metus. Mauris varius ante eu suscipit fermentum.",
        name: "Ronald Porch",
        position: "Software Developer"
      },
      {
        copy: "Lore ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum commodo magna quis rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi quis gravida metus. Nam nec quam nisi. Mauris eu quam lacinia, fringilla nisl eu, faucibus est. Mauris ut accumsan nisi, sed consequat metus. In rhoncus nunc quis ornare laoreet. Donec rhoncus, felis quis maximus pellentesque, ligula sapien lacinia nunc, non volutpat est urna a metus. Mauris varius ante eu suscipit fermentum.",
        name: "Ronald Porch",
        position: "Software Developer"
      }
    ]
    $scope.languages = [
      {
        name: "HTML5/CSS3",
        years: 4,
        description: "Death to Flash.",
        icon: "devicon-html5-plain-wordmark colored"
      },
      {
        name: "Javascript",
        years: 3,
        description: "Javascript Diehard. <3",
        icon: "devicon-javascript-plain colored"
      },
      {
        name: "PHP",
        years: 2,
        description: "It gets the job done.",
        icon: "devicon-php-plain colored"
      },
      {
        name: "SQL",
        years: 3,
        description: "Can't have a website without Data. Good Data.",
        icon: "devicon-postgresql-plain colored"
      },
      {
        name: "Ruby",
        years: 2,
        description: "Certified in Ruby on November 2014",
        icon: "devicon-ruby-plain colored"
      },
      {
        name: "Swift",
        years: 2,
        description: "Think Quick or Nimble. Not Taylor.",
        icon: "devicon-apple-original colored"
      },
      {
        name: "Git",
        years: 2,
        description: "Always push to branch. Never to master.",
        icon: "devicon-git-plain colored"
      },
      {
        name: "日本語",
        years: 3,
        description: "プログラミング言語じゃないだけど僕は日本語が３年勉強している。"
      },
    ]
    $scope.frameworks = [
      {
        name: "JQuery",
        description: "Javascript made friendly.",
        icon: "devicon-jquery-plain colored"
      },    
      {
        name: "AngularJS",
        description: "Almost every app I've made uses it.",
        icon: "devicon-angularjs-plain colored"
      },
      {
        name: "NodeJS",
        description: "Makes creating a restful API server simple.",
        icon: "devicon-nodejs-plain colored"
      },
      {
        name: "Symfony",
        description: "Converting Legacy PHP Applications to MVC all day",
        icon: "devicon-symfony-original colored"
      },
      {
        name: "Ruby on Rails",
        description: "Certified in Ruby on Rails on November 2014",
        icon: "devicon-rails-plain colored"
      },
      {
        name: "Bootstrap",
        description: "Because they know better than me for styling.",
        icon: "devicon-bootstrap-plain colored"
      },
      {
        name: "Less",
        description: "Because variables in CSS make sense.",
        icon: "devicon-less-plain-wordmark colored"
      },
      {
        name: "iOS/Swift",
        description: "Sole developer for Claimatic iOS",
        icon: "devicon-apple-original colored"
      }
    ]
  }])