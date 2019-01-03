/* Create an instance of CSInterface. */
var csInterface = new CSInterface();

/* Reference UI elements */
var openButton = document.querySelector("#but_file_select");

/* Add addEventListeners */
openButton.addEventListener("click", file_select);

/* Write a helper function to pass instructions to the ExtendScript side. */
function file_select() {
  csInterface.evalScript("get_files()");
};
