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
// image: 'image/blockchain.jpg', title: 'Block Chain', body: 'Learn Block Chain from expert trainer, Practical role-based trainings for BlockChain Professionals.'

exports.renderAcademy = (req, res) => {
    res.render('views/academy', {
        package: {
            blockchain: {
                image: 'image/blockchain.jpg', title: 'Block Chain', body: 'Learn Block Chain from expert trainer, Practical role-based trainings for BlockChain Professionals.'
            },
            cyber: {
                image: 'image/cyber.jpg', title: 'Cyber Security', body: 'Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. We will practicaly guide you in all you need to learn.'
            },
            Web: {
                image: 'image/web.jpg', title: 'Web Develoment', body: 'Learn the Basics. Every Web Developer must have a basic understanding of HTML, CSS, and JavaScript. Responsive Web Design is used in all types of modern websites.'
            },
            AI: {
                image: 'image/AI.jpg', title: 'Artificial Intelligence', body: 'Most Artificial intelligence (AI) examples that you hear about today – from chess-playing computers to self-driving cars – rely heavily on deep learning and natural language processing.'
            },
            robot: {
                image: 'image/robotic.jpg', title: 'Robotics & Embedded System', body: 'Robotics & Embedded System involves design, construction, and operation. The goal is to design intelligent machines that can help and assist humans in their day-to-day lives and keep everyone safe.'
            },
            game: {
                image: 'image/gaming.jpg', title: 'Game Development', body: 'Game Development is the art of creating games design, build, test and release. A game developer could be a programmer, a sound designer, an artist, a designer or many other roles available in the industry.'
            },
            VR: {
                image: 'image/vr.jpg', title: 'Augmented Reality / Virtual Reality', body: "When learning VR/AR development, you'll need to rely on programming guides and tutorials."
            },
            mobile: {
                image: 'image/mobile.jpg', title: 'Mobile development', body: "Today's Industries has proven an high demand for mobile developers, at I/O Academy, we train developers to fit in-demand of today industries."
            },
            autocad: {
                image: 'image/autocad.jpg', title: 'Autocad', body: 'AutoCAD is a commercial computer-aided design and drafting software application. Do you want to learn how to use Autocad, please get in touch with us.'
            }
        }

    })
}

exports.renderContact = (req, res) => {
    res.render('views/contact')
}


// exports.renderHomeSecond = (req, res) => {
//     res.render('views/index2')
// }
