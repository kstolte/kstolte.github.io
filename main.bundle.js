webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-two-thirds\">\n      <section class=\"section\">\n        <div class=\"box is-size-7\">\n          <h1 class=\"title\">Employment Experience</h1>\n          <div class=\"content\" *ngFor=\"let job of jobs\">\n            <div class=\"level is-marginless\">\n              <div class=\"level-left\">\n                <h2 class=\"is-marginless\">{{job.title}}</h2>\n              </div>\n              <div class=\"level-right\" style=\"Vertical-Align:bottom\">\n                <p class=\"has-text-weight-light\">{{job.startDate | date}} - {{(job.endDate | date) || \"Present\"}}</p>\n              </div>\n            </div>\n            <div class=\"level is-marginless\">\n              <div class=\"level-left\">\n                <p class=\"has-text-weight-light\">{{job.employer}}</p>\n              </div>\n              <div class=\"level-right\">\n                <p class=\"has-text-weight-light\">{{job.location}}</p>\n              </div>\n            </div>\n            <p class=\"is-marginless has-text-justified\">{{job.jobSummary}}</p>\n            <ul class=\"has-text-justified\" style=\"margin-top:0;\">\n              <li *ngFor=\"let role of job.jobRoles\">{{role.Role}}</li>\n            </ul>\n            <div *ngIf=\"job.jobTechnologies\">\n              <h4>Technology Stack</h4>\n              <div class=\"tags\">\n                <!-- <ng-template ngFor let-tech [ngForOf]=\"job.jobTechnologies\">\n                      <span class=\"tag\">{{tech.Technology}}</span>\n                    </ng-template> -->\n                <!-- <span class=\"tag\" *ngFor=\"let tech of job.jobTechnologies\" [style]=\"color:\"{{tech.Colored}}>{{tech.Technology}}</span> -->\n                <span class=\"tag\" *ngFor=\"let tech of job.jobTechnologies\">{{tech.Technology}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n      <!-- <section class=\"section\">\n        <progress class=\"progress\" value=\"98\" max=\"100\">Structured Query Language</progress>\n        <progress class=\"progress\" value=\"90\" max=\"100\">.Net Framework (3.5 +)</progress>\n        <progress class=\"progress\" value=\"85\" max=\"100\">WinForms</progress>\n      </section> -->\n    </div>\n    <div class=\"container column is-one-third\">\n      <section class=\"section\">\n        <div class=\"box is-size-7\">\n          <figure class=\"image\">\n            <img src=\"assets/images/headShot.png\">\n          </figure>\n          <h1 class=\"title has-text-centered\">Keith Stolte</h1>\n          <ul class=\"fa-ul\">\n            <li class=\"email\">\n              <i class=\"fa fa-envelope\"></i>\n              <a href=\"mailto:keithrstolte@gmail.com\">keithrstolte@gmail.com</a>\n            </li>\n            <li class=\"github\">\n              <i class=\"fa fa-github\" style=\"color:#333\"></i>\n              <a href=\"https://www.github.com/kstolteYDI\" target=\"_blank\">github.com/kstolteYDI</a>\n            </li>\n            <!-- <li class=\"website\"><i class=\"fa fa-globe\"></i><a href=\"\" target=\"_blank\">portfoliosite.com</a></li> -->\n            <li class=\"linkedin\">\n              <i class=\"fa fa-linkedin-square\" style=\"color:#0077B5;\"></i>\n              <a href=\"linkedin.com/in/keithrstolte\" target=\"_blank\">Profile</a>\n            </li>\n            <li class=\"twitter\">\n              <i class=\"fa fa-twitter\" style=\"color:#1DA1F2;\"></i>\n              <a href=\"https://twitter.com/sqltrailblazer\" target=\"_blank\">@sqlTrailblazer</a>\n            </li>\n          </ul>\n        </div>\n      </section>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Job */
/* unused harmony export Role */
/* unused harmony export Technologies */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Job = (function () {
    function Job() {
    }
    return Job;
}());

var Role = (function () {
    function Role() {
    }
    return Role;
}());

var Technologies = (function () {
    function Technologies() {
    }
    return Technologies;
}());

