$(function(){
    $( "#datepicker" ).datepicker({
    });

    // Month Names
    const monthNames = 
    [
        "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"
    ];
    const DateObject = new Date();
    const monthName = monthNames[DateObject.getMonth()];
    const dayNumber = DateObject.getDay();
    const year = DateObject.getFullYear();
    const fullDate = monthName + " " + dayNumber + ", " + year;


    $("#datepicker").val(fullDate)
});