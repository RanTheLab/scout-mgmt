function createRecharterStatus() {
  // read each record of Crew 316 Contact List into a searchable array keyed by member id
  
  var contactSheet = SpreadsheetApp.getActiveSheet();
  
  var contactData = contactSheet.getRange(1,1,4,4).getValues();
  
  var statusData = new Array();
  
  for (i in contactData) {
    var row = contactData[i];
    var memberID = row[0];
    var name = row[1];
    var role = row[2];
    var medForm = row[3];
    var permissionForm = row[4];
    var email = row[11];
    
    statusData[0] = memberID;
    statusData[1] = name;
    statusData[2] = getClassification(role);
    statusData[3] = medicalFormStatus(medForm);
    statusData[4] = permissionStatus(role);
    statusData[5] = email;
  }
  
  // Interesting fields:
  // Member Id -- echo
  // Name -- echo
  // Role
  // Medical forms - calculate
  // Permission forms - calculate
  // email address - echo.
  
  
}

function permissionStatus() {
  return 'N';
}
