Ext.data.JsonP.iAuto_ui_base_Model({"tagname":"class","name":"iAuto.ui.base.Model","autodetected":{},"files":[{"filename":"Model.js","href":null}],"members":[{"name":"dataAdapter","tagname":"cfg","owner":"iAuto.ui.base.Model","id":"cfg-dataAdapter","meta":{"private":true}},{"name":"dataAdapterType","tagname":"cfg","owner":"iAuto.ui.base.Model","id":"cfg-dataAdapterType","meta":{}},{"name":"id","tagname":"property","owner":"iAuto.ui.base.Model","id":"property-id","meta":{}},{"name":"xtype","tagname":"property","owner":"iAuto.ui.base.Model","id":"property-xtype","meta":{}},{"name":"_prepareModel","tagname":"method","owner":"iAuto.ui.base.Model","id":"method-_prepareModel","meta":{}},{"name":"_validation","tagname":"method","owner":"iAuto.ui.base.Model","id":"method-_validation","meta":{"private":true}},{"name":"fetch","tagname":"method","owner":"iAuto.ui.base.Model","id":"method-fetch","meta":{}},{"name":"fetchAll","tagname":"method","owner":"iAuto.ui.base.Model","id":"method-fetchAll","meta":{}},{"name":"get","tagname":"method","owner":"iAuto.ui.base.Model","id":"method-get","meta":{}},{"name":"getDataAdapterType","tagname":"method","owner":"iAuto.ui.base.Model","id":"method-getDataAdapterType","meta":{}},{"name":"remove","tagname":"method","owner":"iAuto.ui.base.Model","id":"method-remove","meta":{}},{"name":"save","tagname":"method","owner":"iAuto.ui.base.Model","id":"method-save","meta":{}},{"name":"set","tagname":"method","owner":"iAuto.ui.base.Model","id":"method-set","meta":{}},{"name":"setDataAdapterType","tagname":"method","owner":"iAuto.ui.base.Model","id":"method-setDataAdapterType","meta":{}},{"name":"valid","tagname":"method","owner":"iAuto.ui.base.Model","id":"method-valid","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-iAuto.ui.base.Model","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'><p>The base class of the Model.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-dataAdapter' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.base.Model'>iAuto.ui.base.Model</span><br/></div><a href='#!/api/iAuto.ui.base.Model-cfg-dataAdapter' class='name expandable'>dataAdapter</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>The data adapter for the model.</p>\n</div><div class='long'><p>The data adapter for the model.</p>\n</div></div></div><div id='cfg-dataAdapterType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.base.Model'>iAuto.ui.base.Model</span><br/></div><a href='#!/api/iAuto.ui.base.Model-cfg-dataAdapterType' class='name expandable'>dataAdapterType</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The type of the model's data adapter..</p>\n</div><div class='long'><p>The type of the model's data adapter..</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-id' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.base.Model'>iAuto.ui.base.Model</span><br/></div><a href='#!/api/iAuto.ui.base.Model-property-id' class='name expandable'>id</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-xtype' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.base.Model'>iAuto.ui.base.Model</span><br/></div><a href='#!/api/iAuto.ui.base.Model-property-xtype' class='name expandable'>xtype</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The type of the class. ...</div><div class='long'><p>The type of the class.</p>\n<p>Defaults to: <code>&quot;model&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_prepareModel' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.base.Model'>iAuto.ui.base.Model</span><br/></div><a href='#!/api/iAuto.ui.base.Model-method-_prepareModel' class='name expandable'>_prepareModel</a>( <span class='pre'>opts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Prepares a new instance of a given model. ...</div><div class='long'><p>Prepares a new instance of a given model.\nNeeded when loading data from a storage adapter to add the new methods, etc.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>opts</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_validation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.base.Model'>iAuto.ui.base.Model</span><br/></div><a href='#!/api/iAuto.ui.base.Model-method-_validation' class='name expandable'>_validation</a>( <span class='pre'>opts</span> ) : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Basic validata function ...</div><div class='long'><p>Basic validata function</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>opts</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>validation</p>\n</div></li></ul></div></div></div><div id='method-fetch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.base.Model'>iAuto.ui.base.Model</span><br/></div><a href='#!/api/iAuto.ui.base.Model-method-fetch' class='name expandable'>fetch</a>( <span class='pre'>obj, callback</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Load a single object by ID ...</div><div class='long'><p>Load a single object by ID</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>data The data of the model.</p>\n</div></li></ul></div></div></div><div id='method-fetchAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.base.Model'>iAuto.ui.base.Model</span><br/></div><a href='#!/api/iAuto.ui.base.Model-method-fetchAll' class='name expandable'>fetchAll</a>( <span class='pre'>object, callback</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Get all objects for a given type and executes a callback. ...</div><div class='long'><p>Get all objects for a given type and executes a callback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>datalist The datalist of the model.</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.base.Model'>iAuto.ui.base.Model</span><br/></div><a href='#!/api/iAuto.ui.base.Model-method-get' class='name expandable'>get</a>( <span class='pre'>property</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the value of model property ...</div><div class='long'><p>Get the value of model property</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>property</span> : String<div class='sub-desc'><p>The name of property</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>value The value of the property.</p>\n</div></li></ul></div></div></div><div id='method-getDataAdapterType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.base.Model'>iAuto.ui.base.Model</span><br/></div><a href='#!/api/iAuto.ui.base.Model-method-getDataAdapterType' class='name expandable'>getDataAdapterType</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of dataAdapterType. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/iAuto.ui.base.Model-cfg-dataAdapterType\" rel=\"iAuto.ui.base.Model-cfg-dataAdapterType\" class=\"docClass\">dataAdapterType</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.base.Model'>iAuto.ui.base.Model</span><br/></div><a href='#!/api/iAuto.ui.base.Model-method-remove' class='name expandable'>remove</a>( <span class='pre'>object, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove the data from storage ...</div><div class='long'><p>Remove the data from storage</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-save' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.base.Model'>iAuto.ui.base.Model</span><br/></div><a href='#!/api/iAuto.ui.base.Model-method-save' class='name expandable'>save</a>( <span class='pre'>callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>save the data to storage. ...</div><div class='long'><p>save the data to storage.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>.</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.base.Model'>iAuto.ui.base.Model</span><br/></div><a href='#!/api/iAuto.ui.base.Model-method-set' class='name expandable'>set</a>( <span class='pre'>object, value, options</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set properties on the model. ...</div><div class='long'><p>Set properties on the model.  You can pass in a key/value or an object of properties</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setDataAdapterType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.base.Model'>iAuto.ui.base.Model</span><br/></div><a href='#!/api/iAuto.ui.base.Model-method-setDataAdapterType' class='name expandable'>setDataAdapterType</a>( <span class='pre'>dataAdapterType</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of dataAdapterType. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/iAuto.ui.base.Model-cfg-dataAdapterType\" rel=\"iAuto.ui.base.Model-cfg-dataAdapterType\" class=\"docClass\">dataAdapterType</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dataAdapterType</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-valid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.ui.base.Model'>iAuto.ui.base.Model</span><br/></div><a href='#!/api/iAuto.ui.base.Model-method-valid' class='name expandable'>valid</a>( <span class='pre'>opts</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Boolean to check if the model is valid ...</div><div class='long'><p>Boolean to check if the model is valid</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>opts</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>validation</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});