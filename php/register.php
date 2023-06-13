<?php
$DATABASE_HOST = 'localhost';
$DATABASE_USER = 'root';
$DATABASE_PASS = 'mysqlsifre123';
$DATABASE_NAME = 'm-bay-final';
$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if (mysqli_connect_errno()) {
	exit('Veri tabanı ile bağlantı kurulamadı: ' . mysqli_connect_error());
}
if (!isset($_POST['username'], $_POST['email'], $_POST['password'])) {
	exit('Lütfen formu tamamen doldurduğunuza emin olun!');
}
if (empty($_POST['username']) || empty($_POST['email']) || empty($_POST['password'])) {
	exit('Lütfen formu tamamen doldurduğunuza emin olun!');
}

if (strlen($_POST['password']) > 20 || strlen($_POST['password']) < 8) {
	exit('Şifreniz en az 8, en fazla 20 karakter olmak zorundadır!');
}


if ($stmt = $con->prepare('SELECT id, password FROM user_datas WHERE username = ?')) {
	$stmt->bind_param('s', $_POST['username']);
	$stmt->execute();
	$stmt->store_result();
	if ($stmt->num_rows > 0) {
		echo 'Kullanıcı adı alınmış. Başka bir kullanıcı adı ile tekrar deneyin.';
	} else {
        if ($stmt = $con->prepare('INSERT INTO user_datas (username, email, password) VALUES (?, ?, ?)')) {
            $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
            $stmt->bind_param('sss', $_POST['username'], $_POST['email'], $password);
            $stmt->execute();
            echo 'Kayıt başarılı!';
        } else {
            echo 'Bug var, uyan developer!';
        }
	}
	$stmt->close();
} else {
	echo 'Bug var, uyan developer!';
}
$con->close();
?>