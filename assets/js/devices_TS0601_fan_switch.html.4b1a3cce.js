"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[72873],{48808:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>w,data:()=>m});var a=o(37711);const n=(0,a.Lk)("h1",{id:"tuya-ts0601-fan-switch",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-ts0601-fan-switch"},[(0,a.Lk)("span",null,"Tuya TS0601_fan_switch")])],-1),i=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1),s=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"TS0601_fan_switch")],-1),d=(0,a.Lk)("td",null,"Vendor",-1),l=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Fan switch")],-1),c=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), power_on_behavior, countdown, fan_speed, linkquality")],-1),u=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_fan_switch.png",alt:"Tuya TS0601_fan_switch"})])],-1),r=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"White-label"),(0,a.Lk)("td",null,"Lerlink T2-Z67/T2-W67")],-1),h=(0,a.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. If you get an <code>UNSUPPORTED_ATTRIBUTE</code> error, the device does not support it.. Value can be found in the published state on the <code>power_on_behavior</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>.</p><h3 id="countdown-numeric" tabindex="-1"><a class="header-anchor" href="#countdown-numeric"><span>Countdown (numeric)</span></a></h3><p>Max ON time in seconds. Value can be found in the published state on the <code>countdown</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="fan-speed-numeric" tabindex="-1"><a class="header-anchor" href="#fan-speed-numeric"><span>Fan speed (numeric)</span></a></h3><p>Speed off the fan. Value can be found in the published state on the <code>fan_speed</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_speed&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>5</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),p={},w=(0,o(3790).A)(p,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[n,(0,a.Lk)("table",null,[i,(0,a.Lk)("tbody",null,[s,(0,a.Lk)("tr",null,[d,(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>[(0,a.eW)("Tuya")])),_:1})])]),l,c,u,r])]),h])}]]),m=JSON.parse('{"path":"/devices/TS0601_fan_switch.html","title":"Tuya TS0601_fan_switch control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS0601_fan_switch control via MQTT","description":"Integrate your Tuya TS0601_fan_switch via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-03-01T15:36:38.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Power-on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Countdown (numeric)","slug":"countdown-numeric","link":"#countdown-numeric","children":[]},{"level":3,"title":"Fan speed (numeric)","slug":"fan-speed-numeric","link":"#fan-speed-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1723882055000},"filePathRelative":"devices/TS0601_fan_switch.md"}')}}]);