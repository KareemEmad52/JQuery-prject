let sidebarWidth = $('.sideBar').innerWidth()
$('.sideBar').css('left',-sidebarWidth)

$('.sideBar-outer').click(()=>{
    $('.sideBar').css('left',0)
})

$('.sideBar-inner i').click(() =>{
    $('.sideBar').css('left',-sidebarWidth)
})

let singers = $('#slideDown h3')
let singerDescription = $('#slideDown p')
for (let i = 0 ; i < singers.length;i++){
    singers.eq(i).click(()=>{
        singerDescription.eq(i).slideToggle(500);
    })
}
let days = Number($('#days').html())
let daysInterval = setInterval(countDownDays,86400000)
function countDownDays(){
    days -= 1;
    $('#days').html(days)
    if(days == 0){
        clearInterval(daysInterval);
    }
}


let hours = Number($('#hours').html())
let hoursInterval = setInterval(countDownhours,3600000)
function countDownhours(){
    hours -= 1;
    $('#hours').html(hours)
    if(days == 0){
        clearInterval(hoursInterval);
    } else if (hours == 0){
        hours = 24;
    }
}


let minutes = Number($('#minutes').html())
let minutesInterval = setInterval(countDownminutes,60000)
function countDownminutes(){
    minutes -= 1;
    $('#minutes').html(minutes)
    if(hours == 0){
        clearInterval(minutesInterval);
    } else if (minutes == 0){
        minutes = 60;
    }
}


let seconds = Number($('#seconds').html())
let secondsInterval = setInterval(countDownseconds,1000)
function countDownseconds(){
    seconds -= 1;
    $('#seconds').html(seconds)
    if(minutes == 0){
        clearInterval(secondsInterval);
    } else if (seconds == 0) {
        seconds = 60
    }
}


let sectionOffset = $('#slideDown').offset().top
console.log(sectionOffset);
$(window).scroll(()=>{
    let windowScrollTop = $(window).scrollTop()
    console.log(windowScrollTop);
    if(windowScrollTop > sectionOffset -410){
        $('.sideBar-outer').css('color','black')
    } else{
        $('.sideBar-outer').css('color','#fff')
    }
})