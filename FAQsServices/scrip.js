$(document).ready(function(){
    $("#faq-content").load("../FAQ_content/service.html");
    
    $(".tab").click(function(){
        $(".tab").removeClass("activeTab");
        $(this).addClass("activeTab");

        if(this.id ==="services"){
            $("#faq-content").load("../FAQ_content/service.html")
        }
        if(this.id ==="careers"){
            $("#faq-content").load("../FAQ_content/career.html")
        }
        if(this.id ==="runners"){
            $("#faq-content").load("../FAQ_content/runner.html")
        }
    })
})
