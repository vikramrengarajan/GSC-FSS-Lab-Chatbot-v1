/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

require( 'dotenv' ).config( {silent: true} );

var express = require( 'express' );  // app server
var bodyParser = require( 'body-parser' );  // parser for post requests
var watson = require( 'watson-developer-cloud' );  // watson sdk
// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');
// The following requires are needed for logging purposes
var uuid = require( 'uuid' );
var vcapServices = require( 'vcap_services' );
var basicAuth = require( 'basic-auth-connect' );
var url     = require('url'),
  bodyParser  = require("body-parser"),
  async       = require("async"),
  http = require('http'),
  https = require('https');
// The app owner may optionally configure a cloudand db to track user input.
// This cloudand db is not required, the app will operate without it.
// If logging is enabled the app must also enable basic auth to secure logging
// endpoints
var logs = null;
var app = express();

// Bootstrap application settings
app.use( express.static( './public' ) ); // load UI from public folder
app.use( bodyParser.json() );



// Create the service wrapper
var conversation = watson.conversation( {
  url: 'https://gateway.watsonplatform.net/conversation/api',
  username: process.env.CONVERSATION_USERNAME || '<username>',
  password: process.env.CONVERSATION_PASSWORD || '<password>',
  version_date: '2016-07-11',
  version: 'v1'
} );
var tone_analyzer = watson.tone_analyzer({
  username: process.env.TONEANALYZER_USERNAME || '<username>',
  password: process.env.TONEANALYZER_PASSWORD || '<password>',
    url: 'https://gateway.watsonplatform.net/tone-analyzer/api',
  version: 'v3',
  version_date: '2016-05-19'
});

var person_in={
  fname:"Natalie",
  lname:"Smith",
  address:"Dallas, TX",
  SSN:"123456789",
  cusID:1234
};
var accounts_in=[
{
number:1234,
type:"Checking",
balance:500,
name:"Advanced Plus"
},
{
number:2234,
type:"Savings",
balance:500,
name:"Advanced Savings Plus"
},
{
number:2234123422,
type:"cc",
availablecredit:1500,
dueDate:"12/12/16"
}
];
var accounts = [];
var person=[];

// Endpoint to be call from the client side
app.post( '/api/message', function(req, res) 
{
  var workspace = process.env.WORKSPACE_ID || '<workspace_id>';
  var payload = {
    workspace_id: workspace,
    context: {person,accounts,},
    input: {}
  };

  if ( req.body ) {
    if ( req.body.input ) {
      payload.input = req.body.input;
    }
    if ( req.body.context ) {
      // The client must maintain context/state
      payload.context = req.body.context;
    }

  }
   callconv(payload);


  // Send the input to the conversation service
  function callconv(payload)
  {
    var query_input=JSON.stringify(payload.input);
    var con_input=JSON.stringify(payload.context);
    accounts.push(accounts_in);
    person.push(person_in);
    tone_analyzer.tone({text: query_input, tones:'emotion'}, 
      function(err, tone) 
      {
        if (err) {console.log("step1"); 
        console.log(err); 
      } 
      else 
        {
          console.log(query_input); 
          console.log(con_input); 
          console.log(JSON.stringify(tone, null, 2)); 
          var emotionTones = tone.document_tone.tone_categories[0].tones; 
          var len = emotionTones.length; 
          for(var i=0;i<len;i++){if(emotionTones[i].tone_id==='anger') 
          {
            console.log("Emotion_anger",emotionTones[i].score); 
            conversation.message( payload, function(err, data) 
              {
                if ( err ) 
                  {
                    return res.status( err.code || 500 ).json( err ); 
                  } 
                  return res.json( updateMessage( payload, data ) ); 
                  console.log("step2"); 
                }); 
          }
        } 
      } 
    }); 
  } 

});

/**
 * Updates the response text using the intent confidence
 * @param  {Object} input The request to the Conversation service
 * @param  {Object} response The response from the Conversation service
 * @return {Object}          The response with the updated message
 */
function updateMessage(input, response) 
{
  var responseText = null;
  var id = null;
  if ( !response.output ) {
    response.output = {};
  } else {
    if ( logs ) {
      // If the logs db is set, then we want to record all input and responses
      id = uuid.v4();
      logs.insert( {'_id': id, 'request': input, 'response': response, 'time': new Date()});
    }
    return response;
  }
  if ( response.intents && response.intents[0] ) {
    var intent = response.intents[0];
    // Depending on the confidence of the response the app can return different messages.
    // The confidence will vary depending on how well the system is trained. The service will always try to assign
    // a class/intent to the input. If the confidence is low, then it suggests the service is unsure of the
    // user's intent . In these cases it is usually best to return a disambiguation message
    // ('I did not understand your intent, please rephrase your question', etc..)
    if ( intent.confidence >= 0.75 ) {
      responseText = 'I understood your intent was ' + intent.intent;
    } else if ( intent.confidence >= 0.5 ) {
      responseText = 'I think your intent was ' + intent.intent;
    } else {
      responseText = 'I did not understand your intent';
    }
  }
  response.output.text = responseText;
  
  return response;
}



module.exports = app;
