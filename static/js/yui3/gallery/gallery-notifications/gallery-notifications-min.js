YUI.add("gallery-notifications",function(B){var A=function(E,C,D){this.content=E;this.dateline=C;this.link=D;};B.Notifications=function(C){if(typeof(C)==="string"){C=B.DOM.byId(C);if(!C){}}this.sourceNode=C;this.parseNotifications();this.render();};B.Notifications.prototype.LABEL_NOTIFICATIONS="Notifications (%1)";B.Notifications.prototype.DAY_LABEL="%1 day ago";B.Notifications.prototype.DAYS_LABEL="%1 days ago";B.Notifications.prototype.HOUR_LABEL="%1 hour ago";B.Notifications.prototype.HOURS_LABEL="%1 hours ago";B.Notifications.prototype.MINUTE_LABEL="%1 minute ago";B.Notifications.prototype.MINUTES_LABEL="%1 minutes ago";B.Notifications.prototype.SECOND_LABEL="%1 second ago";B.Notifications.prototype.SECONDS_LABEL="%1 seconds ago";B.Notifications.prototype.sourceNode=null;B.Notifications.prototype.container=null;B.Notifications.prototype.notificationsNode=null;B.Notifications.prototype.unreadNode=null;B.Notifications.prototype.notifications=[];B.Notifications.prototype.unread=0;B.Notifications.prototype.parseNotifications=function(){if(!this.sourceNode){return;}var C=new RegExp("notification:([0-9]+)");var D=0;var G=this.sourceNode.children.length;for(var F=0;F<G;F++){var H=this.sourceNode.children[F];if(H.tagName.toUpperCase()!=="LI"){continue;}if(C.test(H.id)){var E=C.exec(H.id);D=E[1];}this.notifications.push(new A(H.innerHTML,D));}this.unread=this.notifications.length;};B.Notifications.prototype.parseTime=function(I){var C=new Date().getTime();if(I<1000000000000){I*=1000;}var F=Math.floor(Math.abs(C-I)/1000);var H=Math.floor(F/86400);var D=Math.floor(F%86400/3600);var E=Math.floor(F%3600/60);var G=Math.floor(F%3600%60);if(H>0){return H==1?this.DAY_LABEL.replace("%1",H):this.DAYS_LABEL.replace("%1",H);}if(D>0){return D==1?this.HOUR_LABEL.replace("%1",D):this.HOURS_LABEL.replace("%1",D);}if(E>0){return E==1?this.MINUTE_LABEL.replace("%1",E):this.MINUTES_LABEL.replace("%1",E);}if(G>0){return G==1?this.SECOND_LABEL.replace("%1",G):this.SECONDS_LABEL.replace("%1",G);}return"";};B.Notifications.prototype.getNotificationBit=function(E){var C=document.createElement("li");var D="";if(E.link){D+='<a href="'+E.link+'" target="_blank">';}D+=E.content;if(E.link){D+="</a>";}D+='<div class="time">'+this.parseTime(E.dateline)+"</div>";C.innerHTML=D;return C;};B.Notifications.prototype.updateUnread=function(C){if(C!==undefined){this.unread=C;}if(this.unreadNode){this.unreadNode.innerHTML=this.LABEL_NOTIFICATIONS.replace("%1",this.unread);}};B.Notifications.prototype.render=function(){var C=document.createElement("div");B.DOM.addClass(C,"yui3-notifications");var E=document.createElement("div");B.DOM.addClass(E,"yui3-notifications-tab");B.DOM.addClass(E,"closed");C.appendChild(E);var K=document.createElement("div");B.DOM.addClass(K,"yui3-notifications-pop");B.DOM.setStyle(K,"visibility","hidden");C.appendChild(K);var I=this;E.onclick=function(){I.switchStatus(E,K);};var H=document.createElement("ul");K.appendChild(H);var G=this.notifications.length;for(var F=0;F<G;F++){var D=this.notifications[F];var J=this.getNotificationBit(D);H.appendChild(J);}this.container=C;this.notificationsNode=H;this.unreadNode=E;this.updateUnread();document.body.appendChild(this.container);if(this.sourceNode){this.sourceNode.parentNode.removeChild(this.sourceNode);}};B.Notifications.prototype.switchStatus=function(E,D){var G=B.get(E);var C=B.get(D);if(C.getStyle("visibility")==="hidden"){G.addClass("open");G.removeClass("closed");var F=D.offsetHeight;C.setStyle("visibility","visible");}else{C.setStyle("visibility","hidden");G.removeClass("open");G.addClass("closed");}};B.Notifications.prototype.addNotification=function(D){if(typeof(D)!=="object"){return;}if(!D.content){return;}if(!D.dateline){return;}var E=new A(D.content,D.dateline,D.link);this.notifications.push(E);var C=this.getNotificationBit(E);this.notificationsNode.appendChild(C);this.unread++;this.updateUnread();};B.Notifications.prototype.addNotificationsFromCallback=function(G,C){var F=null;try{F=B.JSON.parse(C.responseText);}catch(E){}if(F.length){for(var D=0;D<F.length;D++){this.addNotification(F[D]);}}else{this.addNotification(F);}};B.Notifications.prototype.registerSource=function(F,E){var D=null;if(typeof(F)==="string"){D=function(){return F;};}if(typeof(F)==="function"){D=F;}var G=this;var C=function(){B.io(D(),{on:{complete:G.addNotificationsFromCallback},context:G});};this.timeoutId=setInterval(C,(E||1)*60*1000);C();};},"gallery-2010.04.14-19-47",{requires:["dom","node","json-parse","io-base"]});