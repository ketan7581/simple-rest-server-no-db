

var myApp = angular.module('myApp', []);

myApp.controller('dataCtrl',['$scope', '$http', function(scope,http){

        this.user = {
            name:'',
            amount:'',
            year:'',
            email:''
        };
       //this.register = function(){
          // console.log(this.user);
          // this where submit data to backend
          this.submitList = function(){
              var request = http({
                cache: false,
                url: "/products",
                method: "POST",
                data: {name:'ketan'},
                success:function(list){
                  console.log(addOrder(list));
                }
              });
            }
            
//=================================get data from backend====================>
        scope.getList = function(){
            //this where im getting data from back     
          http.get('/products').success(function(data){
            scope.lists = data;
          });
        }
//===================================end getting data from back end==============>
}]);
