var frm = $('#register-form');
frm.submit(function (e) {
    var recaptcha = $("#g-recaptcha-response").val();
    if (recaptcha === "") {
        e.preventDefault();
        alert("Vui lòng kiểm tra biểu mẫu. Error: Please check the Recaptcha.");
    }
    else {
        e.preventDefault();
        $.ajax({
            type: 'GET',
            beforeSend: function(){
                $("input").prop('disabled', true);
                $("#submit-form").attr("disabled", true);
            },
            url: 'https://script.google.com/macros/s/AKfycbxIKOm6nq0hqI-au3mI6cytiGYst3skND2R9fRtHJWlrbJU3Vqa/exec',
            data: frm.serialize(),
            success: function (data) {
                $('#SuccessModal').modal('show');
            },
            error: function (data) {
                $('#FailModal').modal('show');
            },
            complete: function(){
                $("input").prop('disabled', false);
                $("#submit-form").attr("disabled", false);
                $('#register-form')[0].reset();
            }
        });
    }
});
