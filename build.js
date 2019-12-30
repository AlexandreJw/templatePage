require('shelljs/global');
let a = {name: 'sss'}
exec(`cross-env PROCESSENV=${JSON.stringify(a)} vue-cli-service serve`);