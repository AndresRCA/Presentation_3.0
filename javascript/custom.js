$(document).ready(function(){

//    new Vue({
//        el: "#presentation",
//        data: {
//            work_list: [{name: "Presentation", link: "https://github.com/AndresRCA/Presentation/archive/master.zip"}]
//        }   
//    });
    
    $(".container").click(function(){
        $('.container').not($(this)).removeClass("left-border");
        $(this).addClass("left-border",200);
    });
    
});


