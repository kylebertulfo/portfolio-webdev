
$(document).ready(function(){
    $('#h1').text('morning!')

    $('p').css('color','brown')

    $('#btn2').click(function(){
        $(this).css('background','bisque')
        $('p.p2').css('color', 'pink')
       
    })

     $('#btn1').click(function(){
        $('#mess').text('you pindot the button!')
     })
     $('#btn1').dblclick(function(){
        $('#mess').text('you double pindot the button!')
     })
     $('#btn1').mouseover(function(){
        $('#mess').text('your mouse is inside the button!')
     })
     $('#btn1').mouseout(function(){
        $('#mess').text('your mouse is outside the button!')
     })
     $('#btn1').mousedown(function(){
        $(this).css('background','lightblue')
     })
     $('#btn1').mouseup(function(){
        $(this).css('background','bisque')
     })

     $('#name').focus(function(){
        $('#mess').text('you select the text box!')
        $(this).css('background','antiquewhite')
     })

     $('#name').blur(function(){
        $('#mess').text('you leave the text box!')
        $(this).css('background','bisque')
     })

     $('#course').change(function(){
        $('#mess').text($(this).val())
     })

    $('#btn2').click(function(){
        $('#table').hide('slow')
    })
    $('#btn2').dblclick(function(){
        $('#table').show(5000)
    })

})

const btn = document.getElementById('loadbtn')
const stat = document.getElementById('state')
const statu = document.getElementById('status')
const resul = document.getElementById('result')

btn.addEventListener('click',function(){

   let ajaxRequest = new XMLHttpRequest()

   stat.innerHTML = 'readystate: ' + ajaxRequest.readyState

   ajaxRequest.onreadystatechange = function(){

      stat.innerHTML = 'readystate: ' + ajaxRequest.readyState

      if(ajaxRequest.readyState == 4 && ajaxRequest == 200){
         statu.innerHTML = 'readystate: ' + ajaxRequest.status + '-' + ajaxRequest.statuText

         resul.innerHTML = ajaxRequest.responseText
      }
   }

   ajaxRequest.open('GET','https://jsonplaceholder.typicode.com/users/1',true)

   ajaxRequest.send()

})