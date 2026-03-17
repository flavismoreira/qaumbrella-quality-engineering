import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '10s',
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<800'],
  },
};

export default function () {
  const res = http.get('https://www.qaumbrella.com.br');
  check(res, {
    'status 200': (r) => r.status === 200,
  });
  sleep(1);
}
