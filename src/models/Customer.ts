type Customer = {
    "bookedServer": string | null,
    "bookingEndTime":  string | null ,
    "bookingStartTime": string | null,
    "collectingServer": string | null,
    "currentPosition": number,
    "customer": {
        "bookingRef": string,
        "createdBy": {
            "displayName": string,
            "id": number
        },
        "createdBySystem": string | null,
        "customerProfile": string | null,
        "emailAddress": string,
        "firstName": string,
        "groupSize": number,
        "id": number,
        "isInMultipleQueue": boolean,
        "language": {
            "isoCode": string,
            "name": "English"
        },
        "merchantCustomer": {
            "id": number
        },
        "mobileNetwork": string | null,
        "mobileNumber": string,
        "name": string,
        "notes": string,
        "numberCountryCode": string,
        "orderNumber": number | null,
        "pagerNumber": number |  null,
        "postCode": string|  null,
        "surname": string,
        "ticketNumber": string,
        "title": string | null,
        "unreadMessages": number
    },
    "expectedTime": string,
    "hasAnsweredQuestions": boolean,
    "hasBeenSentReturnMessage": boolean,
    "id": number,
    "inStore": boolean,
    "isFixed": boolean,
    "joinedTime": string,
    "lastSMSStatus": boolean |  null,
    "numberSentReturnMessage": number,
    "originalExpectedTime": string,
    "product": {
        "averageServeTimeMinutes": number,
        "colour": string | null,
        "id": number,
        "name": string
    },
    "productDescription": string | null,
    "timeArrivedInStore": string | null,
    "timeSentReturnMessage": string,
    "waitTime": number | null,
    "waitTimePercentComplete": number
}

export default Customer

/*
* @storybook/addon-actions  @storybook/addon-docs @storybook/addon-knobs @storybook/addon-links @storybook/addons @storybook/react @storybook/theming
* */