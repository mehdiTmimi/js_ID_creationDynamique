let ajouter=()=>{
    let nom=document.getElementById("nom")
    let prenom=document.getElementById("prenom")
    let age=document.getElementById("age")
    let nomValue=nom.value;
    let prenomValue=prenom.value;
    let ageValue=age.value;
    let tr=document.createElement("tr")
    let td1=document.createElement("td")
    let td2=document.createElement("td")
    let td3=document.createElement("td")
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    td1.innerText=nomValue;
    td2.innerText=prenomValue;
    td3.innerText=ageValue;
    document.getElementById("tbody").appendChild(tr);
    nom.value=""
    prenom.value=""
    age.value=""
}