(function (_angular_platformBrowserDynamic, _angular_core, _angular_platformBrowser) {
    'use strict';
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    var AppComponent = (function () {
        function AppComponent() {
        }
        AppComponent = __decorate([
            _angular_core.Component({
                selector: 'app',
                template: '<h1>Hello World</h1>'
            })
        ], AppComponent);
        return AppComponent;
    }());
    var AppModule = (function () {
        function AppModule() {
        }
        AppModule = __decorate([
            _angular_core.NgModule({
                imports: [_angular_platformBrowser.BrowserModule],
                declarations: [AppComponent],
                bootstrap: [AppComponent]
            })
        ], AppModule);
        return AppModule;
    }());
    var platform = _angular_platformBrowserDynamic.platformBrowserDynamic();
    platform.bootstrapModule(AppModule);
}(vendor._angular_platformBrowserDynamic, vendor._angular_core, vendor._angular_platformBrowser));
//# sourceMappingURL=bundle.es2015.js.map
