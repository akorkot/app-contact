

function defaultContact(tabContact){
	var perso1 = {
				kid : 1,
				knom: "Ayman",
				kprenom: "Korkot",
				ktel: "0673160670",
				kemail: "ayman.korkot@gmail.com"
			};
	var perso2 = {
				kid : 2,
				knom: "Ayoub",
				kprenom: "Korkot",
				ktel: "0673145670",
				kemail: "ayoub.korkot@gmail.com"
			};
	var perso3 = {
				kid : 3,
				knom: "Anas",
				kprenom: "Ahmed",
				ktel: "0672560670",
				kemail: "anas.Ahmed@gmail.com"
			};
	var perso4 = {
				kid : 4,
				knom: "Amin",
				kprenom: "Badri",
				ktel: "0673657670",
				kemail: "Amin.Badri@gmail.com"
			};

	//remplissage tableau
	arrayContacts.push(perso1);
	arrayContacts.push(perso2);
	arrayContacts.push(perso3);
	arrayContacts.push(perso4);
}

// test si un id existe dans le tableau favoris
function isExistInFavoris(id) {
	
	var trouve = false;
	
	for(var i=0;i<arrayFavContacts.length;i++) {
		if(arrayFavContacts[i].kid == id) {
			trouve = true;
			break;
		}
	}
	
	return trouve;
}


// Fonction actualisation des donnés
function refrechList() {
	
	// hide label tel et email
	document.getElementById('infoTel').style.display="none";
	document.getElementById('infoEmail').style.display="none";
	//rows table
	var row = "";
	
	var tbody = document.getElementsByTagName('tbody')[0];
	
	// clear my tbody
	tbody.innerHTML = "";
	// add new content
	for (var i = 0; i < arrayContacts.length; i++) { 
		row += "<tr id='montr_" + i + "'>";
			row += "<td>" + arrayContacts[i].kid + "</td>";
			row += "<td>" + arrayContacts[i].knom + "</td>";
			row += "<td>" + arrayContacts[i].kprenom + "</td>";
			/*row += "<td>" + arrayContacts[i].ktel + "</td>";
			row += "<td>" + arrayContacts[i].kemail + "</td>";*/
			row += "<td>";
				row += "<button type='button' class='btn btn-success btn-md' data-toggle='modal' data-target='#myModal'  onclick='voirInfo(" + i + ");'>";
					row += "Voir détail";
				row += "</button>";
			row += "</td>";
			row += "<td>";
				row += "<button type='button' class='btn btn-danger btn-md' onclick='supprimerContact(" + i + ");'>";
					row += "Supprimer";
				row += "</button>";
			row += "</td>";
			row += "<td>";
			
				if (isExistInFavoris(arrayContacts[i].kid) == false) {				
					row += "<button type='button' id='btnFav_"+ i +"' class='btnfav btn btn-warning btn-md' onclick='mettreEnFavoris(" + i + ");'>";
						row += "Mettre en favoris";
					row += "</button>";
				}
				
			row += "</td>";
			 
		row += "</tr>";
	}
	tbody.innerHTML = row;
	document.getElementById('nbrContact').innerHTML = arrayContacts.length;	
	return false;
}


//favoris
function mettreEnFavoris(param_index) {
	
	// INsertion
	var objectToInsert = arrayContacts[param_index];
	arrayFavContacts.push(objectToInsert); 
		
	// Sppression du bouton
	document.getElementById("btnFav_" + param_index).remove();
	 
	// affichage du message de success 
	document.getElementById('msgSuccessFavoris').style.display="block";
	setTimeout(function() {
	  document.getElementById('msgSuccessFavoris').style.display="none";
	},3000);
	
	return false;
}

function function_name(argument) {
	// body...
}
//voir les infos du contact
function voirInfo(param_index) {
	console.log(arrayContacts.name);
	// hide label tel et email
	document.getElementById('infoTel').style.display="none";
	document.getElementById('infoEmail').style.display="none";

	//tbody
	var tbody = document.getElementsByTagName('tbody')[2];

	//rows table
	var row = "";

	row += "<tr id='montr_" + i + "'>";
		row += "<td>" + arrayContacts[param_index].knom + "</td>";
		row += "<td>" + arrayContacts[param_index].kprenom + "</td>";
		row += "<td>" + arrayContacts[param_index].ktel + "</td>";
		row += "<td>" + arrayContacts[param_index].kemail + "</td>";
	row += "</tr>";
		
	tbody.innerHTML = row;
	return false;
}

