const lagunes = document.getElementById('header');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = 'green';
        header.style.borderBottom = '3px solid #154256'
    } else {
        header.style.backgroundColor = ' #154256';
        header.style.borderBottom = '3px solid green '

    }
});


const fotos = document.getElementById('mnb');
document.addEventListener('scroll', () => {
        var scroll_position = window.scrollY;
        if (scroll_position > 250) {
            mnb.style.width = '80%';
            mnb.style.transition = '2s '

        } else {
            mnb.style.width = '100%';

        }
    })
    // document.getElementById('mnb').addEventListener('click', function() {
    //     this.style.marginLeft = '20%';
    //     this.style.width = '60%';
    // })