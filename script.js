
function highlight() {
    //Write your code here
	let strongTags = document.querySelectorAll("p strong");
    for(let i=0;i<strongTags.length;i++){
	 strongTags[i].style.color="rgb(0, 128, 0)";
   }
}


function return_normal() {
    //Write your code here
	let strongTags = document.querySelectorAll("p strong");
    for(let i=0;i<strongTags.length;i++){
	 strongTags[i].style.color="rgb(0, 0, 0)";
   }

    
}
