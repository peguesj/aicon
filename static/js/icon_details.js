$(document).ready(function() {
    // Get the icon data.
    var id = window.location.pathname.split('/')[3];
    $.ajax({
        url: '/api/icons/' + id,
        type: 'GET',
        success: function(icon) {
            // Set the icon data.
            $('#icon').attr('src', icon.image_url);
            $('#name').text(icon.name);
            $('#description').text(icon.description);
            $('#category').text(icon.category);
        }
    });
});
