#!/bin/bash

# to run on pr-labeler.yml is called
# adds labels based on size of changes in the pull request
# varible accessed:
#   CHANGES
#   API_URL
#   AUTH_HEADER
#   GITHUB_TOKEN
#   SMALL_THRESHOLD
#   MODERATE_THRESHOLD
#   LARGE_THRESHOLD

size_label() {

    local CHANGES=$1
    local arg2=$2
    AUTH_HEADER="Authorization: Bearer $GITHUB_TOKEN"

    # get all the changes from git diff
    CHANGES=$(echo "$CHANGES" | grep -E '^[+\-]' | grep -vE '^\+\+\+|^\-\-\-')

    # ignore blank lines
    CHANGES=$(echo "$CHANGES" | grep -vE '^[\+\-]\s*$')

    # count total no of lines
    CHANGES=$(echo "$CHANGES" | wc -l)

    echo "CHANGES MADE: $CHANGES"

    DELETE_LABELS=("v: minimal" "v: small" "v: moderate" "v: large")

    if [ "$CHANGES" -gt "$SMALL_THRESHOLD" ]; then
        LABEL="v: small"
    elif [ "$CHANGES" -gt "$MODERATE_THRESHOLD" ]; then
        LABEL="v: moderate"
    elif [ "$CHANGES" -gt "$LARGE_THRESHOLD" ]; then
        LABEL="v: large"
    else
        LABEL="v: minimal"
    fi

    DELETE_LABELS=("${DELETE_LABELS[@]//${LABEL}/}")

    echo "Adding label: $LABEL"
    curl -X POST \
        -H "$AUTH_HEADER" \
        -H "Accept: application/vnd.github+json" \
        -H "X-GitHub-Api-Version: 2022-11-28" \
        -d "{\"labels\":[\"$LABEL\"]}" \
        "$API_URL" >/dev/null

    # delete labels other than the one corresponding to the no of changes made
    echo "Deleting Labels:"
    for DELETE_LABEL in "${DELETE_LABELS[@]}"; do
        ENCODED_LABEL=$(echo "$DELETE_LABEL" | sed 's/ /%20/g')
        curl -X DELETE \
            -H "Accept: application/vnd.github+json" \
            -H "$AUTH_HEADER" \
            -H "X-GitHub-Api-Version: 2022-11-28" \
            "$API_URL/$ENCODED_LABEL" >/dev/null
    done
}

size_label "$1" "$2"