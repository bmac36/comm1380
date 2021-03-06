// Establish the context (ouID, contentTopicID)	

var orgUnitId;
var topicId;
var studentRoleId = 103;
var fieldId;
var fieldName;
var userIds = [];
var myId = -1;
var refreshnum = 1;
var myVal = {
};

var getDemoDataDone = false;


var url = window.location.href;
var contentURL = window.top.location.href;
var contentParts = contentURL.split("/");
if (contentURL.indexOf("/m/") > -1) {
  orgUnitId = contentParts[7];
  topicId = contentParts[10];
} else {
  orgUnitId = contentParts[6];
  topicId = contentParts[8];
}
if (orgUnitId == undefined) {
  orgUnitId = parent.ouID;
}

CSVal.routes.get_demographics_all = '/d2l/api/lp/' + APIVersion + '/demographics/orgUnits/' + orgUnitId + '/users/';
CSVal.routes.get_users = '/d2l/api/lp/' + APIVersion + '/enrollments/orgUnits/' + orgUnitId + '/users/';
CSVal.routes.get_demographics_user = '/d2l/api/lp/' + APIVersion + '/demographics/users/';
CSVal.routes.put_demographics = '/d2l/api/lp/' + APIVersion + '/demographics/users/';
CSVal.routes.get_demographics_fields = '/d2l/api/lp/' + APIVersion + '/demographics/fields/';
CSVal.routes.get_demographics_datatypes = '/d2l/api/lp/' + APIVersion + '/demographics/dataTypes/';
CSVal.routes.get_user_details = '/d2l/api/lp/' + APIVersion + '/enrollments/users/USERID/orgUnits/' + orgUnitId;
CSVal.devMode = false;

var demographicAllIndex = 0;

var valJSON = {
	"UserID":"-1",
	"Inputs":[]
};
var valString = JSON.stringify(valJSON);

CSVal.demographics = CSVal.demographics || {};
CSVal.demographics.get_all = CSVal.demographics.get_all || {};
CSVal.demographics.get_user = CSVal.demographics.get_user || {};
CSVal.demographics.put_demographics = CSVal.demographics.put_demographics || {};
CSVal.demographics.fields = CSVal.demographics.fields || {};
CSVal.demographics.datatypes = CSVal.demographics.datatypes || {};


CSVal.delete_user_entries = function(uID) {
   var route = CSVal.routes.delete_user_entries.replace('USERID',uID);
   //route += '?entries="'+appdata.FieldID+'"';
   //console.log(route);
   valence_req
      .delete(route)
      .use(valence_auth)
      .end(function(err, response) {
         if (err != null) {

         } else {
			 //console.log(response);
			 //pubsubz.publish('csval/delete_user_entries/'+uID, response.body);
         }
      });
};

CSVal.get_user_details = function(uID) {
   var route = CSVal.routes.get_user_details.replace("USERID",uID);
   valence_req
      .get(route)
      .use(valence_auth)
      .end(function(err, response) {
         if (err != null) {

         } else {
			 CSVal.user.RoleId = response.body.RoleId;
			 pubsubz.publish('csval/get_user_details/'+uID, response.body);
         }
         if (CSVal.devMode == true) {
            console.log(CSVal.dropbox.submissions);
         }
      });
};

CSVal.get_dropbox_submissions = function(fID) {
   var route = CSVal.routes.get_db_submissions.replace("ORGID", CSVal.context.ouID).replace("FOLDERID",fID);
   valence_req
      .get(route)
      .use(valence_auth)
      .end(function(err, response) {
         if (err != null) {

         } else {
			 CSVal.dropbox.submissions = response.body;
			 pubsubz.publish('csval/get_dropbox_submissions', response.body);
         }
         if (CSVal.devMode == true) {
            console.log(CSVal.dropbox.submissions);
         }
      });
};

