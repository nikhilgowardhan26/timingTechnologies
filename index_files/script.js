  


let timeout1,timeout2;
function showTarget1(){
    const target = document.getElementById('semiContainer');
    target.style.visibility = 'visible';
    target.style.opacity = '1'; 
    target.style.zIndex = 10 ;
    target.style.transition= "ease-in 0.8s"
}

function showTarget2(){
    console.log('hello')
    const target = document.getElementById('circleContainer');
    target.style.visibility = 'visible'; 
    target.style.opacity = '1'; 
    target.style.zIndex = 10 ;
    target.style.transition= "ease-in 0.8s";
}

function hideTarget1() {
        const target = document.getElementById('semiContainer');
        target.style.visibility = 'hidden'; 
        target.style.opacity = '0'; 
        target.style.transition= "1s ease-out";
      
}

function hideTarget2() {
    // timeout2 = setTimeout(()=>{
        const target = document.getElementById('circleContainer');
        target.style.visibility = 'hidden'; // Hide the target
        target.style.opacity = '0'; 
        target.style.transition= "1s ease-out";

    // },1500)
}

   

    const ImageData = [
        { 
            image : '../images/demo/demo_3.jpg',
            head : `Evaluating the capable candidates who are fit to serve the country with transparency through modern AI. Easy-to-use equipment with proof recording calculations.`,
            para : `Get an insight into how the process of recruitment has now been made simple to assess. `,
            link : `../TRP-CaseStudy/TRPCaseStudy.html`

        },
        { 
            image : '../images/demo/demo_1.avif',
            head : `Determining the accurate timing of marathon runners with faultless RFID tracking systems.`,
            para : `Chips of Ultra-high frequency to track unlimited athletes is certainly a cost-effective solution. Get an insight into how marathons in this day are using RFID as a potent approach to track the runners.`,
             link : `../RFID-CaseStudy/RFID_IRAS_File.html`
        },
        { 
            image : '../images/demo/demo_2.avif',
            head : `Putting AI into practice for measuring the height of the candidates in Civil force recruitment.`,
            para : `Faultless and Faster technology for visual data retrieval, labeling, and interpretation of data in large quantities. Get an Insight on how we streamline determining the height in examinations.    `,
             link : `../PETHeightScale-CaseStudy/PETHeightScaleCaseStudy.html`
        },
        { 
            image : '../images/demo/demo_1.avif',
            head : `Eliminating signature forgery with an AI-driven approach including enhanced accuracy, high-performance speed, and exceptional transparency. `,
            para : `Get an Insight into why signature detection is substantial in Recruitment examinations.`,
             link : `../Addressing-CaseStudy/AddressingCaseStudy.html`
        },
        { 
            image : '../images/demo/demo_2.avif',
            head : `heading 5`,
            para : ` paragraph 5`,
             link : ``
        },

     ]
 
     const stickyItems = document.querySelectorAll(".stickyItem");
     const image = document.getElementById("stickyImage");
     const head = document.getElementById("head");
     const para = document.getElementById("para");
 
     const stickyObsever = new IntersectionObserver(entriesSticky => {
         entriesSticky.forEach(entry => {
             if(entry.isIntersecting){
                console.log(entry.target)
                  entry.target.classList.add("activeStickyItem");
                  if(entry.target.id){
                     const index = parseInt(entry.target.id)
                     image.transition
                     image.src = ImageData[index].image;
                  }
             }else{
                 entry.target.classList.remove("activeStickyItem")
             }
         })
     },{
         threshold:1
     })
 
     stickyItems.forEach(element => {
         stickyObsever.observe(element);
     });
 

        $(document).ready(function() {
            // Trigger click event on the first tab when the page loads
            $("#case_02_tab li:first-child").trigger("click");
        });
       $("#case_02_tab li ").on("click",function(e) {
            e.preventDefault();
            const index = parseInt(e.target.id)
            $("#case_02_img").attr("src", ImageData[index].image);
            $("#head").html(ImageData[index].head);
            $("#para").html(ImageData[index].para);
            $("#link").attr("href", ImageData[index].link);


            $("#case_02_tab li").css("color", "black");
            $("#case_02_tab li").css("backgroundColor", "#D2D3D4");
            $(this).css("backgroundColor", "#1B3954");
       })

    // case study clicking function to change the image finish

    // circle animation 
    $(document).ready(function() {
        // Handle mouseenter and mouseleave events for semiCircle_01 icons
        $('.semiCircle_01_icon1').hover(function() {
            $('.icon_text1').toggleClass('slideDown');
        });
        $('.semiCircle_01_icon2').hover(function() {
            $('.icon_text2').toggleClass('slideDown');
        });
        $('.semiCircle_01_icon3').hover(function() {
            $('.icon_text3').toggleClass('slideDown');
        });
    
        // Handle mouseenter and mouseleave events for semiCircle_02 icons
        $('.semiCircle_02_icon1').hover(function() {
            $('.icon2_text1').toggleClass('slideUp');
        });
        $('.semiCircle_02_icon2').hover(function() {
            $('.icon2_text2').toggleClass('slideUp');
        });
        $('.semiCircle_02_icon3').hover(function() {
            $('.icon2_text3').toggleClass('slideRight');
        });
        $('.semiCircle_02_icon4').hover(function() {
            $('.icon2_text4').toggleClass('slideRight');
        });
        $('.semiCircle_02_icon5').hover(function() {
            $('.icon2_text5').toggleClass('slideDown2');
        });
        $('.semiCircle_02_icon6').hover(function() {
            $('.icon2_text6').toggleClass('slideDown2');
        });
        $('.semiCircle_02_icon7').hover(function() {
            $('.icon2_text7').toggleClass('slideDown2');
        });
        $('.semiCircle_02_icon8').hover(function() {
            $('.icon2_text8').toggleClass('slideLeft');
        });
        $('.semiCircle_02_icon9').hover(function() {
            $('.icon2_text9').toggleClass('slideLeft');
        });
        $('.semiCircle_02_icon10').hover(function() {
            $('.icon2_text10').toggleClass('slideUp');
        });
    });
     // circle animation  / we are using here intersection observer 

    const circles = document.querySelectorAll(".weofferBox1");
           

    const observer1 = new IntersectionObserver((enteries)=>{
        enteries.forEach(entry => {
            if(entry.isIntersecting){
              entry.target.classList.add("showBox");
              entry.target.classList.remove('weofferBox1')
            }
            else {
                // entry.target.classList.remove('progress-bar')
                entry.target.classList.remove('showBox')
                entry.target.classList.add('weofferBox1')
            }
        })
    },
    {
        threshold:0.5,
        
    }
    )
    circles.forEach(circle => observer1.observe(circle))



