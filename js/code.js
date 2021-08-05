$(function () {

    let currentPhoto = 0;
    let imagesData = [
        {
            photo: 'images/pitypang.jpg',
            title: 'Pitypang',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing molestiae hic sequi excepturi deleniti accusamus eveniet consectetur libero expedita repudiandae temporibus!'
        },
        {
            photo: 'images/viragzofa.jpg',
            title: 'Itt a tavasz',
            description: 'Lorem ipsum dolor sit amet fugit, minima temporibus autem maiores reiciendis sequi perferendis optio numquam, laboriosam sed corporis atque sapiente odit expedita.'
        },
        {
            photo: 'images/anemone.jpg',
            title: 'Anemone',
            description: 'Lorem ipsum consectetur adipisicing magni dolor, tempore nostrum ad eum incidunt facilis doloremque laborum iusto.'
        },
    ];

    let loadImage = (ind) => {
        $('#photo').attr('src', imagesData[ind].photo);
        $('#photo-title').text(imagesData[ind].title);
        $('#photo-description').text(imagesData[ind].description);

    }

    //első kép betöltése az img elembe
    loadImage(currentPhoto);

    //balra mutató nyíl
    $('#la').click(() => {
        if (currentPhoto > 0) {
            currentPhoto--;
        }
        loadImage(currentPhoto);
    });
    //jobbra mutató nyíl
    $('#ra').click(() => {
        if (currentPhoto < imagesData.length - 1) {
            currentPhoto++;
        }
        loadImage(currentPhoto);
    });

    console.log(imagesData);
    //thumbnail-ok legenerálása
    imagesData.forEach((item, index) => {
        console.log(item);
        $('#thumbnails').append(`<div class="thumbnail"  data-number="${index}">
                                   
                                    <img src="${item.photo}" data-number="${index}" title="${item.title}" alt="">
                                    
                                   
                                </div>`);



        $('.thumbnail').click((event) => {
            let ind = parseInt($(event.target).attr('data-number'));
            loadImage(ind);
        });
    });



});

