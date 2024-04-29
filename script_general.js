(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","scrollBarMargin":2,"backgroundColor":["#FFFFFF"],"minWidth":0,"start":"this.init()","class":"Player","data":{"history":{},"defaultLocale":"es","textToSpeechConfig":{"rate":1,"stopBackgroundAudio":false,"volume":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"speechOnInfoWindow":false,"pitch":1},"locales":{"es":"locale/es.txt"},"name":"Player540"},"backgroundColorRatios":[0],"hash": "826fd72864cbb6a0e1ab87a66a07d309568b9fa6efa7296c4d9203eeaa6711f7", "definitions": [{"id":"MainViewer","playbackBarHeight":10,"playbackBarProgressBorderSize":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadWidth":6,"toolTipShadowColor":"#333138","progressLeft":"33%","subtitlesBackgroundColor":"#000000","subtitlesTop":0,"progressBackgroundColorRatios":[0],"playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesBackgroundOpacity":0.2,"progressHeight":2,"data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontFamily":"Arial","playbackBarProgressBorderRadius":0,"progressRight":"33%","toolTipPaddingBottom":4,"vrPointerColor":"#FFFFFF","progressBorderSize":0,"surfaceReticleColor":"#FFFFFF","toolTipTextShadowColor":"#000000","playbackBarBackgroundOpacity":1,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowOpacity":0.7,"firstTransitionDuration":0,"progressBarBorderRadius":2,"progressOpacity":0.7,"progressBarBackgroundColorDirection":"horizontal","width":"100%","height":"100%","playbackBarProgressBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","toolTipBorderColor":"#767676","playbackBarBorderColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","minHeight":50,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowOpacity":1,"minWidth":100,"progressBarBorderSize":0,"playbackBarHeadBorderRadius":0,"vrThumbstickRotationStep":20,"toolTipPaddingRight":6,"progressBarBackgroundColor":["#3399FF"],"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","playbackBarHeadHeight":15,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"subtitlesBorderColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","toolTipPaddingTop":4,"progressBorderColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarBorderSize":0,"toolTipPaddingLeft":6,"playbackBarHeadBorderSize":0,"vrPointerSelectionTime":2000,"subtitlesFontSize":"3vmin","playbackBarHeadShadow":true,"progressBackgroundColor":["#000000"],"subtitlesBottom":50,"subtitlesFontColor":"#FFFFFF","subtitlesGap":0,"propagateClick":false,"toolTipFontColor":"#606060","playbackBarBottom":5,"progressBottom":10,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesFontFamily":"Arial","toolTipFontSize":"1.11vmin","progressBorderRadius":2,"playbackBarBackgroundColor":["#FFFFFF"],"class":"ViewerArea"},{"animations":["this.anim_20F80C21_2A11_7F91_41B8_52A6206D660A"],"id":"model_20CBEB68_2A11_799F_41BB_605BE997FBB2","lights":["this.light_20E94C2A_2A11_7F90_41C4_BAD9972CA622","this.light_20EA3C2B_2A11_7F91_41A3_FFA3D4C8E550"],"surfaceReticleRadius":0.02,"label":trans('model_20CBEB68_2A11_799F_41BB_605BE997FBB2.label'),"backgroundColor":"#333333","castShadow":true,"objects":[],"environmentIntensity":0.5,"model":"this.res_20E01C27_2A11_7F90_41BF_6F323D0D6E14","surfaceReticleMinRadius":15,"surfaceSelectionCoef":2,"floorRadius":8,"surfaceReticleMaxRadius":50,"environmentURL":"media/model_20CBEB68_2A11_799F_41BB_605BE997FBB2/bg_20EC1C2C_2A11_7F97_4156_B532DFDE5EE4.jpg","thumbnailUrl":"media/model_20CBEB68_2A11_799F_41BB_605BE997FBB2_t.jpg","camera":"this.cam_20E4DC29_2A11_7F91_41BB_A6F2839E647F","class":"Model3D","data":{"showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true,"label":"untitled"}},{"id":"MainViewerModel3DPlayer","viewerArea":"this.MainViewer","class":"Model3DPlayer"},{"id":"IconButton_26A6B095_2A10_A8B1_41C0_F0A9BA69EE0F","class":"IconButton","verticalAlign":"middle","data":{"name":"Button46349"},"transparencyActive":true,"top":"2.6%","iconURL":"skin/IconButton_26A6B095_2A10_A8B1_41C0_F0A9BA69EE0F.png","width":80.8,"height":62.4,"click":"var anim = this.anim_20F80C21_2A11_7F91_41B8_52A6206D660A; anim.set('finalFrame', 'last'); anim.set('animationDirection', 'normal'); anim.set('loop', false); anim.play()","propagateClick":false,"backgroundOpacity":0,"rollOverIconURL":"skin/IconButton_26A6B095_2A10_A8B1_41C0_F0A9BA69EE0F_rollover.png","horizontalAlign":"center","pressedIconURL":"skin/IconButton_26A6B095_2A10_A8B1_41C0_F0A9BA69EE0F_pressed.png","left":"1.27%","minHeight":0,"minWidth":0},{"id":"mainPlayList","class":"PlayList","items":[{"player":"this.MainViewerModel3DPlayer","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","media":"this.model_20CBEB68_2A11_799F_41BB_605BE997FBB2","class":"Model3DPlayListItem"}]},{"id":"anim_20F80C21_2A11_7F91_41B8_52A6206D660A","name":"CylinderAction.008","index":0,"class":"Model3DAnimation"},{"id":"light_20E94C2A_2A11_7F90_41C4_BAD9972CA622","shadowTolerance":2,"pitch":45,"castShadow":true,"yaw":-45,"class":"OrbitLight","intensity":0.5},{"id":"light_20EA3C2B_2A11_7F91_41A3_FFA3D4C8E550","shadowTolerance":2,"pitch":75,"castShadow":true,"yaw":135,"class":"OrbitLight","intensity":0.3},{"id":"res_20E01C27_2A11_7F90_41BF_6F323D0D6E14","levels":[{"class":"Model3DResourceLevel","url":"media/model_20CBEB68_2A11_799F_41BB_605BE997FBB2/scene.glb"},{"tags":"mobile","url":"media/model_20CBEB68_2A11_799F_41BB_605BE997FBB2/scene_mobile.glb","class":"Model3DResourceLevel"}],"class":"Model3DResource"},{"id":"cam_20E4DC29_2A11_7F91_41BB_A6F2839E647F","maxY":16.05,"initialZ":-1.06,"minY":-15.98,"maxZ":5.83,"initialDistance":8.77,"minZ":-7.96,"class":"OrbitModel3DCamera","autoNearFar":true,"initialX":0.75,"initialPitch":-30,"minX":-11.24,"maxDistance":17.54,"initialY":0.03,"minDistance":2.19,"maxX":12.75}],"children":["this.MainViewer","this.IconButton_26A6B095_2A10_A8B1_41C0_F0A9BA69EE0F"],"defaultMenu":["fullscreen","mute","rotation"],"height":"100%","watermark":false,"width":"100%","layout":"absolute","propagateClick":false,"scripts":{"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"quizFinish":TDV.Tour.Script.quizFinish,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getKey":TDV.Tour.Script.getKey,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"cloneBindings":TDV.Tour.Script.cloneBindings,"getOverlays":TDV.Tour.Script.getOverlays,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"translate":TDV.Tour.Script.translate,"createTween":TDV.Tour.Script.createTween,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"init":TDV.Tour.Script.init,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"downloadFile":TDV.Tour.Script.downloadFile,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"setLocale":TDV.Tour.Script.setLocale,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"registerKey":TDV.Tour.Script.registerKey,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"clone":TDV.Tour.Script.clone,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"unregisterKey":TDV.Tour.Script.unregisterKey,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"historyGoForward":TDV.Tour.Script.historyGoForward,"historyGoBack":TDV.Tour.Script.historyGoBack,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getMainViewer":TDV.Tour.Script.getMainViewer,"executeJS":TDV.Tour.Script.executeJS,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"existsKey":TDV.Tour.Script.existsKey,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"initAnalytics":TDV.Tour.Script.initAnalytics,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"initQuiz":TDV.Tour.Script.initQuiz,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"isPanorama":TDV.Tour.Script.isPanorama,"mixObject":TDV.Tour.Script.mixObject,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setValue":TDV.Tour.Script.setValue,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"shareSocial":TDV.Tour.Script.shareSocial,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showPopupImage":TDV.Tour.Script.showPopupImage,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizShowScore":TDV.Tour.Script.quizShowScore,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"openLink":TDV.Tour.Script.openLink,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"playAudioList":TDV.Tour.Script.playAudioList,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"showWindow":TDV.Tour.Script.showWindow,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizStart":TDV.Tour.Script.quizStart,"startMeasurement":TDV.Tour.Script.startMeasurement,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPixels":TDV.Tour.Script.getPixels},"scrollBarColor":"#000000","gap":10,"minHeight":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.12.js.map
})();
//Generated with v2023.2.12, Mon Apr 29 2024