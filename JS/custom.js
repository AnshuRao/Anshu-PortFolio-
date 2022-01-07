

$(function () {




    setInterval(
        function () {
            let d = new Date();
            let hTime = d.getHours();
            let mTime = d.getMinutes();
            let sTime = d.getSeconds();
            let hRotation = 30 * hTime + mTime / 2;
            let mRotation = 6 * mTime;
            let sRotation = 6 * sTime;
            document.getElementById('hour').setAttribute(`style`, `transform:rotate(${hRotation}deg); transform-origin:bottom;`);
            document.getElementById('minuts').setAttribute(`style`, `transform:rotate(${mRotation}deg);  transform-origin:bottom; `);
            document.getElementById('second').setAttribute(`style`, `transform:rotate(${sRotation}deg);  transform-origin:bottom; `);
        },
        1000
    );

    //Analog Clock Movement start

    $("#togBtn").on('click dblclick', function () {
        // $('#clockContainer').toggle();
        $('#clockContainer').animate({
            left: -50
        }, 700, function () {
            $('.clockBtn').removeClass('fa-clock-o').addClass('fa-times');
            if (clockStyle == "-50px") {
                $('#clockContainer').animate({
                    left: 370
                }, 500, function () {
                    $('.clockBtn').removeClass('fa-times').addClass('fa-clock-o');
                })
            }
        })
        let clockStyle = $('#clockContainer').css('left');
        //    $(this).animate({
        //        left:300
        //    },700, function(){
        //    })
    });

    //Analog Clock Display ENDS


//--------------------------------------------------------------------------


    //On Hover View link appear START

    $('#work-section').on('mouseover', function (e) {
        // let mousein = e.target.firstChild.nextSibling;
        // mousein.setAttribute('style', 'display:inline-block;' )
        // console.log(mousein);
        //problem with above code is that its also targeting "a" tag for firstChild.nextSibling

        // console.log(e.target.tagName);

        //let arr = $('.work p a');

        // if (e.target.id == 'klassy') {
        //     console.log(arr[0]);
        //     arr[0].setAttribute('style', 'display:inline-block;');
        // }
        // else if (e.target.id == 'furniture') {
        //     console.log(arr[1]);
        //     arr[1].setAttribute('style', 'display:inline-block;');
        // }
        // else if (e.target.id == 'hiking') {
        //     console.log(arr[2]);
        //     arr[2].setAttribute('style', 'display:inline-block;');
        // }
        //console.log(e.target.firstChild.nextSibling.tagName == 'A')
       // let a = e.target.attr('class');
        console.log(e);

        if (e.target.tagName == 'P') {
            if (e.target.firstChild.nextSibling.tagName == 'A') {
                e.target.firstChild.nextSibling.setAttribute('style', 'display:inline-block;');
            }
        }
        else if (e.target.getAttribute('id') == 'work-section') {
            $('.work p a').css('display', 'none')
        }


        /*
        reduced the code of line using event delegation ...very important to know what
        you are targeting when using event delegation....here we not used sub element 
         selector to filter out "a" because as i have mentioned above its targeting  
         the "a" tag , but as i try to filter out a useing " :not(a)" nothing is changes 
         work on a element.
)
         .on(event [, selector] [,data] [,function])

        */
    });


    //On Hover Link appear ENDS
 


















})

