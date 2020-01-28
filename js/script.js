
// let songNames = ["boo'd up", 'memories', 'shallow'];
// let artistNames =['Alla Mai1', 'Marron2', 'Lady Gaga'];
// let Link=[' https://www.youtube.com/watch?v=6YNZlXfW6Ho', 'https://www.youtube.com/watch?v=SlPhMPnQ58k ', 'https://www.youtube.com/watch?v=bo_efYhYU2A'];
// let imagesLinks =['link', ' '];

let songInfo = {
    songName: "yesterday",
    artistName: "the beatles",
    imagesLink: "www.fakewebsite.com",
    Link: ""
}

let songs = [songInfo]

$('.addButton').click(function() {



songs.forEach(function(song){
    $('#songNames').append(song.songName + ' ')
})
    // let songName = $(".songName").val();
// let artistName = $(".artistName").val();
// let imageLink = $(".imageLink").val();
// $(".addButton").empty();
 
// songNames.push(songName);
// artistNames.push(artistName);
// images.push(imageLink)

//  

//     artistNames.forEach(function(name){
//     $('#artistNames').append(name + ' ')

//     })

//     imageLink.forEach(function(image){
//     $('#image').append(image + ' ')
//     })


//     link.forEach(function(link){
//     $('#link').append(link + ' ')

//     })
})


