const axios = require('axios')

exports.renderHomePage = (req, res) => {
    res.render('views/index')
}

exports.renderAbout = (req, res) => {
    res.render('views/about')
}

exports.renderspace = (req, res) => {
    res.render('views/space', {
        pricing: {
            Free: {
                planName: 'Freelancer', price: '1,500', span: '/Day', planDetails: {
                    a: {
                        planInfo: 'A day Plan(10am - 7pm)'
                    },
                    b: {
                        planInfo: 'Access to Common Room'
                    },
                    c: {
                        planInfo: '₦500, on sundays(3pm - 6pm)',
                    }
                }

            },
            Active: {
                planName: 'Active', price: '7,000', span: '/Week', planDetails: {
                    a: {
                        planInfo: 'A Week Plan(10am - 7pm)'
                    },
                    b: {
                        planInfo: 'Access to Common Room'
                    },
                    c: {
                        planInfo: '(Monday - Saturday)',
                    }
                }
            },
            Entrepreneur: {
                planName: 'Entrepreneur', price: '20,000', span: '/Mo', planDetails: {
                    a: {
                        planInfo: 'A Month Plan(10am - 7pm)'
                    },
                    b: {
                        planInfo: 'Access to Common Room'
                    },
                    c: {
                        planInfo: '(Monday - Saturday)',
                    }
                }
            },
            bigBoss: {
                planName: 'Big Boss', price: '30,000', span: '/Mo', planDetails: {
                    a: {
                        planInfo: 'A Month Plan(10am - 7pm)'
                    },
                    b: {
                        planInfo: 'Dedicated Desk (Not part of common room)'
                    },
                    c: {
                        planInfo: '(Monday - Saturday)',
                    },
                    d: {
                        planInfo: 'Sunday(3pm - 6pm)',
                    }
                }
            },
            Nomad: {
                planName: 'Nomad', price: '12,000', span: '/Mo', planDetails: {
                    a: {
                        planInfo: 'A Month Plan(10am - 7pm)'
                    },
                    b: {
                        planInfo: 'Access to common room'
                    },
                    c: {
                        planInfo: '(3 days in a week)',
                    }
                }
            },
            Virtual: {
                planName: 'Virtual Office', price: '10,000', span: '/Mo', planDetails: {
                    a: {
                        planInfo: 'A Month Plan(10am - 7pm)'
                    },
                    b: {
                        planInfo: 'No physical Access to the space'
                    },
                    c: {
                        planInfo: 'We receive and redirect all correspondence to you',
                    },
                    d: {
                        planInfo: 'Sunday(3pm - 6pm)',
                    }
                }
            },
        },
        student: {
            free: {
                planName: 'Freelancer', price: '1000', planDetails: {
                    a: {
                        planInfo: 'A Month Plan(10am - 7pm)'
                    },
                    b: {
                        planInfo: 'No physical Access to the space'
                    },
                    c: {
                        planInfo: 'We receive and redirect all correspondence to you',
                    },
                    d: {
                        planInfo: 'Sunday(3pm - 6pm)',
                    }

                }
            },
            active: {
                planName: 'Active', price: '5000', planDetails: {
                    a: {
                        planInfo: 'A Month Plan(10am - 7pm)'
                    },
                    b: {
                        planInfo: 'No physical Access to the space'
                    },
                    c: {
                        planInfo: 'We receive and redirect all correspondence to you',
                    },
                    d: {
                        planInfo: 'Sunday(3pm - 6pm)',
                    }

                }
            },
            nomad: {
                planName: 'Nomad', price: '10,000', planDetails: {
                    a: {
                        planInfo: 'A Month Plan(10am - 7pm)'
                    },
                    b: {
                        planInfo: 'No physical Access to the space'
                    },
                    c: {
                        planInfo: 'We receive and redirect all correspondence to you',
                    },
                    d: {
                        planInfo: 'Sunday(3pm - 6pm)',
                    }

                }
            },
            entrepreneur: {
                planName: 'Entrepreneur', price: '15,000', planDetails: {
                    a: {
                        planInfo: 'A Month Plan(10am - 7pm)'
                    },
                    b: {
                        planInfo: 'No physical Access to the space'
                    },
                    c: {
                        planInfo: 'We receive and redirect all correspondence to you',
                    },
                    d: {
                        planInfo: 'Sunday(3pm - 6pm)',
                    }

                }
            }
        }
    })
}

exports.renderAcademy = (req, res) => {
    res.render('views/academy')
}

exports.renderContact = (req, res) => {
    res.render('views/contact')
}


// exports.renderHomeSecond = (req, res) => {
//     res.render('views/index2')
// }


// exports.renderCloudinary = (req, res) => {
//     axios.get(CEV_URL)
//         .then((response) => {
//             console.log(response)
//             // res.render('index', {

//             //     sunset: `Sunset: ${response.data.sys.sunset}`,

//             // })
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }
