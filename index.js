const sendmail = require('sendmail')();

sendmail({
  from: 'xxx@yyy.com',
  to: 'hanedab787@gmail.com',
  subject: 'メールのタイトルです',
  text: 'メールの本文です。html形式可能',
}, function(err, reply) {
  console.log(err && err.stack);
  console.dir(reply);
});