/*
	CSVal.post_demographics_fields
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
CSVal.post_demographics_fields = function(fieldData) {
	console.log(fieldData);
   valence_req
      .post(CSVal.routes.get_demographics_fields)
	  .send(fieldData)
      .use(valence_auth)
      .end(function(err, response) {
         if (err != null) {
            //errorPrompt(err, CSVal.routes.get_demographics_fields, "alert");
            CSVal.t_profile.lock = false;
         } else {
            pubsubz.publish('csval/post_demographics_fields', response.body);
         }
         if (CSVal.devMode == true) {
            console.log(response.body);
         }
      });
};

/*
	CSVal.get_demographics_fields
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	- Return response body
*/
CSVal.get_demographics_fields = function() {
   valence_req
      .get(CSVal.routes.get_demographics_fields)
      .use(valence_auth)
      .end(function(err, response) {
         if (err != null) {
            //errorPrompt(err, CSVal.routes.get_demographics_fields, "alert");
            CSVal.t_profile.lock = false;
         } else {
            CSVal.demographics.fields = response.body;
            pubsubz.publish('csval/get_demographics_fields', response.body);
         }
         if (CSVal.devMode == true) {
            console.log(CSVal.demographics.fields);
         }
      });
};

/*
	CSVal.get_demographics_datatypes
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	- Return response body
*/
CSVal.get_demographics_datatypes = function(bookmark) {
   valence_req
      .get(CSVal.routes.get_demographics_datatypes)
      .use(valence_auth)
      .end(function(err, response) {
         if (err != null) {
            //errorPrompt(err, CSVal.routes.get_demographics_datatypes, "alert");
            CSVal.t_profile.lock = false;
         } else {
            CSVal.demographics.datatypes = response.body;
            pubsubz.publish('csval/get_demographics_datatypes', response.body);
         }
         if (CSVal.devMode == true) {
            console.log(CSVal.demographics.datatypes);
         }
      });
};

/*
	CSVal.get_demographics_all
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	- Return response body to subscribers
*/
CSVal.get_demographics_all = function(bookmark) {
   var route = CSVal.routes.get_demographics_all + '?bookmark=' + bookmark;
/*
   if(userIds.length > 0) {
	   var userlist = "";
	   for(var u=0; u<userIds.length; u++) {
	      userlist += userIds[u];
		  if(u !== (userIds.length-1)) {
				userlist += ","  
		  }
	   }
	   route += "&userIds=" + userlist;
   }
*/

   if(fieldId > 0) {
	   route += "?fieldIds=" + fieldId;
   }
   valence_req
      .get(route)
      .use(valence_auth)
      .end(function(err, response) {
         if (err != null) {
            //errorPrompt(err, CSVal.routes.get_demographics_all, "alert");
            CSVal.t_profile.lock = false;
         } else {
            CSVal.demographics.get_all = response.body;
            pubsubz.publish('csval/get_demographics_all', response.body);
         }
         if (CSVal.devMode == true) {
            console.log(CSVal.demographics.get_all);
         }
      });
};


/*
	CSVal.get_demographics_user
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	- Return response body to subscribers
*/
CSVal.get_demographics_user = function(userID) {
   var route = CSVal.routes.get_demographics_user + userID;
   console.log(route);
   valence_req
      .get(route)
      .use(valence_auth)
      .end(function(err, response) {
	     console.log(err);
	     console.log(response);
         if (err != null) {
            CSVal.t_profile.lock = false;
            if (response.statusCode === 404) {
               CSVal.demographics.get_user = { "newUser": true };
               pubsubz.publish('csval/get_demographics_user/'+userID+"-"+refreshnum, { "newUser": true });
			   refreshnum++;
            }
         } else {
            CSVal.demographics.get_user = response.body;
			pubsubz.publish('csval/get_demographics_user/'+userID+"-"+refreshnum, response.body);        
			refreshnum++;
         }
         if (CSVal.devMode == true) {
            console.log(CSVal.demographics.get_user);
         }
      });
};


/*
	CSVal.get_demographics_user
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	- Return response body to subscribers
*/
CSVal.get_demographics_alluser = function(filter) {
   valence_req
      .get(CSVal.routes.get_demographics_user)
      .use(valence_auth)
      .end(function(err, response) {
         if (err != null) {
            CSVal.t_profile.lock = false;
            if (response.statusCode === 404) {
               CSVal.demographics.get_user = { "newUser": true };
               pubsubz.publish('csval/get_demographics_user/'+userID+"-"+refreshnum, { "newUser": true });
			   refreshnum++;
            }
         } else {
            //CSVal.demographics.get_user = response.body;
            pubsubz.publish('csval/get_demographics_user/'+userID+"-"+refreshnum, response.body);
			refreshnum++;
         }
         if (CSVal.devMode == true) {
            console.log(CSVal.demographics.get_user);
         }
      });
};



