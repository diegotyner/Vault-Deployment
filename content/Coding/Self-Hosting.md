---
created:
  - " 07-29-2025 18:26"
tags:
---

### Summary Blurt
Problem:
- Using managed databases and unknown API endpoints is annoying. I don't like having loose mongoDB connections and a superbase API that continually shuts down

Solution:
- I have an old laptop I want to turn into a minimal database and supabase endpoint.

### Steps:
1) Wipe PC, install Linux (ubuntu server LTS?)
2) Set up system:
	- Change default passwords, etc.
	- Create non-root user for operations
	- Firewall (UFW)
	- Set up SSH - `sudo apt install openssh-server`
3) Network
	- Static Ip
	- Dynamic DNS (DDNS)
	- Router port forwarding
4) Set up containerized services
	- Docker and cocker compose
	- Database (postgres or sqlite)
	- Backend apps (nodejs, python, go)
	- Nginx
5) Security and monitoring
	- HTTPS (nginx)
	- Backups
	- Monitoring (htop)
	- Security audits
