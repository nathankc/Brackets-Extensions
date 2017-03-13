/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window, Mustache */

define(function (require, exports, module) {
  "use strict";

  var AppInit = brackets.getModule('utils/AppInit'),    
    CommandManager = brackets.getModule("command/CommandManager"),    
    Commands = brackets.getModule("command/Commands");
  
  AppInit.appReady(function () {
   
    
    CommandManager.execute(Commands.FILE_CLOSE_ALL, {
      fullPath: "./view/WorkingSetView.js",
      paneId: "second-pane"
    });
      
    CommandManager.execute(Commands.FILE_CLOSE_ALL, {
      fullPath: "./view/WorkingSetView.js",
      paneId: "first-pane"
    });
      
    CommandManager.execute(Commands.FILE_CLOSE_ALL, {
      fullPath: "./view/SidebarView.js"
    });
      
    CommandManager.execute(Commands.FILE_CLOSE_ALL, {
      fullPath: "./view/FileTreeView.js"
    });
  });
});