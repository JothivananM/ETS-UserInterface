/* (1) For AWS Cognito Authentication */

let idToken;
var poolData = {
    UserPoolId: 'us-east-1_ap254UA5W',
    ClientId: '682d7lgi6cbghv9ue13gbqfqom'
};
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

function loginUser() {
    var username = $('#text-username').val();
    var authenticationData = {
        Username: $('#text-username').val(),
        Password: $('#password').val()
    };

    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    var userData = {
        Username: username,
        Pool: userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {

            var accessToken = result.getIdToken().getJwtToken();
            // Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer
            var token = result.idToken.payload;
            var idTokens = result.idToken.payload["custom:RoleId"];
            var refreshToken = result.refreshToken;

            idToken == "script";
            //alert(idToken);

            // console.log(refreshToken);

            //console.log(accessToken);

            $.cookie("auth", accessToken);

            var cognitoUser = userPool.getCurrentUser();
           // console.log(cognitoUser);


            if (cognitoUser != null) {
               // console.log("user exists")

                //alert("true");
                window.location = './dashboard.html';
            } else {
                if (redirectOnUnrec) {
                    window.location = './index.html';
                }
            }

        },
        onFailure: function (err) {
            console.log("failed to authenticate");
            console.log(JSON.stringify(err))
            alert("Failed to Log in.\nPlease check your credentials.")
            // $(document).Toasts('create', {
            //     class: 'bg-success',
            //     title: 'Error',
            //     // subtitle: 'Subtitle',
            //     body: "Failed to Log in.\nPlease check your credentials."
            // })
        },
    });
}


function forgotpasswordbutton() {
   

    var userData = {
        Username: document.getElementById("inputUsername").value,
        Pool: userPool,
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.forgotPassword({
        onSuccess: function (result) {
           // console.log("call result: " + result);
            window.location = './index.html'
        },
        onFailure: function (err) {
            alert(err);
            console.log(err);
        },
        inputVerificationCode() {
            var verificationCode = prompt(
                "Please input verification code ",
                ""
            );
            var newPassword = prompt("Enter new password ", "");
            cognitoUser.confirmPassword(verificationCode, newPassword, this);
        },
    });
}


function logOutUser() {

    var cognitoUser = userPool.getCurrentUser();
   // console.log(cognitoUser);
   // console.log(cognitoUser, "signing out...");
    cognitoUser.signOut();

    window.location = './index.html';

    var value = $.cookie("auth");

    // allCookies = document.cookie;
    //  document.cookie = "auth=; path=/;"
    //$.removeCookie(auth);

    document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
}






