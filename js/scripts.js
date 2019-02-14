$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var name1Input = $("input#name1").val();
    var Description1Input = $("input#Description1").val();
    var AppointmentInput= $("input#Appointment").val();


    $(".name1").append(name1Input);
    $(".Description1").append(Description1Input);
    $(".Appointment").append(AppointmentInput);


    $("#Summary").show();

     event.preventDefault();

   });
});
