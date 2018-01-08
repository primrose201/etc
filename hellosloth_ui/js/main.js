var $$i = {
    'cont': $('#container'),
    'section1': $('#section1'),
    'section2': $('#section2'),
    'btnPorSection': $('#btn_portfolio_section'),
    'btnMeSection': $('#btn_me_section')
};

var showDimmedLayer = function($layer) {
    $('#dimmed').fadeIn(200);
};

$$i.cont.find('.btn_filter').click(function(e) {
    e.preventDefault();
    showDimmedLayer();
});

$('.btn_filter').click(function(e) {
    var $that = $(this), $tooltip = $that.siblings('.tooltip_filter');
    if ($tooltip.css('display') === 'none') $tooltip.show(300);
    else $tooltip.hide(300);

});

$$i.btnPorSection.click(function() {
    $$i.btnMeSection.removeClass('on');
    $$i.btnPorSection.addClass('on');
    $$i.section1.addClass('showSection1');
    $$i.section2.addClass('hideSection2');
    setTimeout(function() {
        $$i.section1.removeClass('hideState');
        $$i.section2.addClass('hideState');
        $$i.section1.removeClass('showSection1');
        $$i.section2.removeClass('hideSection2');
    },500);
});

$$i.btnMeSection.click(function() {
    $$i.btnMeSection.addClass('on');
    $$i.btnPorSection.removeClass('on');
    $$i.section1.addClass('hideSection1');
    $$i.section2.addClass('showSection2');
    setTimeout(function() {
        $$i.section1.addClass('hideState');
        $$i.section2.removeClass('hideState');
        $$i.section1.removeClass('hideSection1');
        $$i.section2.removeClass('showSection2');
    },500);
});