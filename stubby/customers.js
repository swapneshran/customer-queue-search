const customers = [
    {
        "id": 1,
        "customer": {
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        }
    },
    {
        "id": 2,
        "customer": {
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        }
    },
    {
        "id": 3,
        "customer": {
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "address": {
                "street": "Douglas Extension",
                "suite": "Suite 847",
                "city": "McKenziehaven",
                "zipcode": "59590-4157",
                "geo": {
                    "lat": "-68.6102",
                    "lng": "-47.0653"
                }
            },
            "phone": "1-463-123-4447",
            "website": "ramiro.info",
            "company": {
                "name": "Romaguera-Jacobson",
                "catchPhrase": "Face to face bifurcated interface",
                "bs": "e-enable strategic applications"
            }
        }
    },
    {
        "id": 4,
        "customer": {
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "address": {
                "street": "Hoeger Mall",
                "suite": "Apt. 692",
                "city": "South Elvis",
                "zipcode": "53919-4257",
                "geo": {
                    "lat": "29.4572",
                    "lng": "-164.2990"
                }
            },
            "phone": "493-170-9623 x156",
            "website": "kale.biz",
            "company": {
                "name": "Robel-Corkery",
                "catchPhrase": "Multi-tiered zero tolerance productivity",
                "bs": "transition cutting-edge web services"
            }
        }
    },
    {
        "id": 5,
        "customer": {
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "address": {
                "street": "Skiles Walks",
                "suite": "Suite 351",
                "city": "Roscoeview",
                "zipcode": "33263",
                "geo": {
                    "lat": "-31.8129",
                    "lng": "62.5342"
                }
            },
            "phone": "(254)954-1289",
            "website": "demarco.info",
            "company": {
                "name": "Keebler LLC",
                "catchPhrase": "User-centric fault-tolerant solution",
                "bs": "revolutionize end-to-end systems"
            }
        }
    },
    {
        "id": 6,
        "customer": {
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "address": {
                "street": "Norberto Crossing",
                "suite": "Apt. 950",
                "city": "South Christy",
                "zipcode": "23505-1337",
                "geo": {
                    "lat": "-71.4197",
                    "lng": "71.7478"
                }
            },
            "phone": "1-477-935-8478 x6430",
            "website": "ola.org",
            "company": {
                "name": "Considine-Lockman",
                "catchPhrase": "Synchronised bottom-line interface",
                "bs": "e-enable innovative applications"
            }
        }
    },
    {
        "id": 7,
        "customer": {
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
            "address": {
                "street": "Rex Trail",
                "suite": "Suite 280",
                "city": "Howemouth",
                "zipcode": "58804-1099",
                "geo": {
                    "lat": "24.8918",
                    "lng": "21.8984"
                }
            },
            "phone": "210.067.6132",
            "website": "elvis.io",
            "company": {
                "name": "Johns Group",
                "catchPhrase": "Configurable multimedia task-force",
                "bs": "generate enterprise e-tailers"
            }
        }
    },
    {
        "id": 8,
        "customer": {
            "name": "Nicholas Runolfsdottir V",
            "username": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me",
            "address": {
                "street": "Ellsworth Summit",
                "suite": "Suite 729",
                "city": "Aliyaview",
                "zipcode": "45169",
                "geo": {
                    "lat": "-14.3990",
                    "lng": "-120.7677"
                }
            },
            "phone": "586.493.6943 x140",
            "website": "jacynthe.com",
            "company": {
                "name": "Abernathy Group",
                "catchPhrase": "Implemented secondary concept",
                "bs": "e-enable extensible e-tailers"
            }
        }
    },
    {
        "id": 9,
        "customer": {
            "name": "Glenna Reichert",
            "username": "Delphine",
            "email": "Chaim_McDermott@dana.io",
            "address": {
                "street": "Dayna Park",
                "suite": "Suite 449",
                "city": "Bartholomebury",
                "zipcode": "76495-3109",
                "geo": {
                    "lat": "24.6463",
                    "lng": "-168.8889"
                }
            },
            "phone": "(775)976-6794 x41206",
            "website": "conrad.com",
            "company": {
                "name": "Yost and Sons",
                "catchPhrase": "Switchable contextually-based project",
                "bs": "aggregate real-time technologies"
            }
        }
    },
    {
        "id": 10,
        "customer": {
            "name": "Clementina DuBuque",
            "username": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz",
            "address": {
                "street": "Kattie Turnpike",
                "suite": "Suite 198",
                "city": "Lebsackbury",
                "zipcode": "31428-2261",
                "geo": {
                    "lat": "-38.2386",
                    "lng": "57.2232"
                }
            },
            "phone": "024-648-3804",
            "website": "ambrose.net",
            "company": {
                "name": "Hoeger LLC",
                "catchPhrase": "Centralized empowering task-force",
                "bs": "target end-to-end models"
            }
        }
    }
]

