var app = angular.module('ma_manager', ['ngRoute']);

app.controller('StudentListCtrl', ['$scope', function($scope){

	$scope.students = [
		{
			firstName: 'Simon',
			lastName: 'Smith',
			photo: 'http://some-url-with-photo.com?id=9923892',
			address: '123 Fake St',
			city: 'Fakeville',
			state: 'OH',
			zip: '45213',
			ata: '253736267',
			belt: 'yellow',
			date_enrolled: '2015/09/02',
			leadership: true,
			expected_black_belt: '2017/09/02',
			minor: true,
			parents: [{
				firstName: 'Maggie',
				lastName: 'Smith',
				phone: "12342344523"
			}],
			monthly_fee: '170.32',
		}
	];



}]);