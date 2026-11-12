import http from 'node:http';
import next from 'next';

const port = 3001;
const hostname = '0.0.0.0';
const dir = process.cwd();

const app = next({ dev: true, dir, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = http.createServer((req, res) => handle(req, res));
  server.listen(port, hostname, () => {
    console.log(`agentec-programmatic ready http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('agentec-programmatic failed');
  console.error(err);
  process.exit(1);
});
