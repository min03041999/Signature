var signaturePad = new SignaturePad(document.getElementById("signature-pad"), {
  backgroundColor: "rgba(255, 255, 255, 0)",
  penColor: "rgb(0, 0, 0)",
});
var saveButton = document.getElementById("save");
var cancelButton = document.getElementById("clear");
let img = document.getElementById("img");

saveButton.addEventListener("click", function (event) {
  var data = signaturePad.toDataURL("image/png");

  // Send data to server instead...
  /* window.open(data); */
  console.log(data);
  img.setAttribute("src", data);
});

cancelButton.addEventListener("click", function (event) {
  signaturePad.clear();
});
