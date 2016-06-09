"use strict";

class SnoozeSquad
{
	constructor(options)
	{
		this.range = 1;
		this.attributeName = "data-src";
		this.updateInterval = 250;
		
		for (let optionKey in options)
			this[optionKey] = options[optionKey];
		
		this.querySelector = `[${this.attributeName}]`;
		this.lastUpdateTime = 0;
		this.start();
	}
	
	start()
	{
		// Passive event listener check from
		// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
		var supportsPassiveEvents = false;
		try {
		  var opts = Object.defineProperty({}, 'passive', { get: function() { supportsPassiveEvents = true; } });
		  window.addEventListener("test", null, opts);
		} catch (e) {}
		window.addEventListener("scroll", (function(event) {
			if((+new Date()) - this.lastUpdateTime > this.updateInterval)
				this.update();
		}).bind(this), supportsPassiveEvents ? { passive: true } : false);
	}
	
	update()
	{
		this.lastUpdateTime = +new Date();
		//console.log("Updating");
		var snoozingElements = this.getSnoozingElements();
		for (let element of snoozingElements)
		{
			if(this.isElementInRange(element))
				this.wakeUpElement(element);
		}
	}
	
	getSnoozingElements()
	{
		return document.querySelectorAll(this.querySelector);
	}
	
	isElementInRange(element)
	{
		var bounds = element.getBoundingClientRect(),
			range = this.range * window.innerHeight;
		
		if(bounds.bottom > -range && bounds.top < window.innerHeight + range &&
			bounds.right > -range && bounds.left < window.innerWidth + range)
		{
			return true;
		}
		
		return false;
	}
	
	wakeUpElement(element)
	{
		var attr = this.attributeName.replace("data-", "");
		if(element.dataset.hasOwnProperty(attr))
		{
			//console.info("Woke up element", element);
			element.src = element.dataset[attr];
		}
		else
		{
			//console.warn(`Failed to wake up element (no ${attr} attribute present)`);
		}
	}
}

