angular
    .module('app')
    .component('coursesList', {
        templateUrl: 'courses/courses-list.html',
        controller: 'CoursesListController'
    })
    .controller('CoursesListController', coursesList);

    function coursesList(){
        var $ctrl = this;
        $ctrl.title = 'Courses list';
        $ctrl.courses = [
            {
                "name": "Course 1",
                "description": "some descriptino",
                "prerequisites": "Basic fluency with computers",
                "duration": 12,
                "instructor": {
                    "_id": "57398224dcba0f089283b5e1",
                    "name": "John",
                    "surname": "Smith",
                    "description": "Tutor description"
                }
            },
            {
                "name": "Course 2",
                "description": "some descriptino",
                "prerequisites": "Basic fluency with computers",
                "duration": 12,
                "instructor": {
                    "_id": "57398224dcba0f089283b5e1",
                    "name": "John",
                    "surname": "Smith",
                    "description": "Tutor description"
                }
            }
        ];
    }