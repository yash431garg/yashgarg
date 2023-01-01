let main = document.getElementsByClassName("main-section")
window.addEventListener('scroll',()=>{
setTimeout(() => {
  // window.scrollTop = 10;

}, 10000);
})


// let slideIndex = 1;



// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }


// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("section");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }

//   slides[slideIndex-1].style.display = "block";  

// }




// let section = document.getElementsByClassName("section");




// for(let i= 0; i <= section.length; i++){
// if(i == 5){
//   main.scrollTop =0;
//   console.log('scroll')
// }
// }







// document.addEventListener( "DOMContentLoaded", function() {
//     // it's a div, that holds your news
//     // it holds ul with news in li elements
//     var div = document.getElementById( "l-main" );
//     div.addEventListener( "scroll", function() {
//       var max_scroll = this.scrollHeight - this.clientHeight;
//       var current_scroll = this.scrollTop;
//       var bottom = 100;
//       if ( current_scroll + bottom >= max_scroll ) {
//         var ul = document.getElementsByClassName( "main-section" )[ 0 ];
//         var current = parseInt( ul.dataset.current, 10 );
//         var li = document.getElementsByClassName( "section" )[ current ];
//         var new_li = li.cloneNode( true );
//         ul.appendChild( new_li );
//         ul.dataset.current = current + 1;
//       }
//     } );
//   } );