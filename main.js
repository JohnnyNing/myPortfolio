$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            console.log("yes");
            $(".navbar").last().addClass("sticky");
        }else{
            console.log("no");
            $(".navbar").last().removeClass("sticky");
        }
        if(this.scrollY>500){
            $(".scroll_up_btn").last().addClass("show");
        }else{
            $(".scroll_up_btn").last().removeClass("show");
        }
    });

    //slide-up script
    $('.scroll_up_btn').click(function(){
        $('html, body').animate({scrollTop:'0'},600);
    });



        // toggle menu/navbar 
    $('.menu_btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu_btn i').toggleClass("active");
        
    });


// typing animation 
var typed = new Typed(".typing_1",{
    strings: ["Full-Stack Web APP", "Andriod Application","IOS Application"],
    typeSpeed: 80, 
    backSpeed: 50,
    loop: true
});
// typing animation 
var typed = new Typed(".typing_2",{
    strings: ["Developer", "Body-builder"],
    typeSpeed: 80, 
    backSpeed: 50,
    loop: true
});



});
function send_message(){
    console.log("function execution here");
    Email.send({
        Host: 'smtp.gmail.com',
        Username:"ningz0227@gmail.com",
        Password: "27_Johnny", 
        To: 'u1054841@utah.edu', 
        From: "ningz0227@gmail.com", 
        Subject: "Sending Email using javascript", 
        Body: "Well that was easy!!", 
        Attachments: [ 
            { 
              name: "File_Name_with_Extension", 
              path: "Full Path of the file" 
            }]
            
    }).then({
        function(message){
            alert("Mail has been sent successfully");
        }
    
    
    });
}