document.querySelector("#form").addEventListener('submit',(event) => {
    event.preventDefault();
    var flag=0
    console.log("hello")
        var firstname = document.getElementById("firstname").value
        var lastname = document.getElementById("lastname").value
        var middlename = document.getElementById("middlename").value

        if (firstname == null || firstname == "") {
          flag=1
          document.getElementById("firstnameerror").innerText =
            "First Name can't be blank";
        } else if (firstname.length > 25) {
          flag=1
          document.getElementById("firstnameerror").innerText =
            "First Name must be less than 25 characters.";
        }

        if (lastname == null || lastname == "") {
          flag=1
          document.getElementById("lastnameerror").innerText =
            "Last Name can't be blank";
        } else if (lastname.length > 25) {
          flag=1
          document.getElementById("lastnameerror").innerText =
            "Last Name must be less than 25 characters.";
        }

        if (middlename.length > 25) {
          flag=1
          document.getElementById("middlenameerror").innerText =
            "Middle Name must be less than 25 characters.";
        }
      
      const selectElement = document.querySelector("#proof")
      const output = selectElement.value;
      const proofValue = document.querySelector("#proof-value").value
      if(output === 'aadhar')
      {
        if(proofValue.length!=16)
          flag=1
        document.querySelector("#id-proof-error").innerText = "enter Aadhar correctly"

        for(var i=0;i<16;i++){
          
          if(proofValue.charAt(i)<'0' || proofValue.charAt(i)>'9')
          flag=1
          document.querySelector("#id-proof-error").innerText = "enter Aadhar correctly"
          break;
        }
      }else if(output === 'passport')
      {
        if(proofValue.length!=8)
        document.querySelector("#id-proof-error").innerText = "enter passport correctly"
        for(var i=0;i<proofValue.length;i++){
          if(i==0){
            if(proofValue.charAt(i)<'A' || proofValue.charAt(i)>'Z'){
              document.querySelector("#id-proof-error").innerText = "enter the passport correctly"
              flag=1
            }
          }else{
            if(proofValue.charAt(i)<'0' || proofValue.charAt(i)>'9')
            document.querySelector("#id-proof-error").innerText = "enter driving license number correctly"
            flag=1

          }
        }
      }else {
        if(proofValue.length!=15)
        document.querySelector("#id-proof-error").innerText = "enter DL number correctly"
        for(var i=0;i<proofValue.length;i++){
          if(i==0 || i==1){
            if(proofValue.charAt(i)<'A' || proofValue.charAt(i)>'Z'){
              document.querySelector("#id-proof-error").innerText = "enter DL number correctly"
              flag=1
            }
          }else{
            if(proofValue.charAt(i)<'0' || proofValue.charAt(i)>'9')
            document.querySelector("#id-proof-error").innerText = "enter driving license number correctly"
            flag=1
          }
        }
      }
      if(flag === 0)
      {
        window.location.href="/pincode.html"
      }
  })