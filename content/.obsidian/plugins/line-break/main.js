/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MyPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var MyPlugin = class extends import_obsidian.Plugin {
  async onload() {
    this.addCommand({
      id: "peaceful-break",
      name: "Peaceful Linebreak",
      editorCallback: (editor) => {
        const editor_position = editor.getCursor();
        editor.setCursor(editor_position.line + 1, 0);
        editor.replaceSelection("\n");
        editor.setCursor(editor_position.line + 1, 0);
      }
    });
  }
  onunload() {
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgRWRpdG9yLCBQbHVnaW4gfSBmcm9tICdvYnNpZGlhbic7XG5cbi8vIFJlbWVtYmVyIHRvIHJlbmFtZSB0aGVzZSBjbGFzc2VzIGFuZCBpbnRlcmZhY2VzIVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15UGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcblx0YXN5bmMgb25sb2FkKCkge1xuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XG5cdFx0XHRpZDogJ3BlYWNlZnVsLWJyZWFrJyxcblx0XHRcdG5hbWU6ICdQZWFjZWZ1bCBMaW5lYnJlYWsnLFxuXHRcdFx0ZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvcikgPT4ge1xuXHRcdFx0XHRjb25zdCBlZGl0b3JfcG9zaXRpb24gPSBlZGl0b3IuZ2V0Q3Vyc29yKCk7XG5cdFx0XHRcdGVkaXRvci5zZXRDdXJzb3IoZWRpdG9yX3Bvc2l0aW9uLmxpbmUrMSwgMCk7XG5cdFx0XHRcdGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKFwiXFxuXCIpO1xuXHRcdFx0XHRlZGl0b3Iuc2V0Q3Vyc29yKGVkaXRvcl9wb3NpdGlvbi5saW5lKzEsIDApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0b251bmxvYWQoKSB7XG5cblx0fVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUErQjtBQUsvQixJQUFxQixXQUFyQixjQUFzQyx1QkFBTztBQUFBLEVBQzVDLE1BQU0sU0FBUztBQUNkLFNBQUssV0FBVztBQUFBLE1BQ2YsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sZ0JBQWdCLENBQUMsV0FBbUI7QUFDbkMsY0FBTSxrQkFBa0IsT0FBTyxVQUFVO0FBQ3pDLGVBQU8sVUFBVSxnQkFBZ0IsT0FBSyxHQUFHLENBQUM7QUFDMUMsZUFBTyxpQkFBaUIsSUFBSTtBQUM1QixlQUFPLFVBQVUsZ0JBQWdCLE9BQUssR0FBRyxDQUFDO0FBQUEsTUFDM0M7QUFBQSxJQUNELENBQUM7QUFBQSxFQUNGO0FBQUEsRUFFQSxXQUFXO0FBQUEsRUFFWDtBQUNEOyIsCiAgIm5hbWVzIjogW10KfQo=
