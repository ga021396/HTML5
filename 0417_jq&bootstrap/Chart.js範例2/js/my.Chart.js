$(function(){
    var ctx = $("#myChart");

    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["食", "衣","住","行","育","樂"],
            datasets: [{		
                data: [30, 10, 15,15,5,25],
                backgroundColor: [
                    'rgba(150, 0, 0, 0.2)',                    
                    'rgba(0, 100, 0, 0.2)',
                    'rgba(0, 0, 100, 0.2)',
					'rgba(100, 100, 0, 0.2)',
					'rgba(0, 100, 100, 0.2)',
					'rgba(100, 0, 100, 0.2)'
                ],
                 hoverBackgroundColor: [
                    'rgba(150, 0, 0, 0.2)', 
                    'rgba(0, 100, 0, 0.2)',
                  	'rgba(0, 0, 100, 0.2)',  
					'rgba(100, 100, 0, 0.2)',
					'rgba(0, 100, 100, 0.2)',
					'rgba(100, 0, 100, 0.2)'            
                ],
               
            }]
        }
    });
});