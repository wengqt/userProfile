
window.onload=function () {
     checkScroll();
    //console.log(111)
}
var offon = true; 
    $(window).scroll(function () { //滚动浏览器就会执行
          checkScroll()

    }); 



    function checkScroll(){
        if (offon) {   //获取滚动高度
              
            var _top = $(window).scrollTop();  //滚动条高度   
            var full_length = 0;
            $('._list').each(function (i) {    //获取当前下标
                   // console.log(i);
                var _index = i;   
                if( $('.mdui-container .mdui-row')[_index]!=undefined){
                    var _height = $('.mdui-container .mdui-row')[_index].offsetHeight; //获取上偏移值
                    full_length += _height;    //console.log(_index,full_length,_top)
                    if (full_length > _top) { //优先原则
                            $('._list').removeClass('mdui-list-item-active');
                        $('._list').eq(_index).addClass('mdui-list-item-active');
                        return false; //跳出遍历
                           
                    }; 
                }
                 
            });  
        }; 
    }

    $('._list').click(function () {  
        offon = false;  
        var _index = $(this).index('._list'); 
        console.log(_index)
        if ($('.mdui-container .mdui-row').eq(_index).length != 0) {
            $('._list').removeClass('mdui-list-item-active');
            $(this).addClass('mdui-list-item-active');  
            var _height = $('.mdui-container .mdui-row').eq(_index).offset().top; //获取上偏移值
              // console.log(_height)
            $('body,html').animate({
                scrollTop: _height - 64
            }, 500, function () {   
                offon = true;  
            }); 
        }

    });
     //$('.mdui-card').css('height',window.innerHeight-62+'px')