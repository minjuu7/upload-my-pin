document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let fileInput = document.getElementById('fileInput');
    let file = fileInput.files[0];

    if (!file) {
        document.getElementById('status').textContent = 'Please select a file.';
        return;
    }

    if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
        document.getElementById('status').textContent = 'Invalid file type. Please select a JPG, JPEG, or PNG file.';
        return;
    }

    document.getElementById('status').textContent = 'Uploading ' + file.name + '...';

    setTimeout(function() {
        document.getElementById('status').textContent = 'File ' + file.name + ' uploaded successfully!';
    }, 2000);
});
