const {emvqrcode}=require('emvqr/emvqr')

function onOpenScan(){
    tele.showScanQrPopup("text",function(qr){
        alert(qr);
        const result=emvqrcode.decode(qr);
        console.log(result);
});
}