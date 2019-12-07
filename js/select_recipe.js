// API Link
function getUrl() {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
// jQuery start
$(document).ready(function() {
    requestApi();
    // get value from select
    $('#recipe').on('change', function() {
        var selectVal = $('#recipe').val();
        $('h1').html(selectVal);
    })
});

// request api
function requestApi() {
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: (data) => getRecipe(data),
        error: () => console.log("Cannot request data"),
    });
}
// get recipe to select
function getRecipe(myData) {
    var select = "";
    myData.recipes.forEach(item => {
       select += `<option value="${item.id}">${item.name}</option>`;
    });
    $('#recipe').append(select);
}
