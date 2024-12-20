$(document).ready(function () {
    $("input").on("input", function () {
        const value = $(this).val();
        if ($(this).attr("id") === "email" && !validateEmail(value)) {
            $(this).addClass("error").removeClass("success");
        } else if ($(this).attr("id") === "phone" && !validatePhone(value)) {
            $(this).addClass("error").removeClass("success");
        } else {
            $(this).addClass("success").removeClass("error");
        }
    });
    $("#registrationForm").submit(function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Check for validation errors
        if ($(".error").length > 0) {
            alert("Please fix the errors in the form.");
            return;
        }
        const name = $("#name").val();
        const email = $("#email").val();
        const phone = $("#phone").val();
        const dob = $("#dob").val();
        $("#dispName").text(name);
        $("#dispEmail").text(email);
        $("#dispPhone").text(phone);
        $("#dispDob").text(dob);
        $("#confirmation").show();
        $(this).trigger("reset");
        $("input").removeClass("success error");
    });
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    function validatePhone(phone) {
        const regex = /^[0-9]{10}$/; 
        return regex.test(phone);
    }
});