$(document).ready(function() {
 
    // Set up the progress bar interval
    var myTimeout = setInterval(progressBar, 100);
    
    // Handle progress bar logic
    function progressBar() {
        var div = $("#progress_bar_id_01");
        var curWidth = div.width();
        var maxWidth = $(window).width();
        
        if ((maxWidth / 4) > curWidth) {
            handlehome('home-tab');
        } else if ((maxWidth / 2) > curWidth) {
            handlehome('profile-tab');
        } else if ((maxWidth * 3 / 4) > curWidth) {
            handlehome('contact-tab');
        } else {
            handlehome('economical-tab');
        }
    }

    // Observer for progress bar visibility
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('progress-bar');
            } else {
                entry.target.classList.remove('progress-bar');
            }
        });
    }, {
        threshold: 0
    });
    observer.observe($("#progress_bar_id_01")[0]);

    // Handle tab click event
    $("#myTab").on("click", "li", function() {
        var tabId = $(this).find("button").attr("id");
        handlehome(tabId);
    });

    // Function to handle tab changes
    function handlehome(input) {
        // Handle tab content changes
        $(".trained-h1").empty();
        $("#talented_para1, #talented_para2").empty();
        
        switch(input) {
            case 'home-tab':
                $("#img_id_2").attr("src", "../images/Trained.png");
                $(".trained-h1").text("Our skilled professionals are matter experts in a variety of domains");
                $("#talented_para1, #talented_para2").text("They are talented individuals, problem-solvers, and change-makers who work to sustain and grow in the world of technology.");
                hoverAction('timeId', 'InnovativeId', 'MindfulId', 'EconamicalId');
                break;
            case 'profile-tab':
                $("#img_id_2").attr("src", "../images/Innovative.png");
                $(".trained-h1").text("We are suckers for modern technology");
                $("#talented_para1, #talented_para2").text("Exploring our capabilities only to implement and innovate the best practices, creating/generating opportunities for the best.");
                hoverAction('InnovativeId', 'timeId', 'MindfulId', 'EconamicalId');
                break;
            case 'contact-tab':
                $("#img_id_2").attr("src", "../images/Mindful.png");
                $(".trained-h1").text("Our customers are at the heart of everything we do.");
                $("#talented_para1, #talented_para2").text("We respect the time and energy they invest in us, so we ultimately work to deliver services of the best quality and meet all their desires. We trust in making them happy and content.");
                hoverAction('MindfulId', 'InnovativeId', 'timeId', 'EconamicalId');
                break;
            case 'economical-tab':
                $("#img_id_2").attr("src", "../images/Econamical.png");
                $(".trained-h1").text("With the increase in the need for technology, it has become unbelievably expensive to get access to quality services.");
                $("#talented_para1, #talented_para2").text("Our motto is to make it affordable, maintaining the best quality through cost-effective solutions.");
                hoverAction('EconamicalId', 'MindfulId', 'InnovativeId', 'timeId');
                break;
            default:
                break;
        }
    }
    // Function to handle hover action
    function hoverAction(active1Id, other1Id, other2Id, other3Id) {
        $("#" + active1Id).css({ color: '#000033', fontWeight: '300' });
        $("#" + other1Id + ", #" + other2Id + ", #" + other3Id).css({ color: '#ffffff', fontWeight: '300' });
    }
});

