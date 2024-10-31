$( document ).ready(() => {
    $( "form" ).on( "submit", (e) => {
        e.preventDefault();
        let maxNumber = $( "#max-number" ).val();
        maxNumber = parseInt(maxNumber);

        let randomNumber = Math.random() * maxNumber;
        randomNumber = Math.ceil( randomNumber );
        $( "#chosen-number" ).text( randomNumber );
        $( ".result" ).css( "display", "block" );
    })
})
