#!/bin/bash

set -e

# You must have jq installed in your computer

# ======================================================================================================================================
# USER CONFIGURATIONS
# ======================================================================================================================================

export BASE_URL="http://localhost/api"

# ======================================================================================================================================
# DO NOT EDIT BELOW THIS LINE UNLESS YOU KNOW WHAT YOU ARE DOING
# ======================================================================================================================================

export USER_ID_LIST=$(curl -ks "${BASE_URL}/get" -H 'Content-Type: application/json' | jq -r '.[]._id' | paste -sd, -)

IFS=',' read -ra ADDR <<< "${USER_ID_LIST}"
for USER_ID in "${ADDR[@]}"; do

    ## DELETE-Request
    curl -X "DELETE" "${BASE_URL}/delete/${USER_ID}" \
     -H 'Content-Type: application/json'

    # Line Break                  
    printf "\n"
done

# ======================================================================================================================================