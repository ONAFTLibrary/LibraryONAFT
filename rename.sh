#!/bin/bash
cd ~/sites-docker/library-docker/library_frontend/library.ontu.edu.ua/

DATA=`date '+%d_%m_%y__%R'`

mv www/ www_$DATA

mv /home/stark/Source_projects/LibraryONAFT-master/dist . 

mv dist www
