import "amazon-connect-streams";

var containerDiv = document.getElementById("container-div");
var instanceURL = "https://caresphere-communication.my.connect.aws/ccp-v2/";
// initialize the streams api
function init() {
  // initialize the ccp
  connect.core.initCCP(containerDiv, {
    ccpUrl: instanceURL,            // REQUIRED
    loginPopup: true,               // optional, defaults to `true`
    loginPopupAutoClose: true,      // optional, defaults to `false`
    loginOptions: {                 // optional, if provided opens login in new window
      autoClose: true,              // optional, defaults to `false`
      height: 600,                  // optional, defaults to 578
      width: 400,                   // optional, defaults to 433
      top: 0,                       // optional, defaults to 0
      left: 0                       // optional, defaults to 0
    },
    region: 'us-east-1', // REQUIRED for `CHAT`, optional otherwise
    softphone: {
      // optional, defaults below apply if not provided
      allowFramedSoftphone: true, // optional, defaults to false
      disableRingtone: false, // optional, defaults to false
      ringtoneUrl: '[your-ringtone-filepath].mp3', // optional, defaults to CCP’s default ringtone if a falsy value is set
      disableEchoCancellation: false, // optional, defaults to false
      allowFramedVideoCall: true, // optional, default to false
      VDIPlatform: null, // optional, provide with 'CITRIX' if using Citrix VDI, or use enum VDIPlatformType
      allowEarlyGum: true, //optional, default to true
    },
    storageAccess: {
      canRequest: true, // By default this is set to true. You can set it to false to opt out from checking storage access.  
      mode: "custom", // To use the default banner, set this to "default"
      /** More customization options can be found here: https://github.com/amazon-connect/amazon-connect-streams/blob/master/src/index.d.ts under StorageAccessParameters */
    },
    pageOptions: { //optional
      enableAudioDeviceSettings: false, //optional, defaults to 'false'
      enableVideoDeviceSettings: false, //optional, defaults to 'false'
      enablePhoneTypeSettings: true //optional, defaults to 'true' 
    },
    shouldAddNamespaceToLogs: false, //optional, defaults to 'false'
    ccpAckTimeout: 5000, //optional, defaults to 3000 (ms)
    ccpSynTimeout: 3000, //optional, defaults to 1000 (ms)
    ccpLoadTimeout: 10000 //optional, defaults to 5000 (ms)
  });
}

init()