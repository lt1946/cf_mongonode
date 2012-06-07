	var jsdom=require('jsdom'),
		request = require('request'),
		jquery='http:code.jquery.com/jquery-1.7.2.min.js';
	
	var url='http:www.realgfporn.com/videos/page_1.html';
	
	jsdom.env(url,[jquery],function(err,win){
		var $ = win.$;
		var hotspot=$(".hotspot");
		hotspot.each(function(){
			var href=$(this).attr("href");
			if(href.indexof('http:www.realgfporn.com/')>=0&&href.indexof('.html')>0&&href.indexof("page_")<0){
				console.log($(this).find("strong").text()+"\t"+href);
			
				request(href,function(error,res,result){
					var pre=";so.addVariable('file','";
					var start=result.indexof(pre)+pre.length;
					console.log(result.subString(start,result.indexof("'",start)));
				})
			
			}
		});
	});