// Image preview before uploading
const profilePicInput = document.getElementById('profilePic');
const previewImage = document.getElementById('previewImage');

profilePicInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    previewImage.src = URL.createObjectURL(file);
  }
});

// Save Changes (Example logic)
const updateForm = document.getElementById('updateForm');

updateForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const newName = document.getElementById('name').value;
  // const newProfilePic = profilePicInput.files[0]; // You can send this to server if you have backend

  alert('Profile Updated!\nName: ' + newName);
  
  // Here you can add logic to POST the data to your server/backend
});

function generateCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('referralCode').textContent = code;
}

// Auto-generate when page loads
window.onload = generateCode;

function copyCode() {
    const code = document.getElementById('referralCode').textContent;
    navigator.clipboard.writeText(code).then(() => {
        alert('Referral code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
