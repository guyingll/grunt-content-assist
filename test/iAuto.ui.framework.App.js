Ext.data.JsonP.iAuto_ui_framework_App({"tagname":"class","name":"iAuto.ui.framework.App","autodetected":{},"files":[{"filename":"App.js","href":null}],"singleton":true,"aliases":{"itu":["app"]},"author":[{"tagname":"author","name":"","email":null}],"members":[{"name":"controllersDir","tagname":"cfg","owner":"iAuto.ui.framework.App","id":"cfg-controllersDir","meta":{}},{"name":"fcontrolsDir","tagname":"cfg","owner":"iAuto.ui.framework.App","id":"cfg-fcontrolsDir","meta":{}},{"name":"glayersDir","tagname":"cfg","owner":"iAuto.ui.framework.App","id":"cfg-glayersDir","meta":{}},{"name":"modelsDir","tagname":"cfg","owner":"iAuto.ui.framework.App","id":"cfg-modelsDir","meta":{}},{"name":"viewsDir","tagname":"cfg","owner":"iAuto.ui.framework.App","id":"cfg-viewsDir","meta":{}},{"name":"xcontrolsDir","tagname":"cfg","owner":"iAuto.ui.framework.App","id":"cfg-xcontrolsDir","meta":{}},{"name":"_startLoading","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-_startLoading","meta":{"private":true}},{"name":"getControllersDir","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-getControllersDir","meta":{}},{"name":"getCurrentController","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-getCurrentController","meta":{}},{"name":"getFcontrolsDir","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-getFcontrolsDir","meta":{}},{"name":"getGlayersDir","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-getGlayersDir","meta":{}},{"name":"getModelsDir","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-getModelsDir","meta":{}},{"name":"getViewsDir","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-getViewsDir","meta":{}},{"name":"getXcontrolsDir","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-getXcontrolsDir","meta":{}},{"name":"loadFcontrols","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-loadFcontrols","meta":{"chainable":true}},{"name":"loadGlayers","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-loadGlayers","meta":{"chainable":true}},{"name":"loadModels","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-loadModels","meta":{"chainable":true}},{"name":"ready","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-ready","meta":{}},{"name":"registerSTM","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-registerSTM","meta":{"chainable":true}},{"name":"route","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-route","meta":{}},{"name":"setControllersDir","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-setControllersDir","meta":{}},{"name":"setFcontrolsDir","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-setFcontrolsDir","meta":{}},{"name":"setGlayersDir","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-setGlayersDir","meta":{}},{"name":"setModelsDir","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-setModelsDir","meta":{}},{"name":"setViewsDir","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-setViewsDir","meta":{}},{"name":"setXcontrolsDir","tagname":"method","owner":"iAuto.ui.framework.App","id":"method-setXcontrolsDir","meta":{}}],"alternateClassNames":[],"id":"class-iAuto.ui.framework.App","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'><p>The application manager object for iAuto ui framework.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-controllersDir' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-cfg-controllersDir' class='name expandable'>controllersDir</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The default directory of controllers. ...</div><div class='long'><p>The default directory of controllers.</p>\n<p>Defaults to: <code>&quot;controllers/&quot;</code></p></div></div></div><div id='cfg-fcontrolsDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-cfg-fcontrolsDir' class='name expandable'>fcontrolsDir</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The default directory of function control. ...</div><div class='long'><p>The default directory of function control.</p>\n<p>Defaults to: <code>&quot;resources/fc/&quot;</code></p></div></div></div><div id='cfg-glayersDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-cfg-glayersDir' class='name expandable'>glayersDir</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The default directory of global layer ...</div><div class='long'><p>The default directory of global layer</p>\n<p>Defaults to: <code>&quot;resources/gl/&quot;</code></p></div></div></div><div id='cfg-modelsDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-cfg-modelsDir' class='name expandable'>modelsDir</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The default directory of models. ...</div><div class='long'><p>The default directory of models.</p>\n<p>Defaults to: <code>&quot;models/&quot;</code></p></div></div></div><div id='cfg-viewsDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-cfg-viewsDir' class='name expandable'>viewsDir</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The default directory of views. ...</div><div class='long'><p>The default directory of views.</p>\n<p>Defaults to: <code>&quot;views/&quot;</code></p></div></div></div><div id='cfg-xcontrolsDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-cfg-xcontrolsDir' class='name expandable'>xcontrolsDir</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The default directory of custom control. ...</div><div class='long'><p>The default directory of custom control.</p>\n<p>Defaults to: <code>&quot;resources/cc/&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_startLoading' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-_startLoading' class='name expandable'>_startLoading</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Start Loading the App Resources. ...</div><div class='long'><p>Start Loading the App Resources.</p>\n</div></div></div><div id='method-getControllersDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-getControllersDir' class='name expandable'>getControllersDir</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of controllersDir. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/iAuto.ui.framework.App-cfg-controllersDir\" rel=\"iAuto.ui.framework.App-cfg-controllersDir\" class=\"docClass\">controllersDir</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCurrentController' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-getCurrentController' class='name expandable'>getCurrentController</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the current controller; ...</div><div class='long'><p>Get the current controller;</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>instance The current controller's instance.</p>\n</div></li></ul></div></div></div><div id='method-getFcontrolsDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-getFcontrolsDir' class='name expandable'>getFcontrolsDir</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of fcontrolsDir. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/iAuto.ui.framework.App-cfg-fcontrolsDir\" rel=\"iAuto.ui.framework.App-cfg-fcontrolsDir\" class=\"docClass\">fcontrolsDir</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getGlayersDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-getGlayersDir' class='name expandable'>getGlayersDir</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of glayersDir. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/iAuto.ui.framework.App-cfg-glayersDir\" rel=\"iAuto.ui.framework.App-cfg-glayersDir\" class=\"docClass\">glayersDir</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getModelsDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-getModelsDir' class='name expandable'>getModelsDir</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of modelsDir. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/iAuto.ui.framework.App-cfg-modelsDir\" rel=\"iAuto.ui.framework.App-cfg-modelsDir\" class=\"docClass\">modelsDir</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getViewsDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-getViewsDir' class='name expandable'>getViewsDir</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of viewsDir. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/iAuto.ui.framework.App-cfg-viewsDir\" rel=\"iAuto.ui.framework.App-cfg-viewsDir\" class=\"docClass\">viewsDir</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getXcontrolsDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-getXcontrolsDir' class='name expandable'>getXcontrolsDir</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of xcontrolsDir. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/iAuto.ui.framework.App-cfg-xcontrolsDir\" rel=\"iAuto.ui.framework.App-cfg-xcontrolsDir\" class=\"docClass\">xcontrolsDir</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-loadFcontrols' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-loadFcontrols' class='name expandable'>loadFcontrols</a>( <span class='pre'>urls</span> ) : <a href=\"#!/api/iAuto.ui.framework.App\" rel=\"iAuto.ui.framework.App\" class=\"docClass\">iAuto.ui.framework.App</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Load Function Controls for app. ...</div><div class='long'><p>Load Function Controls for app.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>urls</span> : String[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/iAuto.ui.framework.App\" rel=\"iAuto.ui.framework.App\" class=\"docClass\">iAuto.ui.framework.App</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-loadGlayers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-loadGlayers' class='name expandable'>loadGlayers</a>( <span class='pre'>glayers</span> ) : <a href=\"#!/api/iAuto.ui.framework.App\" rel=\"iAuto.ui.framework.App\" class=\"docClass\">iAuto.ui.framework.App</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Load Global Layer ...</div><div class='long'><p>Load Global Layer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>glayers</span> : String[]<div class='sub-desc'><p>The array for glayers.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/iAuto.ui.framework.App\" rel=\"iAuto.ui.framework.App\" class=\"docClass\">iAuto.ui.framework.App</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-loadModels' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-loadModels' class='name expandable'>loadModels</a>( <span class='pre'>urls</span> ) : <a href=\"#!/api/iAuto.ui.framework.App\" rel=\"iAuto.ui.framework.App\" class=\"docClass\">iAuto.ui.framework.App</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Load Models for app. ...</div><div class='long'><p>Load Models for app.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>urls</span> : String[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/iAuto.ui.framework.App\" rel=\"iAuto.ui.framework.App\" class=\"docClass\">iAuto.ui.framework.App</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-ready' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-ready' class='name expandable'>ready</a>( <span class='pre'>onReady</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>execute the function if loaded. ...</div><div class='long'><p>execute the function if loaded.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onReady</span> : Function<div class='sub-desc'><p>the function executed when app loaded.</p>\n</div></li></ul></div></div></div><div id='method-registerSTM' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-registerSTM' class='name expandable'>registerSTM</a>( <span class='pre'></span> ) : <a href=\"#!/api/iAuto.ui.framework.App\" rel=\"iAuto.ui.framework.App\" class=\"docClass\">iAuto.ui.framework.App</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Register the State Machine. ...</div><div class='long'><p>Register the State Machine.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/iAuto.ui.framework.App\" rel=\"iAuto.ui.framework.App\" class=\"docClass\">iAuto.ui.framework.App</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-route' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-route' class='name expandable'>route</a>( <span class='pre'>name, onRoute</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Route from view to view. ...</div><div class='long'><p>Route from view to view.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name of the controller to route.</p>\n</div></li><li><span class='pre'>onRoute</span> : String<div class='sub-desc'><p>The callback function for routing to a new winscape.</p>\n</div></li></ul></div></div></div><div id='method-setControllersDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-setControllersDir' class='name expandable'>setControllersDir</a>( <span class='pre'>controllersDir</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of controllersDir. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/iAuto.ui.framework.App-cfg-controllersDir\" rel=\"iAuto.ui.framework.App-cfg-controllersDir\" class=\"docClass\">controllersDir</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>controllersDir</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setFcontrolsDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-setFcontrolsDir' class='name expandable'>setFcontrolsDir</a>( <span class='pre'>fcontrolsDir</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of fcontrolsDir. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/iAuto.ui.framework.App-cfg-fcontrolsDir\" rel=\"iAuto.ui.framework.App-cfg-fcontrolsDir\" class=\"docClass\">fcontrolsDir</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fcontrolsDir</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setGlayersDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-setGlayersDir' class='name expandable'>setGlayersDir</a>( <span class='pre'>glayersDir</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of glayersDir. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/iAuto.ui.framework.App-cfg-glayersDir\" rel=\"iAuto.ui.framework.App-cfg-glayersDir\" class=\"docClass\">glayersDir</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>glayersDir</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setModelsDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-setModelsDir' class='name expandable'>setModelsDir</a>( <span class='pre'>modelsDir</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of modelsDir. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/iAuto.ui.framework.App-cfg-modelsDir\" rel=\"iAuto.ui.framework.App-cfg-modelsDir\" class=\"docClass\">modelsDir</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>modelsDir</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setViewsDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-setViewsDir' class='name expandable'>setViewsDir</a>( <span class='pre'>viewsDir</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of viewsDir. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/iAuto.ui.framework.App-cfg-viewsDir\" rel=\"iAuto.ui.framework.App-cfg-viewsDir\" class=\"docClass\">viewsDir</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>viewsDir</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setXcontrolsDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.framework.App'>iAuto.ui.framework.App</span><br/></div><a href='#!/api/iAuto.ui.framework.App-method-setXcontrolsDir' class='name expandable'>setXcontrolsDir</a>( <span class='pre'>xcontrolsDir</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of xcontrolsDir. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/iAuto.ui.framework.App-cfg-xcontrolsDir\" rel=\"iAuto.ui.framework.App-cfg-xcontrolsDir\" class=\"docClass\">xcontrolsDir</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>xcontrolsDir</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});