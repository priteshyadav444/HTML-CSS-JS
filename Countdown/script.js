function updateTimer(deadline)
{
	var time=deadline-new Date();
	return{
		'days':Math.floor(time/(1000*60*60*24)),
		'hours':Math.floor(time/(1000*60*60)%24),
		'minutes':Math.floor(time/(1000*60)%60),
		'seconds':Math.floor(time/(1000)%60),
		'total':time
	};
}
function  animate(span){
	span.className="turn"
	setTimeout(function(){
		span.classname="";
	},700);
}
function startTimer(id,deadline)
{
	var Timer=setInterval(function(){
    var clock=document.getElementById(id);
    var timer=updateTimer(deadline);
     if(timer.total<1)
	 {	windows.open("www.google.com"); }

    clock.innerHTML= '<span>'+timer.days +'</span>'
                   + '<span>'+timer.hours +'</span>'
                   + '<span>'+timer.minutes +'</span>'
                   + '<span>'+timer.seconds +'</span>';


	var spans=clock.getElementsByTagName("span");
	animate(spans[3]);
	if(timer.seconds==59 ) animate(spans[2]);
	if(timer.seconds==59 && timer.minutes==59 ) animate(spans[1]);
	if(timer.hours==23 && timer.minutes==59 && timer.seconds==59) animate(spans[0]);
	
	},1000);


	
}
window.onload=function()
{
	var deadline=new Date("April 10,2020 12:00:00");
	startTimer("clock",deadline);
}