var isshow = true ;
let czerwony = document.getElementById("przycisk_czerwony")
let zmianaKoloru = document.getElementById("box1")
let plakatCzerwony = document.getElementById("filmczerwony")
czerwony.addEventListener("click", function(c)
{
    console.log("zmienie kolor na czerwony")
    zmianaKoloru.style.backgroundColor="red"
    plakatCzerwony
    console.log("clik")
    isshow=!isshow;
    plakatCzerwony.style.display="none";
   
   if(!isshow){
    plakatCzerwony.style.display="block";
   }
})
let bialy = document.getElementById("przycisk_bialy")
let zmianaKoloru1 = document.getElementById("box1")
let plakatBialy = document.getElementById("filmbialy")
bialy.addEventListener("click", function(c)
{
    console.log("zmienie kolor na biały")
    zmianaKoloru1.style.backgroundColor="white"
    plakatBialy
    console.log("clik")
    isshow=!isshow;
    plakatBialy.style.display="none";
   
   if(!isshow){
    plakatBialy.style.display="block";
   }
    
})
let niebieski = document.getElementById("przycisk_niebieski")
let zmianaKoloru2 = document.getElementById("box1")
let plakatNiebieski = document.getElementById("filmniebieski")
niebieski.addEventListener("click", function(c)
{
    console.log("zmienie kolor na niebieski")
    zmianaKoloru2.style.backgroundColor="blue"
    plakatNiebieski
    console.log("clik")
    isshow=!isshow;
    plakatNiebieski.style.display="none";
   
   if(!isshow){
    plakatNiebieski.style.display="block";
   }
    


})