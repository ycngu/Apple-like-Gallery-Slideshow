$imgs = $('.sliders>img')
$menu = $('.menu>li')
$sliders = $('.sliders')
$menu.first().addClass('active')

$sliders.on('mouseenter'){
    setTimer()
}

$sliders.on('mouseeleave'){
    clearInterval(timer)
}

$menu.on('click', function (e) {
    $(e.currentTarget).addClass('active').siblings().removeClass('active')
    current = $(e.currentTarget).index()
    gotoPic(current)
})




function setTimer() {
    var n = 0
    return timer = setInterval(function () {
        if (n > 3) {
            n = 0
        }
        $menu.eq(n).trigger('click')
        n++
    }, 2000)
}

function gotoPic(index) {
    $imgs.css({
        'transform': `translate(${-920 * index}px)`
    })
}