const newCustomerApiData = {
    "queueData": {
        "currentUserRole": "CONCIERGE",
        "customerServed": null,
        "isActive": true,
        "isMyLastCustomer": false,
        "minutesToNextFree": 29,
        "queue": {
            "advanceBookingsMinutes": 0,
            "advanceBookingsWeeks": 0,
            "advisorCannotChooseCustomer": false,
            "allowedToToggleCustomerDescriptionOption": false,
            "applyTicketNumber": false,
            "averageServeTimeMinutes": 10,
            "bookingStart": 10,
            "bookingTimings": "TIME",
            "bufferSpace": 1,
            "captureOrderNumber": false,
            "clearQueueOvernight": false,
            "colour": null,
            "conciergeAcceptReject": false,
            "customerDescriptionEnabled": false,
            "customerEmailRequired": false,
            "customerEmailVisible": true,
            "customerNameRequired": true,
            "customerNameRequiredKiosk": false,
            "customerNameVisible": true,
            "customerPostcodeRequired": false,
            "customerPostcodeVisible": false,
            "customerQuestionEnabled": true,
            "customerSurnameRequired": false,
            "customerSurnameVisible": true,
            "customerTimings": "DUE_TIME",
            "customersToday": [
                {
                    "bookedServer": null,
                    "bookingEndTime": null,
                    "bookingStartTime": null,
                    "collectingServer": null,
                    "currentPosition": 1,
                    "customer": {
                        "bookingRef": "W",
                        "createdBy": {
                            "displayName": "Code Test2",
                            "id": 3617
                        },
                        "createdBySystem": null,
                        "customerProfile": null,
                        "emailAddress": "fraser@qudini.com",
                        "firstName": "",
                        "groupSize": 1,
                        "id": 13704599,
                        "isInMultipleQueue": false,
                        "language": {
                            "isoCode": "en",
                            "name": "English"
                        },
                        "merchantCustomer": {
                            "id": 6180736
                        },
                        "mobileNetwork": null,
                        "mobileNumber": "+44",
                        "name": "Fraser",
                        "notes": "",
                        "numberCountryCode": "GB",
                        "orderNumber": null,
                        "pagerNumber": null,
                        "postCode": null,
                        "surname": "",
                        "ticketNumber": "003",
                        "title": null,
                        "unreadMessages": 0
                    },
                    "expectedTime": "2021-05-17T17:51:33.157+01:00",
                    "hasAnsweredQuestions": false,
                    "hasBeenSentReturnMessage": true,
                    "id": 13406507,
                    "inStore": true,
                    "isFixed": false,
                    "joinedTime": "2017-01-18T17:09:29.000Z",
                    "lastSMSStatus": null,
                    "numberSentReturnMessage": 1,
                    "originalExpectedTime": "2017-01-18T18:19:01.000Z",
                    "product": {
                        "averageServeTimeMinutes": 10,
                        "colour": null,
                        "id": 22204,
                        "name": "TestProduct1"
                    },
                    "productDescription": null,
                    "timeArrivedInStore": null,
                    "timeSentReturnMessage": "2017-08-10T17:06:43.000+01:00",
                    "waitTime": null,
                    "waitTimePercentComplete": 100
                },
                {
                    "bookedServer": null,
                    "bookingEndTime": null,
                    "bookingStartTime": null,
                    "collectingServer": null,
                    "currentPosition": 2,
                    "customer": {
                        "bookingRef": "W",
                        "createdBy": {
                            "displayName": "Code Test3",
                            "id": 3617
                        },
                        "createdBySystem": null,
                        "customerProfile": null,
                        "emailAddress": "someemail1@gmail.com",
                        "firstName": "Alex",
                        "groupSize": 1,
                        "id": 15596423,
                        "isInMultipleQueue": false,
                        "language": {
                            "isoCode": "en",
                            "name": "English"
                        },
                        "merchantCustomer": {
                            "id": 7986420
                        },
                        "mobileNetwork": null,
                        "mobileNumber": "+447007775525",
                        "name": "Alex Forbes-Reed",
                        "notes": "Testing",
                        "numberCountryCode": "GB",
                        "orderNumber": null,
                        "pagerNumber": null,
                        "postCode": null,
                        "surname": " Forbes-Reed",
                        "ticketNumber": "001",
                        "title": null,
                        "unreadMessages": 0
                    },
                    "expectedTime": "2021-05-17T18:01:33.157+01:00",
                    "hasAnsweredQuestions": false,
                    "hasBeenSentReturnMessage": true,
                    "id": 14883961,
                    "inStore": true,
                    "isFixed": false,
                    "joinedTime": "2017-03-18T21:37:45.000Z",
                    "lastSMSStatus": null,
                    "numberSentReturnMessage": 1,
                    "originalExpectedTime": "2017-03-18T22:57:50.000Z",
                    "product": {
                        "averageServeTimeMinutes": 10,
                        "colour": null,
                        "id": 22204,
                        "name": "TestProduct1"
                    },
                    "productDescription": null,
                    "timeArrivedInStore": null,
                    "timeSentReturnMessage": "2019-09-05T07:00:42.000+01:00",
                    "waitTime": null,
                    "waitTimePercentComplete": 100
                },
                {
                    "bookedServer": null,
                    "bookingEndTime": null,
                    "bookingStartTime": null,
                    "collectingServer": null,
                    "currentPosition": 3,
                    "customer": {
                        "bookingRef": "W",
                        "createdBy": {
                            "displayName": "Code Test1",
                            "id": 3617
                        },
                        "createdBySystem": null,
                        "customerProfile": null,
                        "emailAddress": "codrinionescu@yahoo.com",
                        "firstName": "Steve",
                        "groupSize": 1,
                        "id": 21693919,
                        "isInMultipleQueue": false,
                        "language": {
                            "isoCode": "en",
                            "name": "English"
                        },
                        "merchantCustomer": {
                            "id": 13742226
                        },
                        "mobileNetwork": null,
                        "mobileNumber": "+447775456404",
                        "name": "Steve",
                        "notes": "",
                        "numberCountryCode": "GB",
                        "orderNumber": null,
                        "pagerNumber": null,
                        "postCode": null,
                        "surname": "",
                        "ticketNumber": "001",
                        "title": null,
                        "unreadMessages": 0
                    },
                    "expectedTime": "2021-05-17T18:11:33.157+01:00",
                    "hasAnsweredQuestions": false,
                    "hasBeenSentReturnMessage": false,
                    "id": 19827521,
                    "inStore": true,
                    "isFixed": false,
                    "joinedTime": "2017-09-27T12:47:06.000+01:00",
                    "lastSMSStatus": null,
                    "numberSentReturnMessage": 0,
                    "originalExpectedTime": "2017-09-27T13:04:15.000+01:00",
                    "product": {
                        "averageServeTimeMinutes": 10,
                        "colour": null,
                        "id": 22204,
                        "name": "TestProduct1"
                    },
                    "productDescription": null,
                    "timeArrivedInStore": null,
                    "timeSentReturnMessage": null,
                    "waitTime": null,
                    "waitTimePercentComplete": 100
                }
            ],
            "finishReminder": false,
            "forceAdvisorToReportOutcome": false,
            "groupSizeRequired": false,
            "groupSizeVisible": false,
            "id": 2037,
            "identifier": "gj9fs",
            "isBookingAllowed": false,
            "isRestaurant": false,
            "isRetainTicketNumber": false,
            "isTabletCollectionEnabled": false,
            "isWalkinAllowed": true,
            "isWalkoutDuringCustomerAddEnabled": false,
            "maxGroupSize": 20,
            "maxQueueLength": null,
            "minWaitTimeMinutes": null,
            "mobileVisible": true,
            "name": "CodeTest",
            "numberWithDuplicatedNameKiosk": false,
            "outcomeReportingBooking": false,
            "outcomeReportingWalkin": false,
            "outcomesEnabled": false,
            "pagerRequired": false,
            "pagerVisible": false,
            "queueMessagesThresholdMinutes": 0,
            "queueMessagesThresholdPosition": 0,
            "rejectReasonAllowFreeText": false,
            "rejectReasons": [],
            "removeCustomerEnabled": false,
            "removeCustomerHours": null,
            "removeCustomerMins": null,
            "removeCustomerMinutes": null,
            "requestOutcomeAdvisors": false,
            "requestOutcomeConcierge": false,
            "requiredMpn": false,
            "secondsAcceptReject": 60,
            "serverAcceptReject": false,
            "serverAllowedBreak": true,
            "serverCannotViewProducts": false,
            "servers": [
                {
                    "displayName": "Code Test1",
                    "id": 3617
                }
            ],
            "serversCanOnlyServeBookingsAssignedToThemselves": false,
            "servingServers": [],
            "showAllUncollected": false,
            "showAssignedCustomerPopup": false,
            "skipJoinMessage": false,
            "smsLanguagesEnabled": [],
            "smsRestricted": false,
            "snsTopicArn": "arn:aws:sns:eu-west-1:441363153104:QUEUE2037",
            "staffBookingAvailability": 0,
            "staffTimings": "BOTH",
            "tagSelectionList": [],
            "tags": [],
            "ticketNumberTag": "",
            "unreadMessagesForQueue": 0,
            "venue": {
                "id": 1134,
                "isBookingEnabled": false,
                "isCustomerProfileEnabled": false,
                "isCustomerProfileIconEnabled": false,
                "isWalkinEnabled": true,
                "name": "StackTowers"
            }
        },
        "queueLength": 3,
        "queueLengthBooked": 0,
        "queueLengthNonBooked": 3,
        "queueOccupancy": {
            "current": 0,
            "kioskBehaviourWhenUnderCapacity": "GO_TO_STORE",
            "maximum": 0
        },
        "serversAvailable": [
            {
                "isAlwaysAvailable": true,
                "minutesUntilNextAvailability": 0,
                "nextAvailableMinutes": 30,
                "server": {
                    "currentBreakReason": null,
                    "displayName": "Code Test1",
                    "id": 3617,
                    "isOnBreak": false,
                    "location": null
                }
            }
        ],
        "staffAvailable": 1,
        "staffTotal": 1
    },
    "status": "ok"
}
const stubbyCustomersConfig = {
    "request": {
        "url": "/api/queue/gj9fs",
        "method": "GET",
        "headers": {
            "authorization": "Basic codetest1:codetest100"
        },
    },
    "response": {
        "headers": {
            "Content-Type": "application/json"
        },
        "latency": 1000,
        "status": 200,
        "body": newCustomerApiData
    }
}

module.exports = stubbyCustomersConfig