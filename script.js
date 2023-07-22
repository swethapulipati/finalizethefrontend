var list = document.querySelectorAll( 'img');
const first = Math.floor(Math.random()*6)+1;
const firstImage ='assets/dice'+first+".png";
list[0].setAttribute('src',firstImage);
const second = Math.floor(Math.random()*6)+1;
const secondImage ='assets/dice'+second+".png";
list[1].setAttribute('src',secondImage);

if(first>second)
{
    document.querySelector('h1').innerHTML="The Winner Is User 1";
}
else if(second>first)
{
    document.querySelector('h1').innerHTML="The Winner Is User 2";
}
else
{
    document.querySelector('h1').innerHTML="Draw";
}