//supprimer un favoris
function supprimerFavoris(param_index) {
 	
	// suppression du html
	var monTrFav = document.getElementById("montrFav_" + param_index);

	// si == 1 exist sinon remove du tableau
	var indexExistFavoris = arrayFavContacts.indexOf(param_index);	
	 
	if (indexExistFavoris < 1) {
		arrayFavContacts.splice(indexExistFavoris, 1);
		monTrFav.remove();
	}
	
	/*document.getElementsByClassName('bntfav').style.display="";*/
	
	// compteur element
	document.getElementById('nbrFavoris').innerHTML = arrayFavContacts.length;
	return false;
}
//supprimer un contact
function supprimerContact(param_index) {
	// suppression du html

	
	var monTr = document.getElementById("montr_" + param_index);
	
	
	// si == 1 exist sinon remove du tableau
	var indexExistContact = arrayContacts.indexOf(param_index);	
	
	if (indexExistContact < 1) {
		arrayContacts.splice(param_index, 1);
		monTr.remove();
	}
	
	// compteur element
	document.getElementById('nbrContact').innerHTML = arrayContacts.length;
	
	
	refrechList();
		
	console.log(arrayContacts.length);
	console.log("param index : " + param_index);
	return false;
}

// fonction panelActive 
function panelActive(panelAct) {
	var	ajoutContactActive = document.getElementById('btnActiveAjContact');
	var	lstContactActive = document.getElementById('btnActiveContact');
	var	lstFavorisActive = document.getElementById('btnActiveFavoris');
	switch(panelAct) {
		case 1:
			if(!ajoutContactActive.classList.contains("active")){
				document.getElementById('btnActiveAjContact').classList.add("active");
				document.getElementById('btnActiveContact').classList.remove("active");
				document.getElementById('btnActiveFavoris').classList.remove("active");
			}
			break;
		case 2:
			if(!lstContactActive.classList.contains("active")){
				document.getElementById('btnActiveContact').classList.add("active");
				document.getElementById('btnActiveAjContact').classList.remove("active");
				document.getElementById('btnActiveFavoris').classList.remove("active");
			}
			break;
		case 3:
			if(!lstFavorisActive.classList.contains("active")){
				document.getElementById('btnActiveFavoris').classList.add("active");
				document.getElementById('btnActiveContact').classList.remove("active");
				document.getElementById('btnActiveAjContact').classList.remove("active");
			}
			break;			
	}
}

// Fonction affichage panels
function showPanel(numPanel){
	switch(numPanel) {
		case 1:
			document.getElementById('favoris').style.display="none";
			document.getElementById('ajoutContact').style.display="block";
			document.getElementById('contacts').style.display="none";
			break;
		case 2:
			document.getElementById('favoris').style.display="none";
			document.getElementById('ajoutContact').style.display="none";
			document.getElementById('contacts').style.display="block";
			break;
		case 3:
			document.getElementById('favoris').style.display="block";
			document.getElementById('ajoutContact').style.display="none";
			document.getElementById('contacts').style.display="none";		
			break;			
		
	}
}
// Fonction efface toutes les erreurs du formulaire
function cleanErrors(){
	document.getElementById("erreurNom").style.display= "none" ;
    document.getElementById("erreurPrenom").style.display= "none" ;
    document.getElementById("erreurTel").style.display= "none";
    document.getElementById("erreurEmail").style.display= "none";
}
// Fonction réintialise le formulaire à 0
function clearInputs(){
	document.getElementById('nom').value="";
	document.getElementById('prenom').value="";
	document.getElementById('telephone').value="";
	document.getElementById('email').value="";	
}



function refreshListFav() {
	//lignes du tableau
	var row = "";
	var tbody = document.getElementsByTagName('tbody')[1];
	
	// clear my tbody
	tbody.innerHTML = "";
	// add new content
	for (i = 0; i < arrayFavContacts.length; i++) { 
		row += "<tr id='montrFav_" + i + "'>";
			row += "<td>" + arrayFavContacts[i].knom + "</td>";
			row += "<td>" + arrayFavContacts[i].kprenom + "</td>";
			row += "<td>" + arrayFavContacts[i].ktel + "</td>";
			row += "<td>" + arrayFavContacts[i].kemail + "</td>";
			row += "<td>";
				row += "<button type='button' class='btn btn-danger btn-md' onclick='supprimerFavoris(" + i + ");'>";
					row += "Supprimer";
				row += "</button>";
			row += "</td>";
		row += "</tr>";
	}
	tbody.innerHTML = row;
	
	document.getElementById('nbrFavoris').innerHTML = arrayFavContacts.length;
}