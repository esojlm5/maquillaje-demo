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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmN0aW9ucy5qcyIsIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG5ldyBWdWUoe1xyXG4vL1xyXG4vLyAgICAgY29tcG9uZW50czogeyBTbGljayB9LFxyXG4vL1xyXG4vLyAgICAgZGF0YSgpIHtcclxuLy8gICAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgICAgICBzbGlja09wdGlvbnM6IHtcclxuLy8gICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuLy8gICAgICAgICAgICAgICAgIC8vIEFueSBvdGhlciBvcHRpb25zIHRoYXQgY2FuIGJlIGdvdCBmcm9tIHBsdWdpbiBkb2N1bWVudGF0aW9uXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgfTtcclxuLy8gICAgIH0sXHJcbi8vXHJcbi8vICAgICAvLyBBbGwgc2xpY2sgbWV0aG9kcyBjYW4gYmUgdXNlZCB0b28sIGV4YW1wbGUgaGVyZVxyXG4vLyAgICAgbWV0aG9kczoge1xyXG4vLyAgICAgICAgIG5leHQoKSB7XHJcbi8vICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2xpY2submV4dCgpO1xyXG4vLyAgICAgICAgIH0sXHJcbi8vXHJcbi8vICAgICAgICAgcHJldigpIHtcclxuLy8gICAgICAgICAgICAgdGhpcy4kcmVmcy5zbGljay5wcmV2KCk7XHJcbi8vICAgICAgICAgfSxcclxuLy9cclxuLy8gICAgICAgICByZUluaXQoKSB7XHJcbi8vICAgICAgICAgICAgIC8vIEhlbHBmdWwgaWYgeW91IGhhdmUgdG8gZGVhbCB3aXRoIHYtZm9yIHRvIHVwZGF0ZSBkeW5hbWljIGxpc3RzXHJcbi8vICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2xpY2sucmVTbGljaygpO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgfSxcclxuLy8gfSk7IiwiLypnbG9iYWxzIGpzVmFycyovXHJcbiggZnVuY3Rpb24oICQgKSB7XHJcblx0Ly8gTXkgY29kZVxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICBzbGlkZXJFdmVudCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFwcDEuJG1ldGhvZHMpO1xyXG4gICAgfSk7XHJcbiAgICBmdW5jdGlvbiBzbGlkZXJJbml0KCl7XHJcbiAgICAgICAgJCgnLnR5cGUtbWt1cC0tc2xpZGVyLWNvbnRhaW5lcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgc3dpcGVUb1NsaWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOlt7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OjYwMCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOntcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6MVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAvLyBhdXRvcGxheVNwZWVkOiAzMjAwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHByZXZTbGlkZUludGVydmFsID0gbnVsbCxcclxuICAgICAgICAgICAgbmV4dFNsaWRlSW50ZXJ2YWwgPSBudWxsO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBwcmV2U2xpZGVBbmltYXRpb24oKSB7ICQoJy5zbGljay1jb2RlcGVuJykuc2xpY2tQcmV2KCk7IH07XHJcbiAgICAgICAgZnVuY3Rpb24gbmV4dFNsaWRlQW5pbWF0aW9uKCkgeyAkKCcuc2xpY2stY29kZXBlbicpLnNsaWNrTmV4dCgpOyB9O1xyXG5cclxuICAgICAgICAkKCcuc2xpY2stcHJldicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHByZXZTbGlkZUludGVydmFsID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uKCl7IHByZXZTbGlkZUFuaW1hdGlvbigpIH0sIDIwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5zbGljay1wcmV2Jykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwocHJldlNsaWRlSW50ZXJ2YWwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuc2xpY2stbmV4dCcpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbmV4dFNsaWRlSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXsgbmV4dFNsaWRlQW5pbWF0aW9uKCkgfSwgMjAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnNsaWNrLW5leHQnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChuZXh0U2xpZGVJbnRlcnZhbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2xpZGVyRXZlbnQoYnVpbGRTbGlkZXIpe1xyXG4gICAgICAgICQoYnVpbGRTbGlkZXIpLnNsaWNrKHtcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgc3dpcGVUb1NsaWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOlt7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OjYwMCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOntcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6MVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAvLyBhdXRvcGxheVNwZWVkOiAzMjAwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHByZXZTbGlkZUludGVydmFsID0gbnVsbCxcclxuICAgICAgICAgICAgbmV4dFNsaWRlSW50ZXJ2YWwgPSBudWxsO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBwcmV2U2xpZGVBbmltYXRpb24oKSB7ICQoJy5zbGljay1jb2RlcGVuJykuc2xpY2tQcmV2KCk7IH07XHJcbiAgICAgICAgZnVuY3Rpb24gbmV4dFNsaWRlQW5pbWF0aW9uKCkgeyAkKCcuc2xpY2stY29kZXBlbicpLnNsaWNrTmV4dCgpOyB9O1xyXG5cclxuICAgICAgICAkKCcuc2xpY2stcHJldicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHByZXZTbGlkZUludGVydmFsID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uKCl7IHByZXZTbGlkZUFuaW1hdGlvbigpIH0sIDIwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5zbGljay1wcmV2Jykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwocHJldlNsaWRlSW50ZXJ2YWwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuc2xpY2stbmV4dCcpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbmV4dFNsaWRlSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXsgbmV4dFNsaWRlQW5pbWF0aW9uKCkgfSwgMjAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnNsaWNrLW5leHQnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChuZXh0U2xpZGVJbnRlcnZhbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgYXBwMSA9IG5ldyBWdWUoe1xyXG4gICAgICAgIGVsOicjYXBwLW1hcXVpbGxhamUnLFxyXG4gICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICBzZWVuOnRydWUsXHJcbiAgICAgICAgICAgIHRhYlZhbHVlOjAsXHJcbiAgICAgICAgICAgIGxhYmlvU3RhdHVzOmZhbHNlLFxyXG4gICAgICAgICAgICBsYWJpb1ZhbHVlOjAsXHJcbiAgICAgICAgICAgIHRhYlNsaWRlcjowLFxyXG4gICAgICAgICAgICBwb3NpdGlvblNsaWRlcjowLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczp7XHJcbiAgICAgICAgICAgIGFjdGl2ZVBvc2l0aW9uU2xpZGVyOmZ1bmN0aW9uKGluZGV4LGV2ZW50KXtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4ID09IHRoaXMucG9zaXRpb25TbGlkZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25TbGlkZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblNsaWRlciA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhY3RpdmVMYWJpb3M6ZnVuY3Rpb24oaW5kZXgsZXZlbnQsbGFiaW9TdGF0dXMpe1xyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPT0gdGhpcy5sYWJpb1ZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmlvVmFsdWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJpb1ZhbHVlID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5sYWJpb1N0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmlvU3RhdHVzID0gbGFiaW9TdGF0dXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlckNyZWF0ZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzbGlkZXJDcmVhdGU6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdzbGlkZXJjcmVhJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVySW5pdCgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZW5lcmF0ZWRTbGlkZXI6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWN0aXZlVGFiOmZ1bmN0aW9uKGluZGV4LGV2ZW50KXtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4ID09IHRoaXMudGFiVmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiVmFsdWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJWYWx1ZSA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50YWJWYWx1ZSlcclxuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmdlbmVyYXRlZFNsaWRlcigpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWN0aXZlVGFiU2xpZGVyOmZ1bmN0aW9uKGluZGV4LGV2ZW50KXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFiU2xpZGVyID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgICAgICAgICAgIHRoaXMucHJlU2xpZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJ1aWxTbGlkZXIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJ1aWxTbGlkZXI6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBjbGFzU2xpZGVyID0gdGhpcy5wcmVTbGlkZXIoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzU2xpZGVyKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByZVNsaWRlcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ByZXNsaWRlcicpXHJcbiAgICAgICAgICAgICAgICBsZXQgc2xpZGVyTnVtID0gJ3R5cGUtbWt1cC1zbGlkZXItJztcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZXJOdW0gKyB0aGlzLnRhYlNsaWRlcjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOntcclxuICAgICAgICAgICAgbGFiaW9TdGF0dXM6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxhYmlvd2F0Y2ggPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiaW93YXRjaCAhPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKGFwcDEuJG1ldGhvZHMpXHJcbn0oIGpRdWVyeSApICk7XHJcbiJdfQ==
