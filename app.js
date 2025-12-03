document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('a').forEach(link => {

        link.addEventListener('mouseenter', () => {
            link.style.border = '0.1rem solid green';
            document.getElementById('llamanos').style.color = 'green';
        });

        link.addEventListener('mouseleave', () => {
            link.style.border = 'none';
            document.getElementById('llamanos').style.color = '#051e63';


        });

    });


});