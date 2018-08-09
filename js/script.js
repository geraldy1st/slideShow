let i = 0;
let images = [];
let time = 3000;

// image list

images[0] = URL = ('https://images.pexels.com/photos/905873/pexels-photo-905873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350');
images[1] = URL = ('https://images.pexels.com/photos/630839/pexels-photo-630839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350');
images[2] = URL = ('https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350');
images[3] = URL = ('https://images.pexels.com/photos/7357/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350');

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;