function CardPlayerList(doms){
    var _self=this;
    var elements = doms;


    var card = [];


    elements.each(function(index,element){

        var cp = new CardPlayer(element);
        card.push(cp);

    })



    elements.each(function(index,element){


        $(element).hover(
            function(){
                card[index].open();


                for(var i=0;i<card.length;i++){
                    if(i!=index){


                        card[i].closex();


                    }
                }

            },

            function(){
                card[index].close();
            })



    })






}
function CardPlayer(dom){
    var _self=this;
    var element = dom;
    this.IsPlaying=false;  //�Ƿ��ڲ��Ŷ���
    this.state=0;           //0 û�д�MASK  1������MASK
    var _closex=false;
    this.open=function(){

        if(!_self.IsPlaying && _self.state == 0){
            _self.IsPlaying = true;
            $(element).children(".cardplayer_mask").animate({height: 'toggle', opacity: 'toggle'}, 300,function(){

                _self.IsPlaying=false;
                _self.state = 1;

//                    if(_closex){
//                        _self.close();
//                    }

            });
        }

    }

    this.close=function(){

        if(!_self.IsPlaying && _self.state == 1){
            _self.IsPlaying = true;
            $(element).children(".cardplayer_mask").animate({height: 'toggle', opacity: 'toggle'}, 300,function(){
                _self.IsPlaying=false;
                _self.state = 0;
                //_closex=false;
            });
        }

    }

    this.closex=function(){
        // _closex=true;


        setTimeout(_self.close,300)

    }

}
function mouse_move(){
    TweenMax.set($(".move_ico"),{y:0,alpha:1});
    TweenMax.to($(".move_ico"),1,{y:40,onComplete:function(){
        TweenMax.to($(".move_ico"),1,{alpha:0});
    }});
}
function doimgmove(){
    $(".banner_contain").bind("mousewheel",function(event){
        event.preventDefault();
        var scrollTop = this.scrollTop;
        this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -1));
       // console.log(event.deltaY, event.deltaFactor, event.originalEvent.deltaMode, event.originalEvent.wheelDelta,this.scrollTop);
        if(event.deltaY==-1&&this.scrollTop==$(".hand_banner").height()-890){
            $(".banner_contain").unbind("mousewheel");
        }else if(event.deltaY==1&&this.scrollTop==0){
            $(".banner_contain").unbind("mousewheel");
        }
    })
}
$(document).ready(function(){
    var options = {
        $AutoPlay: true,
        $SlideDuration: 800,
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$,
            $ChanceToShow: 2
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$,
            $ChanceToShow: 2
        }
    };
    var jssor_slider1 = new $JssorSlider$('slider1_container', options);
    function ScaleSlider() {

        var refSize = jssor_slider1.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 1920);
            jssor_slider1.$ScaleWidth(refSize);
            jssor_slider33.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }



    var _SlideshowTransitions = [{ $Duration: 1500, $Opacity: 2 }];
    var option33={
        $AutoPlay: true,
        $DragOrientation: 0,
        $PauseOnHover: 1,
        $ThumbnailNavigatorOptions: {
            $Class: $JssorThumbnailNavigator$,
            $Cols: 4,
            $ChanceToShow: 2,
            $Align: 200,
            $NoDrag:true,
            //$Transitions: _SlideshowTransitions,
        },

        //$PauseOnHover: 1,
        $SlideshowOptions: {
            $Class: $JssorSlideshowRunner$,
            $Transitions: _SlideshowTransitions,
            $TransitionsOrder: 1,
            $ShowLink: true
        }
    }


    var jssor_slider33 = new $JssorSlider$('slider33_container', option33);
    /* function ScaleSlider33() {
     alert(1);
     var refSize33 = jssor_slider33.$Elmt.parentNode.clientWidth;
     if (refSize33) {
     refSize33 = Math.min(refSize33, 1920);
     jssor_slider33.$ScaleWidth(refSize33);
     }
     else {
     window.setTimeout(ScaleSlider33, 30);
     }
     }*/
    PlaySlideshowTransition=function(event){
        try{
            jssor_slider33.$IsSliding();
            // alert("ssss");
        }catch(e){
        }
    }

    // $(window).bind("resize", ScaleSlider33);
    // $(window).bind("orientationchange", ScaleSlider33);
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
})
