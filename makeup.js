var name = prompt ( "please enter your user name") ; 
if ( name == "Mariam") 
{   
alert(" Your name is Mariam ") ; 
document.write ('Hello mariam , add items to your cart');

}
else if ( name == "Sara") 
{   
    alert ( " hey Sara , answer the next question") ;
    document.write('<img src=" https://res.cloudinary.com/teepublic/image/private/s--RIPhJ9tW--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:38/co_ffffff,e_outline:inner_fill:38/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/t_watermark_lock/c_limit,f_auto,h_630,q_90,w_630/v1591687454/production/designs/11141140_0.jpg"/>') ;

}
alert(' for next question enter sephora');
var Brand = prompt ('plz select what brand you want') ;



if (Brand == 'sephora')
{  
document.write ('<img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzdhaemcQ6SclPpQsAefQ3zznPLdnN79Hd9A&usqp=CAU" />');
}
else {

document.write(' <img src = "https://www.styleimagination.com/wp-content/uploads/2019/12/Most-Expensive-Makeup-Brands-2020.jpg"/>') ; 


}
var items = prompt('how many item you want to add to your cart?') ;
for (var i =0 ; i<items ; i++)
{

document.write (items);

}
