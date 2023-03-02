function onOpenScan(){
    tele.showScanQrPopup("text",function(qr){
    alert(`this is raw ${qr}`);
});
}