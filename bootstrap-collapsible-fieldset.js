$(function () {
    $('fieldset.collapsible > legend').append(' (<span style="font-family: monospace;">+</span>)');
    $('fieldset.collapsible > legend').click(function () {
        var $divs = $(this).siblings();
        $divs.toggle();

        $(this).find('span').text(function () {
            return ($divs.is(':visible')) ? '-' : '+';
        });
    });
});
