function mt15(num) {
    const imgElement = document.getElementById("bike")
   if(num==1)
   {
    imgElement.src = "mt-img.webp"
   }
   else if(num==2){
    imgElement.src = "n160-img.webp"

   }
   else
   {
    imgElement.src = "hun350-img.webp"
   }
}