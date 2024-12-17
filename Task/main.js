function submitButton(){
    
  // getting the data
  const username= document.getElementById("uname").value.trim();
  const gmail= document.getElementById("mail").value.trim();
  const phone= document.getElementById("num").value.trim();

  //error message for each inputs
  const error1Div=document.getElementById("error1");
  const error2Div=document.getElementById("error2");
  const error3Div=document.getElementById("error3");
  
  //clears the previous error
  error1Div.textcontent= "";
  error2Div.textcontent= "";
  error3Div.textcontent= "";

  //Validation

  if (!username || /[^a-zA-Z\s]/.test(username)){
      error1Div.textContent="User Name should contain only alphabets";
      return;
  }
  if(!gmail.includes("@")|| !gmail.includes(".")){
      error2Div.textContent="Please enter vaild gmail id"
      return;
  }
  if(!phone || !/^[6-9]\d{9}$/.test(phone)){
      error3Div.textContent="Phone number must be 10 digit number"
      return;
  }


  const Users=document.getElementById("userList").value;
  const newRow=document.createElement("tr");

  newRow.innerHTML=`<td>${username}</td> 
  <td>${gmail}</td>
  <td>${phone}</td>`;
  userList.appendChild(newRow);
  cancelButton();
}
  function cancelButton() {
  document.getElementById('userForm').reset();
  const error1Div= document.getElementById("error1");
      error1Div.textContent="";

      const error2Div= document.getElementById("error2");
      error2Div.textContent="";

      const error3Div= document.getElementById("error3");
      error3Div.textContent="";
  
}