/*Name this external file gallery.js*/
let originalText = "Hover over an image below to display here.";
function upDate(previewPic){
  // In this function you should 
  //   1) change the url for the background image of the div with the id = "image" 
  //   to the source file of the preview image
    document.getElementById('image').style.backgroundImage=`url(${previewPic.src})`;

    // 2) Change the text  of the div with the id = "image" 
    // to the alt text of the preview image 
    document.getElementById('image').innerHTML = previewPic.alt;


  }

function unDo(){
    //   In this function you should 
    // 1) Update the url for the background image of the div with the id = "image" 
    // back to the orginal-image.  You can use the css code to see what that original URL was
    document.getElementById('image').style.backgroundImage ='';

    
    // 2) Change the text  of the div with the id = "image" 
    // back to the original text.  You can use the html code to see what that original text was
    
    document.getElementById('image').innerHTML = originalText;

  }

currImage = document.querySelectorAll(".preview img")
for(let i = 0; i < currImage.lenght; i++  ){
  currImage[i] = setAttribute("tabindex","0")
}



  // Add keyboard navigation support
window.onload = function() {
    const previews = document.querySelectorAll('.preview');
    previews.forEach(preview => {
        preview.tabIndex = 0; // Add tabindex="0" dynamically
        preview.addEventListener('focus', function() {
            upDate(preview);
        });
        preview.addEventListener('blur', unDo);
    });
};