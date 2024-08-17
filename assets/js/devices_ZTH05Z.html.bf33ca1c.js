"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[39981],{24129:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>h,data:()=>y});var a=i(37711);const r=(0,a.Lk)("h1",{id:"tuya-zth05z",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-zth05z"},[(0,a.Lk)("span",null,"Tuya ZTH05Z")])],-1),o=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1),u=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZTH05Z")],-1),d=(0,a.Lk)("td",null,"Vendor",-1),n=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Temperature and humidity sensor")],-1),c=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"temperature, humidity, battery, temperature_unit, max_temperature_alarm, min_temperature_alarm, max_humidity_alarm, min_humidity_alarm, temperature_alarm, humidity_alarm, temperature_periodic_report, humidity_periodic_report, temperature_sensitivity, humidity_sensitivity, linkquality")],-1),l=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZTH05Z.png",alt:"Tuya ZTH05Z"})])],-1),m=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1),s=(0,a.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-unit-enum" tabindex="-1"><a class="header-anchor" href="#temperature-unit-enum"><span>Temperature unit (enum)</span></a></h3><p>Temperature unit. Value can be found in the published state on the <code>temperature_unit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_unit&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id="max-temperature-alarm-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-alarm-numeric"><span>Max temperature alarm (numeric)</span></a></h3><p>Alarm temperature max. Value can be found in the published state on the <code>max_temperature_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature_alarm&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>60</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-temperature-alarm-numeric" tabindex="-1"><a class="header-anchor" href="#min-temperature-alarm-numeric"><span>Min temperature alarm (numeric)</span></a></h3><p>Alarm temperature min. Value can be found in the published state on the <code>min_temperature_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_temperature_alarm&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>60</code>. The unit of this value is <code>°C</code>.</p><h3 id="max-humidity-alarm-numeric" tabindex="-1"><a class="header-anchor" href="#max-humidity-alarm-numeric"><span>Max humidity alarm (numeric)</span></a></h3><p>Alarm humidity max. Value can be found in the published state on the <code>max_humidity_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_humidity_alarm&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="min-humidity-alarm-numeric" tabindex="-1"><a class="header-anchor" href="#min-humidity-alarm-numeric"><span>Min humidity alarm (numeric)</span></a></h3><p>Alarm humidity min. Value can be found in the published state on the <code>min_humidity_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_humidity_alarm&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-alarm-enum" tabindex="-1"><a class="header-anchor" href="#temperature-alarm-enum"><span>Temperature alarm (enum)</span></a></h3><p>Temperature alarm. Value can be found in the published state on the <code>temperature_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_alarm&quot;: NEW_VALUE}</code>. The possible values are: <code>lower_alarm</code>, <code>upper_alarm</code>, <code>cancel</code>.</p><h3 id="humidity-alarm-enum" tabindex="-1"><a class="header-anchor" href="#humidity-alarm-enum"><span>Humidity alarm (enum)</span></a></h3><p>Humidity alarm. Value can be found in the published state on the <code>humidity_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_alarm&quot;: NEW_VALUE}</code>. The possible values are: <code>lower_alarm</code>, <code>upper_alarm</code>, <code>cancel</code>.</p><h3 id="temperature-periodic-report-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-periodic-report-numeric"><span>Temperature periodic report (numeric)</span></a></h3><p>Temp periodic report. Value can be found in the published state on the <code>temperature_periodic_report</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_periodic_report&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="humidity-periodic-report-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-periodic-report-numeric"><span>Humidity periodic report (numeric)</span></a></h3><p>Humidity periodic report. Value can be found in the published state on the <code>humidity_periodic_report</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_periodic_report&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-sensitivity-numeric"><span>Temperature sensitivity (numeric)</span></a></h3><p>Sensitivity of temperature. Value can be found in the published state on the <code>temperature_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>3</code> and the maximum value is <code>10</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-sensitivity-numeric"><span>Humidity sensitivity (numeric)</span></a></h3><p>Sensitivity of humidity. Value can be found in the published state on the <code>humidity_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>3</code> and the maximum value is <code>10</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',32),p={},h=(0,i(3790).A)(p,[["render",function(e,t){const i=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[r,(0,a.Lk)("table",null,[o,(0,a.Lk)("tbody",null,[u,(0,a.Lk)("tr",null,[d,(0,a.Lk)("td",null,[(0,a.bF)(i,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>[(0,a.eW)("Tuya")])),_:1})])]),n,c,l])]),m,(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>[(0,a.eW)("How to use device type specific configuration")])),_:1})])]),s])}]]),y=JSON.parse('{"path":"/devices/ZTH05Z.html","title":"Tuya ZTH05Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZTH05Z control via MQTT","description":"Integrate your Tuya ZTH05Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-01-31T20:08:00.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Temperature unit (enum)","slug":"temperature-unit-enum","link":"#temperature-unit-enum","children":[]},{"level":3,"title":"Max temperature alarm (numeric)","slug":"max-temperature-alarm-numeric","link":"#max-temperature-alarm-numeric","children":[]},{"level":3,"title":"Min temperature alarm (numeric)","slug":"min-temperature-alarm-numeric","link":"#min-temperature-alarm-numeric","children":[]},{"level":3,"title":"Max humidity alarm (numeric)","slug":"max-humidity-alarm-numeric","link":"#max-humidity-alarm-numeric","children":[]},{"level":3,"title":"Min humidity alarm (numeric)","slug":"min-humidity-alarm-numeric","link":"#min-humidity-alarm-numeric","children":[]},{"level":3,"title":"Temperature alarm (enum)","slug":"temperature-alarm-enum","link":"#temperature-alarm-enum","children":[]},{"level":3,"title":"Humidity alarm (enum)","slug":"humidity-alarm-enum","link":"#humidity-alarm-enum","children":[]},{"level":3,"title":"Temperature periodic report (numeric)","slug":"temperature-periodic-report-numeric","link":"#temperature-periodic-report-numeric","children":[]},{"level":3,"title":"Humidity periodic report (numeric)","slug":"humidity-periodic-report-numeric","link":"#humidity-periodic-report-numeric","children":[]},{"level":3,"title":"Temperature sensitivity (numeric)","slug":"temperature-sensitivity-numeric","link":"#temperature-sensitivity-numeric","children":[]},{"level":3,"title":"Humidity sensitivity (numeric)","slug":"humidity-sensitivity-numeric","link":"#humidity-sensitivity-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1723882055000},"filePathRelative":"devices/ZTH05Z.md"}')}}]);