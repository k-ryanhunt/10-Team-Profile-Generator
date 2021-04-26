function genEmployees(team) {
  let htmlMain = "";
  team.forEach((obj) => {
    switch (obj.getRole()) {
      case "Engineer":
        let stringDataEng = genEngineer(obj);
        htmlMain += stringDataEng;
        break;
      case "Intern":
        let stringDataInt = genIntern(obj);
        htmlMain += stringDataInt;
        break;
      default:
        return "";
    }
  });
  return htmlMain;
}

function genManager(team) {
  let managerData = "";
  team.forEach((obj) => {
    if (obj.getRole() === "Manager") {
      managerData = `			
		<div class="row center-align">
		<div class="col s12 m6">
			<div class="card teal darken-4 center-align">
				<div class="card-content white-text">
					<span class="card-title">${obj.getName()}</span>
					<p>${obj.getRole()}</p>
				</div>
				<div class="card-action">
					<a href="#">${obj.getId()}</a>
					<a href="#">${obj.getEmail()}</a>
					<a href="#">${obj.getOfficeNumber()}</a>
				</div>
			</div>
		</div>
		</div>
			`;
    } else {
      return "";
    }
  });
  return managerData;
}

function genEngineer(obj) {
  return `			
  <div class="row center-align">
  <div class="col s12 m6">
	<div class="card teal darken-4 center-align">
	  <div class="card-content white-text">
		<span class="card-title">${obj.getName()}</span>
		<p>${obj.getRole()}</p>
	  </div>
	  <div class="card-action">
		<a href="#">${obj.getId()}</a>
		<a href="#">${obj.getEmail()}</a>
		<a href="#">${obj.getGithub()}</a>
	  </div>
	</div>
  </div>
  </div>
	`;
}

function genIntern(obj) {
  return `			
  <div class="row center-align">
  <div class="col s12 m6">
	<div class="card teal darken-4 center-align">
	  <div class="card-content white-text">
		<span class="card-title">${obj.getName()}</span>
		<p>${obj.getRole()}</p>
	  </div>
	  <div class="card-action">
		<a href="#">${obj.getId()}</a>
		<a href="#">${obj.getEmail()}</a>
		<a href="#">${obj.getSchool()}</a>
	  </div>
	</div>
  </div>
  </div>
`;
}

function teamProfile(team) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<title>Team</title>
</head>
<body>
<nav>
<div class="nav-wrapper blue-grey darken-4">
  <a href="#" class="brand-logo center">My Team</a>
  <ul id="nav-mobile" class="left hide-on-med-and-down">
  </ul>
</div>
</nav>
<div class="row center-align">
${genManager(team)}
</div>
<div class="row center-align">
${genEmployees(team)}
</div>
</body>
</html>
`;
}

module.exports = teamProfile;