/*
	CSVal.put_demographics
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	- Return response body to subscribers
*/
CSVal.put_demographics = function(UserID, demographicsData) {
   if (demographicsData == undefined) {
      if (CSVal.t_profile.lock !== false) {
         console.info('CSVal.put_demographics was called while a previous demographics request is still being processed');
         return false;
      }
      CSVal.t_profile.lock = true;
   } else {
      if (demographicsData == undefined) {
         return false;
      }
   }

   valence_req
      .put(CSVal.routes.put_demographics + UserID)
      .send(demographicsData)
      .use(valence_auth)
      .end(function(err, response) {
         if (err != null) {
            errorPrompt(err, CSVal.routes.put_demographics, "alert");
            return false;
         } else {
            CSVal.demographics.put_demographics = response.body;

			challengeData = [];
			$('#dbox tbody').html('');
			CSVal.get_demographics_all();
            pubsubz.publish('csval/put_demographics', response.body);
         }
      });
};


/*
	CSVal.get_users
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	- Add results to CSVal.user object
*/
CSVal.get_users = function(roleId) {
   var route = CSVal.routes.get_users.replace("ORGID", CSVal.context.ouID);
   if(roleId !== undefined) {
		route += "?roleId="+   roleId;
   }
   valence_req
      .get(route)
      .use(valence_auth)
      .end(function(err, response) {
         if (err != null) {
            //errorPrompt(err, CSVal.routes.get_users, "alert");
            return false;
         } else {
            CSVal.user.classlist = response.body;
            pubsubz.publish('csval/get_users');
            if (CSVal.devMode == true) {}
         }
      });
};


function loadData() {

	console.log(CSVal.demographics.get_user)
 
		  
		  /*
			if(appdata.FieldID == CSVal.demographics.get_all.Items[i].EntryValues[j].FieldId) {

				var tempdata;

				try {
					  tempdata = JSON.parse(CSVal.demographics.get_all.Items[i].EntryValues[j].Values[0]);	
						  if(CSVal.user.classlist.Items[u].User.DisplayName == tempdata.UserDisplay) { 
								userdatavalue = tempdata;
								if(CSVal.demographics.get_all.Items[i].UserId == parseInt(myId)) {
									mydataindex = i;
								}
						  }	
				} catch(e) {
					// error in the above string (in this case, yes)!
				}
			}
		  */

}


function updateData() {

	var newEntry = {
	  FieldId: fieldId,
	  Name: fieldName,
	  Values: [JSON.stringify(myVal)]
	};

	pubsubz.subscribe('csval/get_demographics_user/'+myId+"-"+refreshnum, function(result) {	
		var newDemoData;
		if(result.newUser) {
			newDemoData = {
				"EntryValues":[newEntry],
				"UserId":myId
			}
		}
		else {
			newDemoData = result;
			var fieldfound = false;
			for(var i=0; i<newDemoData.EntryValues.length; i++) {
				console.log(newDemoData.EntryValues[i].FieldId);
				console.log(fieldId);
				if(newDemoData.EntryValues[i].FieldId == fieldId) {
					fieldfound = true;
					newDemoData.EntryValues[i] = newEntry;	
				}
			}
			
			if(!fieldfound) {
				newDemoData.EntryValues.push(newEntry);
			}
			
		}

		CSVal.put_demographics(myId, newDemoData);				

	});

	CSVal.get_demographics_user(myId);
}


pubsubz.subscribe('csval/get_demographics_all', function() {
   var results = CSVal.demographics.get_all;
   if (CSVal.demographics.get_all.PagingInfo.HasMoreItems === true) {
      demographicAllIndex = CSVal.demographics.get_all.PagingInfo.Bookmark++;
      CSVal.get_demographics_all(demographicAllIndex);
   } else {
      getDemoDataDone = true;
	  loadData();
   }
});




pubsubz.subscribe('csval/get_whoami', function () {
	//CSVal.post_demographics_fields(newFieldData);
	//CSVal.get_demographics_fields();
	//CSVal.get_demographics_datatypes();
	
	myId = CSVal.user.Identifier;
	
	pubsubz.subscribe('csval/get_demographics_user/'+myId+"-"+refreshnum, function() {
	   getDemoDataDone = true;
	   loadData();
	});
	
	
	CSVal.get_demographics_user(myId);
	
	//CSVal.get_demographics_all();
	//CSVal.put_demographics("215", demographicsData);
	//
	
});

CSVal.init();
