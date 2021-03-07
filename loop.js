var makeupType = prompt ('what do you want to purchase ?' ) ; 
while (makeupType !== 'maskara' && makeupType !== 'eyeliner' )
{ 
if (makeupType !== 'maskara'  || makeupType  !== 'eyeliner')
{
    var makeupType = prompt('plz enter maskara') ;
 var numOfItems =prompt ('how many of maskara you want to add to your Cart ?') ; 

for ( var i=0 ; i< numOfItems ; i++) 
{
document.write(numOfItems) ; 
document.write('<img src ="https://st.depositphotos.com/1441511/4328/i/600/depositphotos_43287677-stock-photo-woman-with-beautiful-makeup-and.jpg"/>');


}

}

else { 

document.write('sorry items does not match') ;

}

}

if (makeupType == 'maskara') 
{

while (makeupType == 'maskara')
{
var num = prompt ('how many maskara you want to add to your cart') ;
for (var i =0 ; i< num ; i++)
{

document.write(' <img src="https://www.dior.com/beauty/version-5.1595261547031/resize-image/ep/715/773/90/0/horizon%252Fimages_additionnelles%252Fvue_alt_mascara_GHC.jpg"/>') ;

}

}

}