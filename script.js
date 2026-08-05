
function highlight() {
    //Write your code here
	let strongTags = document.querySelectorAll("p strong");
	strongTags.addEventListener("mouseover", () => {
    for(let i=0;i<strongTags.length;i++){
	 strongTags.style.color="(rgb(0, 128, 0)";
   }
});
}


function return_normal() {
    //Write your code here
	let strongTags = document.querySelectorAll("p strong");
	strongTags.addEventListener("mouseout", () => {
    for(let i=0;i<strongTags.length;i++){
	 strongTags.style.color="(rgb(0, 128, 0)";
   }
});

    
}
