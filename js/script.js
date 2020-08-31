$(document).ready(function(){
    //data di partenza è il 28-01-01
    // creo oggetto moment con questa data
    var dataCorrente = moment('2018-01-01');

    var month = dataCorrente.format('MMMM');
    var year = dataCorrente.format('YYYY');

    $('h1.month').html(month + '' + year);

    var daysMonth = dataCorrente.daysInMonth();

    for (var i = 1; i <= daysMonth; i++) {
        var source = $('#day-template').html();
        var template = Handlebars.compile(source);

        var context = {
            day: addZero(i),
            month: month,
            completeDate: year + '-' + dataCorrente.format('MM') + '-' + addZero(i)

        }

        var html = template(context);

        $('.month-list').append(html);
    }

});

function addZero(n){
    if (n < 10) {
        return '0' + n;
    }
    return n;
}
