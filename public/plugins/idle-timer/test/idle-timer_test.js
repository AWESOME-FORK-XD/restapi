!function(e){module("Events Auto Binding"),asyncTest("idle Event Triggered",2,(function(){e(document).on("idle.idleTimer",(function(i,t,r){ok(!0,"idle fires at document"),ok(r.idle,"object returned properly"),e.idleTimer("destroy"),e(document).off(),start()})),e.idleTimer(100)})),asyncTest("active Event Triggered",2,(function(){e(document).on("active.idleTimer",(function(i,t,r){ok(!0,"active fires at document"),ok(!r.idle,"object returned properly"),e.idleTimer("destroy"),e(document).off(),start()})),e.idleTimer({idle:!0}),setTimeout((function(){e("#qunit-fixture").trigger("keydown")}),100)})),module("Events Element Binding"),asyncTest("idle Triggered",2,(function(){e("#qunit-fixture").on("idle.idleTimer",(function(i,t,r){ok(!0,"idle fires at document"),ok(r.idle,"object returned properly"),e("#qunit-fixture").idleTimer("destroy"),start()})),e("#qunit-fixture").idleTimer(100)})),asyncTest("active Triggered",2,(function(){e("#qunit-fixture").on("active.idleTimer",(function(i,t,r){ok(!0,"active fires at document"),ok(!r.idle,"object returned properly"),e("#qunit-fixture").idleTimer("destroy"),start()})),e("#qunit-fixture").idleTimer({idle:!0}),setTimeout((function(){e("#qunit-fixture").trigger("keydown")}),100)})),module("Timer sync"),asyncTest("setting lastActive via localStorage",1,(function(){localStorage.clear(),e.idleTimer({timeout:500,timerSyncId:"timer-test"}),setTimeout((function(){e("#qunit-fixture").trigger("keydown")}),100),setTimeout((function(){ok(localStorage.getItem("timer-test"),"localStorage key was set"),e.idleTimer("destroy"),e(document).off(),start()}),300)})),asyncTest("storage triggers active",2,(function(){localStorage.clear(),e(document).on("active.idleTimer",(function(i,t,r){ok(!0,"active fires at document"),ok(!r.idle,"object returned properly"),e.idleTimer("destroy"),e(document).off(),start()})),e.idleTimer({idle:!0,timerSyncId:"timer-storage-event-test"}),setTimeout((function(){var i=e.Event("storage");i.originalEvent={key:"timer-storage-event-test",oldValue:"1",newValue:"2"},e(window).trigger(i)}),100)})),module("Functional"),asyncTest("Pause works and is a jQuery instance",4,(function(){e.idleTimer(100),equal(typeof e.idleTimer("pause").jquery,"string","pause should be jquery"),e.idleTimer("resume"),equal(typeof e(document).idleTimer("pause").jquery,"string","pause should be jquery"),setTimeout((function(){ok(!e.idleTimer("isIdle"),"timer still active"),ok(!e(document).idleTimer("isIdle"),"timer still active"),e.idleTimer("destroy"),e(document).off(),start()}),200)})),asyncTest("Resume works and is a jQuery instance",4,(function(){e.idleTimer(100),e.idleTimer("pause"),equal(typeof e.idleTimer("resume").jquery,"string","resume should be jquery"),e.idleTimer("pause"),equal(typeof e(document).idleTimer("resume").jquery,"string","resume should be jquery"),setTimeout((function(){ok(e.idleTimer("isIdle"),"timer inactive"),ok(e(document).idleTimer("isIdle"),"timer inactive"),e.idleTimer("destroy"),e(document).off(),start()}),200)})),test("Elapsed time is a number",2,(function(){e.idleTimer(100),equal(typeof e.idleTimer("getElapsedTime"),"number","Elapsed time should be a number"),equal(typeof e(document).idleTimer("getElapsedTime"),"number","Elapsed time should be a number")})),test("Init works and is a jQuery instance",4,(function(){equal(typeof e.idleTimer(100).jquery,"string","Init should be jquery"),equal(typeof e("#qunit-fixture").idleTimer(100).jquery,"string","Destroy should be jquery"),equal(typeof e(document).data("idleTimerObj").idle,"boolean","Init data added"),equal(typeof e("#qunit-fixture").data("idleTimerObj").idle,"boolean","Init data added")})),test("Destroy works and is a jQuery instance",4,(function(){e.idleTimer(100),e("#qunit-fixture").idleTimer(100),equal(typeof e.idleTimer("destroy").jquery,"string","Destroy should be jquery"),equal(typeof e("#qunit-fixture").idleTimer("destroy").jquery,"string","Destroy should be jquery"),equal(typeof e(document).data("idleTimerObj"),"undefined","destroy removed data"),equal(typeof e("#qunit-fixture").data("idleTimerObj"),"undefined","destroy removed data")})),asyncTest("Reset is a jQuery instance",6,(function(){e.idleTimer(200),e.idleTimer("pause"),e("#qunit-fixture").idleTimer(200),e("#qunit-fixture").idleTimer("pause"),setTimeout((function(){equal(typeof e.idleTimer("reset").jquery,"string","reset should be jquery"),equal(typeof e("#qunit-fixture").idleTimer("reset").jquery,"string","reset should be jquery"),ok(null===e(document).data("idleTimerObj").remaining,"reset remaining"),ok(null===e("#qunit-fixture").data("idleTimerObj").remaining,"reset remaining")}),100),setTimeout((function(){ok(e.idleTimer("isIdle"),"timer inactive"),ok(e("#qunit-fixture").idleTimer("isIdle"),"timer inactive"),e.idleTimer("destroy"),e("#qunit-fixture").idleTimer("destroy"),e(document).off(),start()}),400)})),test("Last Active time is a number",2,(function(){e.idleTimer(100),equal(typeof e.idleTimer("getLastActiveTime"),"number","Last Active time should be a number"),equal(typeof e(document).idleTimer("getLastActiveTime"),"number","Last Active time should be a number"),e.idleTimer("destroy")})),test("Remaining time is a number",2,(function(){e.idleTimer(100),equal(typeof e.idleTimer("getRemainingTime"),"number","Remaining time should be a number"),equal(typeof e(document).idleTimer("getRemainingTime"),"number","Remaining time should be a number"),e.idleTimer("destroy")})),test("isIdle is a boolean",2,(function(){e.idleTimer(100),equal(typeof e.idleTimer("isIdle"),"boolean","isIdle should be a boolean"),equal(typeof e(document).idleTimer("isIdle"),"boolean","isIdle should be a boolean"),e.idleTimer("destroy")}))}(jQuery);