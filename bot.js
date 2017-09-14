console.log('The bot is starting');

var Twit = require('twit');

var T = new Twit({
  consumer_key:         'aQki6qjKmu2dbPwttA9kM1z0q',
  consumer_secret:      'e8Rc0azAjci70T2U8qtsy5uMjRegNFSu3DwI4kMGM2lqokYjt9',
  access_token:         '908309039842562049-fD6sD8glT1JiLkqG2rukoVMf2KH3JCM',
  access_token_secret:  '4FovedOOqREvjRKZ0gL5Efzp1Q6sbneshDXkTUttX3cuH',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})
