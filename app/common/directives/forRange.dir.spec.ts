/* stuff needed for testing, e.g. angular's wrapper functions for jasmine */
import {
    beforeEach,
    beforeEachProviders,
    describe,
    expect,
    it,
    injectAsync,
    TestComponentBuilder,
    ComponentFixture,
    setBaseTestProviders,
    resetBaseTestProviders
} from 'angular2/testing';
import {
    TEST_BROWSER_PLATFORM_PROVIDERS,
    TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';
import {provide} from 'angular2/core';
import {ForRangeDirective} from "./forRange.dir";
import {Component} from "angular2/core";

@Component({
    selector: 'forRangeTestComponent',
    template: '<ul><li *forRange="value; #i = index">{{i}}</li></ul>',
    directives : [ForRangeDirective]
})
class ForRangeTestComponent {
    constructor(private value: number) {
    }
}

describe("ForRangeDirective", () => {

    beforeAll(() => {
        setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);
    });

    afterAll(() => {
        resetBaseTestProviders();
    });

    beforeEachProviders(() => [
        provide(Number, {useValue: 3})
    ]);

    it("should render 3 links for pagination", injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(ForRangeTestComponent).then((fixture:ComponentFixture) => {
            fixture.detectChanges();
            expect( fixture.nativeElement.querySelector("ul").children.length).toBe(3);
        });
    }));

})