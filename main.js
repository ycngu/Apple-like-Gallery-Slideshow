init()
var n = 0

$sliders.on('mouseleave', () => {
    timer = setTimer()
})

$sliders.on('mouseenter', () => {
    clearInterval(timer)
})


$menu.on('click', function (e) {
    $(e.currentTarget).addClass('active').siblings().removeClass('active')
    var current = $(e.currentTarget).index()
    gotoPic(current)
    n = current
})

document.addEventListener('visibilitychange', function (e) {
    if (document.hidden) {
        clearInterval(timer)
    } else {
        timer = setTimer()
    }
})

function init() {
    $imgs = $('.sliders>img')
    $menu = $('.menu>li')
    $sliders = $('.sliders')
    $menu.first().addClass('active')

    timer = setTimer()
}

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