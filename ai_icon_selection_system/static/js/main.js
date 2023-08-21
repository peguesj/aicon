// main.js
$(document).ready(function() {
    // Handle the icon upload event.
    $('#upload-icon').on('click', function() {
        var file = $('#icon-file').prop('files')[0];
        var formData = new FormData();
        formData.append('icon', file);
        $.ajax({
            url: '/api/upload_icon',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function() {
                alert('Icon uploaded successfully!');
            }
        });
    });

    // Handle the brand abstract upload event.
    $('#upload-brand-abstract').on('click', function() {
        var file = $('#brand-abstract-file').prop('files')[0];
        var formData = new FormData();
        formData.append('brand_abstract', file);
        $.ajax({
            url: '/api/upload_brand_abstract',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function() {
                alert('Brand abstract uploaded successfully!');
            }
        });
    });

    // Handle the find matching icons event.
    $('#find-matching-icons').on('click', function() {
        var brandAbstractId = $('#brand-abstract').val();
        var imageLibraries = $('#image-libraries').val();
        $.ajax({
            url: '/api/find_matching_icons',
            type: 'POST',
            data: {
                brandAbstractId: brandAbstractId,
                imageLibraries: imageLibraries
            },
            success: function(results) {
                // Get the matching icons from the results.
                matchingIcons = results['matching_icons'];

                // Get the explanations of the icon matches.
                explanations = results['explanations'];

                // Get the tags of the icon matches.
                tags = results['tags'];

                // Display the matching icons.
                var html = '';
                for (var i in matchingIcons) {
                    var similarity = matchingIcons[i][0];
                    var icon = matchingIcons[i][1];
                    var explanation = explanations[i];
                    var tags = tags[i];
                    html += '<div class="icon">';
                    html += '<img src="' + icon + '" alt="' + icon + '">';
                    html += '<p>Similarity: ' + similarity + '</p>';
                    html += '<p>Explanation: ' + explanation + '</p>';
                    html += '<p>Tags: ' + tags + '</p>';
                    html += '</div>';
                }

                $('#matching-icons').html(html);
            }
        });
    });
});
