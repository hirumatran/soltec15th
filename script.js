const upload = document.getElementById("upload");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const frame = new Image();
frame.src = "frame.png"; // Your circular frame with transparent center

upload.addEventListener("change", function () {
  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
       ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Create circular clipping path
  ctx.save();
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();

  // Draw uploaded photo inside circular clip
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  ctx.restore();

  // Draw the frame on top (frame.png must be a transparent PNG)
  ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);

    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(upload.files[0]);
});
 

document.getElementById("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.download = "profile-photo.png";
  link.href = canvas.toDataURL();
  link.click();
});
