var makeupType = prompt ('what do you want to purchase ?' ) ; 
while (makeupType == 'lipstick' )
{ 
var type =prompt ('plz enter maskara or eyeliner' );
if (type == 'maskara'  || type == 'eyeliner')
{
 var numOfItems =prompt ('how many of maskara you want to add to your Cart ?') ;
 var result = numOfItems ;
for ( i=0 ; i< 5 ; i++)
{
document.write(result) ; 
var order = '<img src " maskara" /'> ;


}

}
else {

document.write (' sorry you cant add this number at the same order, plz try again later') ; 
}
}