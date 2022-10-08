#!/bin/bash

set -e

# You must have jq installed in your computer

# ======================================================================================================================================
# USER CONFIGURATIONS
# ======================================================================================================================================

export BASE_URL="https://demo.yasitha.dev/api"
export DATA_FILE="./names.list"

# ======================================================================================================================================
# DO NOT EDIT BELOW THIS LINE UNLESS YOU KNOW WHAT YOU ARE DOING
# ======================================================================================================================================

while IFS="" read -r NAME || [ -n "${NAME}" ]
do
    # Generate Random Age
    RANDOM_AGE=$(echo $[ ${RANDOM} % 90 + 10 ])

    ## POST-Request
    curl -X "POST" "${BASE_URL}/post" \
        -H 'Content-Type: application/json' \
        -d $"{
                \"name\": \"${NAME}\",
                \"age\": ${RANDOM_AGE}
            }"

    # Line Break                  
    printf "\n"
done < "${DATA_FILE}"

# ======================================================================================================================================