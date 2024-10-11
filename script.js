$(document).ready(function() {
    $('a').hover(
        function() {
            // Mouse enter
            $('a').not(this).fadeTo(200, 0.5); // Fade out other buttons
        },
        function() {
            // Mouse leave
            $('a').not(this).fadeTo(200, 1); // Fade back in other buttons
        }
    );
});