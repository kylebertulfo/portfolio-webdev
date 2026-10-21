$(document).ready(function(){

   $('#btn1').click(function(){
        $('#h1').text('you click the button!')
     })

     $('#btn1').dblclick(function(){
        $('#h1').text('you double click the button!')
     })
     $('#btn1').click(function(){
        $('#mess1').text('you pindot the button!')
     })

     $('#btn1').dblclick(function(){
        $('#mess1').text('you double pindot the button!')
     })

     $('#btn1').mousedown(function(){
        $(this).css('background','lightblue')
        $('#mess1').text('your mouse is pressing the button!')
     })

     $('#btn1').mouseup(function(){
        $(this).css('background','bisque')
     })

     $('#btn1').mouseover(function(){
        $('#mess1').text('your mouse is inside the button!')
     })

     $('#btn1').mouseout(function(){
        $('#mess1').text('your mouse is outside the button!')
     })
     
     $('#btn2').click(function(){
        $('#profile').hide('slow')
        $('#img1').hide('slow')
    })

    $('#btn2').click(function(){
        $('#mess1').text('you hide the profile!')
     })

    $('#btn3').dblclick(function(){
        $('#profile').show(2000)
        $('#img1').show(2000)
    })

    $('#btn3').dblclick(function(){
        $('#mess1').text('you show the profile!')
     })

      $('#course').change(function(){
        $('#message').text('Course: '+$(this).val())
     })

     $('#course').focus(function(){
        $('#mess2').text('you select the text box!')
        $(this).css('background','aliceblue')
     })

     $('#course').blur(function(){
        $('#mess2').text('you leave the text box!')
        $(this).css('background','lightblue')
     })

     $('#even').click(function(){
      $('tr:even').css('background','lightblue')
      $('#mess3').text('The Even-numbered rows are highlighted!')
     })
     $('#even').dblclick(function(){
      $('tr:even').css('background','white')
      $('#mess3').text('The Odd-numbered rows are Unhighlighted!')
     })
     $('#odd').click(function(){
      $('tr:odd').css('background','aliceblue')
      $('#mess3').text('The Odd-numbered rows are highlighted!')
     })
     $('#odd').dblclick(function(){
      $('tr:odd').css('background','white')
      $('#mess3').text('The Odd-numbered rows are Unhighlighted!')
     })
      $('#hide').click(function(){
        $('#table').hide('slow')
        $('#mess3').text('You hide the table!')
    })
    $('#show').dblclick(function(){
        $('#table').show(2000)
        $('#mess3').text('You show the table!')
    })

   
})