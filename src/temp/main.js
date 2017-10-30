// new Vue({
//
//     components: { Slick },
//
//     data() {
//         return {
//             slickOptions: {
//                 slidesToShow: 3,
//                 // Any other options that can be got from plugin documentation
//             },
//         };
//     },
//
//     // All slick methods can be used too, example here
//     methods: {
//         next() {
//             this.$refs.slick.next();
//         },
//
//         prev() {
//             this.$refs.slick.prev();
//         },
//
//         reInit() {
//             // Helpful if you have to deal with v-for to update dynamic lists
//             this.$nextTick(() => {
//                 this.$refs.slick.reSlick();
//             });
//         },
//     },
// });
/*globals jsVars*/
( function( $ ) {
	// My code
    $(document).ready(function(){
        sliderEvent();
        console.log(app1.$data.seen);
        // sliderEvent(app1.$data.sliderClass)
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
            labioValueF:0,
            labioValueS:0,
            tabSlider:0,
            tabSliderF:0,
            tabSliderS:0,
            positionSlider:0,
            sliderClass:""
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
            activeLabiosF:function(index,event,labioStatus){
                if(index == this.labioValueF){
                    this.labioValueF = 0;
                }else{
                    this.labioValueF = index;
                    console.log(this.labioStatus);
                }
                this.labioStatus = labioStatus;
                this.sliderCreate();
            },
            sliderCreate:function(){
                // setTimeout(function(){
                //     sliderInit()
                // })
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
                console.log(this.labioValue)
                // setTimeout(function(){
                //     this.generatedSlider();
                // })
            },
            activeTabF:function(index,event){
                if(index == this.tabValueF){
                    this.tabValueF = 0;
                }else{
                    this.tabValueF = index;
                }
                console.log(this.tabValueF)
                // setTimeout(function(){
                //     this.generatedSlider();
                // })
            },
            activeTabSlider:function(index,event){
                this.tabSlider = index;
                console.log(index);
                this.preSlider();
                var sliderClass = '.' + this.preSlider();
                console.log(sliderClass)
                console.log("" + sliderClass)
                // setTimeout(function(){
                //     sliderEvent(".cnt-slider");
                // })

                // sliderEvent(app1.$data.sliderClass);
            },
            activeTabSliderF:function(index,event){
                this.tabSliderF = index;
                console.log(index)
                this.preSlider();
                var sliderClass = '.' + this.preSlider();
                console.log(sliderClass)
                console.log("" + sliderClass)
                // setTimeout(function(){
                //     sliderEvent(".cnt-slider");
                // })

                // sliderEvent(app1.$data.sliderClass);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmN0aW9ucy5qcyIsIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV3IFZ1ZSh7XHJcbi8vXHJcbi8vICAgICBjb21wb25lbnRzOiB7IFNsaWNrIH0sXHJcbi8vXHJcbi8vICAgICBkYXRhKCkge1xyXG4vLyAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgIHNsaWNrT3B0aW9uczoge1xyXG4vLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4vLyAgICAgICAgICAgICAgICAgLy8gQW55IG90aGVyIG9wdGlvbnMgdGhhdCBjYW4gYmUgZ290IGZyb20gcGx1Z2luIGRvY3VtZW50YXRpb25cclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICB9O1xyXG4vLyAgICAgfSxcclxuLy9cclxuLy8gICAgIC8vIEFsbCBzbGljayBtZXRob2RzIGNhbiBiZSB1c2VkIHRvbywgZXhhbXBsZSBoZXJlXHJcbi8vICAgICBtZXRob2RzOiB7XHJcbi8vICAgICAgICAgbmV4dCgpIHtcclxuLy8gICAgICAgICAgICAgdGhpcy4kcmVmcy5zbGljay5uZXh0KCk7XHJcbi8vICAgICAgICAgfSxcclxuLy9cclxuLy8gICAgICAgICBwcmV2KCkge1xyXG4vLyAgICAgICAgICAgICB0aGlzLiRyZWZzLnNsaWNrLnByZXYoKTtcclxuLy8gICAgICAgICB9LFxyXG4vL1xyXG4vLyAgICAgICAgIHJlSW5pdCgpIHtcclxuLy8gICAgICAgICAgICAgLy8gSGVscGZ1bCBpZiB5b3UgaGF2ZSB0byBkZWFsIHdpdGggdi1mb3IgdG8gdXBkYXRlIGR5bmFtaWMgbGlzdHNcclxuLy8gICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zbGljay5yZVNsaWNrKCk7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICB9LFxyXG4vLyB9KTsiLCIvKmdsb2JhbHMganNWYXJzKi9cclxuKCBmdW5jdGlvbiggJCApIHtcclxuXHQvLyBNeSBjb2RlXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgIHNsaWRlckV2ZW50KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXBwMS4kZGF0YS5zZWVuKTtcclxuICAgICAgICAvLyBzbGlkZXJFdmVudChhcHAxLiRkYXRhLnNsaWRlckNsYXNzKVxyXG4gICAgfSk7XHJcbiAgICBmdW5jdGlvbiBzbGlkZXJJbml0KCl7XHJcbiAgICAgICAgJCgnLnR5cGUtbWt1cC0tc2xpZGVyLWNvbnRhaW5lcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgc3dpcGVUb1NsaWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOlt7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OjYwMCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOntcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6MVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAvLyBhdXRvcGxheVNwZWVkOiAzMjAwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHByZXZTbGlkZUludGVydmFsID0gbnVsbCxcclxuICAgICAgICAgICAgbmV4dFNsaWRlSW50ZXJ2YWwgPSBudWxsO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBwcmV2U2xpZGVBbmltYXRpb24oKSB7ICQoJy5zbGljay1jb2RlcGVuJykuc2xpY2tQcmV2KCk7IH07XHJcbiAgICAgICAgZnVuY3Rpb24gbmV4dFNsaWRlQW5pbWF0aW9uKCkgeyAkKCcuc2xpY2stY29kZXBlbicpLnNsaWNrTmV4dCgpOyB9O1xyXG5cclxuICAgICAgICAkKCcuc2xpY2stcHJldicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHByZXZTbGlkZUludGVydmFsID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uKCl7IHByZXZTbGlkZUFuaW1hdGlvbigpIH0sIDIwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5zbGljay1wcmV2Jykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwocHJldlNsaWRlSW50ZXJ2YWwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuc2xpY2stbmV4dCcpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbmV4dFNsaWRlSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXsgbmV4dFNsaWRlQW5pbWF0aW9uKCkgfSwgMjAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnNsaWNrLW5leHQnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChuZXh0U2xpZGVJbnRlcnZhbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzbGlkZXJFdmVudChidWlsZFNsaWRlcil7XHJcbiAgICAgICAgJChidWlsZFNsaWRlcikuc2xpY2soe1xyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBzd2lwZVRvU2xpZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6W3tcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6NjAwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6e1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzoxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIC8vIGF1dG9wbGF5U3BlZWQ6IDMyMDBcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgcHJldlNsaWRlSW50ZXJ2YWwgPSBudWxsLFxyXG4gICAgICAgICAgICBuZXh0U2xpZGVJbnRlcnZhbCA9IG51bGw7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHByZXZTbGlkZUFuaW1hdGlvbigpIHsgJCgnLnNsaWNrLWNvZGVwZW4nKS5zbGlja1ByZXYoKTsgfTtcclxuICAgICAgICBmdW5jdGlvbiBuZXh0U2xpZGVBbmltYXRpb24oKSB7ICQoJy5zbGljay1jb2RlcGVuJykuc2xpY2tOZXh0KCk7IH07XHJcblxyXG4gICAgICAgICQoJy5zbGljay1wcmV2Jykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcHJldlNsaWRlSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXsgcHJldlNsaWRlQW5pbWF0aW9uKCkgfSwgMjAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnNsaWNrLXByZXYnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChwcmV2U2xpZGVJbnRlcnZhbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5zbGljay1uZXh0Jykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBuZXh0U2xpZGVJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbigpeyBuZXh0U2xpZGVBbmltYXRpb24oKSB9LCAyMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuc2xpY2stbmV4dCcpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKG5leHRTbGlkZUludGVydmFsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHZhciBhcHAxID0gbmV3IFZ1ZSh7XHJcbiAgICAgICAgZWw6JyNhcHAtbWFxdWlsbGFqZScsXHJcbiAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgIHNlZW46dHJ1ZSxcclxuICAgICAgICAgICAgdGFiVmFsdWU6MCxcclxuICAgICAgICAgICAgbGFiaW9TdGF0dXM6ZmFsc2UsXHJcbiAgICAgICAgICAgIGxhYmlvVmFsdWU6MCxcclxuICAgICAgICAgICAgbGFiaW9WYWx1ZUY6MCxcclxuICAgICAgICAgICAgbGFiaW9WYWx1ZVM6MCxcclxuICAgICAgICAgICAgdGFiU2xpZGVyOjAsXHJcbiAgICAgICAgICAgIHRhYlNsaWRlckY6MCxcclxuICAgICAgICAgICAgdGFiU2xpZGVyUzowLFxyXG4gICAgICAgICAgICBwb3NpdGlvblNsaWRlcjowLFxyXG4gICAgICAgICAgICBzbGlkZXJDbGFzczpcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOntcclxuICAgICAgICAgICAgYWN0aXZlUG9zaXRpb25TbGlkZXI6ZnVuY3Rpb24oaW5kZXgsZXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPT0gdGhpcy5wb3NpdGlvblNsaWRlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblNsaWRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uU2xpZGVyID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFjdGl2ZUxhYmlvczpmdW5jdGlvbihpbmRleCxldmVudCxsYWJpb1N0YXR1cyl7XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleCA9PSB0aGlzLmxhYmlvVmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFiaW9WYWx1ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmlvVmFsdWUgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxhYmlvU3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubGFiaW9TdGF0dXMgPSBsYWJpb1N0YXR1cztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyQ3JlYXRlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFjdGl2ZUxhYmlvc0Y6ZnVuY3Rpb24oaW5kZXgsZXZlbnQsbGFiaW9TdGF0dXMpe1xyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPT0gdGhpcy5sYWJpb1ZhbHVlRil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJpb1ZhbHVlRiA9IDA7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmlvVmFsdWVGID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5sYWJpb1N0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmlvU3RhdHVzID0gbGFiaW9TdGF0dXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlckNyZWF0ZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzbGlkZXJDcmVhdGU6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICBzbGlkZXJJbml0KClcclxuICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdlbmVyYXRlZFNsaWRlcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhY3RpdmVUYWI6ZnVuY3Rpb24oaW5kZXgsZXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPT0gdGhpcy50YWJWYWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJWYWx1ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYlZhbHVlID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhYlZhbHVlKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5sYWJpb1ZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZ2VuZXJhdGVkU2xpZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhY3RpdmVUYWJGOmZ1bmN0aW9uKGluZGV4LGV2ZW50KXtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4ID09IHRoaXMudGFiVmFsdWVGKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYlZhbHVlRiA9IDA7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYlZhbHVlRiA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50YWJWYWx1ZUYpXHJcbiAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5nZW5lcmF0ZWRTbGlkZXIoKTtcclxuICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFjdGl2ZVRhYlNsaWRlcjpmdW5jdGlvbihpbmRleCxldmVudCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlNsaWRlciA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVTbGlkZXIoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZXJDbGFzcyA9ICcuJyArIHRoaXMucHJlU2xpZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzbGlkZXJDbGFzcylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXCIgKyBzbGlkZXJDbGFzcylcclxuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICBzbGlkZXJFdmVudChcIi5jbnQtc2xpZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzbGlkZXJFdmVudChhcHAxLiRkYXRhLnNsaWRlckNsYXNzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWN0aXZlVGFiU2xpZGVyRjpmdW5jdGlvbihpbmRleCxldmVudCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlNsaWRlckYgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVTbGlkZXIoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZXJDbGFzcyA9ICcuJyArIHRoaXMucHJlU2xpZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzbGlkZXJDbGFzcylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXCIgKyBzbGlkZXJDbGFzcylcclxuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICBzbGlkZXJFdmVudChcIi5jbnQtc2xpZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzbGlkZXJFdmVudChhcHAxLiRkYXRhLnNsaWRlckNsYXNzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnVpbFNsaWRlcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGNsYXNTbGlkZXIgPSB0aGlzLnByZVNsaWRlcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNTbGlkZXIoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJlU2xpZGVyOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncHJlc2xpZGVyJylcclxuICAgICAgICAgICAgICAgIGxldCBzbGlkZXJOdW0gPSAndHlwZS1ta3VwLXNsaWRlci0nO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNsaWRlck51bSArIHRoaXMudGFiU2xpZGVyO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2F0Y2g6e1xyXG4gICAgICAgICAgICBsYWJpb1N0YXR1czpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGFiaW93YXRjaCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJpb3dhdGNoICE9IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coYXBwMS4kbWV0aG9kcylcclxufSggalF1ZXJ5ICkgKTtcclxuIl19
