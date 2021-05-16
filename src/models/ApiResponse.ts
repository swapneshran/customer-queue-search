import Customer from "./Customer";

type CustomerApiResponse = {
    queueData: {
        "currentUserRole": string,
        "customerServed": string | null,
        "isActive": boolean,
        "isMyLastCustomer": boolean,
        "minutesToNextFree": number,
        "queue": {
            "advanceBookingsMinutes": number,
            "advanceBookingsWeeks": number,
            "advisorCannotChooseCustomer": boolean,
            "allowedToToggleCustomerDescriptionOption": boolean,
            "applyTicketNumber": boolean,
            "averageServeTimeMinutes": number,
            "bookingStart": number,
            "bookingTimings": string,
            "bufferSpace": number,
            "captureOrderNumber": boolean,
            "clearQueueOvernight": boolean,
            "colour": string | boolean,
            "conciergeAcceptReject": boolean,
            "customerDescriptionEnabled": boolean,
            "customerEmailRequired": boolean,
            "customerEmailVisible": boolean,
            "customerNameRequired": boolean,
            "customerNameRequiredKiosk": boolean,
            "customerNameVisible": boolean,
            "customerPostcodeRequired": boolean,
            "customerPostcodeVisible": boolean,
            "customerQuestionEnabled": boolean,
            "customerSurnameRequired": boolean,
            "customerSurnameVisible": boolean,
            "customerTimings": string,
            customersToday: Array<Customer>
        }
    }
}

export type {
    CustomerApiResponse
}