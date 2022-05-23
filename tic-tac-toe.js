
//! There is most likely a better way to do this.
const allButtons = document.querySelectorAll(".btn");

allButtons.forEach(element => {
  element.addEventListener('click', handleBtnClick); // <=== would like this to be: handleBtnClick(element)
  // I would like to add here a way to specify witch btn is being clicked.

  // eg: First button is clicked:
  // Function called: handleBtnClick("btn1") or handleBtnClick(1)
});






function handleBtnClick (btn) {
  alert("test click");
}