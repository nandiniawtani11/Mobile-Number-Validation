<html>
    <head>
        <title>Regular Expression</title>
        <script>
            function Validate()
            {
                var user1=document.getElementById("user").value;
                var regx=/^[7-9]\d{9}$/;
                if(regx.test(user1))
                {
                    document.getElementById("key").innerHTML="Valid";
                    document.getElementById("key").style.visibility="visible";
                    document.getElementById("key").style.color="green";
                    document.getElementById("user").style.border="solid 3px green";
                }
                else{
                    document.getElementById("key").innerHTML="Invalid";
                    document.getElementById("key").style.visibility="visible";
                    document.getElementById("key").style.color="red";
                    document.getElementById("user").style.border="solid 3px red";
                }
            }

        </script>
        <body>
            <input id="user" placeholder="Phone Number" type="text">
            <label id="key" style="color: darkred; visibility: hidden;">Invalid</label> 
            <button onclick="Validate()">Submit</button>
        </body>
    </head>
</html>
