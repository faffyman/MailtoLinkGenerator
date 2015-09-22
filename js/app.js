// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


/**
 * @license MailtoLinkGenerator v0.1
 * (c) 2014,  faffyman@gmail.com
 * License: MIT
 * =================================================================
 */


var model = {
    mail_to: "",
    mail_subject: "",
    mail_body: "",
    mailto_link:""
};


var MailtoLinkApp = angular.module("MailtoLinkApp", []);



MailtoLinkApp.controller("MailtoLinkCtrl", function ($scope, $http) {

    // main app model.
     $scope.mailto = {
         to: "",
         subject: "",
         body: "",
         link:""
    };

    // check for errors in content first ?

    // URL parser
    $scope.parser = document.createElement('a');


    // Function for adding new items.
    $scope.generateMailto = function (mail_to, mail_subject, mail_body) {

        $scope.mailto.to      = mail_to;
        $scope.mailto.subject = mail_subject;
        $scope.mailto.body    = mail_body;


        // URLencode the subject
        var encodedSubject = window.encodeURIComponent($scope.mailto.subject);

        // URLEncode the Body
        var encodedBody = window.encodeURIComponent($scope.mailto.body);

        $scope.mailto.link = "mailto:";

        if ($scope.mailto.to!='') {
            $scope.mailto.link+= $scope.mailto.to;
        }

        if ($scope.mailto.subject!='') {
            $scope.mailto.link+= "?subject=" + window.encodeURIComponent($scope.mailto.subject);
        }

        if ($scope.mailto.body!='') {
            if($scope.mailto.subject!='') {
                $scope.mailto.link+= "&body=" + window.encodeURIComponent($scope.mailto.body);
            }else {
                $scope.mailto.link+= "?body=" + window.encodeURIComponent($scope.mailto.body);
            }

        }

        return false;

    }






});