# specify image and its variation
FROM image_name:tag
# e.g. FROM php:7.0-apache

# copy source code into designed destination in image file
COPY . /var/www/html

# listen to a port
EXPOSE 80

# command commands

# build docker image
# -p map host port to image port image-tag-name
# docker run -p host-port-num:image-port-num hello-world

# run docker image
# -t project-tag-name location-of-Docker-file
# docer build -t hello-world .

# run docker image with mounted source code folder
# note: the path to source code need to be absolute
# docker run -v /Users/bozhao/Desktop/docker-example/src/:/var/www/html/ -p 8000:80 hello-world

# useful tags

# run in background
# docker run -d

# run with a connection to shell in container
# docker run -t