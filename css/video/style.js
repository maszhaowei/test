GM_addStyle(`.zw-player-tooltips {
    position: fixed;
    opacity: 0;
    z-index: -1;
    top: -999px;
    cursor: default;
    pointer-events: none;

    text-align: left;
    white-space: nowrap;

    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
    line-height: 1;

    color: #222;
}
.zw-player-tooltips.active {
    -webkit-transform: translate(0);
    transform: translate(0);
    z-index: 999999;
    opacity: 1;
}
.zw-player-tooltips.center-center, .zw-player-tooltips.top-center, .zw-player-tooltips.top-left, .zw-player-tooltips.top-right {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
}
.zw-player-tooltips.animation {
    -webkit-transition: opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;
    transition: opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out,opacity .3s ease-in-out;
    transition: transform .3s ease-in-out,opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;
}

.zw-player-tooltips > .zw-tooltip:first-child {
    margin: 0;
}
.zw-player-tooltips.active > .arrow, .zw-player-tooltips.active > .zw-tooltip {
    opacity: 1;
    z-index: 98;
}
.zw-player-tooltips.animation > .arrow, .zw-player-tooltips.animation > .zw-tooltip {
    -webkit-transition: opacity .3s ease-in-out;
    transition: opacity .3s ease-in-out;
}
.zw-player-tooltips > .zw-tooltip {
    background: rgba(0,0,0,.7);
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    padding: 6px 8px;
    line-height: normal;
}

div.zw-player-tooltips, div.zw-tooltip {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    font-style: normal;

    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

div.zw-player-tooltips::selection, div.zw-tooltip::selection {
    background: #1890ff;
    color: #fff;
}`);

GM_addStyle(`.mode-fullscreen, .mode-webfullscreen {
    position: fixed;
    border-radius: 0;
    z-index: 100000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
body.player-fullscreen-fix {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0
}`);