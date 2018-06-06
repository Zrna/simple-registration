/*  1. Login / sign up toggle
----------------------------------------------------------*/

$("#log-in").click(function () {
    $("#sign-up-box").removeClass("d-none");
    $("#log-in-box").addClass("d-none");
});

$("#sign-up").click(function () {
    $("#log-in-box").removeClass("d-none");
    $("#sign-up-box").addClass("d-none");
});



/*  2. Form validation
----------------------------------------------------------*/

$.validator.setDefaults({
    submitHandler: function () {
        alert("Submitted!");

        setTimeout(function () {
            location.reload();
        }, 100);
    }

});

// custom validation for email format: example@domain.com
jQuery.validator.addMethod("laxEmail", function (value, element) {
    return this.optional(element) || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value)
}, 'Please enter a valid email address.');


// validate signup form on keyup and submit
$("#signupForm").validate({

    rules: {
        password_login: {
            required: true,
            minlength: 5
        },
        password_signup: {
            required: true,
            minlength: 5
        },
        confirm_password: {
            required: true,
            minlength: 5,
            equalTo: "#password_signup"
        },
        email_login: {
            required: true,
            laxEmail: true,
        },
        email_signup: {
            required: true,
            laxEmail: true,
        }
    },

    messages: {
        password_login: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
        },
        password_signup: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
        },
        confirm_password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long",
            equalTo: "Please enter the same password as above"
        },
        email_login: "Please enter a valid email address",
        email_signup: "Please enter a valid email address"
    }


});