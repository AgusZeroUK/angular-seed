// describe('courses-api', function (){
//   var service;
//   var $httpBackend;
//   var url = 'https://angular-trainging.herokuapp.com/api/';
//   var mockCourses = ['test1', 'test2'];
//
//   beforeEach(module('app'));
//
//   beforeEach(inject(function($injector){
//     service = $injector.get('coursesApi');
//     $httpBackend = $injector.get('$httpBackend');
//   }));
//
//   it('Should get the courses', function(){
//       $httpBackend.whenGET(url + 'courses').respond(200, mockCourses);
//
//   });
// });