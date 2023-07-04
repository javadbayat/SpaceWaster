document.onselectstart = document.oncontextmenu = function() {
    var srcElem = event.srcElement;
    
    if ((srcElem.tagName.toLowerCase() == "input") && (srcElem.type.toLowerCase() == "text"))
        return true;
    
    if (srcElem.tagName.toLowerCase() == "textarea")
        return true;
    
    if (srcElem.tagName.toLowerCase() == "intbox")
        return true;
    
    return false;
};

function setUIEventHandlers() {
    document.mainForm.writeConstantBytes.onclick = function() {
        intByteValue.cdisabled = !this.checked;
    };
}

function switchToOperationStatus() {
    document.mainForm.btnWaste.style.visibility = "hidden";
    progressBar.style.display = "";
    progress.style.visibility = "visible";
    document.all.btnAbort.style.visibility = "visible";
}

function switchToZippingStatus() {
    progressBar.filters[0].Enabled = false;
    progressBar.style.display = "none";
    progress.style.visibility = "hidden";
    document.all.btnAbort.style.visibility = "hidden";
    
    document.all.zipProgBar.style.display = "";
    document.title = appName + " (Compressing)";
}

function switchToInputIdle() {
    progressBar.filters[0].Enabled = false;
    progressBar.style.display = "none";
    progress.style.visibility = "hidden";
    document.all.zipProgBar.style.display = "none";
    document.all.btnAbort.style.visibility = "hidden";
    document.mainForm.btnWaste.style.visibility = "visible";
    progress.innerText = "";
    document.title = appName;
}