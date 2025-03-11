// https://docs.obsidian.md/Plugins/Editor/Editor
// https://docs.obsidian.md/Reference/TypeScript+API/Editor
// https://docs.obsidian.md/Reference/TypeScript+API/EditorPosition

class MoveToNewLine {
  constructor() {
    // Binding the invoke function to the `this` context of the class
    this.invoke = this.invoke.bind(this);
  }

  // The invoke method is executed when the custom script is triggered
  async invoke() {
    this.app.workspace.on('editor', this.lineAdder);
  }
  lineAdder(){
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!view) {
      console.error("No active editor found.");
      return;
    }
    const editor = view.editor
    const editor_position = editor.getCursor(); // Get the current cursor position
    editor.setCursor(editor_position, 5)
 
  }



  // Deconstructor method is called when the script is unloaded or reloaded
  deconstructor() {
    this.app.workspace.off('editor', this.lineAdder);
  }
}

