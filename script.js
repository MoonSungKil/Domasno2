$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


const date = new Date();
date.setDate(1);

console.log(date.getDay())


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

document.querySelector('.date h1').innerHTML = months[date.getMonth()];

document.querySelector('.date p').innerHTML = new Date().toDateString();


$(".txtb").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

        task.append(del);
        $(".notcomp").append(task);

        $(".txtb").val("");
    }
});

$(".txtb1").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb1").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb1").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

     
        task.append(del);
        $(".notcomp1").append(task);

        $(".txtb1").val("");
    }
});

$(".txtb2").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb2").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb2").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

    
        task.append(del);
        $(".notcomp2").append(task);

        $(".txtb2").val("");
    }
});

$(".txtb3").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb3").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb3").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

   
        task.append(del);
        $(".notcomp3").append(task);

        $(".txtb3").val("");
    }
});

$(".txtb4").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb4").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb4").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

    
        task.append(del);
        $(".notcomp4").append(task);

        $(".txtb4").val("");
    }
});


$(".txtb5").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb5").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb5").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

     
        task.append(del);
        $(".notcomp5").append(task);

        $(".txtb5").val("");
    }
});


$(".txtb6").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb6").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb6").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

     
        task.append(del);
        $(".notcomp6").append(task);

        $(".txtb6").val("");
    }
});


$(".txtb7").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb7").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb7").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

    
        task.append(del);
        $(".notcomp7").append(task);

        $(".txtb7").val("");
    }
});


$(".txtb8").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb8").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb8").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

     
        task.append(del);
        $(".notcomp8").append(task);

        $(".txtb8").val("");
    }
});


$(".txtb9").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb9").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb9").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

  
        task.append(del);
        $(".notcomp9").append(task);

        $(".txtb9").val("");
    }
});


$(".txtb10").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb10").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb10").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

        task.append(del);
        $(".notcomp10").append(task);

        $(".txtb10").val("");
    }
});


$(".txtb11").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb11").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb11").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

   
        task.append(del);
        $(".notcomp11").append(task);

        $(".txtb11").val("");
    }
});


$(".txtb12").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb12").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb12").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

     
     
        task.append(del);
        $(".notcomp12").append(task);

        $(".txtb12").val("");
    }
});


$(".txtb13").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb13").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb13").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

      
        task.append(del);
        $(".notcomp13").append(task);

        $(".txtb13").val("");
    }
});


$(".txtb14").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb14").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb14").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

     
        task.append(del);
        $(".notcomp14").append(task);

        $(".txtb14").val("");
    }
});


$(".txtb15").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb15").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb15").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

    
        task.append(del);
        $(".notcomp15").append(task);

        $(".txtb15").val("");
    }
});


$(".txtb16").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb16").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb16").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

        
        task.append(del);
        $(".notcomp16").append(task);

        $(".txtb16").val("");
    }
});

$(".txtb17").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb17").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb17").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

     
        task.append(del);
        $(".notcomp17").append(task);

        $(".txtb17").val("");
    }
});
$(".txtb18").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb18").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb18").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

        task.append(del);
        $(".notcomp18").append(task);

        $(".txtb18").val("");
    }
});
$(".txtb19").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb19").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb19").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

       
        task.append(del);
        $(".notcomp19").append(task);

        $(".txtb19").val("");
    }
});
$(".txtb20").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb20").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb20").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

     
        task.append(del);
        $(".notcomp20").append(task);

        $(".txtb20").val("");
    }
});
$(".txtb21").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb21").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb21").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

      
        task.append(del);
        $(".notcomp21").append(task);

        $(".txtb21").val("");
    }
});
$(".txtb22").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb22").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb22").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

      
        task.append(del);
        $(".notcomp22").append(task);

        $(".txtb22").val("");
    }
});
$(".txtb23").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb23").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb23").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

       
    
        task.append(del);
        $(".notcomp23").append(task);

        $(".txtb23").val("");
    }
});
$(".txtb24").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb24").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb24").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

        task.append(del);
        $(".notcomp24").append(task);

        $(".txtb24").val("");
    }
});
$(".txtb25").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb25").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb25").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

  
        task.append(del);
        $(".notcomp25").append(task);

        $(".txtb25").val("");
    }
});
$(".txtb26").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb26").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb26").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

        task.append(del);
        $(".notcomp26").append(task);

        $(".txtb26").val("");
    }
});
$(".txtb27").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb27").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb27").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

    
        task.append(del);
        $(".notcomp27").append(task);

        $(".txtb27").val("");
    }
});
$(".txtb28").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb28").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb28").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

        task.append(del);
        $(".notcomp28").append(task);

        $(".txtb28").val("");
    }
});
$(".txtb29").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb29").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb29").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

   
        task.append(del);
        $(".notcomp29").append(task);

        $(".txtb29").val("");
    }
});
$(".txtb30").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb30").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb30").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

     
        task.append(del);
        $(".notcomp30").append(task);

        $(".txtb30").val("");
    }
});
$(".txtb31").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb31").val() !="")
    {
        var task = $("<div style='display: inline; font-size: 1rem;' class='task1'></div><br>").text($(".txtb31").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

    
        task.append(del);
        $(".notcomp31").append(task);

        $(".txtb31").val("");
    }
});
