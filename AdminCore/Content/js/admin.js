/// <reference path="../framwork/jquery/jquery-3.1.1.js" />
  
var horizontalMenuId = $('#HMenu');
var verticalMenuId = $('#PMenu');
var verticalMenuStorag = 'verticalMenu';
var horizontalMenuStorag = 'horizontalMenuStorag';
var settingIcon = $('#Heilton-ItemSetting ul li .fa-cog');
var picUserDiv = $('#Heilton-AdminPic');
var panelSettingDiv = $('#Heilton-asideLeft');
var logoIconTop = $('#Heilton-LogoIcon');
var asideRightPanel = $('#Heilton-asideRight');
var picUserIcon = $('#Heilton-ItemSetting ul li img');
var closeIconUser = $('#Heilton-AdminPic>figure>i');
var brandPanel = $('a.Heilton-logo');
var topMenu = $('#Heilton-MenuTop');
var marginRight50 = 'MW50';
var contentPanel = $('#Heilton-Center');
var subMenuRightPanel = $(".sidebar-dropdown .sidebar-submenu");
var haveSubMenuRight = $('.sidebar-dropdown');
var patternRegularColor = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
var backColor = 'background-color';
var defualtColor = 'initial';
var breadCrumbTop = $('.Heilton-breadcrumb');
var backGround = 'background';
mdMediaQuery = '(max-width: 768px)';
function init() {
    
    settingIcon.click(function () {
        picUserDiv.hide();
        panelSettingDiv.slideToggle();
        tabContentSetting.width(getLengthTabs() * 100 + "px");

    });
    picUserIcon.click(function () {
        panelSettingDiv.hide();
        picUserDiv.slideToggle(100);
    });
    closeIconUser.click(function () {
        panelSettingDiv.hide();
        picUserDiv.slideToggle(100);
    });

    if ($(window).width()<768) {
        
            asideRightPanel.addClass('hidePanel');
    } 
    logoIconTop.click(function () {

        asideRightPanel.toggleClass('hidePanel');
        contentPanel.toggleClass(marginRight50);
    });
    haveSubMenuRight.click(function () {
        $(this).find(subMenuRightPanel).slideToggle(200);
       
    });
}
$(document).ready(function () {
    init();
});
$(window).resize(function () {
    this.asideRightPanel.removeClass('hidePanel');
    if ($(window).width() < 768) {
        this.asideRightPanel.addClass('hidePanel');
        this.contentPanel.removeClass(this.marginRight50);
    }
    
});
