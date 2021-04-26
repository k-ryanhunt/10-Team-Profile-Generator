function genEmployees(team){
	let htmlMain = '';
	team.forEach(obj => {
		switch (obj.getRole()) {
			case 'Engineer':
				let stringDataEng = genEngineer(obj);
				htmlMain += stringDataEng;
			break;
			case 'Intern':
				let stringDataInt = genIntern(obj);
				htmlMain += stringDataInt;
			break;
			default:
				return '';
		}
	});
	return htmlMain;
};

function genManager(team) {
	let managerData = '';
	team.forEach( obj => {
		if (obj.getRole() === 'Manager') {
			managerData =`			
			<div class="col-2 cardCont">
			<div class="card" >
			<div class="card-body">
			<h5 class="card-title">${obj.getName()}</h5>
			<p class="card-text"><i class="bi bi-clipboard-check"></i>${obj.getRole()}
			</p>
			</div>
			<ul class="list-group list-group-flush">
			<li class="list-group-item">ID: ${obj.getId()}</li>
			<li class="list-group-item">Email: <a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>
			<li class="list-group-item">Office Number: ${obj.getOfficeNumber()}</li>
			</ul>
			</div>
			</div>
			` 
		} else {
			return '';
		}
	});
	return managerData;
};

function genEngineer(obj) {
	return`			
	<div class="col-2 cardCont">
	<div class="card" >
	<div class="card-body">
	<h5 class="card-title">${obj.getName()}</h5>
	<p class="card-text"><i class="bi bi-lightbulb"></i>${obj.getRole()}
	</p>
	</div>
	<ul class="list-group list-group-flush">
	<li class="list-group-item">ID: ${obj.getId()}</li>
	<li class="list-group-item">Email: <a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>
	<li class="list-group-item">GitHub: <a href="https://github.com/${obj.getGithub()}">${obj.getGithub()}</a></li>
	</ul>
	</div>
	</div>
	`
};

function genIntern(obj) {
	return `			
<div class="col-2 cardCont">
<div class="card" >
<div class="card-body">
<h5 class="card-title">${obj.getName()}</h5>
<p class="card-text"><i class="bi bi-pencil-square"></i>${obj.getRole()}
</p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">ID: ${obj.getId()}</li>
<li class="list-group-item">Email: <a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>
<li class="list-group-item">School: ${obj.getSchool()}</li>
</ul>
</div>
</div>
`
};

function genFile(team) {
	return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link
rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
crossorigin="anonymous"
/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">
<link rel="stylesheet" href="./css/styles.css" />
<title>Team</title>
</head>
<body>
<header class='jumbotron'>
<h1 class="display-4 text-center headerJumbo">My Team</h1>
</header>
<div class="row justify-content-center">
${genManager(team)}
</div>
<div class="row justify-content-center">
${genEmployees(team)}
</div>
</body>
</html>
`
};

module.exports = teamProfile;