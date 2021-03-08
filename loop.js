<<<<<<< HEAD
 var makeupType = prompt ('what do you want to purchase ?' ) ; 

function entertype () { makeupType =prompt ('plz enter maskara or eyeliner' );

}



function loop () { var numOfItems =prompt ('how many of maskara you want to add to your Cart ?') ;
    for ( var i=0 ; i< numOfItems ; i++)
    {
    document.write(numOfItems) ; 
    var order = '<img src =" https://st.depositphotos.com/1441511/4328/i/600/depositphotos_43287677-stock-photo-woman-with-beautiful-makeup-and.jpg" />' ;
    document.write (order) ;
    
    }
=======
var makeupType = prompt ('what do you want to purchase ?' ) ; 
while (makeupType !== 'maskara' && makeupType !== 'eyeliner' )
{ 

    var makeupType = prompt('plz enter maskara') ;
 var numOfItems =prompt ('how many of maskara you want to add to your Cart ?') ; 

for (  i=0 ; i< numOfItems ; i++) 
{
document.write(numOfItems) ; 
document.write('<img src ="https://st.depositphotos.com/1441511/4328/i/600/depositphotos_43287677-stock-photo-woman-with-beautiful-makeup-and.jpg"/>');
>>>>>>> d666cb2521ea064bbfd69a1174cb9ea8afe20099


}





 
while (makeupType !== 'eyeliner' && makeupType !=="maskara" )
{  entertype ();

if (makeupType == 'maskara'  || makeupType == 'eyeliner')
{
 
loop () ; 

}



document.write('sorry items does not match') ;








