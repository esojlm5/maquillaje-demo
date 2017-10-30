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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmN0aW9ucy5qcyIsIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV3IFZ1ZSh7XHJcbi8vXHJcbi8vICAgICBjb21wb25lbnRzOiB7IFNsaWNrIH0sXHJcbi8vXHJcbi8vICAgICBkYXRhKCkge1xyXG4vLyAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgIHNsaWNrT3B0aW9uczoge1xyXG4vLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4vLyAgICAgICAgICAgICAgICAgLy8gQW55IG90aGVyIG9wdGlvbnMgdGhhdCBjYW4gYmUgZ290IGZyb20gcGx1Z2luIGRvY3VtZW50YXRpb25cclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICB9O1xyXG4vLyAgICAgfSxcclxuLy9cclxuLy8gICAgIC8vIEFsbCBzbGljayBtZXRob2RzIGNhbiBiZSB1c2VkIHRvbywgZXhhbXBsZSBoZXJlXHJcbi8vICAgICBtZXRob2RzOiB7XHJcbi8vICAgICAgICAgbmV4dCgpIHtcclxuLy8gICAgICAgICAgICAgdGhpcy4kcmVmcy5zbGljay5uZXh0KCk7XHJcbi8vICAgICAgICAgfSxcclxuLy9cclxuLy8gICAgICAgICBwcmV2KCkge1xyXG4vLyAgICAgICAgICAgICB0aGlzLiRyZWZzLnNsaWNrLnByZXYoKTtcclxuLy8gICAgICAgICB9LFxyXG4vL1xyXG4vLyAgICAgICAgIHJlSW5pdCgpIHtcclxuLy8gICAgICAgICAgICAgLy8gSGVscGZ1bCBpZiB5b3UgaGF2ZSB0byBkZWFsIHdpdGggdi1mb3IgdG8gdXBkYXRlIGR5bmFtaWMgbGlzdHNcclxuLy8gICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zbGljay5yZVNsaWNrKCk7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICB9LFxyXG4vLyB9KTsiLCIvKmdsb2JhbHMganNWYXJzKi9cclxuKCBmdW5jdGlvbiggJCApIHtcclxuXHQvLyBNeSBjb2RlXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgIHNsaWRlckV2ZW50KCk7XHJcblxyXG4gICAgfSk7XHJcbiAgICBmdW5jdGlvbiBzbGlkZXJFdmVudCgpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnc2xpZGVyIGVqZWN1dGFkbycpO1xyXG4gICAgICAgICQoJy50eXBlLW1rdXAtc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBzd2lwZVRvU2xpZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6W3tcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6NjAwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6e1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzoxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIC8vIGF1dG9wbGF5U3BlZWQ6IDMyMDBcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHZhciBwcmV2U2xpZGVJbnRlcnZhbCA9IG51bGwsXHJcbiAgICAgICAgICAgIG5leHRTbGlkZUludGVydmFsID0gbnVsbDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcHJldlNsaWRlQW5pbWF0aW9uKCkgeyAkKCcuc2xpY2stY29kZXBlbicpLnNsaWNrUHJldigpOyB9O1xyXG4gICAgICAgIGZ1bmN0aW9uIG5leHRTbGlkZUFuaW1hdGlvbigpIHsgJCgnLnNsaWNrLWNvZGVwZW4nKS5zbGlja05leHQoKTsgfTtcclxuXHJcbiAgICAgICAgJCgnLnNsaWNrLXByZXYnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBwcmV2U2xpZGVJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbigpeyBwcmV2U2xpZGVBbmltYXRpb24oKSB9LCAyMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuc2xpY2stcHJldicpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHByZXZTbGlkZUludGVydmFsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnNsaWNrLW5leHQnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIG5leHRTbGlkZUludGVydmFsID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uKCl7IG5leHRTbGlkZUFuaW1hdGlvbigpIH0sIDIwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5zbGljay1uZXh0Jykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwobmV4dFNsaWRlSW50ZXJ2YWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFyIGFwcDEgPSBuZXcgVnVlKHtcclxuICAgICAgICBlbDonI2FwcC1tYXF1aWxsYWplJyxcclxuICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgc2Vlbjp0cnVlLFxyXG4gICAgICAgICAgICB0YWJWYWx1ZTowLFxyXG4gICAgICAgICAgICBsYWJpb1N0YXR1czpmYWxzZSxcclxuICAgICAgICAgICAgbGFiaW9WYWx1ZTowLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczp7XHJcbiAgICAgICAgICAgIGFjdGl2ZUxhYmlvczpmdW5jdGlvbihpbmRleCxldmVudCxsYWJpb1N0YXR1cyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmlvU3RhdHVzID0gbGFiaW9TdGF0dXM7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxhYmlvU3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyQ3JlYXRlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNsaWRlckNyZWF0ZTpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ3NsaWRlcmNyZWEnKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXJFdmVudCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWN0aXZlVGFiOmZ1bmN0aW9uKGluZGV4LGV2ZW50KXtcclxuICAgICAgICAgICAgICAgIC8vIHNsaWRlckV2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlckNyZWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPT0gdGhpcy50YWJWYWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJWYWx1ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYlZhbHVlID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zbGlkZXJDcmVhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFiVmFsdWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOntcclxuICAgICAgICAgICAgbGFiaW9TdGF0dXM6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxhYmlvd2F0Y2ggPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiaW93YXRjaCAhPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbn0oIGpRdWVyeSApICk7XHJcbiJdfQ==
