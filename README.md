# Agrinvest - Assistência Técnica e Gestão Rural 

O sistema desenvolvido tem como objetivo aprimorar a assistência técnica, oferecendo uma gestão mais eficiente da lavoura aos seus clientes. Dessa forma, é
possível proporcionar um acompanhamento técnico personalizado, substituindo o uso de planilhas manuais por um método digital de monitoramento da cultura implantada ao longo da safra.

Colaboradores: Fernando Neiverth, Naeli Scheffler, Manoele Mohr, Mateus Nicolodi, Taís Graminho e Tiago Soares. 

frontend/vite.config.js precisa estar corretamente configurado com o endereço onde está rodando o backend

# frontend/:
uma aplicação React com Vite

# backend/
ORM prisma

# infra/:
arquitetura docker para:
- container com banco postgres do projeto
- container com nginx para subir o frontend

`docker-compose -f infra/compose/dev.yml build --no-cache`
`docker-compose -f infra/compose/dev.yml up -d`