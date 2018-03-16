$(document).ready(function () {
	$("#yearSelectedSales").change(function(){
		var year_selected = $("#yearSelectedSales option:selected").text()
		var link = "/ERP/sales_statistics_nation/" + $("#nation").attr('data-src') + '/'
		var info = 'year=' + year_selected
		$.download(link,info,'post' );
	})
});


jQuery.download = function(url, data, method){
    if( url && data ){ 
        data = typeof data == 'string' ? data : jQuery.param(data);
        var inputs = '';
        jQuery.each(data.split('&'), function(){ 
            var pair = this.split('=');
            inputs+='<input type="hidden" name="'+ pair[0] +'" value="'+ pair[1] +'" />';			
        });
        jQuery('<form action="'+ url +'" method="'+ (method||'post') +'">'+inputs+'</form>')
        .appendTo('body').submit().remove();
    };
};