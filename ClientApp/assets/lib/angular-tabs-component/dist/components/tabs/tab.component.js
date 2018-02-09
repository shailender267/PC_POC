import { Component, Input } from "@angular/core";
import { TabsContainer } from "../../containers";
var TabComponent = /** @class */ (function () {
    function TabComponent(tabs) {
        tabs.addTab(this);
    }
    TabComponent.prototype.getTabTitle = function () {
        return this.tabTitle;
    };
    TabComponent.decorators = [
        { type: Component, args: [{
                    selector: "tab",
                    host: {
                        "[class.hidden]": "!active"
                    },
                    template: "\n    <div class=\"tabs__panel\">\n      <ng-content></ng-content>\n    </div>\n  "
                    
                },] },
    ];
    /** @nocollapse */
    TabComponent.ctorParameters = function () { return [
        { type: TabsContainer, },
    ]; };
    TabComponent.propDecorators = {
        'active': [{ type: Input },],
        'tabTitle': [{ type: Input },],
    };
    return TabComponent;
}());
export { TabComponent };
//# sourceMappingURL=tab.component.js.map