var MSSQL = {
    Technology: 'MSSQL Server',
    Color: 'red'
};
var NetFramework = {
    Technology: '.Net Framework',
    Color: 'purple'
};
var NetCore = {
    Technology: '.Net Core 2.0',
    Color: 'green'
};
var SharePoint = {
    Technology: 'SharePoint',
    Color: 'yellow'
};
var AppleComp = {
    Technology: 'MacOS',
    Color: 'Silver'
};
var JOBS = [
    {
        title: 'Software Developer',
        employer: 'Yellow Dog Software',
        location: 'Norfolk, Va',
        startDate: new Date('2016-11-01'),
        endDate: null,
        jobSummary: "Develop and maintain components of an inventory management software solution.\n     The solution is based on a MSSQL database backend with a Long Term Support WinForms Client application.\n     Recent development has been based around new feature implementation in WinForms Client, Online Angular\n     Web App, .Net Core API, and iOS/Android Applications.",
        jobRoles: [
            { Role: 'Resolve all issues with software and final escalation point for end users.' },
            { Role: 'Conceptualize, plan, and execute new features and technology into the software solution.' },
            { Role: 'Create system integrations between Yellow Dog Inventory Systems and Third Party.' },
            { Role: 'Architected a tool for Support and Implementation groups to track real time system status to provide proactive support and client assistance.' }
        ],
        jobTechnologies: [
            MSSQL,
            NetFramework,
            NetCore,
            { Technology: 'GitHub', Color: '#333' },
            { Technology: 'Git' },
            { Technology: 'Angular' },
            { Technology: 'WinForms' },
            { Technology: 'REST APIs' },
            { Technology: 'GraphQL', Color: '#E10098' },
            AppleComp
        ]
    },
    {
        title: 'DBA / IT Manager',
        employer: 'Yellow Dog Software',
        location: 'Norfolk, Va',
        startDate: new Date('2016-05-15'),
        endDate: new Date('2016-10-31'),
        jobSummary: "Served in a DevOps Role for a Software Development Organization.\n    Served as the escalation point for support tickets to provide fixes and fact finding\n    prior to being escalated to the development group. ",
        jobRoles: [
            { Role: 'Maintained and supported 50+ physical servers that were but onsite and hosted through a third party datacenter.' },
            { Role: 'Provide Tier 4 support for escalation of tickets.' },
            { Role: 'Identify opportunities for database improvement in support of the software.' },
            { Role: 'Compose, Release, and Apply SQL Scripts to production environments to resolve bugs or optimize client systems.' },
            { Role: 'Assisted support team with timely ticket resolution.' },
            { Role: 'Set up a Network Management System to track uptime and maintained an uptime of 99.99% across the server and network infrustructure.' }
        ],
        jobTechnologies: [
            MSSQL,
            NetFramework,
            { Technology: 'PowerShell' }
        ]
    },
    {
        title: 'Application Support Analyst',
        employer: 'Gold Key | PHR Hotels & Resorts',
        location: 'Virginia Beach, Va',
        startDate: new Date('2015-06-01'),
        endDate: new Date('2016-05-15'),
        jobSummary: 'The Application Support Analyst is primarily responsible for implementing and maintaining the Software items in the Service ' +
            'Portfolio and Pipeline. This includes tier 2 & 3 end user support, diagnosing software problems and scheduled maintenance. ' +
            'In addition, they provide advanced system administration/configuration tasks and consult customers on proposed changes ' +
            'within In House (Custom) Applications and 3rd party COTS software products.',
        jobRoles: [
            { Role: 'Develop SQL reports and queries for IT Department and customer use.' },
            { Role: 'Maintain SharePoint site with on premise SharePoint Server Farm.' },
            { Role: 'Develop multifaceted SharePoint sites assist customers with storing and cataloging documents, data, and processes. ' },
            { Role: 'Provide 3rd tier support for end user support.' },
            { Role: 'Conduct deep dives into software application logic while troubleshooting and perform analysis on complex application usage scenarios.' },
            { Role: 'Provide advanced system administration/configuration tasks and consult customers on proposed changes within In House (Custom) Applications and 3rd party COTS software products.' }
        ],
        jobTechnologies: [
            MSSQL,
            SharePoint,
            { Technology: 'Visual Basic' },
            { Technology: 'WireShark' },
            { Technology: 'Juniper Networks' },
            { Technology: 'POSiTouch' },
            { Technology: 'WireShark' },
            { Technology: 'Micros POS' },
            { Technology: 'Opera PMS' },
            { Technology: 'OnQ PMS' },
            { Technology: 'Microsoft Dynamics SL' },
            { Technology: 'IIS' },
            AppleComp
        ]
    },
    {
        title: 'Support Tech I',
        employer: 'Gold Key | PHR Hotels & Resorts',
        location: 'Virginia Beach, Va',
        startDate: new Date('2013-03-15'),
        endDate: new Date('2015-06-01'),
        jobSummary: 'Provide onsite and phone support to all levels of employees',
        jobRoles: [
            { Role: 'Develop low to medium level SQL reports and queries for IT Department and customer use.' },
            { Role: 'Provide desktop and server side support for multiple hardware configurations, operating systems, and applications.' },
            { Role: 'Maintain SharePoint site with on premise SharePoint Server Farm.' },
            { Role: 'Conduct deep dives into software application logic while troubleshooting and perform analysis on complex application usage scenarios.' },
            { Role: 'Setup and delivered a SharePoint site that securely stores all associate personnel records.' },
            { Role: 'Troubleshoot, maintain, and support multiple internal applications on a variety of platforms and frameworks.' },
            { Role: 'Implement complex applications and products to outlets along the Va Beach Oceanfront.' }
        ],
        jobTechnologies: [
            MSSQL,
            SharePoint,
            { Technology: 'Visual Basic' },
            { Technology: 'WireShark' },
            { Technology: 'Juniper Networks' },
            { Technology: 'POSiTouch' },
            { Technology: 'WireShark' },
            AppleComp
        ]
    },
    {
        title: 'Junior Project Manager',
        employer: 'Met Life',
        location: 'Greater New York City Area',
        startDate: new Date('2012-06-15'),
        endDate: new Date('2013-03-15'),
        jobSummary: "Telecommuting job to assist with an enterprise wide migration from Lotus Notes to Microsoft SharePoint.",
        jobRoles: [
            { Role: 'Co-Managed an Enterprise-wide migration from Lotus Notes applications and databases to SharePoint.' },
            { Role: 'Constant communication to clients on a daily basis, to keep them notified on the status of their projects.' },
            { Role: 'Maintained Excellent Customer Service with the Business Owners of Applications.' },
            { Role: 'Assisted with maintaining security permissions on SharePoint websites.' }
        ],
        jobTechnologies: [
            SharePoint,
            { Technology: 'Lotus Notes' }
        ]
    },
    {
        title: 'Production Assistant',
        employer: 'Studio Center Total Production',
        location: 'Norfolk, Va',
        startDate: new Date('2007-05-20'),
        endDate: new Date('2013-03-15'),
        jobSummary: "Telecommuting job to assist with an enterprise wide migration from Lotus Notes to Microsoft SharePoint.\n                  My components of the project was successful and termination was based on the ending of the project.",
        jobRoles: [
            { Role: 'Created a Collaboration tool to track the status of contacting talent in various localities and time zones.' },
            { Role: 'Provide recording services for auditioning voice talent prior to being booked by a client.' },
            { Role: 'Troubleshoot Audio Routing and Patching issues.' },
            { Role: 'Provide expert feedback and guide talent to performing at their best.' }
        ],
        jobTechnologies: [
            { Technology: 'Google Sheets' },
            { Technology: 'Pro Tools' },
            AppleComp
        ]
    },
    {
        title: 'Audio Engineer',
        employer: 'Roper Performing Arts Center',
        location: 'Norfolk, Va',
        startDate: new Date('2009-02-01'),
        endDate: new Date('2012-06-15'),
        jobSummary: "",
        jobRoles: [
            { Role: 'Perform as a Stage Manager to make critical decisions while in rehearsals and the performance of live theatrical performances.' },
            { Role: 'Provide live sound reinforcement for various types of performing genres.' },
            { Role: 'Designed the updated theatre’s sound system, still currently in use.' },
            { Role: 'Assist with load-in and load-out of equipment and props for use during stage performances.' }
        ],
        jobTechnologies: [
            { Technology: 'Google Sheets' },
            { Technology: 'Pro Tools' },
            AppleComp
        ]
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Keith Stolte';
        this.jobs = JOBS;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map