$(document).ready(function(){
				var $name =$('#name');
				var $amount =$('#amount');
				var $year =$('#year');
				var $email =$('#email');
				var $container = $('#container');
			
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
				$('#btn').on('click', function(){
					var enterVal = {
						name: $name.val(),
						amount: $amount.val(),
						year: $year.val(),
						email: $email.val()
					};
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

				});

					function addOrder(list){	
		 					$container.append('<div class="well">'+'<br/> Name-'+list.name
		 						+'<br/> Amount-'+list.amount+'<br/> Year-'+list.year+
		 						'<br/> Email-'+list.email+'<button class="btn btn-danger pull-right">'
		 						+'Delete'+'</button>'+'</div>');
					};

					$('#container').on("click", "button", function () {
				        var row = $(this).parent('div').remove();
				    })
				    
					
	});
			
			