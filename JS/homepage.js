window.onresize = function() {
    if (window.innerWidth >= 991 && window.innerWidth <= 1145) {
        document.querySelector('.left').style.display = 'none';
        document.querySelector('.right').style.display = 'block';
        document.querySelector('.center').style.width = 'calc(100% + 316px)';
    } else if (window.innerWidth >= 701 && window.innerWidth <= 990) {
        document.querySelector('.left').style.display = 'none';
        document.querySelector('.right').style.display = 'none';
        document.querySelector('.center').style.width = '100%';
    } else if( window.innerWidth > 1145){
        document.querySelector('.left').style.display = 'block';
        document.querySelector('.right').style.display = 'block';
        document.querySelector('.center').style.width = '100%';
    } else {
        document.querySelector('.left').style.display = 'none';
        document.querySelector('.right').style.display = 'none';
        document.querySelector('.center').style.width = '100%';
    }
};
