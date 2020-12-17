function abc()
{
    var x=navigator.geolocation.getCurrentPosition(onSuccess,onError);
    function onSuccess(positon)
    {
        alert('latitude; '+positon.coords.latitude+'\n'+'longitude;'+positon.coords.longitude+'\n');
        var x=positon.coords.latitude
        var y=positon.coords.longitude
        window.location.href="https://www.latlong.net/c/?lat="+x+"&long="+y+""
    }
function onError(Error)
    {
        alert('code:'+Error.code+'\n'+'message:'+Error.message+'\n');
    }
    }