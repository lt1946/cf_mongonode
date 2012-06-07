	var jsdom=require('jsdom'),
		request = require('request'),
		jquery='http://code.jquery.com/jquery-1.7.2.min.js';
	
	var url='http://www.realgfporn.com/videos/page_1.html';		//TODO  show on html viewer and export txt and so on or watch video online.
	
	jsdom.env(url,[jquery],function(err,win){
		if(err){console.log(err);return;}
		var $ = win.$;
		var hotspot=$(".hotspot");
		hotspot.each(function(){
			var href=$(this).attr("href");
			if(href.indexOf('http://www.realgfporn.com/')>=0&&href.indexOf('.html')>0&&href.indexOf("page_")<0){
				console.log($(this).find("strong").text()+"\t"+href);
				request(href,function(error,res,result){
					var pre=";so.addVariable('file','";
					var start=result.indexOf(pre)+pre.length;
					var mv=result.substring(start,result.indexOf("'",start));
					if(mv.length<100)console.log(mv);
				})
			}
		});
	});