$imgs = $('.sliders>img')
$menu = $('.menu>li')
$sliders = $('.sliders')
$menu.first().addClass('active')

timer = setTimer()

$sliders.on('mouseleave',()=>{
    timer = setTimer()
    console.log('leave')
})

$sliders.on('mouseenter',()=>{
    clearInterval(timer)
    console.log('clear')
})


$menu.on('click', function (e) {
    $(e.currentTarget).addClass('active').siblings().removeClass('active')
    current = $(e.currentTarget).index()
    gotoPic(current)
    n = current
    console.log(current)
})


var n = 0

function setTimer() {
    return setInterval(function () {
        if (n > 3) {
            n = 0
        }
        $menu.eq(n).trigger('click')
        n += 1
    }, 2000)
}

function gotoPic(index) {
    $imgs.css({
        'transform': `translate(${-920 * index}px)`
    })
}