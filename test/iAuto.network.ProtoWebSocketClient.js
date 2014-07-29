Ext.data.JsonP.iAuto_network_ProtoWebSocketClient({"tagname":"class","name":"iAuto.network.ProtoWebSocketClient","autodetected":{},"files":[{"filename":"ProtoWebSocketClient.js","href":null}],"extends":"iAuto.network.WebSocketClient","author":[{"tagname":"author","name":"","email":null}],"members":[{"name":"MAX_RECONNECT_CNT","tagname":"property","owner":"iAuto.network.WebSocketClient","id":"property-MAX_RECONNECT_CNT","meta":{"private":true}},{"name":"forceDisconnect","tagname":"property","owner":"iAuto.network.WebSocketClient","id":"property-forceDisconnect","meta":{"private":true}},{"name":"lastSendData","tagname":"property","owner":"iAuto.network.WebSocketClient","id":"property-lastSendData","meta":{"private":true}},{"name":"listeners","tagname":"property","owner":"iAuto.core.event.Evented","id":"property-listeners","meta":{"private":true}},{"name":"reconnectCnt","tagname":"property","owner":"iAuto.network.WebSocketClient","id":"property-reconnectCnt","meta":{"private":true}},{"name":"socket","tagname":"property","owner":"iAuto.network.WebSocketClient","id":"property-socket","meta":{"private":true}},{"name":"url","tagname":"property","owner":"iAuto.network.WebSocketClient","id":"property-url","meta":{}},{"name":"constructor","tagname":"method","owner":"iAuto.network.ProtoWebSocketClient","id":"method-constructor","meta":{}},{"name":"_send","tagname":"method","owner":"iAuto.network.WebSocketClient","id":"method-_send","meta":{"private":true}},{"name":"connect","tagname":"method","owner":"iAuto.network.WebSocketClient","id":"method-connect","meta":{}},{"name":"disconnect","tagname":"method","owner":"iAuto.network.WebSocketClient","id":"method-disconnect","meta":{}},{"name":"getSocketReadyState","tagname":"method","owner":"iAuto.network.WebSocketClient","id":"method-getSocketReadyState","meta":{}},{"name":"off","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-off","meta":{}},{"name":"on","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-on","meta":{}},{"name":"onWsClose","tagname":"method","owner":"iAuto.network.WebSocketClient","id":"method-onWsClose","meta":{"private":true}},{"name":"onWsMessage","tagname":"method","owner":"iAuto.network.ProtoWebSocketClient","id":"method-onWsMessage","meta":{}},{"name":"onWsOpen","tagname":"method","owner":"iAuto.network.WebSocketClient","id":"method-onWsOpen","meta":{"private":true}},{"name":"one","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-one","meta":{}},{"name":"send","tagname":"method","owner":"iAuto.network.ProtoWebSocketClient","id":"method-send","meta":{}},{"name":"trigger","tagname":"method","owner":"iAuto.core.event.Evented","id":"method-trigger","meta":{}},{"name":"protoMessage","tagname":"event","owner":"iAuto.network.ProtoWebSocketClient","id":"event-protoMessage","meta":{}},{"name":"wsClose","tagname":"event","owner":"iAuto.network.WebSocketClient","id":"event-wsClose","meta":{}},{"name":"wsError","tagname":"event","owner":"iAuto.network.WebSocketClient","id":"event-wsError","meta":{}},{"name":"wsMessage","tagname":"event","owner":"iAuto.network.WebSocketClient","id":"event-wsMessage","meta":{}},{"name":"wsOpen","tagname":"event","owner":"iAuto.network.WebSocketClient","id":"event-wsOpen","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-iAuto.network.ProtoWebSocketClient","component":false,"superclasses":["iAuto.core.event.Evented","iAuto.network.WebSocketClient"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='docClass'>iAuto.core.event.Evented</a><div class='subclass '><a href='#!/api/iAuto.network.WebSocketClient' rel='iAuto.network.WebSocketClient' class='docClass'>iAuto.network.WebSocketClient</a><div class='subclass '><strong>iAuto.network.ProtoWebSocketClient</strong></div></div></div></pre><div class='doc-contents'><p>WebSocket Client with proto supported.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-MAX_RECONNECT_CNT' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.network.WebSocketClient' rel='iAuto.network.WebSocketClient' class='defined-in docClass'>iAuto.network.WebSocketClient</a><br/></div><a href='#!/api/iAuto.network.WebSocketClient-property-MAX_RECONNECT_CNT' class='name expandable'>MAX_RECONNECT_CNT</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Max reconnect action count. ...</div><div class='long'><p>Max reconnect action count.</p>\n<p>Defaults to: <code>5</code></p></div></div></div><div id='property-forceDisconnect' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.network.WebSocketClient' rel='iAuto.network.WebSocketClient' class='defined-in docClass'>iAuto.network.WebSocketClient</a><br/></div><a href='#!/api/iAuto.network.WebSocketClient-property-forceDisconnect' class='name expandable'>forceDisconnect</a> : boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Force to disconnect ...</div><div class='long'><p>Force to disconnect</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-lastSendData' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.network.WebSocketClient' rel='iAuto.network.WebSocketClient' class='defined-in docClass'>iAuto.network.WebSocketClient</a><br/></div><a href='#!/api/iAuto.network.WebSocketClient-property-lastSendData' class='name expandable'>lastSendData</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Last data need to be sent.</p>\n</div><div class='long'><p>Last data need to be sent.</p>\n</div></div></div><div id='property-listeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-property-listeners' class='name expandable'>listeners</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Event listeners.</p>\n</div><div class='long'><p>Event listeners.</p>\n</div></div></div><div id='property-reconnectCnt' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.network.WebSocketClient' rel='iAuto.network.WebSocketClient' class='defined-in docClass'>iAuto.network.WebSocketClient</a><br/></div><a href='#!/api/iAuto.network.WebSocketClient-property-reconnectCnt' class='name expandable'>reconnectCnt</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Reconnect count. ...</div><div class='long'><p>Reconnect count.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-socket' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.network.WebSocketClient' rel='iAuto.network.WebSocketClient' class='defined-in docClass'>iAuto.network.WebSocketClient</a><br/></div><a href='#!/api/iAuto.network.WebSocketClient-property-socket' class='name expandable'>socket</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>WebSocket instance.</p>\n</div><div class='long'><p>WebSocket instance.</p>\n</div></div></div><div id='property-url' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.network.WebSocketClient' rel='iAuto.network.WebSocketClient' class='defined-in docClass'>iAuto.network.WebSocketClient</a><br/></div><a href='#!/api/iAuto.network.WebSocketClient-property-url' class='name expandable'>url</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>WebSocket url.</p>\n</div><div class='long'><p>WebSocket url.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.network.ProtoWebSocketClient'>iAuto.network.ProtoWebSocketClient</span><br/></div><strong class='new-keyword'>new</strong><a href='#!/api/iAuto.network.ProtoWebSocketClient-method-constructor' class='name expandable'>iAuto.network.ProtoWebSocketClient</a>( <span class='pre'>uri</span> ) : <a href=\"#!/api/iAuto.network.ProtoWebSocketClient\" rel=\"iAuto.network.ProtoWebSocketClient\" class=\"docClass\">iAuto.network.ProtoWebSocketClient</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor of the WebSocketClient. ...</div><div class='long'><p>Constructor of the WebSocketClient.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>uri</span> : String<div class='sub-desc'><p>The URI of the websocket server.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/iAuto.network.ProtoWebSocketClient\" rel=\"iAuto.network.ProtoWebSocketClient\" class=\"docClass\">iAuto.network.ProtoWebSocketClient</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/iAuto.network.WebSocketClient-method-constructor\" rel=\"iAuto.network.WebSocketClient-method-constructor\" class=\"docClass\">iAuto.network.WebSocketClient.constructor</a></p></div></div></div><div id='method-_send' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.network.WebSocketClient' rel='iAuto.network.WebSocketClient' class='defined-in docClass'>iAuto.network.WebSocketClient</a><br/></div><a href='#!/api/iAuto.network.WebSocketClient-method-_send' class='name expandable'>_send</a>( <span class='pre'>data</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>process the data and send via socket connection. ...</div><div class='long'><p>process the data and send via socket connection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The data to be send.</p>\n</div></li></ul></div></div></div><div id='method-connect' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.network.WebSocketClient' rel='iAuto.network.WebSocketClient' class='defined-in docClass'>iAuto.network.WebSocketClient</a><br/></div><a href='#!/api/iAuto.network.WebSocketClient-method-connect' class='name expandable'>connect</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Connect to the target websocket server. ...</div><div class='long'><p>Connect to the target websocket server.</p>\n</div></div></div><div id='method-disconnect' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.network.WebSocketClient' rel='iAuto.network.WebSocketClient' class='defined-in docClass'>iAuto.network.WebSocketClient</a><br/></div><a href='#!/api/iAuto.network.WebSocketClient-method-disconnect' class='name expandable'>disconnect</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Close WebSocket connection. ...</div><div class='long'><p>Close WebSocket connection.</p>\n</div></div></div><div id='method-getSocketReadyState' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.network.WebSocketClient' rel='iAuto.network.WebSocketClient' class='defined-in docClass'>iAuto.network.WebSocketClient</a><br/></div><a href='#!/api/iAuto.network.WebSocketClient-method-getSocketReadyState' class='name expandable'>getSocketReadyState</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Get socket status. ...</div><div class='long'><p>Get socket status.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-off' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-off' class='name expandable'>off</a>( <span class='pre'>eventName, target, method</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove an event listener. ...</div><div class='long'><p>Remove an event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>target</span> : Object|Function<div class='sub-desc'><p>A target object or a function</p>\n</div></li><li><span class='pre'>method</span> : Function|String<div class='sub-desc'><p>A function or the name of a function to be called on <code>target</code></p>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-on' class='name expandable'>on</a>( <span class='pre'>eventName, target, method</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add an event listener. ...</div><div class='long'><p>Add an event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>target</span> : Object|Function<div class='sub-desc'><p>A target object or a function</p>\n</div></li><li><span class='pre'>method</span> : Function|String<div class='sub-desc'><p>A function or the name of a function to be called on <code>target</code></p>\n</div></li></ul></div></div></div><div id='method-onWsClose' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.network.WebSocketClient' rel='iAuto.network.WebSocketClient' class='defined-in docClass'>iAuto.network.WebSocketClient</a><br/></div><a href='#!/api/iAuto.network.WebSocketClient-method-onWsClose' class='name expandable'>onWsClose</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Handler for the socket close event. ...</div><div class='long'><p>Handler for the socket close event.</p>\n</div></div></div><div id='method-onWsMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.network.ProtoWebSocketClient'>iAuto.network.ProtoWebSocketClient</span><br/></div><a href='#!/api/iAuto.network.ProtoWebSocketClient-method-onWsMessage' class='name expandable'>onWsMessage</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handle the websocket message data. ...</div><div class='long'><p>Handle the websocket message data.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Websocket message data.</p>\n</div></li></ul></div></div></div><div id='method-onWsOpen' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.network.WebSocketClient' rel='iAuto.network.WebSocketClient' class='defined-in docClass'>iAuto.network.WebSocketClient</a><br/></div><a href='#!/api/iAuto.network.WebSocketClient-method-onWsOpen' class='name expandable'>onWsOpen</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Handler for the socket open event. ...</div><div class='long'><p>Handler for the socket open event.</p>\n</div></div></div><div id='method-one' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-one' class='name expandable'>one</a>( <span class='pre'>eventName, target, method</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add an event listener. ...</div><div class='long'><p>Add an event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>target</span> : Object|Function<div class='sub-desc'><p>A target object or a function</p>\n</div></li><li><span class='pre'>method</span> : Function|String<div class='sub-desc'><p>A function or the name of a function to be called on <code>target</code></p>\n</div></li></ul></div></div></div><div id='method-send' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.network.ProtoWebSocketClient'>iAuto.network.ProtoWebSocketClient</span><br/></div><a href='#!/api/iAuto.network.ProtoWebSocketClient-method-send' class='name expandable'>send</a>( <span class='pre'>protoId, protoData</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Send proto message data and send via socket connection. ...</div><div class='long'><p>Send proto message data and send via socket connection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>protoId</span> : String<div class='sub-desc'><p>Proto message Id.</p>\n</div></li><li><span class='pre'>protoData</span> : Object<div class='sub-desc'><p>Proto message data.</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/iAuto.network.WebSocketClient-method-send\" rel=\"iAuto.network.WebSocketClient-method-send\" class=\"docClass\">iAuto.network.WebSocketClient.send</a></p></div></div></div><div id='method-trigger' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.core.event.Evented' rel='iAuto.core.event.Evented' class='defined-in docClass'>iAuto.core.event.Evented</a><br/></div><a href='#!/api/iAuto.core.event.Evented-method-trigger' class='name expandable'>trigger</a>( <span class='pre'>eventName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Triggers a named event for the object. ...</div><div class='long'><p>Triggers a named event for the object. Any additional arguments will be passed as parameters to the\nfunctions that are subscribed to the event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-protoMessage' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='iAuto.network.ProtoWebSocketClient'>iAuto.network.ProtoWebSocketClient</span><br/></div><a href='#!/api/iAuto.network.ProtoWebSocketClient-event-protoMessage' class='name expandable'>protoMessage</a>( <span class='pre'>eventName, data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger when proto message received from websocket. ...</div><div class='long'><p>Trigger when proto message received from websocket.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Event name.</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Event data.</p>\n</div></li></ul></div></div></div><div id='event-wsClose' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.network.WebSocketClient' rel='iAuto.network.WebSocketClient' class='defined-in docClass'>iAuto.network.WebSocketClient</a><br/></div><a href='#!/api/iAuto.network.WebSocketClient-event-wsClose' class='name expandable'>wsClose</a>( <span class='pre'>evt</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger when websocket connection is closed. ...</div><div class='long'><p>Trigger when websocket connection is closed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Object<div class='sub-desc'><p>WebSocket event object.</p>\n</div></li></ul></div></div></div><div id='event-wsError' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.network.WebSocketClient' rel='iAuto.network.WebSocketClient' class='defined-in docClass'>iAuto.network.WebSocketClient</a><br/></div><a href='#!/api/iAuto.network.WebSocketClient-event-wsError' class='name expandable'>wsError</a>( <span class='pre'>evt</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger when websocket error occurred. ...</div><div class='long'><p>Trigger when websocket error occurred.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Object<div class='sub-desc'><p>WebSocket event object.</p>\n</div></li></ul></div></div></div><div id='event-wsMessage' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.network.WebSocketClient' rel='iAuto.network.WebSocketClient' class='defined-in docClass'>iAuto.network.WebSocketClient</a><br/></div><a href='#!/api/iAuto.network.WebSocketClient-event-wsMessage' class='name expandable'>wsMessage</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger when received an message from websocket server. ...</div><div class='long'><p>Trigger when received an message from websocket server.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>WebSocket event data object.</p>\n</div></li></ul></div></div></div><div id='event-wsOpen' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/iAuto.network.WebSocketClient' rel='iAuto.network.WebSocketClient' class='defined-in docClass'>iAuto.network.WebSocketClient</a><br/></div><a href='#!/api/iAuto.network.WebSocketClient-event-wsOpen' class='name expandable'>wsOpen</a>( <span class='pre'>evt</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger when websocket connection is opened. ...</div><div class='long'><p>Trigger when websocket connection is opened.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Object<div class='sub-desc'><p>WebSocket event object.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});