# Set up on a server instance

## Items used

- Nginx
- Svelte
- Node.js
- certbot
- doctl
- pm2

## Downloads

0. set up a sub account
<!-- 1. `snap install doctl`
   - [to install doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/)
   - for [domain](https://docs.digitalocean.com/reference/api/create-personal-access-token/)
     - create an api key on DigitalOcean - API tab on left menu
     - init doctl `doctl auth init --context [name]`
     - `doctl auth list`
     - `doctl auth switch --context [NAME]` -->
1. install node
   - `sudo apt install nodejs`
   - `sudo apt install npm`npm
2. install pnpm - `npm install -g pnpm`
3. `sudo apt install nginx`
4. set up the svelte server
5. allow ports - specific port for dev or Nginx for prod
   - `sudo ufw allow [port]` or `sudo ufw allow 'Nginx Full'`
   - `sudo ufw allow OpenSSH`
   - `sudo ufw enable`
   - `sudo ufw delete allow 'Nginx HTTP'` for non dev
6. set up the SSL (cert), refer to set up flask webpage
   - getting the [SSL](https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-in-ubuntu-22-04#step-2-%E2%80%93-configuring-nginx-to-use-ssl) or [via this means followed](https://www.youtube.com/watch?v=ghZXFyIyK1o&t=154s)
   - `sudo snap install --classic certbot`
   - `sudo certbot --nginx`
   - `sudo nano /etc/nginx/sites-available/[myproject]`
   - ``sudo ln -s /etc/nginx/sites-available/[myproject] /etc/nginx/sites-enabled`
   - `sudo nginx -t`
   - `sudo systemctl restart nginx`
7. pnpm run build
8. install pm2 [used later for server](https://dev.to/theether0/deploy-sveltekit-with-node-adapter-on-linux-sever-n)
9. pm2 start build/index.js
10. doing all the random stuff for hosting
    - establish domain
    - [set up nginx](https://pm2.keymetrics.io/docs/tutorials/pm2-nginx-production-setup)
    - [set firewall and nginx locations and self cert](https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-gunicorn-and-nginx-on-ubuntu-22-04)
      - `sudo certbot --nginx -d your_domain -d www.your_domain`
    - [pm2 startup script](https://pm2.keymetrics.io/docs/usage/startup/)
      - `pm2 startup`
      - copy and paste and run the command
      - `pm2 save`
11. Set up actions runner using [github](https://www.youtube.com/watch?v=V2YYhGn3MGo&t=1102s)

## Troubleshoot

1. authorized_keys
   - use copy-key-id root@[server]
2. adding a new account
   - useradd -m [user]
   - usermod -aG sudo [user]
     - optionally
   - chsh -s /bin/bash [user]
3. setting up the doctl
   - run <mkdir .config> for implementing access token
4. if there was a change to the static files
   - sudo systemctl restart [app]
   - sudo systemctl restart nginx
5. Certbot not verifying due to invalid A or AAAA record --> make one for the DNS
6. if you are using an alternative folder for flask for static, also set it in the nginx server for 443 as location /static {alias location/static}
7. set up server (constant running for github action)[https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/configuring-the-self-hosted-runner-application-as-a-service]

## To Do

- [Adding domains](https://docs.digitalocean.com/products/networking/dns/how-to/add-domains/)
- [Set up flask webpage](https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-gunicorn-and-nginx-on-ubuntu-22-04)
- [svelte adapter](https://kit.svelte.dev/docs/adapter-node)
