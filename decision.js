$(document).ready(function(){
		
	var myObject=(function(){

		var principal=2000;   //本金
		var border_flag=0;   //当前的状况中，有边框显示吗？0表示没有；1表示有。
		var good_num=0;    //有利牌的数目
		var bad_num=0;    //不利牌的数目
		var num=0;        //选择的次数
		var max=20;    //总的的游戏次数，100
		var max_phase=10;   //某一阶段的游戏次数 20
		var table;    //每次实验的结果对象
		var table_array=new Array();      //存储实验结果对象的数组。 
		var start_time=0;   // 每个trail的开始时间
		var end_time=0;    //结束时间
		var adv_harm=0;    //选择的是有利还是不利
		var array_4=new Array();   //存储第四副牌的数组
		var array_3=new Array();   //存储第三副牌的数组
		var array_2=new Array();   //存储第二副牌的数组
		var array_1=new Array();   //存储第一副牌的数组
		var count_4=0;   //存储第四副牌的点击次数
		var count_3=0;   //存储第三副牌的点击次数
		var count_2=0;   //存储第二副牌的点击次数
		var count_1=0;   //存储第一副牌的点击次数
		var array_id=new Array();    //存储游戏的序列
		var array_gain=new Array();    //每个阶段的净得分的数组

		array_id[0]=1;
		array_id[1]=2;
		array_id[2]=3;
		array_id[3]=4;
		array_id[4]=5;

		var gain_1=0;    //第一阶段的收益
		var gain_2=0;	 //第二阶段的收益
		var gain_3=0;	 //第三阶段的收益
		var gain_4=0;	 //第四阶段的收益
		var gain_5=0;	 //第五阶段的收益
		var good_pre=0;    //上一阶段有利牌的数目
		var bad_pre=0;    //上一阶段不利牌的数目
		var every_gain=0;   //每一次选择后的净收益 
		var good_every_pre=0;   //有利数目，每一次，中转
		var bad_every_pre=0;   //不利数目，每一次，中转
		
		//记录的结果
		var radioset='';
        var buttonset='';
        var numset='';
        var commentset='';
        var type4set='';
        var timeset='';
        var stimidset='';
        var eventtimeset='';
        var eventelapseset='';
        var correctanswerset='';
        var radiolist1set='';
        var radiolist2set='';
        var radiolist3set='';
        var radiolist4set='';
        var radiolist5set='';
        var radiolist6set='';
        var radiolist7set='';
        var radiolist8set='';
        var radiolist9set='';
        var radiolist10set='';

		//游戏开始
		var start=function(){
		 var x = [1,2,3,4,5];
		 var y = [0,2,0,-2,0];

		$("#start").click(function(){    //开始按钮的点击事件
			//alert('start');
			$('#introduction').css('display','none');
			$('#container').css('display','block');
			start_time=new Date();
		});
		$("#card1").click(function(){    //第一张牌的点击事件
			if(border_flag==0){
				if(num<max){
					adv_harm=0;
					end_time=new Date();
					table={
						'card_id':'1',
						'in_2':'100',
						'out':'0'
					};						
					bad_num++;			  			  	
				  	$("#card1 img").css('border','5px solid steelblue');				  
				    $("#in").text('100');
				    var out=operate_1();
				    $("#out").text(out);
				    principal=principal+100+out;
				    $("#balance").text(principal);
				    table.out=out;
				    table_array[num]=table;
				    phaseOperate();

				    num++;
				    border_flag=1;
				}else{
					$('#again').attr('value','游戏结束');
					endOperate();
				}					
			}			  			  
		});

		$("#card2").click(function(){     //第二张牌的点击事件
			if(border_flag==0){
				if(num<max){
				adv_harm=0;
				end_time=new Date();
					table={
						'card_id':'2',
						'in_2':'100',
						'out':'0'
					};						
					bad_num++;			  
				  	$("#card2 img").css('border','5px solid steelblue');					  
				    $("#in").text('100');
				    var out=operate_2();
				    $("#out").text(out);
				    principal=principal+100+out;
				    $("#balance").text(principal);
				    table.out=out;
				    table_array[num]=table;
				    phaseOperate();

				    num++;
				    border_flag=1;
				}else{
					$('#again').attr('value','游戏结束');
					endOperate();
				}					
			}			    
		});

		$("#card3").click(function(){      //第三张牌的点击事件
			if(border_flag==0){
				if(num<max){
				adv_harm=1;
				end_time=new Date();
					table={
						'card_id':'3',
						'in_2':'50',
						'out':'0'
					};						
					good_num++;			  
				  	$("#card3 img").css('border','5px solid steelblue');				  
				    $("#in").text('50');
				    var out=operate_3();
				    $("#out").text(out);
				    principal=principal+50+out;
				    $("#balance").text(principal);
				    table.out=out;
				    table_array[num]=table;
				    phaseOperate();

				    num++;
				    border_flag=1;
				}else{
					$('#again').attr('value','游戏结束');
					endOperate();
				}					
			}			  
		});

		$("#card4").click(function(){       //第四张牌的点击事件
			if(border_flag==0){
				if(num<max){
				adv_harm=1;
				end_time=new Date();
					table={
						'card_id':'4',
						'in_2':'50',
						'out':'0'
					};						
					good_num++;
					$("#card4 img").css('border','5px solid steelblue');
					$("#in").text('50');
				    var out=operate_4();
				    $("#out").text(out);
				    principal=principal+50+out;
				    $("#balance").text(principal);
					table.out=out;
				    table_array[num]=table;
				    phaseOperate();

				    num++;
				    border_flag=1;
				}else{
					$('#again').attr('value','游戏结束');
					endOperate();
				}					
			}		  
		});

		$("#again").click(function(){                 //再来一次的点击事件			
			if(border_flag==1){					
				$("#card1 img").css('border','');
				$("#card2 img").css('border','');
				$("#card3 img").css('border','');
				$("#card4 img").css('border','');
				border_flag=0;
				$("#in").text('0');
			    $("#out").text('0');
			    $('#again').val('请选择一张牌');
				
				//记录结果
				numset+=';';    //最后一个分号不要。
				timeset+=(end_time-start_time)+';';         //最后一个分号不要。
								
				stimidset+=num+';';
				type4set+='0;';
				correctanswerset+=';';
				buttonset+=table.card_id+';';
				eventtimeset+=';';
				eventelapseset+=';';
				radiolist1set+=';';
				radiolist2set+=';';
				radiolist3set+=';';
				radiolist4set+=';';
				radiolist5set+=';';
				radiolist6set+=';';
				radiolist7set+=';';
				radiolist8set+=';';
				radiolist9set+=';';
				radiolist10set+=';';
				var adv=0;
				var harm=0;
				if(adv_harm>0){
					adv=1;
				}else{
					harm=1;
				}
				commentset+='no:'+num+'.loss:'+table.out+'.profit:'+table.in_2+'.result:'+principal+'.advantagebutton:'+adv+'.harmbutton:'+harm+'.netscore:'+every_gain+';';   //在这里增加every_gain
				start_time=new Date();
			}				
				
			});			
		};

		var phaseOperate=function(){			         //每一阶段结束后的处理操作
			$('#again').val('再选一次');
			if((num+1)%max_phase==0){
		    	//20的倍数
		    	if((num+1)/max_phase==1){
		    		//20的倍数：1		    		
		    		gain_1=(good_num-bad_num);
		    		good_pre=good_num;
		    		bad_pre=bad_num;
		    	}else if((num+1)/max_phase==2){
		    		gain_2=(good_num-good_pre)-(bad_num-bad_pre);
		    		good_pre=good_num;
		    		bad_pre=bad_num;
		    	}else if((num+1)/max_phase==3){
		    		gain_3=(good_num-good_pre)-(bad_num-bad_pre);
		    		good_pre=good_num;
		    		bad_pre=bad_num;
		    	}else if((num+1)/max_phase==4){
		    		gain_4=(good_num-good_pre)-(bad_num-bad_pre);
		    		good_pre=good_num;
		    		bad_pre=bad_num;
		    	}else if((num+1)/max_phase==5){
		    		gain_5=(good_num-good_pre)-(bad_num-bad_pre);
		    		good_pre=good_num;
		    		bad_pre=bad_num;
		    	}else{

		    	}
		    }

		    every_gain=(good_num-good_every_pre)-(bad_num-bad_every_pre);

		    if((num+1)%max_phase==0){
		    	//20的倍数
	      		//gain_every=(good_num-bad_num);
	    		good_every_pre=good_num;
	    		bad_every_pre=bad_num;		    	
		    }
		}	

		var endOperate=function(){			         //游戏结束后的操作
			$('#container').css('display','none');
			$('#record').css('display','block');			
			
			numset=numset.substring(0,numset.length-1);    //最后一个分号不要。
			timeset=timeset.substring(0,timeset.length-1);         //最后一个分号不要。
			stimidset=stimidset.substring(0,stimidset.length-1);
			type4set=type4set.substring(0,type4set.length-1);
			correctanswerset=correctanswerset.substring(0,correctanswerset.length-1);
			buttonset=buttonset.substring(0,buttonset.length-1);
			eventtimeset=eventtimeset.substring(0,eventtimeset.length-1);
			eventelapseset=eventelapseset.substring(0,eventelapseset.length-1);
			radiolist1set=radiolist1set.substring(0,radiolist1set.length-1);
			radiolist2set=radiolist2set.substring(0,radiolist2set.length-1);
			radiolist3set=radiolist3set.substring(0,radiolist3set.length-1);
			radiolist4set=radiolist4set.substring(0,radiolist4set.length-1);
			radiolist5set=radiolist5set.substring(0,radiolist5set.length-1);
			radiolist6set=radiolist6set.substring(0,radiolist6set.length-1);
			radiolist7set=radiolist7set.substring(0,radiolist7set.length-1);
			radiolist8set=radiolist8set.substring(0,radiolist8set.length-1);
			radiolist9set=radiolist9set.substring(0,radiolist9set.length-1);
			radiolist10set=radiolist10set.substring(0,radiolist10set.length-1);
			commentset=commentset.substring(0,commentset.length-1);

			array_gain[0]=gain_1;
			array_gain[1]=gain_2;
			array_gain[2]=gain_3;
			array_gain[3]=gain_4;
			array_gain[4]=gain_5;

			var corre=getPearsonCorrelation(array_id,array_gain);
			for(var i=0;i<max;i++){
				radioset+=corre+';';
			}
			radioset=radioset.substring(0,radioset.length-1);

			var result='';
			result+='numset:'+numset+'<br>';
			result+='timeset:'+timeset+'<br>';
			result+='stimidset:'+stimidset+'<br>';
			result+='type4set:'+type4set+'<br>';
			result+='correctanswerset:'+correctanswerset+'<br>';
			result+='buttonset:'+buttonset+'<br>';
			
			result+='eventtimeset:'+eventtimeset+'<br>';
			result+='eventelapseset:'+eventelapseset+'<br>';
			result+='radiolist1set:'+radiolist1set+'<br>';
			result+='commentset:'+commentset+'<br>';
			result+='radioset:'+radioset+'<br>';
			
			
			result+='<table cellspacing="10"><td>纸牌名称</td><td>获得收益</td><td>损失收益</td>';
			for(var i=0;i<table_array.length;i++){
				result+='<tr><td>'+table_array[i].card_id+'</td><td>'+table_array[i].in_2+'</td><td>'+table_array[i].out+'</td></tr>';
			}
			result+='最终收益：'+(principal-2000)+'元<br>';
			result+='第一决策模块净分数：'+gain_1+'<br>';
			result+='第二决策模块净分数：'+gain_2+'<br>';
			result+='第三决策模块净分数：'+gain_3+'<br>';
			result+='第四决策模块净分数：'+gain_4+'<br>';
			result+='第五决策模块净分数：'+gain_5+'<br>';			
			result+='</table>';
			$('#record').html(result);
		}
			
		var getPearsonCorrelation=function(x, y) {
		    var shortestArrayLength = 0;
		     
		    if(x.length == y.length) {
		        shortestArrayLength = x.length;
		    } else if(x.length > y.length) {
		        shortestArrayLength = y.length;
		        //console.error('x has more items in it, the last ' + (x.length - shortestArrayLength) + ' item(s) will be ignored');
		    } else {
		        shortestArrayLength = x.length;
		        //console.error('y has more items in it, the last ' + (y.length - shortestArrayLength) + ' item(s) will be ignored');
		    }
		  
		    var xy = [];
		    var x2 = [];
		    var y2 = [];
		  
		    for(var i=0; i<shortestArrayLength; i++) {
		        xy.push(x[i] * y[i]);
		        x2.push(x[i] * x[i]);
		        y2.push(y[i] * y[i]);
		    }
		  
		    var sum_x = 0;
		    var sum_y = 0;
		    var sum_xy = 0;
		    var sum_x2 = 0;
		    var sum_y2 = 0;
		  
		    for(var i=0; i< shortestArrayLength; i++) {
		        sum_x += x[i];
		        sum_y += y[i];
		        sum_xy += xy[i];
		        sum_x2 += x2[i];
		        sum_y2 += y2[i];
		    }
		  
		    var step1 = (shortestArrayLength * sum_xy) - (sum_x * sum_y);
		    var step2 = (shortestArrayLength * sum_x2) - (sum_x * sum_x);
		    var step3 = (shortestArrayLength * sum_y2) - (sum_y * sum_y);
		    var step4 = Math.sqrt(step2 * step3);
		    var answer = step1 / step4;
		  
		    return answer;
		}

		var operate_1=function(){     //第一张牌
			var result=0; 
			if(count_1==10){
				count_1=0;
			}
			if(count_1==0){
				array_1=signArray(10);
				//console.log('array_1:'+array_1);
			}
			var random=array_1[count_1];
			//console.log('random:'+random);
			if(random==7){				
				result=-1250;
			}	

			count_1++;	
			//console.log('result 1:'+result);	
			return result;
		}

		//随机数函数
		var ran=function(max){
			var result;
			result=Math.floor(Math.random()*max);
			return result;
		};

		var operate_2=function(){     //第二张牌
			var result=0;
			if(count_2==10){
				count_2=0;
			}
			if(count_2==0){
				array_2=signArray(10);
			}
			var random=array_2[count_2]; 
			if(random==0){
				result=-150;
			}else if(random==1){
				result=-200;
			}else if(random==2){
				result=-250;
			}else if(random==3){
				result=-300;
			}else if(random==4){
				result=-350;
			}else{

			}
			count_2++;
			return result;
		}

		var operate_3=function(){     //第三张牌
			var result=0;
			if(count_3==10){
				count_3=0;
			}
			if(count_3==0){
				array_3=signArray(10);
			}
			var random=array_3[count_3];
			if(random==0){
				result=-50;
			}else if(random==1){
				result=-50;
			}else if(random==2){
				result=-50;
			}else if(random==3){
				result=-50;
			}else if(random==4){
				result=-50;
			}else{

			}
			count_3++;
			return result;
		}

		var operate_4=function(){      //第四张牌

			var result=0; 
			if(count_4==10){
				count_4=0;
			}
			if(count_4==0){
				array_4=signArray(10);
			}
			
			var random=array_4[count_4];
			if((Math.floor(count_4/10))%2==0){
				if(random==0){
					result=-25;
				}else if(random==1){
					result=-25;
				}else if(random==2){
					result=-50;
				}else if(random==3){
					result=-75;
				}else if(random==4){
					result=-75;
				}else{

				}
			}else{
				if(random==0){
					result=-25;
				}else if(random==1){
					result=-50;
				}else if(random==2){
					result=-50;
				}else if(random==3){
					result=-50;
				}else if(random==4){
					result=-75;
				}else{

				}
			}	
			
			count_4++;

			return result;
		};

		var signArray=function(max){
			var result=new Array();
			for(var i=0;i<max;i++){
				result[i]=i;
			}
			result.sort(function(){				
				return Math.random()>.5 ? -1 : 1;//用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
			});
			return result;
		};

		return {
			start:start,
		};
	})();	

	myObject.start();
});
