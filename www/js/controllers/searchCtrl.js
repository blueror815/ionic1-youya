'use strict';

angular.module('app.search', [])

.controller('searchCtrl', ['$scope', '$rootScope', '$stateParams', '$timeout', '$state', '$ionicLoading','$cordovaGeolocation','$http', 'Auth',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, $timeout, $state, $ionicLoading, $cordovaGeolocation, $http, Auth) {

    $scope.ssClass = "tab_button_left";
    $scope.fwClass = "tab_button_right";
    $scope.rdClass = "tab_button_left_active";
    $scope.trClass = "tab_button_right";

    $scope.category_tab_1 = "category_tab_1_active";
    $scope.category_tab_2 = "category_tab_2";
    $scope.category_tab_3 = "category_tab_3";
    $scope.category_tab_4 = "category_tab_4";
    $scope.category_tab_5 = "category_tab_5";
    $scope.category_tab_6 = "category_tab_6";

    $scope.women = function(){
        $scope.category_tab_1 = "category_tab_1_active";
        $scope.category_tab_2 = "category_tab_2";
        $scope.category_tab_3 = "category_tab_3";
        $scope.category_tab_4 = "category_tab_4";
        $scope.category_tab_5 = "category_tab_5";

        $rootScope.form.human_type = 'women';

        $scope.category_tab_6 = "category_tab_6";
        $rootScope.form.art = '';

        /*$scope.ssClass = "tab_button_left";
        window.localStorage['ss'] = '';

        $scope.fwClass = "tab_button_right";
        window.localStorage['fw'] = '';*/

    };
    $scope.men = function(){
        $scope.category_tab_1 = "category_tab_1";
        $scope.category_tab_2 = "category_tab_2_active";
        $scope.category_tab_3 = "category_tab_3";
        $scope.category_tab_4 = "category_tab_4";
        $scope.category_tab_5 = "category_tab_5";

        $rootScope.form.human_type = 'men';

        $scope.category_tab_6 = "category_tab_6";
        $rootScope.form.art = '';

        /*$scope.ssClass = "tab_button_left";
        window.localStorage['ss'] = '';

        $scope.fwClass = "tab_button_right";
        window.localStorage['fw'] = '';*/

    };
    $scope.teenboy = function(){
        $scope.category_tab_1 = "category_tab_1";
        $scope.category_tab_2 = "category_tab_2";
        $scope.category_tab_3 = "category_tab_3_active";
        $scope.category_tab_4 = "category_tab_4";
        $scope.category_tab_5 = "category_tab_5";

        $rootScope.form.human_type = 'teenboy';

        $scope.category_tab_6 = "category_tab_6";
        $rootScope.form.art = '';

        /*$scope.ssClass = "tab_button_left";
        window.localStorage['ss'] = '';

        $scope.fwClass = "tab_button_right";
        window.localStorage['fw'] = '';*/

    };
    $scope.teengirl = function(){
        $scope.category_tab_1 = "category_tab_1";
        $scope.category_tab_2 = "category_tab_2";
        $scope.category_tab_3 = "category_tab_3";
        $scope.category_tab_4 = "category_tab_4_active";
        $scope.category_tab_5 = "category_tab_5";

        $rootScope.form.human_type = 'teengirl';

        $scope.category_tab_6 = "category_tab_6";
        $rootScope.form.art = '';

        /*$scope.ssClass = "tab_button_left";
        window.localStorage['ss'] = '';

        $scope.fwClass = "tab_button_right";
        window.localStorage['fw'] = '';*/

    };

    $scope.toddlers = function(){
        $scope.category_tab_1 = "category_tab_1";
        $scope.category_tab_2 = "category_tab_2";
        $scope.category_tab_3 = "category_tab_3";
        $scope.category_tab_4 = "category_tab_4";
        $scope.category_tab_5 = "category_tab_5_active";

        $rootScope.form.human_type = 'toddlers';

        $scope.category_tab_6 = "category_tab_6";
        $rootScope.form.art = '';

        /*$scope.ssClass = "tab_button_left";
        window.localStorage['ss'] = '';

        $scope.fwClass = "tab_button_right";
        window.localStorage['fw'] = '';*/
    };

    $scope.art = function(){
        $rootScope.form.human_type = '';
        $scope.category_tab_1 = "category_tab_1";
        $scope.category_tab_2 = "category_tab_2";
        $scope.category_tab_3 = "category_tab_3";
        $scope.category_tab_4 = "category_tab_4";
        $scope.category_tab_5 = "category_tab_5";

        if($scope.category_tab_6 == "category_tab_6")
        {
            $scope.category_tab_6 = "category_tab_6_active";
            $scope.ssClass = "tab_button_left";
            $scope.fwClass = "tab_button_right";
            $rootScope.form.fw = '';
            $rootScope.form.ss = '';
            $rootScope.form.art = 'art';
        }
        else
        {
            $scope.category_tab_6 = "category_tab_6";
            $rootScope.form.art = '';
        }
    };

    $scope.ss = function(){
        /*window.localStorage['human_type'] = '';
        $scope.category_tab_1 = "category_tab_1";
        $scope.category_tab_2 = "category_tab_2";
        $scope.category_tab_3 = "category_tab_3";
        $scope.category_tab_4 = "category_tab_4";
        $scope.category_tab_5 = "category_tab_5";*/

        if($scope.category_tab_6 == "category_tab_6_active")
        {
            return;
        }
            $scope.ssClass = "tab_button_left_active";
            $rootScope.form.ss = 'S/S';
            $scope.fwClass = "tab_button_right";
            $rootScope.form.fw = '';

    };

    $scope.fw = function(){
        /*window.localStorage['human_type'] = '';
        $scope.category_tab_1 = "category_tab_1";
        $scope.category_tab_2 = "category_tab_2";
        $scope.category_tab_3 = "category_tab_3";
        $scope.category_tab_4 = "category_tab_4";
        $scope.category_tab_5 = "category_tab_5";*/

        if($scope.category_tab_6 == "category_tab_6_active")
        {
            return;
        }
          $scope.fwClass = "tab_button_right_active";
          $rootScope.form.fw = 'F/W';

            $scope.ssClass = "tab_button_left";
            $rootScope.form.ss = '';

    };


    $scope.random = function(){
          $scope.rdClass = "tab_button_left_active";
          $scope.trClass = "tab_button_right";
          $rootScope.form.order = 'random';
    };

    $scope.topRank = function(){
         $scope.trClass = "tab_button_right_active";
         $scope.rdClass = "tab_button_left";
         $rootScope.form.order = 'topRank';
    };

    $scope.goSearchResult = function(){
         $state.go('searchResult');
    };

    $scope.$on("$ionicView.enter", function(event, data){
    // handle eventDelegate.$getByHandle('onboarding').slide(0);
        if($rootScope.form.fw == "F/W")
            $scope.fwClass = "tab_button_right_active";
        else
           $scope.fwClass = "tab_button_right";

        if($rootScope.form.ss == "S/S")
            $scope.ssClass = "tab_button_left_active";
        else
            $scope.ssClass = "tab_button_left";

        if($rootScope.form.art == "art")
            $scope.category_tab_6 = "category_tab_6_active";
        else
            $scope.category_tab_6 = "category_tab_6";

        if($rootScope.form.human_type == 'toddlers')
        {
            $scope.category_tab_1 = "category_tab_1";
            $scope.category_tab_2 = "category_tab_2";
            $scope.category_tab_3 = "category_tab_3";
            $scope.category_tab_4 = "category_tab_4";
            $scope.category_tab_5 = "category_tab_5_active";
        }
        if($rootScope.form.human_type == 'teengirl')
        {
             $scope.category_tab_1 = "category_tab_1";
             $scope.category_tab_2 = "category_tab_2";
             $scope.category_tab_3 = "category_tab_3";
             $scope.category_tab_4 = "category_tab_4_active";
             $scope.category_tab_5 = "category_tab_5";
         }

        if($rootScope.form.human_type == 'teenboy')
        {
            $scope.category_tab_1 = "category_tab_1";
            $scope.category_tab_2 = "category_tab_2";
            $scope.category_tab_3 = "category_tab_3_active";
            $scope.category_tab_4 = "category_tab_4";
            $scope.category_tab_5 = "category_tab_5";
        }
        if($rootScope.form.human_type == 'men')
        {
             $scope.category_tab_1 = "category_tab_1";
             $scope.category_tab_2 = "category_tab_2_active";
             $scope.category_tab_3 = "category_tab_3";
             $scope.category_tab_4 = "category_tab_4";
             $scope.category_tab_5 = "category_tab_5";
        }
        if($rootScope.form.human_type == 'women')
        {
            $scope.category_tab_1 = "category_tab_1_active";
            $scope.category_tab_2 = "category_tab_2";
            $scope.category_tab_3 = "category_tab_3";
            $scope.category_tab_4 = "category_tab_4";
            $scope.category_tab_5 = "category_tab_5";
        }

        if($rootScope.form.human_type == '')
        {
            $scope.category_tab_1 = "category_tab_1";
            $scope.category_tab_2 = "category_tab_2";
            $scope.category_tab_3 = "category_tab_3";
            $scope.category_tab_4 = "category_tab_4";
            $scope.category_tab_5 = "category_tab_5";
        }
        /*$ionicLoading.show();

        Auth.getUser(firebase.auth().currentUser.uid).then(function(result){
                $rootScope.form.human_type = result.human_type;
                $rootScope.form.art = result.art;
                $rootScope.form.ss = result.ss;
                $rootScope.form.fw = result.fw;
                //$rootScope.form.address = result.address;

                if($rootScope.form.fw == "F/W")
                    $scope.fwClass = "tab_button_right_active";
                else
                   $scope.fwClass = "tab_button_right";

                if($rootScope.form.ss == "S/S")
                    $scope.ssClass = "tab_button_left_active";
                else
                    $scope.ssClass = "tab_button_left";

                if($rootScope.form.art == "art")
                    $scope.category_tab_6 = "category_tab_6_active";
                else
                    $scope.category_tab_6 = "category_tab_6";

                if($rootScope.form.human_type == 'toddlers')
                {
                    $scope.category_tab_1 = "category_tab_1";
                    $scope.category_tab_2 = "category_tab_2";
                    $scope.category_tab_3 = "category_tab_3";
                    $scope.category_tab_4 = "category_tab_4";
                    $scope.category_tab_5 = "category_tab_5_active";
                }
                if($rootScope.form.human_type == 'teengirl')
                {
                     $scope.category_tab_1 = "category_tab_1";
                     $scope.category_tab_2 = "category_tab_2";
                     $scope.category_tab_3 = "category_tab_3";
                     $scope.category_tab_4 = "category_tab_4_active";
                     $scope.category_tab_5 = "category_tab_5";
                 }

                if($rootScope.form.human_type == 'teenboy')
                {
                    $scope.category_tab_1 = "category_tab_1";
                    $scope.category_tab_2 = "category_tab_2";
                    $scope.category_tab_3 = "category_tab_3_active";
                    $scope.category_tab_4 = "category_tab_4";
                    $scope.category_tab_5 = "category_tab_5";
                }
                if($rootScope.form.human_type == 'men')
                {
                     $scope.category_tab_1 = "category_tab_1";
                     $scope.category_tab_2 = "category_tab_2_active";
                     $scope.category_tab_3 = "category_tab_3";
                     $scope.category_tab_4 = "category_tab_4";
                     $scope.category_tab_5 = "category_tab_5";
                }
                if($rootScope.form.human_type == 'women')
                {
                    $scope.category_tab_1 = "category_tab_1_active";
                    $scope.category_tab_2 = "category_tab_2";
                    $scope.category_tab_3 = "category_tab_3";
                    $scope.category_tab_4 = "category_tab_4";
                    $scope.category_tab_5 = "category_tab_5";
                }

                if($rootScope.form.human_type == '')
                {
                    $scope.category_tab_1 = "category_tab_1";
                    $scope.category_tab_2 = "category_tab_2";
                    $scope.category_tab_3 = "category_tab_3";
                    $scope.category_tab_4 = "category_tab_4";
                    $scope.category_tab_5 = "category_tab_5";
                }

                $ionicLoading.hide();
           }).catch(function(error){
                $ionicLoading.hide();
                alert("error");
          });*/
        /*var posOptions = {enableHighAccuracy:true,maximumAge:60000, timeout:60000};

        $cordovaGeolocation.getCurrentPosition(posOptions).then(function (pos) {

            $http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+pos.coords.latitude+','+pos.coords.longitude+'&sensor=true').then(function(data){
                $scope.search.location = data.data.results[0].formatted_address;
                $ionicLoading.hide();
            }, function(err) {
                $ionicLoading.hide();
            // error
            });
          }, function (error) {
            alert('Unable to get location: ' + JSON.stringify(error));
            $ionicLoading.hide();
        });*/
   });

}])
