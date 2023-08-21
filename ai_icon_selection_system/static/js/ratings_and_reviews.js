$(document).ready(function() {
    // Get the ratings and reviews data.
    var id = window.location.pathname.split('/')[3];
    $.ajax({
        url: '/api/icons/' + id + '/ratings_and_reviews',
        type: 'GET',
        success: function(ratingsAndReviews) {
            // Set the ratings and reviews data.
            $('#ratings-and-reviews').empty();
            for (var i in ratingsAndReviews) {
                var ratingAndReview = ratingsAndReviews[i];
                var li = $('<li>').text(ratingAndReview.rating + ' - ' + ratingAndReview.review);
                $('#ratings-and-reviews').append(li);
            }
        }
    });
});
