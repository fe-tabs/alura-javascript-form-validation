const openCameraBtn = document.querySelector("[data-video-botao]");
const cameraField = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const takePictureBtn = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const message = document.querySelector("[data-mensagem]");
const sendPictureBtn = document.querySelector("[data-enviar]");
let imageURL = "";

openCameraBtn.addEventListener("click", async function () {
  const startVideo = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  });

  openCameraBtn.style.display = "none";
  cameraField.style.display = "block";

  video.srcObject = startVideo;
});

takePictureBtn.addEventListener("click", function() {
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.clientWidth, canvas.height);

  imageURL = canvas.toDataURL("image/jpeg");

  cameraField.style.display = "none";
  message.style.display = "block;"
});

sendPictureBtn.addEventListener("click", () => {
  const getSavedData = localStorage.getItem("register");
  const convertedData = JSON.parse(getSavedData);

  convertedData.image = imageURL;
  localStorage.setItem("register", JSON.stringify(data));

  window.location.href = './abrir-conta-form-3.html';
});