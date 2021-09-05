var cityWeather = {
	"result": [{
			"city": "Canberra",
			"temp_Celsius": 32,
			"temp_Fahr": 89.6
		},
		{
			"city": "Tokyo",
			"temp_Celsius": 27,
			"temp_Fahr": 80.6
		},
		{
			"city": "London",
			"temp_Celsius": 22,
			"temp_Fahr": 71.6
		},
		{
			"city": "Dubai",
			"temp_Celsius": 38,
			"temp_Fahr": 100.4
		}
	]
}

var featuresDestinations={
	"result": [{
			"city": "London",
			"imageUrl": "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
		},
		{
			"city": "Paris",
			"imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1952&q=80"
		},
		{
			"city": "Milano",
			"imageUrl": "https://images.unsplash.com/photo-1615915017883-ff58d7e33b0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
		},
		{
			"city": "Montreal",
			"imageUrl": "https://images.unsplash.com/photo-1519178614-68673b201f36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80"
		},
		{
			"city": "Japan",
			"imageUrl": "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80"
		},
		{
			"city": "India",
			"imageUrl": "https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
		},
		{
			"city": "Greece",
			"imageUrl": "https://images.unsplash.com/photo-1532234604265-fe9ed3175d5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
		},
		{
			"city": "Penang",
			"imageUrl": "https://images.unsplash.com/photo-1608982413524-3a3e1c1accb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80"
		}
	]
}
$(function(){
    console.log(featuresDestinations.result)
    for(var i = 0; i < cityWeather.result.length; i++){
        $('.weather_Count').append('<div class="count_Weather_dsg '+cityWeather.result[i].city+'_Dsg"><h2>'+cityWeather.result[i].city+'</h2><img src="./img/cloud.png" /><p>'+cityWeather.result[i].temp_Celsius+'&deg</p></div>');
    }
    for(var j = 0; j < featuresDestinations.result.length; j++){
        $('.featured_head').append('<div class="dest_dsg"><img src="'+featuresDestinations.result[j].imageUrl+'" /><p>'+featuresDestinations.result[j].city+'</p></div>');
    }
    
$('.quoteInput_dsg').keypress(function() {
    $('.err_msg').empty().hide();
    });
});

$(document).on('click','.quot_sbt',function() {
var getName = $('#yname').val();
var getContact = $('#cntct').val();
var getEmail = $('#email').val();
var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var validated = true;
if(getName == ""){
    $('.yname_evt').html('Name is required').show();
    validated = false;
}
if(getContact == ""){
    $('.contact_evt').html('Contact No is required').show();
    validated = false;
}
if(getEmail == ""){
    $('.email_evt').html('Email is required').show();
    validated = false;
}
if(!getContact.match('[0-9]{10}'))  {
    $('.contact_evt').html('Invalid Contact No').show();
    validated = false;
}
if(!regex.test(getEmail)) {
    $('.email_evt').html('Invalid Email').show();
    validated = false;
}
if(validated == true){
    $('.success_msg').show();
}
});