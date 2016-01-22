System.register(['zone.js/dist/zone.min.js', 'reflect-metadata', 'angular2/bootstrap', 'angular2/core', 'ng2-bootstrap/ng2-bootstrap'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var bootstrap_1, core_1, ng2_bootstrap_1;
    var FormComponent, AppComponent;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (bootstrap_1_1) {
                bootstrap_1 = bootstrap_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            FormComponent = (function () {
                function FormComponent() {
                    this.testModel = '';
                }
                FormComponent.prototype.logSubmit = function () {
                    console.log("Submitted!");
                };
                FormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-form',
                        template: "\n    <form (submit)=\"logSubmit()\">\n        <input [(ngModel)]=\"testModel\"\n               [typeahead]=\"['aaa','bbb','ccc']\"\n               type=\"text\" placeholder=\"test\"\n               class=\"form-control\"\n               autocomplete=\"off\"\n         >\n        <button type=\"submit\" >Submit</button>\n    </form>\n    ",
                        directives: [ng2_bootstrap_1.TYPEAHEAD_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormComponent);
                return FormComponent;
            }());
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<my-form></my-form>',
                        directives: [FormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            bootstrap_1.bootstrap(AppComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map