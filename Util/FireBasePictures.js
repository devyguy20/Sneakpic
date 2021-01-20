    import firebase from "firebase"
    export async function uploadImage(uri)
    {
		const response = await fetch(uri);
		const blob = await response.blob();
		//
        console.log(blob);
        const imgLocation = String(uri);
        var ref = firebase.storage().ref().child('/images/' + imgLocation.slice(imgLocation.lastIndexOf('/') + 1, imgLocation.length));
        alert(ref);
		return ref.put(blob);
    }
    export async function downLoadImage(partOfURL)
    {
        var storageRef = firebase.storage().ref('/images/' + partOfURL);
        storageRef.getDownloadURL().then((url) => {
            return url;
        }, function(error){
            return error;
            alert(error);
        });
    }