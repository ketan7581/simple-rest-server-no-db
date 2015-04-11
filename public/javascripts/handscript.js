$(document).ready(function(event){
				var $displayList = $('#displayList');
				var $name =$('#name');
				var $amount =$('#amount');
				var $year =$('#year');
				var $email =$('#email');
				var $container = $('#container')
				
				//getting data from products url from back server
				$('#get').on('click',function(){
					
					$.ajax({
						url:"/products",
						type:"get",
                		success: function(list) {
                           $.each(list, function(i, list){
                           	   addOrder(list);
                           });
                         },
                         error:function(){
                         	alert('Error loading list');
                         }
					});
				});
				//Posting using ajax ------ get data from form
				$('#btn').on('click', function(){

					var enterVal = {
						name: $name.val(),
						amount: $amount.val(),
						year: $year.val(),
						email: $email.val()
					};
					if(name == " "){
						
					}else{
						$.ajax({
							type:"post",
							url:"/products",
							data:enterVal,
							success: function(list){
							  addOrder(list);
							},
							error:function(){
								alert('Error posting list');
							}
						});
					}

				});
				//Handlebars------------------------------
				var gotHtml = $('#container').html();
				var complieHtml = Handlebars.compile(gotHtml);
				function addOrder(list){	
	 					$('#body').append(complieHtml({list:list}));
	 					//since list is in array send as object to boday {{list:list}}
					};
				//handlebars----------------------------end
				$('body').on('click','#abc',function(){
					$(this).parent('div').remove();
					})

				
			});
			