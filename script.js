function postToGoogle() {
    var field1 = $("#Email").val();

    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScv8fGttZs0tAxR5z_EyCnNPYWsvpb_rTRvOOmjykfWc8gDJQ/formResponse",

        data: {
            "entry.2042799272": field1,
        },
        type: "POST",
        dataType: "xml",
        success: function (d) {
            $('#contact-form').trigger('reset');
            window.location.href = 'thanks.html';
        },
        error: function (x, y, z) {
            $('#contact-form').trigger('reset');
            window.location.href = 'thanks.html';
        }
    });
    return false;
}