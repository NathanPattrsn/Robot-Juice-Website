$(function() { /*function for reviews is created*/


  var people = [];

  $.getJSON('bikeoil.json', function(data) {/*retrieves json file*/
      $.each(data.person, function(i, f) {
         var tblRow = "<tr>" + "<td>" + f.nickname + "</td>" +
          "<td>" + f.review + "</td>" + "<td>" + f.job + "</td>" + "<td>" + f.roll + "</td>" + "</tr>"
          $(tblRow).appendTo(".container9"); /*sends it to specified container*/
    });

  });

});