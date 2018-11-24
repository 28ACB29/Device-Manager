var app = angular.module("atTheMovies", ["ngRoute"]);
var config = function ($routeProvider)
{
	$routeProvider
	.when("/device-group-list",
	{
		templateUrl: "/pages/device-group-list.html"
	})
	.when("/device-group",
	{
		templateUrl: "/pages/device-group.html"
	})
	.when("/device-list",
	{
		templateUrl: "/pages/device-list.html"
	})
	.when("/device",
	{
		templateUrl: "/pages/device.html"
	})
	.otherwise(
	{
		redirectTo: "/device-group-list"
	});
};
app.config(config);