# specify image and its variation
FROM image_name:tag
# e.g. FROM php:7.0-apache

# copy source code into designed destination in image file
COPY . /var/www/html

# listen to a port
EXPOSE 80