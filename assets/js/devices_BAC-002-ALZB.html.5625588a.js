"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[44997],{17125:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>p,data:()=>m});var a=o(37711);const i=(0,a.Lk)("h1",{id:"tuya-bac-002-alzb",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-bac-002-alzb"},[(0,a.Lk)("span",null,"Tuya BAC-002-ALZB")])],-1),d=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1),l=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"BAC-002-ALZB")],-1),c=(0,a.Lk)("td",null,"Vendor",-1),s=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"FCU thermostat temperature controller")],-1),n=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"climate (local_temperature, system_mode, fan_mode, current_heating_setpoint, preset, local_temperature_calibration), deadzone_temperature, lock (state), schedule, linkquality")],-1),r=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/BAC-002-ALZB.png",alt:"Tuya BAC-002-ALZB"})])],-1),u=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Switch the thermostat off. Press and hold the temperature down button for +- 8 seconds to enable the pairing mode (display lights up and a WiFi-like icon is blinking). After successful interview turn the thermostat on again.</p><h3 id="stop-message-flooding" tabindex="-1"><a class="header-anchor" href="#stop-message-flooding"><span>Stop message flooding</span></a></h3><p>This unit has a bug that makes it send multiple messages when updating. To stop this from flooding your MQTT Queues, please add the following to your <code>configuration.yaml</code> file:</p><p>devices: &#39;0x12345678&#39;: friendly_name: thermostat debounce: 1</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>local_temperature</code>, <code>system_mode</code>, <code>fan_mode</code>, <code>current_heating_setpoint</code>, <code>preset</code>, <code>local_temperature_calibration</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>cool</code>, <code>heat</code>, <code>fan_only</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>auto</code>, <code>manual</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-3</code> and the maximum value is <code>3</code> with a step size of <code>1</code>.</li></ul><h3 id="deadzone-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#deadzone-temperature-numeric"><span>Deadzone temperature (numeric)</span></a></h3><p>The delta between local_temperature and current_heating_setpoint to trigger activity. Value can be found in the published state on the <code>deadzone_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;deadzone_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>5</code>. The unit of this value is <code>°C</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock"><span>Child lock (lock)</span></a></h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="schedule-text" tabindex="-1"><a class="header-anchor" href="#schedule-text"><span>Schedule (text)</span></a></h3><p>Schedule will work with &quot;auto&quot; preset. In this mode, the device executes a preset week programming temperature time and temperature. Schedule can contains 12 segments. All 12 segments should be defined. It should be defined in the following format: &quot;hh:mm/tt&quot;. Segments should be divided by space symbol. Example: &quot;06:00/20 11:30/21 13:30/22 17:30/23 06:00/24 12:00/23 14:30/22 17:30/21 06:00/19 12:30/20 14:30/21 18:30/20&quot;. Value can be found in the published state on the <code>schedule</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule&quot;: NEW_VALUE}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),h={},p=(0,o(3790).A)(h,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[i,(0,a.Lk)("table",null,[d,(0,a.Lk)("tbody",null,[l,(0,a.Lk)("tr",null,[c,(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>[(0,a.eW)("Tuya")])),_:1})])]),s,n,r])]),u])}]]),m=JSON.parse('{"path":"/devices/BAC-002-ALZB.html","title":"Tuya BAC-002-ALZB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya BAC-002-ALZB control via MQTT","description":"Integrate your Tuya BAC-002-ALZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-03-28T13:25:07.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Stop message flooding","slug":"stop-message-flooding","link":"#stop-message-flooding","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Deadzone temperature (numeric)","slug":"deadzone-temperature-numeric","link":"#deadzone-temperature-numeric","children":[]},{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Schedule (text)","slug":"schedule-text","link":"#schedule-text","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1723882055000},"filePathRelative":"devices/BAC-002-ALZB.md"}')}}]);