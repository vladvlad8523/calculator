
FROM nginx:latest

COPY ./index.html /home/vlsadislav/Desktop/moksl/rankinis testavimas 0913/pamoka0927/calculator/

COPY ./src/ /home/vlsadislav/Desktop/moksl/rankinis testavimas 0913/pamoka0927/calculator/src/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
