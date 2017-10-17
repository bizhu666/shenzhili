$(function(){
//	$("#more").click(function(){
		$.ajax({
					type:"get",
					url:"js/index.json",
					dataType:"json",
					success:function(data){
						var leng=data.length;
						if(leng>0){
							$.each(data, function(i) {
								var htmls='<p>'+data[i].name+'</p>';
								$("#text").append(htmls);						
							});
						}
						
					}
		})
//	})
	$.ajax({
					type:"get",
					url:"js/indexc.json",
					dataType:"json",
					success:function(data){
						var leng=data.length;
						if(leng>0){
							$.each(data, function(i) {
								var htmls='<li><a href="#2">'+data[i].name+'</a><span>'+data[i].time+'</span></li>';
								$("#chan").append(htmls);						
							});
						}
						
					}
		})	
})