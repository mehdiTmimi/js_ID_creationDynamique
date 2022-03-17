let ajouter=()=>{
    //recuperation des elements au niveau de la memoire
    let nom=document.getElementById("nom")
    let prenom=document.getElementById("prenom")
    let age=document.getElementById("age")
    //recuperation des valeurs
    let nomValue=nom.value;
    let prenomValue=prenom.value;
    let ageValue=age.value;
    //verification
    if(nomValue=="" || prenomValue=="" || ageValue=="")
    {
        alert("veuillez remplir tous les champs")
        return;
    }
    if(nomValue.length<3 || prenomValue.length<3)
    {
        alert("nom et prenom : 3 caracteres minimum")
        return;
    }
    if(ageValue<0 || ageValue>125)
    {
        alert("veuillez entrer une date correcte pour l age")
        return;
    }
    //creation dynamique
    let tr=document.createElement("tr")
    let td1=document.createElement("td")
    let td2=document.createElement("td")
    let td3=document.createElement("td")
    // liaison
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    //insertion des valeurs 
    td1.innerText=nomValue;
    td2.innerText=prenomValue;
    td3.innerText=ageValue;
    // liaison avec le tbody
    document.getElementById("tbody").appendChild(tr);
    //vider le formulaire
    nom.value=""
    prenom.value=""
    age.value=""
}