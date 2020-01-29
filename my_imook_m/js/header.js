//header部分的特效
window.onload = function() {
	//头部的js
	;(function() {
		// 为input注册获取焦点事件
		// 获取收索框
		var inputBox = document.querySelector('#header .search>input')
		//获取需要显示和隐藏的元素
		var tishi = document.querySelector('#header .tishi')
		inputBox.onfocus = function() {
			tishi.style.display = "none"
		}
		inputBox.onblur = function() {
			tishi.style.display = "block"
		}
		
		//点击登录显示登录框
		// 获取登录按钮
		var loginBtn = document.querySelector('#header .sign-in')
		// 获取注册按钮
		var registerBth = document.querySelector('#header .sign-up')
		// 获取登录框
		var loginBox = document.querySelector('.login')
		// 获取注册框
		var registerBox = document.querySelector('.register')
		// 获取遮挡层
		var maskBox = document.querySelector('.mask')
		// 获取关闭登录框按钮
		var loginCloseBth = document.querySelector('.login-close')
		// 获取关闭注册框按钮
		var registerCloseBth = document.querySelector('.register-close')
		
		// 获取登录框用户名
		var usernameBox = document.querySelector('.login .login-body .phone')
		// 获取登录框密码
		var pwdBox = document.querySelector('.login .login-body .pwd')
		// 获取登录按钮
		var isLoginBth = document.querySelector('.login .login-btn')
		// 获取显示登录
		var isShowRegister = document.querySelector('.login .isShowRegister')
		//获取显示注册
		var isShowLogin = document.querySelector('.register .isShowLogin')
		isShowRegister.onclick = function() {
			// 显示登录框
			registerBox.style.display = "block"
			// 显示遮挡层
			maskBox.style.display = "block"
			loginBox.style.display = "none"
		}
		
		isShowLogin.onclick = function() {
			// 显示登录框
			loginBox.style.display = "block"
			// 显示遮挡层
			maskBox.style.display = "block"
			registerBox.style.display = "none"
		}
		
		// 退出登录功能
		registerBth.addEventListener('click',function() {
			if(registerBth.innerHTML=='退出') {
				localStorage.removeItem('isLogin')
				location.reload()
				return
			}
		})
		
		// 为手机框注册失去焦点事件
		usernameBox.onblur = function() {
			var value = this.value
			var regPhone = /^[1][3,4,5,7,8][0-9]{9}$/;
			 var regEmail = new RegExp("^([0-9A-Za-z\\-_\\.]+)@([0-9a-z]+\\.[a-z]{2,3}(\\.[a-z]{2})?)$");
			if(!regPhone.test(value)) {
				this.nextElementSibling.innerHTML = '请输入正确的邮箱或手机号'
				return
			}else {
				this.nextElementSibling.innerHTML = ''
				return
			}
			if(!regEmail.test(value)) {
				this.nextElementSibling.innerHTML = '请输入正确的邮箱或手机号'
				return
			}else {
				this.nextElementSibling.innerHTML = ''
			}
		}
		
		pwdBox.onblur = function() {
			var value = this.value
			var regPwd = /^\w{6,16}$/;
			if(!regPwd.test(value)) {
				this.nextElementSibling.innerHTML = '请输入6-16位密码,区分大小写,不能用空格'
				return
			}else {
				this.nextElementSibling.innerHTML = ''
			}
		}
		
		isLoginBth.onclick = function() {
			if(usernameBox.value =='15282033704' && pwdBox.value == '123456') {
				localStorage.setItem('isLogin','黄万通')
				isLoginBth.innerHTML = '登录成功...'
				setTimeout(function() {
					loginBox.style.display = "none"
					maskBox.style.display = "none"
				 	loginBtn.innerHTML = localStorage.getItem('isLogin')
				 	registerBth.innerHTML = '退出'
					usernameBox.value = pwdBox.value = ''
				},2000)
			}else {
				
			}
		}
		
		// 为登录按钮注册点击事件
		loginBtn.onclick = function(){
			isLoginBth.innerHTML = '登录'
			// 显示登录框
			loginBox.style.display = "block"
			// 显示遮挡层
			maskBox.style.display = "block"
		}
		// 为注册按钮注册点击事件
		registerBth.onclick = function(){
			// 显示登录框
			registerBox.style.display = "block"
			// 显示遮挡层
			maskBox.style.display = "block"
		}
		// 为关闭登录按钮注册点击事件
		loginCloseBth.onclick = function() {
			loginBox.style.display = "none"
			maskBox.style.display = "none"
			registerBox.style.display = "none"
			
		}
		// 为关闭注册按钮注册点击事件
		registerCloseBth.onclick = function() {
			registerBox.style.display = "none"
			maskBox.style.display = "none"
			loginBox.style.display = "none"
		}
		
		
		
		
		// 固定导航
		var fiexdNav = document.querySelector('.fiexd-nav')
		var fiexdNavList = fiexdNav.querySelectorAll('a')
		for(var i = 0;i<fiexdNavList.length;i++) {
			fiexdNavList[i].onmouseenter = function() {
				this.children[0].style.display = 'block'
				this.children[1].style.display = 'none'
				
			}
			fiexdNavList[i].onmouseleave = function() {
				this.children[0].style.display = 'none'
				this.children[1].style.display = 'block'
			}
		}
		
	}())
	
	//轮播和导航的js
	;(function() {
		// 获取导航list元素
		var lunbotuNavList = document.querySelector('#lunbotu .lunbotu-nav-list');
		var listObjs = lunbotuNavList.children;
		// 获取显示框
		var lunbotuAsideBox = document.querySelector('#lunbotu .lunbotu-aside-box')
		// 循环遍历元素
		for(var i = 0;i<listObjs.length;i++) {
			// 为每一个元素注册鼠标经过事件
			listObjs[i].onmouseenter = function() {
				lunbotuAsideBox.style.display = "block"
			}
			listObjs[i].onmouseleave = function() {
				lunbotuAsideBox.style.display = "none"
			}
		}
		
		//轮播图
		// 获取轮播图大盒子
		var lunbotuMain = document.querySelector('#lunbotu .lunbotu-main')
		// 获取图片
		var lunbotuImgBox = lunbotuMain.children[0]
		var lunbotucircleBox = lunbotuMain.children[1]
		var lunbotuarrows = lunbotuMain.children[2]
		// 获取所有图片盒子
		var imgLists = lunbotuImgBox.children
		// 获取所有的小圆点
		var circles = lunbotucircleBox.children
		// 获取左按钮
		var arrLeft = lunbotuarrows.children[0]
		// 获取右按钮
		var arrRight = lunbotuarrows.children[1]
		var index = 0
		for(var i = 0;i<circles.length;i++) {
			circles[i].setAttribute('index',i)
			circles[i].onclick = function() {
				index = this.getAttribute('index')
				for(var j = 0;j<circles.length;j++) {
					// 清除所有小圆点的active类
					circles[j].className = ''
				}
				this.className = 'active'
				// 循环遍历所有的图片
				for(var x= 0;x<imgLists.length;x++) {
					imgLists[x].style.opacity = '0'
				}
				imgLists[index].style.opacity = '1'
			}
		}
		
		// 点击右按钮显示下一张
		arrRight.onclick = arrRightClick;
		
		function arrRightClick() {
			
			index++
			if(index==imgLists.length) {
				index = 0
			}
			for(var j = 0;j<circles.length;j++) {
					// 清除所有小圆点的active类
					circles[j].className = ''
				}
			circles[index].className = 'active'
			
			for(var x= 0;x<imgLists.length;x++) {
					imgLists[x].style.opacity = '0'
				}
			imgLists[index].style.opacity = '1'
			
		}
		// 点击左按钮显示上一张
		arrLeft.onclick = function() {
			console.log(index)
			if(index==0) {
				index = imgLists.length
			}
			index--
			for(var j = 0;j<circles.length;j++) {
					// 清除所有小圆点的active类
					circles[j].className = ''
				}
			circles[index].className = 'active'
			
			for(var x= 0;x<imgLists.length;x++) {
					imgLists[x].style.opacity = '0'
				}
			imgLists[index].style.opacity = '1'
			
		}
		
		// 自动轮播图片
//		var timeId = setInterval(arrRightClick,3000)
		
		// 为大盒子注册鼠标经过事件清除定时器
//		lunbotuMain.onmouseenter = function() {
//			clearInterval(timeId)
//		}
		
		// 为大盒子注册鼠标离开事件开启定时器
//		lunbotuMain.onmouseleave = function() {
//			timeId = setInterval(arrRightClick,3000)
//		}
	}())
	
	;(function() {
		// 登录注册验证
		// 获取登录框
		
	}())
}
