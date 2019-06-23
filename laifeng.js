var zr_body=document.getElementsByTagName('body')[0];
			//显示隐藏div
			var newBtn=document.createElement('button');
			zr_body.appendChild(newBtn);
			var btnText = document.createTextNode("<<");
			newBtn.appendChild(btnText);
			newBtn.style.width='30px';
			newBtn.style.height='30px';
			newBtn.style.color='red';
			newBtn.style.zIndex=99999;
			newBtn.style.position='fixed';
			newBtn.style.left=0;
			newBtn.style.top=0;
			newBtn.setAttribute('onclick','showDiv();')
			//功能div
			var newDiv=document.createElement('div');
			zr_body.appendChild(newDiv);
			newDiv.style.zIndex=99999;
			newDiv.style.position='fixed';
			newDiv.style.left=0;
			newDiv.style.top='30px';
			newDiv.style.width='100px';
			newDiv.style.display='block';
			//添加发6开始按钮
			var newBtn_send6=document.createElement('button');
			var btnText_send6 = document.createTextNode("开始6");
			newBtn_send6.appendChild(btnText_send6);
			newBtn_send6.setAttribute('onclick','send6();')
			newDiv.appendChild(newBtn_send6);
			//停止发6按钮
			var newBtn_stop_send6=document.createElement('button');
			var btnText_send6 = document.createTextNode("停止6");
			newBtn_stop_send6.appendChild(btnText_send6);
			newBtn_stop_send6.setAttribute('onclick','stop_send6();')
			newDiv.appendChild(newBtn_stop_send6);
			//开始路转粉
			var newBtn_fans=document.createElement('button');
			var btnText_fans = document.createTextNode("开启路转粉");
			newBtn_fans.appendChild(btnText_fans);
			newBtn_fans.setAttribute('onclick','fans();')
			newDiv.appendChild(newBtn_fans);
			//关闭路转粉
			var newBtn_stop_fans=document.createElement('button');
			var btnText_stop_fans = document.createTextNode("关闭路转粉");
			newBtn_stop_fans.appendChild(btnText_stop_fans);
			newBtn_stop_fans.setAttribute('onclick','stop_fans();')
			newDiv.appendChild(newBtn_stop_fans);
			//开启自动上票
			var newBtn_money=document.createElement('button');
			var btnText_money = document.createTextNode("开启自动上票");
			newBtn_money.appendChild(btnText_money);
			newBtn_money.setAttribute('onclick','money();')
			newDiv.appendChild(newBtn_money);
			//关闭自动上票
			var newBtn_stop_money=document.createElement('button');
			var btnText_stop_money = document.createTextNode("关闭自动上票");
			newBtn_stop_money.appendChild(btnText_stop_money);
			newBtn_stop_money.setAttribute('onclick','stop_money();')
			newDiv.appendChild(newBtn_stop_money);
			//开启欢迎
			var newBtn_hy=document.createElement('button');
			var btnText_hy = document.createTextNode("开启欢迎");
			newBtn_hy.appendChild(btnText_hy);
			newBtn_hy.setAttribute('onclick','hy();')
			newDiv.appendChild(newBtn_hy);
			//添加输入框
			//输入框div
			var newDiv_hy=document.createElement('div');
			newDiv.appendChild(newDiv_hy);
			newDiv_hy.style.display='none';
			//输入框input
			var newInput_hy=document.createElement('input');
			newInput_hy.setAttribute('placeholder','请输入主播名称')
			newDiv_hy.appendChild(newInput_hy);
			//确定
			var newBtn_hy_y=document.createElement('a');
			var btnText_hy_y = document.createTextNode("确定");
			newBtn_hy_y.appendChild(btnText_hy_y);
			newBtn_hy_y.setAttribute('href','javascript:hy_y();')
			newBtn_hy_y.style.marginRight='5px'
			newBtn_hy_y.style.background='white';
			newDiv_hy.appendChild(newBtn_hy_y);
			//取消
			var newBtn_hy_n=document.createElement('a');
			var btnText_hy_n = document.createTextNode("取消");
			newBtn_hy_n.appendChild(btnText_hy_n);
			newBtn_hy_n.setAttribute('href','javascript:hy_n();')
			newBtn_hy_n.style.background='white';
			newDiv_hy.appendChild(newBtn_hy_n);
			//关闭欢迎
			var newBtn_stop_hy=document.createElement('button');
			var btnText_stop_hy = document.createTextNode("关闭欢迎");
			newBtn_stop_hy.appendChild(btnText_stop_hy);
			newBtn_stop_hy.setAttribute('onclick','stop_hy();')
			newDiv.appendChild(newBtn_stop_hy);
			//设置按钮样式
			var newDiv_btn=newDiv.getElementsByTagName('button');
			for(var i=0;max=newDiv_btn.length,i<max;i++){
				newDiv_btn[i].style.width='100px';
				newDiv_btn[i].style.height='30px';
				newDiv_btn[i].style.float='left';
			}
			//显示隐藏div
			function showDiv(){
				if(newDiv.style.display=='none'){
					newBtn.innerText='<<';
					newDiv.style.display='block';
				}else if(newDiv.style.display=='block'){
					newDiv.style.display='none';
					newBtn.innerText='>>';
				}
			}
			//开始6方法
			function send6(){
				var speak_txt1=document.getElementsByClassName('speak_txt')[0];
				var send_btn1=document.getElementsByClassName('send-btn')[0];
				var	click_value='666';
				zr_send6_timer=setInterval(function(){
					speak_txt1.value=click_value;
					send_btn1.click();
					click_value+='6';
					if(click_value=='6666666'){
						click_value='666'
					}
				},4000);
			}
			//停止6方法
			function stop_send6(){
				clearInterval(zr_send6_timer);
			}
			//开启路转粉
			function fans(){
				var get_pssname='0';
				var zf_str="，感谢路转粉[亲亲]";
				function zf_method(){
					var zr_username_pss=document.getElementsByClassName('pss')
					if(zr_username_pss.length){
						var zr_username_pss_prnt=zr_username_pss[zr_username_pss.length-1].parentNode.childNodes[0].outerText
						if(get_pssname!=zr_username_pss_prnt){
							var zf_speak_txt1=document.getElementsByClassName('speak_txt')[0];
							var zf_send_btn1=document.getElementsByClassName('send-btn')[0];
							var	zf_click_value='@'+zr_username_pss_prnt+zf_str;
							zf_speak_txt1.value=zf_click_value;
							zf_send_btn1.click();
							zf_speak_txt1.value='';
						}
						get_pssname=zr_username_pss_prnt;
					}
				}
				zf_timer=setInterval(function(){
					zf_method();
				},500);
			}
			//关闭路转粉
			function stop_fans(){
				clearInterval(zf_timer);
			}
			//开启自动上票
			function money(){
				//疯斗自动上1票	
				count_timer=setInterval(function(){
					var down_count=document.getElementsByClassName('down-count')[0];
					var send_btn2=document.getElementsByClassName('send-btn')[1];
					var m_count=document.getElementsByClassName('m-count')[0];
					var set_time='298s';
					var set_time2='898s';
					var set_money=0;
					if(down_count&&m_count){
						if((m_count.innerText==set_money)&&((down_count.innerText==set_time)||(down_count.innerText==set_time2))){
							send_btn2.click();
						}
					}
				},700)
			}
			//关闭疯斗自动上票
			function stop_money(){
				clearInterval(count_timer);
			}
			//开启欢迎
			function hy(){
				newDiv_hy.style.display='block'
			}
			function hy_y(){
				if(newInput_hy.value){
					hy_str2=newInput_hy.value;
					//欢迎
					var get_username='0';
					hy_str1="，来到";
					hy_str3='的直播间 喜欢主播点点关注[亲亲]'
					hy_str=hy_str1+hy_str2+hy_str3;
					function hy_method(){
						var rec_title=document.getElementsByClassName('rec-title')[0];
						var zr_enter=document.getElementsByClassName('enter');
						var zr_username=zr_enter[zr_enter.length-1].getElementsByClassName('user-name')[0].outerText;
						if(get_username!=zr_username){
							var zr_userlevel=zr_enter[zr_enter.length-1].getElementsByClassName('ICON-noble-level')[0];
							var zr_user_active=zr_enter[zr_enter.length-1].getElementsByClassName('ICON-active-level-bg')[0];
							var zr_user_medal=zr_enter[zr_enter.length-1].getElementsByClassName('ICON-medal')[0];
							if(zr_userlevel||zr_user_active||zr_user_medal){
								var speak_txt1=document.getElementsByClassName('speak_txt')[0];
								var send_btn1=document.getElementsByClassName('send-btn')[0];
								var	click_value='欢迎 '+zr_username+hy_str;
								speak_txt1.value=click_value;
								send_btn1.click();
								speak_txt1.value='';
							}	
						}
						get_username=zr_username;
					}
					m_t_timer=setInterval(function(){
						hy_method();
					},600);
					newDiv_hy.style.display='none'
				}else{
					alert('主播名称不能为空');
				}
			}
			//取消输入主播名称
			function hy_n(){
				newDiv_hy.style.display='none';
			}
			//关闭欢迎
			function stop_hy(){
				clearInterval(m_t_timer);
			}