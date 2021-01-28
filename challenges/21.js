// Implement the function 'stringsplosion'
//
// Given a string like "Code" return a string like "CCoCodCode"
//
// # Additional Examples
//
// _Note: there are more test cases than shown here_
//
// stringsplosion('Code') → 'CCoCodCode'
//
// stringsplosion('abc') → 'aababc'
//
// stringsplosion('ab') → 'aab'

function stringsplosion(s) {
  // implement
  let splode = s[0];
  for ( let i = 2 ; i <= s.length ; i++ ) {
    splode = splode + s.slice(0, i);
  }
  return splode;
}

module.exports = stringsplosion;
