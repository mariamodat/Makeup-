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


}





 
while (makeupType !== 'eyeliner' && makeupType !=="maskara" )
{  entertype ();

if (makeupType == 'maskara'  || makeupType == 'eyeliner')
{
 
loop () ; 

}
else {

document.write (' sorry you cant add this number at the same order, plz try again later') ; 
}
}