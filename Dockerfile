# specify image and its variation
FROM image_name:tag
# e.g. FROM php:7.0-apache

# copy source code into designed destination in image file
COPY . /var/www/html

# listen to a port, EXPOSE does not have real effect, port will be published by run -p
EXPOSE 80

# docker terminal commands

# build docker image
# -t project-tag-name location-of-Docker-file
# docker build -t hello-world .


# build docker image with a custom tag
# docker build -t hello-world:version1 .


# build docker image
# -p map host-port to image-port image-tag-name
# docker run -p 8000:8000 hello-world


# run docker image with mounted source code folder
# note: the path to source code need to be absolute
# docker run -v /Users/bozhao/Desktop/docker-example/src/:/var/www/html/ -p 8000:80 hello-world


# useful tags

# run in background
# docker run -d

# run with a connection to shell in container
# docker run -t

# run with mounted volume
#docker run -v abs_path_local:abs_path_container -p 9080:9080 backend-demo

# get running docker process (including their names)
# docker ps

# kill a running docker process by docker process name
# docker rm -f docker_process_name

# ssh into a docker container
# docker exec -it docker_process_name /bin/bash

# remove all docker images
# docker rmi -f $(docker images -a -q)

# clean up after run
# docker run --rm

# run a container with WORKDIR
# docker run -w /path/to/workdir