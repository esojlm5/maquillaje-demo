/*globals jsVars*/
( function( $ ) {
	// My code
    $(document).ready(function(){
        sliderEvent();
        console.log(app1.$methods);
    });
    function sliderInit(){
        $('.type-mkup--slider-container').slick({
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

    function sliderEvent(buildSlider){
        $(buildSlider).slick({
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
            tabSlider:0,
            positionSlider:0,
        },
        methods:{
            activePositionSlider:function(index,event){
                if(index == this.positionSlider){
                    this.positionSlider = 0;
                }else{
                    this.positionSlider = index;
                }
            },
            activeLabios:function(index,event,labioStatus){
                if(index == this.labioValue){
                    this.labioValue = 0;
                }else{
                    this.labioValue = index;
                    console.log(this.labioStatus);
                }
                this.labioStatus = labioStatus;
                this.sliderCreate();
            },
            sliderCreate:function(){
                alert('slidercrea');
                setTimeout(function(){
                    sliderInit()
                })
            },
            generatedSlider:function(){
            },
            activeTab:function(index,event){
                if(index == this.tabValue){
                    this.tabValue = 0;
                }else{
                    this.tabValue = index;
                }
                console.log(this.tabValue)
                // setTimeout(function(){
                //     this.generatedSlider();
                // })
            },
            activeTabSlider:function(index,event){
                this.tabSlider = index;
                console.log(index)
                this.preSlider();
                console.log(this.builSlider)
            },
            builSlider:function(){
                var clasSlider = this.preSlider();
                return clasSlider();
            },
            preSlider:function(){
                console.log('preslider')
                let sliderNum = 'type-mkup-slider-';
                return sliderNum + this.tabSlider;
            },
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
    console.log(app1.$methods)
}( jQuery ) );
