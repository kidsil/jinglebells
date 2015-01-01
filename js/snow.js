!function(window){"use strict";var proto={idIndex:1,sizes:['','snow-small','snow-med','snow-large'],speeds:['','snow-slow','snow-med','snow-fast'],opacities:['','snow-faint','snow-light','snow-dark'],delays:['','snow-delay-1','snow-delay-2','snow-delay-3','snow-delay-4','snow-delay-5','snow-delay-6'],randomBetween:function(start,end){return Math.floor(Math.random()*(end- start+ 1)+ start);},findKeyframeAnimation:function(name){var stylesheet=document.styleSheets,i,j;for(i=stylesheet.length- 1;i>=0;i--){var sheet=stylesheet[i],rules=sheet.cssRules?sheet.cssRules:sheet.rules?sheet.rules:[];for(j=rules.length- 1;j>=0;j--){if((rules[j].type===window.CSSRule.WEBKIT_KEYFRAMES_RULE||rules[j].type===window.CSSRule.MOZ_KEYFRAMES_RULE)&&rules[j].name===name){return rules[j];}}}
return null;},updateKeyframeHeight:function(){var keyframe=this.findKeyframeAnimation('falling'),rule;if(keyframe){var height=this.pageContainer.offsetHeight;if(window.innerHeight>height){height=window.innerHeight;}
if(keyframe.cssText.match(/-webkit-/)){rule='100% { -webkit-transform: translate3d(0,'+ height+'px,0) rotate(360deg); }';}else if(keyframe.cssText.match(/-moz-/)){rule='-moz-transform: translate(0,'+ height+'px) rotate(360deg);';}else if(keyframe.cssText.match(/-o-/)){rule='-o-transform: translate(0,'+ height+'px) rotate(360deg);';}
keyframe.insertRule(rule);}},addSnow:function(pageID,snowID,count){this.pageContainer=document.getElementById(pageID);this.snowContainer=document.getElementById(snowID);var i=0;this.updateKeyframeHeight();while(i<count){var snowflake=document.createElement('i'),size=this.sizes[this.randomBetween(0,this.sizes.length- 1)],speed=this.speeds[this.randomBetween(0,this.speeds.length- 1)],opacity=this.opacities[this.randomBetween(0,this.opacities.length- 1)],delay=this.delays[this.randomBetween(0,this.delays.length- 1)];snowflake.setAttribute('id','snowId'+ this.idIndex);snowflake.setAttribute('class','snow '+ size+' '+ speed+' '+ opacity+' '+ delay);snowflake.setAttribute('style','left: '+ this.randomBetween(0,100)+'%;');this.snowContainer.appendChild(snowflake);i++;this.idIndex++;}}};window.snow=Object.create(proto);}(window);