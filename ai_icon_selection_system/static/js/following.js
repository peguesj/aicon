$(document).ready(function() {
    // Get the following data.
    $.ajax({
        url: '/api/following',
        type: 'GET',
        success: function(following) {
            // Set the following data.
            $('#following').empty();
            for (var i in following) {
                var user = following[i];
                var li = $('<li>').text(user.username);
                $('#following').append(li);
            }
        }
    });
});
