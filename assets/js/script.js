$(document).ready(function () {
    $(function () {
        $("#discountCode").keydown(function () {
            $(this).css({
                color: "blue",
                "border-color": "#a5c6d2",
                background: "#bfe1ec",
            });
        });
    });

    $("#discountCode").focusout(function () {
        const value = $(this).val();

        if (value.trim()) {
            $(this).css({
                color: "green",
                "border-color": "#99d499",
                background: "#a5f1a4",
            });
        } else {
            $(this).css({
                color: "",
                "border-color": "",
                background: "",
            });
        }
    });

    $("#compraBtn").click(function () {
        $(this).css("background", "#fba702");
        $(this).text("¿Estás seguro?");
    });

    $("#compraBtn").dblclick(function () {
        $(this).css("background", "blue");
        $(this).text("¡OK!");
    });

    $("#compraBtn").mouseout(function () {
        if ($(this).text() == "¡OK!") {
            $(this).css({ background: "unset", color: "green" });
            $(this).text("COMPRADO");

            $(this).unbind();
        }
    });
});

$("#formulario").on("submit", function (event) {
    event.preventDefault();
});