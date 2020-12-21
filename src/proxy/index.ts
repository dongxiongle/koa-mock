import httpProxy from 'http-proxy';

const  proxy = httpProxy.createProxy({target: 'https://testadmin03.518dai.com', secure: false});
proxy.on('error', e => {
  console.log(e);
});

export default proxy;
