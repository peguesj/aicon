$(document).ready(function() {
    // Initialize the search bar.
    $('#search-input').on('keyup', function() {
        var keyword = $(this).val();
        $.ajax({
            url: '/api/search',
            type: 'GET',
            data: {
                keyword: keyword
            },
            success: function(results) {
                $('#results').empty();
                for (var i in results) {
                    var result = results[i];
                    var li = $('<li>').text(result.name);
                    li.attr('data-id', result.id);
                    li.append('<img src="' + result.image_url + '" alt="' + result.name + '">');
                    $('#results').append(li);
                }
            }
        });
    });

    // Handle the search button click event.
    $('#search-button').on('click', function() {
        var keyword = $('#search-input').val();
        window.location.href = '/search?keyword=' + keyword;
    });

    // Handle the icon click event.
    $('#results li').on('click', function() {
        var id = $(this).data('id');
        window.location.href = '/icon_details?id=' + id;
    });
});
