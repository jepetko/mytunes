System.register(['angular2/testing', 'angular2/platform/testing/browser', 'angular2/core', "./forRange.dir"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var testing_1, browser_1, core_1, forRange_dir_1, core_2;
    var ForRangeTestComponent;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (forRange_dir_1_1) {
                forRange_dir_1 = forRange_dir_1_1;
            }],
        execute: function() {
            ForRangeTestComponent = (function () {
                function ForRangeTestComponent(value) {
                    this.value = value;
                }
                ForRangeTestComponent = __decorate([
                    core_2.Component({
                        selector: 'forRangeTestComponent',
                        template: '<ul><li *forRange="value; #i = index">{{i}}</li></ul>',
                        directives: [forRange_dir_1.ForRangeDirective]
                    }), 
                    __metadata('design:paramtypes', [Number])
                ], ForRangeTestComponent);
                return ForRangeTestComponent;
            }());
            testing_1.describe("ForRangeDirective", function () {
                beforeAll(function () {
                    testing_1.setBaseTestProviders(browser_1.TEST_BROWSER_PLATFORM_PROVIDERS, browser_1.TEST_BROWSER_APPLICATION_PROVIDERS);
                });
                afterAll(function () {
                    testing_1.resetBaseTestProviders();
                });
                testing_1.beforeEachProviders(function () { return [
                    core_1.provide(Number, { useValue: 3 })
                ]; });
                testing_1.it("should render 3 links for pagination", testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(ForRangeTestComponent).then(function (fixture) {
                        fixture.detectChanges();
                        testing_1.expect(fixture.nativeElement.querySelector("ul").children.length).toBe(3);
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=forRange.dir.spec.js.map