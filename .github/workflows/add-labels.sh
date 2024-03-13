#!/bin/bash

# get only changes in git diff
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

echo "Deleting Labels:"
for DELETE_LABEL in "${DELETE_LABELS[@]}"; do
    ENCODED_LABEL=$(echo "$DELETE_LABEL" | sed 's/ /%20/g')
    curl -X DELETE \
        -H "Accept: application/vnd.github+json" \
        -H "$AUTH_HEADER" \
        -H "X-GitHub-Api-Version: 2022-11-28" \
        "$API_URL/$ENCODED_LABEL" >/dev/null
done
