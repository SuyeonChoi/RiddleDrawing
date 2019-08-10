let firebaseConfig = {
    apiKey: "AIzaSyC0OtPgwmEXf-V6wFhXoj4xf5Ppx9PnprY",
    authDomain: "riddledrawing.firebaseapp.com",
    databaseURL: "https://riddledrawing.firebaseio.com",
    projectId: "riddledrawing",
    storageBucket: "",
    messagingSenderId: "905052321599",
    appId: "1:905052321599:web:caf9352c3b7ddb3a"
};

firebase.initializeApp(firebaseConfig);

function getData(handler, type) {
    return firebase.database().ref('/users/' + type).once('value').then(function(snapshot){
        handler(snapshot.val());
    });
}

function upload(name, score, type){
    let value = {};
    value[name] = score;
    return firebase.database().ref('users/' + type).update(value);
}