var makeupType = prompt ('what do you want to purchase ?' ) ; 
while (makeupType == 'lipstick' )
{ 
if (makeupType !== 'maskara'  || makeupType  !== 'eyeliner')
{
    var enter = prompt('plz enter maskara') ;
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

