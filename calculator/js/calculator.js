
$(document).ready(function(){
	$('#calculate').click(function(){
		var number1= $('#n1').val();
		var number2= $('#n2').val();
		var operation= $('#op').val();
		if(operation=='Addition'){
			var total=parseInt(number1)+parseInt(number2);
			alert(total);
		}
		
	});
});



