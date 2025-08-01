---
created:
  - " 07-30-2025 21:37"
tags:
---



### Docker
A containerized software that helps to reproduce environments between systems
- No *it works on my machine*


Files involved:
- Dockerfile
- .dockerignore
- docker-compose.yml
#### Dockerfile
Used to orchestrate an image
1) The FROM line, tells docker how to initialize (FROM node: , FROM debian:)
2) WORKDIR, tells docker where to initiate commands
3) RUN, commands ran in terminal (apt-get, npm run install)
4) EXPOSE ports
5) CMD, used to START the container after building (`CMD ["npm", "start"]`)
	- This is not the same as the run command although their both terminal commands
	- You can only have ONE CMD per dockerfile

#### Docker Compose 
Orchestrates different docker containers (IE a frontend, backend, and database)
- "multi-container applications", modularizes different parts and allows the to communicate
- Defined in docker-compose.yml 

### Best Practices
1) Base image matters ALOT (using lastest can be 1gb+). Instead, use minimal images
	- -alpine is purpose built for containers (node:22-alpine)
2) Cache layers! Do reproducible things FIRST. (ie copy package.json first then install only that, instead of copying the entire workdir at a time)

