/*globals jsVars*/
( function( $ ) {
	// My code
    $(document).ready(function(){
        sliderEvent();

    });
    function sliderEvent(){

        console.log('slider ejecutado');
        $('.type-mkup-slider').slick({
            draggable: true,
            slidesToShow: 3,
            speed: 800,
            arrows: true,
            dots: true,
            swipeToSlide: true,
            infinite: true,
            autoplay: false,
            responsive:[{
                breakpoint:600,
                settings:{
                    slidesToShow:1
                }
            }]
            // autoplaySpeed: 3200
        });


        var prevSlideInterval = null,
            nextSlideInterval = null;

        function prevSlideAnimation() { $('.slick-codepen').slickPrev(); };
        function nextSlideAnimation() { $('.slick-codepen').slickNext(); };

        $('.slick-prev').on('mouseenter', function() {
            prevSlideInterval = window.setInterval(function(){ prevSlideAnimation() }, 200);
        });

        $('.slick-prev').on('mouseleave', function() {
            window.clearInterval(prevSlideInterval);
        });

        $('.slick-next').on('mouseenter', function(){
            nextSlideInterval = window.setInterval(function(){ nextSlideAnimation() }, 200);
        });

        $('.slick-next').on('mouseleave', function() {
            window.clearInterval(nextSlideInterval);
        });
    }
    var app1 = new Vue({
        el:'#app-maquillaje',
        data:{
            seen:true,
            tabValue:0,
            labioStatus:false,
            labioValue:0,
        },
        methods:{
            activeLabios:function(index,event,labioStatus){
                this.labioStatus = labioStatus;
                console.log(this.labioStatus);
                this.sliderCreate();
            },
            sliderCreate:function(){
                alert('slidercrea');
                setTimeout(function(){
                    sliderEvent();
                })
            },
            activeTab:function(index,event){
                // sliderEvent();
                this.sliderCreate();
                if(index == this.tabValue){
                    this.tabValue = 0;
                }else{
                    this.tabValue = index;
                    // this.sliderCreate();
                }
                console.log(this.tabValue)
            }
        },
        watch:{
            labioStatus:function () {
                var labiowatch = this;
                setTimeout(function () {
                    labiowatch != true
                })
            }
        }
    })

}( jQuery ) );
