$(function(){
    var ctx = $("#myChart");

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["6歲", "7歲", "8歲", "9歲", "10歲", "11歲", "12歲"],
            datasets: [{
                label: 'boy, 平均身高(CM)',			
                data: [117.0 , 122.1, 128.1,133.5,138.8,144.7,151.6],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
					 'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
					  'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
					   'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
					  'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 1)'                
                ],
                borderWidth: 1
            },{
                label: 'girl, 平均身高(CM)',			
                data: [115.9, 121.1, 127.0,133.1,139.3,146.2,152.0],
                backgroundColor: [
                    'rgba(150,0,0,0.2)',                    
                      'rgba(150,0,0,0.2)', 
                     'rgba(150,0,0,0.2)',
					  'rgba(150,0,0,0.2)',                    
                      'rgba(150,0,0,0.2)', 
					   'rgba(150,0,0,0.2)', 
                     'rgba(150,0,0,0.2)'
                ],
                borderColor: [
                    'rgba(150,0,0,0.2)', 
                     'rgba(150,0,0,0.2)', 
                      'rgba(150,0,0,0.2)',
					   'rgba(150,0,0,0.2)',                    
                      'rgba(150,0,0,0.2)', 
					   'rgba(150,0,0,0.2)', 
                     'rgba(150,0,0,0.2)'            
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
});