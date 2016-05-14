$(document).ready(function() {
    $(".expandables span a").click(function() {
	$(this).parent().children().show();
    });
});
