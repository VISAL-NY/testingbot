const emvqr=require('emvqr')

function onOpenScan(){
    tele.showScanQrPopup("text",function(qr){
        alert(qr);
        const result=emvqr.decode(qr);
        alert(result);
});
}