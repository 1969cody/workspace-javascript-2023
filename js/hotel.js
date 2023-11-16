// Hotel registration --- store in an object
var test = {
    hotelname: "Marriot", 
    room: 400,
    booked: 50,
    display: function(){
        return this.hotelname;
    }
};

// Access the properties --- change the properties
console.log(test.hotelname);
console.log(test.booked);
test.booked = 144;
console.log(test.booked);
console.log(test.display());

// Start the Hotel Reservation
var grouplist = [];
function reservation(){
    // Get the values from the form, and put it in an objct
    // Practice --- complete the project
    var guest = {
        name: $("#name").val(),
        numberofGuest: $("#num").val(),
        checkin: $("#checkin").val(),
        checkout: $("#checkout").val(),
        room: $("#room").val()

    };

    grouplist.push(guest);
    console.log(guest);
    alert("Thank you for your reservation!")
}

function displayreslist(){
    $("#guestlist").html();
    $("guestlist").append("<table>");
    for (var i in grouplist){
        $("guestlist").append("<tr><td>" + grouplist[i].name + "</td>");
        $("guestlist").append("<td>" + grouplist[i].numberofGuest + "</td>");
        $("guestlist").append("<td>" + grouplist[i].checkin + "</td>");
        $("guestlist").append("<td>" + grouplist[i].checkout + "</td>");
        $("guestlist").append("<td>" + grouplist[i].room + "</td></tr>");
    }
    $("guestlist").append("</table>");



}

// Register the event handler
$("#submit").click(reservation);
$("#lists").click(displayreslist);
