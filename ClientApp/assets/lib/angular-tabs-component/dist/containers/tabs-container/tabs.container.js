import { Component, Input, EventEmitter, Output } from "@angular/core";
var TabsContainer = /** @class */ (function () {
    function TabsContainer() {
        this.currentTabChange = new EventEmitter();
        this.ifTabSelected = false;
        this.tabs = [];
    }
    TabsContainer.prototype.addTab = function (tab) {
        this.tabs.push(tab);
    };
    TabsContainer.prototype.selectTab = function (tab) {
        this.tabs.forEach(function (tab) {
            tab.active = false;
        });
        tab.active = true;
        this.currentTabChange.emit(tab);
    };
    TabsContainer.prototype.isDisabled = function () {
        if (this.disabled) {
            return "block";
        }
        else
            return "none";
    };
    TabsContainer.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.tabs.forEach(function (tab) {
            if (tab.active) {
                _this.selectTab(tab);
                _this.ifTabSelected = true;
            }
        });
        if (!this.ifTabSelected) {
            this.selectTab(this.tabs[0]);
        }
    };
    TabsContainer.decorators = [
        { type: Component, args: [{
                    selector: "tabs",
                    template: "\n    <ul class=\"tabs__tab-bar\">\n      <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" class=\"tabs__tab\" [ngClass]=\"{'active': tab.active == true}\">\n        {{ tab.tabTitle }}\n      </li>\n    </ul>\n    <ng-content></ng-content>\n    <div class=\"overlay\" [style.display]=\"isDisabled()\"></div>\n  "
                   
                },] },
    ];
    /** @nocollapse */
    TabsContainer.ctorParameters = function () { return []; };
    TabsContainer.propDecorators = {
        'disabled': [{ type: Input },],
        'currentTabChange': [{ type: Output },],
    };
    return TabsContainer;
}());
export { TabsContainer };
//# sourceMappingURL=tabs.container.js.map