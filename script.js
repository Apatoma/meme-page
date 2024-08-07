document.getElementById('generate-meme').addEventListener('click', function() {
    var topText = document.getElementById('top-text-input').value;
    var bottomText = document.getElementById('bottom-text-input').value;
    
    document.getElementById('top-text').innerText = topText;
    document.getElementById('bottom-text').innerText = bottomText;
});

document.getElementById('download-meme').addEventListener('click', function() {
    html2canvas(document.getElementById('meme-container')).then(function(canvas) {
        var link = document.createElement('a');
        link.download = 'meme.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
