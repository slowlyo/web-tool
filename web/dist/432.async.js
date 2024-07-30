"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[432],{10432:function(B,m,s){s.r(m),s.d(m,{ColorControl:function(){return y},default:function(){return k}});var u=s(25862),o=s(75271),b=s(30967),h=s(3163),v=s(68874),l=s(92467),_=s(19533),y=function(E){(0,u.ZT)(a,E);function a(t){var e=E.call(this,t)||this;return e.state={isOpened:!1,isFocused:!1,inputValue:e.props.value||"",tempValue:e.props.value||""},e.open=e.open.bind(e),e.close=e.close.bind(e),e.focus=e.focus.bind(e),e.blur=e.blur.bind(e),e.handleChange=e.handleChange.bind(e),e.handleTempChange=e.handleTempChange.bind(e),e.handleConfirm=e.handleConfirm.bind(e),e.handleFocus=e.handleFocus.bind(e),e.handleBlur=e.handleBlur.bind(e),e.clearValue=e.clearValue.bind(e),e.handleInputChange=e.handleInputChange.bind(e),e.handleClick=e.handleClick.bind(e),e.preview=o.createRef(),e.input=o.createRef(),e}return a.prototype.componentDidUpdate=function(t){var e=this.props;t.value!==e.value&&this.setState({inputValue:e.value||""})},a.prototype.handleFocus=function(){this.setState({isFocused:!0})},a.prototype.handleBlur=function(){this.setState({isFocused:!1,inputValue:this.props.value})},a.prototype.focus=function(){this.input.current&&this.input.current.focus()},a.prototype.blur=function(){this.input.current&&this.input.current.blur()},a.prototype.open=function(t){this.props.disabled||this.setState({isOpened:!0},t)},a.prototype.close=function(){this.setState({isOpened:!1})},a.prototype.clearValue=function(){var t=this.props,e=t.onChange,r=t.resetValue;e(r||"")},a.prototype.handleClick=function(){this.state.isOpened?this.close():this.open(this.focus)},a.prototype.handleInputChange=function(t){var e=this;if(this.props.allowCustomColor){var r=this.props.onChange;this.setState({inputValue:t.currentTarget.value},function(){var i=e.validateColor(e.state.inputValue);i&&r(e.state.inputValue)})}},a.prototype.validateColor=function(t){if(t===""||t==="inherit"||t==="transparent")return!1;var e=document.createElement("img");return e.style.color="rgb(0, 0, 0)",e.style.color=t,e.style.color!=="rgb(0, 0, 0)"?!0:(e.style.color="rgb(255, 255, 255)",e.style.color=t,e.style.color!=="rgb(255, 255, 255)")},a.prototype.handleChange=function(t){var e=this.props,r=e.onChange,i=e.format;r(i==="rgba"?"rgba(".concat(t.rgb.r,", ").concat(t.rgb.g,", ").concat(t.rgb.b,", ").concat(t.rgb.a,")"):i==="rgb"?"rgb(".concat(t.rgb.r,", ").concat(t.rgb.g,", ").concat(t.rgb.b,")"):i==="hsl"?"hsl(".concat(Math.round(t.hsl.h),", ").concat(Math.round(t.hsl.s*100),"%, ").concat(Math.round(t.hsl.l*100),"%)"):t.hex)},a.prototype.handleTempChange=function(t){var e=this.state.tempValue,r=this.props.format;r==="rgba"?e="rgba(".concat(t.rgb.r,", ").concat(t.rgb.g,", ").concat(t.rgb.b,", ").concat(t.rgb.a,")"):r==="rgb"?e="rgb(".concat(t.rgb.r,", ").concat(t.rgb.g,", ").concat(t.rgb.b,")"):r==="hsl"?e="hsl(".concat(Math.round(t.hsl.h),", ").concat(Math.round(t.hsl.s*100),"%, ").concat(Math.round(t.hsl.l*100),"%)"):e=t.hex,this.setState({tempValue:e})},a.prototype.handleConfirm=function(){var t=this.props.onChange,e=this.state.tempValue;t(e),this.close()},a.prototype.render=function(){var t=this,e=this.props,r=e.classPrefix,i=e.className,N=e.popoverClassName,d=e.value,D=e.placeholder,C=e.disabled,O=e.popOverContainer,A=e.popOverContainerSelector,P=e.format,I=e.clearable,S=e.placement,c=e.classnames,p=e.presetColors,V=e.allowCustomColor,f=e.mobileUI,T=this.props.translate,g=this.state.isOpened,x=this.state.isFocused,M=this.state.tempValue;return o.createElement("div",{className:c("ColorPicker",{"is-disabled":C,"is-focused":x,"is-opened":g},i)},o.createElement("span",{onClick:this.handleClick,className:c("ColorPicker-preview")},o.createElement("i",{ref:this.preview,className:"".concat(r,"ColorPicker-previewIcon"),style:{background:this.state.inputValue||"#ccc"}})),o.createElement("input",{ref:this.input,type:"text",autoComplete:"off",size:10,className:c("ColorPicker-input"),value:this.state.inputValue||"",placeholder:T(D),disabled:C,onChange:this.handleInputChange,onFocus:this.handleFocus,onBlur:this.handleBlur,onClick:this.handleClick,readOnly:f}),I&&!C&&d?o.createElement("a",{onClick:this.clearValue,className:c("ColorPicker-clear")},o.createElement(v.JO,{icon:"input-clear",className:"icon"})):null,o.createElement("span",{className:c("ColorPicker-arrow")},o.createElement(v.JO,{icon:"right-arrow-bold",className:"icon",onClick:this.handleClick})),!f&&g?o.createElement(l.aVW,{placement:S||"auto",target:function(){return(0,b.findDOMNode)(t)},onHide:this.close,container:O||function(){return(0,b.findDOMNode)(t)},containerSelector:A,rootClose:!1,show:!0},o.createElement(l.v$m,{classPrefix:r,className:c("ColorPicker-popover",N),onHide:this.close,overlay:!0},V?o.createElement(h.xS,{styles:{},disableAlpha:!!~["rgb","hex"].indexOf(P),color:d,presetColors:p,onChangeComplete:this.handleChange}):o.createElement(h.Lf,{color:d,colors:Array.isArray(p)?p.filter(function(n){return typeof n=="string"||(0,l.Kn2)(n)}).map(function(n){return typeof n=="string"?n:(0,l.Kn2)(n)?n==null?void 0:n.color:n}):void 0,onChangeComplete:this.handleChange}))):null,f&&o.createElement(_.Z,{className:c("".concat(r,"ColorPicker-popup")),container:O,isShow:g,onHide:this.handleClick,showConfirm:!0,onConfirm:this.handleConfirm},V?o.createElement(h.xS,{styles:{},disableAlpha:!!~["rgb","hex"].indexOf(P),color:M,presetColors:p,onChangeComplete:this.handleTempChange}):o.createElement(h.Lf,{color:M,colors:Array.isArray(p)?p.filter(function(n){return typeof n=="string"||(0,l.Kn2)(n)}).map(function(n){return typeof n=="string"?n:(0,l.Kn2)(n)?n==null?void 0:n.color:n}):void 0,onChangeComplete:this.handleTempChange})))},a.defaultProps={format:"hex",clearable:!0,placeholder:"ColorPicker.placeholder",allowCustomColor:!0},(0,u.gn)([l.NjZ,(0,u.w6)("design:type",Function),(0,u.w6)("design:paramtypes",[String]),(0,u.w6)("design:returntype",void 0)],a.prototype,"validateColor",null),a}(o.PureComponent),k=(0,l.YYN)((0,l.eAU)((0,l.nmi)(y,{value:"onChange"})))}}]);