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
   // branch zmiana 
   if(!isshow){
    plakatCzerwony.style.display="block";
   }
   if(plakatCzerwony.style.display="block")
   {
    plakatNiebieski.style.display="none";
   }
   if(plakatCzerwony.style.display="block")
   {
    plakatBialy.style.display="none";
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
   if(plakatBialy.style.display="block")
   {
    plakatNiebieski.style.display="none";
   }
   if(plakatBialy.style.display="block")
   {
    plakatCzerwony.style.display="none";
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
   if(plakatNiebieski.style.display="block")
   {
    plakatBialy.style.display="none";
   }
   if(plakatNiebieski.style.display="block")
   {
    plakatCzerwony.style.display="none";
   }


})

// let tab=[11, 23, 44, 33, 22,]
// console.log(tab[0])
// console.log(tab[1])
// console.log(tab[2])
// console.log(tab[3])
// console.log(tab[4])
// console.log(tab.length-1)
// var dlugosc=tab.length
// let el=document.getElementById("eTablicy")
// var ullist=document.getElementById("lista")

// for(var i= 0 ;i<dlugosc; i++)
// {
//  console.log(tab[i])
//  let newElement = document.createElement('li')
//  let maketxt=document.createTextNode(tab[i])
//  ullist.appendChild(newElement).appendChild(maketxt)
 
 
 
// }

// let s=document.getElementById("eTablicy")
// for(const eltab of tab)
// {   
//     console.log(eltab)
//     s.innerHTMLL=(eltab.innerText)

// }
// const tabs=document.querySelectorAll('.przycisk');
// let pokarz=document.getElementById("eTablicy")
// let wszystko=document.getElementById("cala")
// for(const wartoscTablicy of tabs)
// {
//     console.log(wartoscTablicy)
//     wartoscTablicy.addEventListener("click", function(ladujWartosc)
//     {
//     let v =(ladujWartosc.target.innerText)
//      pokarz.innerHTML=tab[v]
//      wszystko.innerText=(tab)
//     })
// }