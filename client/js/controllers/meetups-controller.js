app.controller('meetupsController',['$scope', '$resource', function($scope, $resource){
	var Meetup = $resource('/api/meetups'); /*url pe get aur post present hai jo ki $resources se link kar diye,
	now $resource database se linked hai because of ngResource, ngResource is used to link to database angular*/
	
	Meetup.query(function (results) {
		$scope.meetups = results;
	});
	
	$scope.meetups = []
		
	$scope.createMeetup = function(){
		var meetup = new Meetup();
		meetup.name = $scope.meetupName;
		meetup.age = 20;
		meetup.$save(function(e) {
			console.log(e);
			$scope.meetups.push(e);
			$scope.meetupName = '';
		}
		);
		
	}	
}])
