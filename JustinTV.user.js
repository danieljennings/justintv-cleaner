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
		if (node)
			node.style.display = 'none';
	};
	var removeStrong = function (node) {
		if (node)
			node.parentNode.removeChild(node);
	};

	// Live
	if (document.getElementById('live_site_player_flash')) {

		var rightColumn = document.getElementById('right_col');
		remove(rightColumn);

		var nextChannel = document.getElementById('admin_nxtchan');
		remove(nextChannel);

		var leftColumn = document.getElementById('left_col');
		leftColumn.style.width = '960px';
		leftColumn.style.position = 'absolute';
		leftColumn.style.left = '-151px';
		leftColumn.style.top = '208px';

		var infoPane = document.getElementById('info');
		infoPane.parentNode.style.background = 'transparent';
		remove(infoPane);

		var player = document.getElementById('live_site_player_flash');
		player.style.width = '1259px';
		player.style.height = '735px';

		var clipsPane = document.getElementById('clips');
		remove(clipsPane.parentNode);
	}

	// Recorded
	if (document.getElementById('archive_site_player_flash')) {
		var rightColumn = document.getElementById('right_column');
		remove(rightColumn);

		var leftColumn = document.getElementById('left_column');
		leftColumn.style.width = '960px';
		leftColumn.style.position = 'absolute';
		leftColumn.style.left = '-139px';
		leftColumn.style.top = '200px';

		var player = document.getElementById('archive_site_player_flash');
		player.style.width = '1259px';
		player.style.height = '735px';

		var clipPanel = document.getElementById('clip_panel');
		remove(clipPanel.parentNode);

		var subplayerButtons = document.getElementById('subplayer_buttons');
		remove(subplayerButtons);

		var shareBox = document.getElementById('share_box');
		remove(shareBox);

		var liveBanner = document.getElementById('live_banner');
		remove(liveBanner);

		var archiveHeading = document.getElementById('archive_heading');
		remove(archiveHeading);

		var wrapper = document.getElementById('wrapper');
		wrapper.style.background = 'transparent';
	}


	// Live and Recorded
	{
		var body = document.body;
		body.style.background = '#000 url(http://i.imgur.com/WWH5i.jpg) no-repeat center top';

		var adBannerTop = document.getElementById('iphone_banner');
		remove(adBannerTop);

		var header = document.getElementById('site_header');
		remove(header);

		var banner = document.getElementById('banner_custom');
		remove(banner);

		var statsPane = document.getElementById('stats');
		remove(statsPane);

		var actionsPane = document.getElementById('actions');
		remove(actionsPane);

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


}

main();