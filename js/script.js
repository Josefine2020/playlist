let songNames = ["boo'd up", 'dreams'];
let artistNames =['artist1', 'artist2'];
let imagesLink=[' ', ' '];
let links =['link', ' '];
$('.addButton').click(function() {


    let songName = $(".songName").val();
let artistName = $(".artistName").val();
let imageLink = $(".imageLink").val();
$(".addButton").empty();
 
songNames.push(songName);
artistNames.push(artistName);
images.push(imageLink)

 songNames.forEach(function(song){
        $('#songNames').append(song + ' ')
    })

    artistNames.forEach(function(name){
    $('#artistNames').append(name + ' ')

    })

    imageLink.forEach(function(image){
    $('#image').append(image + ' ')
    })


    link.forEach(function(link){
    $('#link').append(link + ' ')

    })
})


