// 点击导航添加active类
;(function() {
  // 获取导航盒子
  var navBox = document.querySelector('header .header-nav>ul')

  var list = navBox.children
  // 滑动效果
  console.log(navBox.offsetWidth)
  var startX = 0
  var distance = 0
  navBox.addEventListener('touchstart', function(e) {
    e = e || event
    startX = e.touches[0].clientX
  })

  navBox.addEventListener('touchmove', function(e) {
    e = e || event
    distance = startX - e.changedTouches[0].clientX
  })

  navBox.addEventListener('touchend', function(e) {
    e = e || event
    navBox.style.left = -distance + 'px'
  })

  // 循环遍历
  for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('touchend', function() {
      for (var j = 0; j < list.length; j++) {
        list[j].classList.remove('active')
      }
      this.classList.add('active')
    })
  }
})()
