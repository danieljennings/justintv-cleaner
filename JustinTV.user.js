// ==UserScript==
// @name           JustinTV Cleaner
// @namespace      justin.tv
// @description    Minifies the JustinTV window and skins it with a Starcraft 2 theme
// @include        http://justin.tv/*
// @include        http://www.justin.tv/*
// @exclude        http://www.justin.tv/
// @exclude        http://www.justin.tv/directory/*
// @date           2011-04-12
// @version        1.0
// ==/UserScript==

var main = function () {

	var remove = function (node) {
		node.style.display = 'none';
	};
	var removeStrong = function (node) {
		node.parentNode.removeChild(node);
	};

	var body = document.body;
	body.style.background = '#000 url(http://i.imgur.com/WWH5i.jpg) no-repeat center top';

	var adBannerTop = document.getElementById('iphone_banner');
	remove(adBannerTop);

	var header = document.getElementById('site_header');
	remove(header);

	var banner = document.getElementById('banner_custom');
	remove(banner);

	var rightColumn = document.getElementById('right_col');
	remove(rightColumn);

	var nextChannel = document.getElementById('admin_nxtchan');
	remove(nextChannel);

	var leftColumn = document.getElementById('left_col');
	leftColumn.style.width = '960px';
	leftColumn.style.position = 'absolute';
	leftColumn.style.left = '-160px';
	leftColumn.style.top = '215px';

	var infoPane = document.getElementById('info');
	remove(infoPane);

	var player = document.getElementById('live_site_player_flash');
	player.style.width = '1259px';
	player.style.height = '735px';

	var statsPane = document.getElementById('stats');
	remove(statsPane);

	var actionsPane = document.getElementById('actions');
	remove(actionsPane);

	var clipsPane = document.getElementById('clips');
	remove(clipsPane.parentNode);

	var footer = document.getElementById('footer');
	remove(footer);

	var footerAd1 = document.getElementById('ChanLeaderv3');
	removeStrong(footerAd1);

	var footerAd2 = document.getElementById('ChanMedRectv2');
	removeStrong(footerAd2);
	
	var footerAd3 = document.getElementById('ChanLeaderBottomv2');
	removeStrong(footerAd3);
	
	var footerAd4 = document.getElementById('PopUnderChan');
	removeStrong(footerAd4);
	
	var footerAd5 = document.getElementById('GrowlNotification');
	removeStrong(footerAd5);

	var meebo = document.getElementById('meebo');
	removeStrong(meebo);

}

main();