{
    entities: {
        users: {
            1: {
                id: 1,
                email: "billykimba@gmail.com",
                 username: "Billy Kimba",
            },
            2: {
                id: 2,
                email: "thomasshelby@gmail.com",
                username: "Thomas Shelby",
            }
    },
        trails: {
            24: {
                id: 24,
                name: "Lands End Trail",
                longitude: -122,
                latitude: 38,
                length: 7.5,
                difficultyLevel: "moderate",
                elevationGain: 1, 689,
                routeType: "Point to point",
                estimatedTime: "Est. 3h 40m",
                description: "Get to know this 7.5-mile loop trail near Mill Valley, California. Generally considered a moderately challenging route, it takes an average of 3 h 40 min to complete.This is a very popular area for hiking and trail running, so you'll likely encounter other people while exploring.The trail is open year - round and is beautiful to visit anytime.",       
                state: "California",
                city: "Mill Valley",
                parkId: 3
            },
            25: {
                id: 25,
                name: "Sunset Trail",
                longitude: -120,
                atitude: 36,
                length: 9.1,
                difficultyLevel: "moderate",
                elevationGain: 1, 833,
                routeType: "Loop",
                estimatedTime: "Est. 4h 18m",
                description: "Check out this 9.1-mile loop trail near Muir Beach, California. Generally considered a moderately challenging route, it takes an average of 4 h 18 min to complete.This is a popular trail for birding, hiking, and trail running, but you can still enjoy some solitude during quieter times of day.The best times to visit this trail are April through September.Dogs are welcome, but must be on a leash.",       
                state: "California",
                city: "Marin Headlands",
                parkId: 3
            }
        },
        parks: {
            1: {
                id: 1,
                name: "Zion National Park",
                        acreage: 146, 597,
                            longitude: -113.79,
                                latitude: 37.29,
                                    contact: "435-772-3256",
                                        description: "Want to find the best trails in Zion National Park for an adventurous hike or a family trip? AllTrails has 112 great 
                      hiking trails, biking trails, running trails and more.Enjoy hand - curated trail maps, along with reviews and photos from 
                      nature lovers like you.",       
                country: "United States",
                    state: "Utah"
            },
            2: {
                id: 2,
                    name: "Yosemite Natonal Park",
                        acreage: 146, 597,
                            longitude: -126,
                                latitude: 33.34,
                                    contact: "877-989-2787",
                                        description: "With over 3.5 million yearly visitors from throughout the world, the iconic Yosemite National Park is known for some of 
                     the most beautiful hikes and landscapes in the United States.There are over 800 miles of trails to explore through 
                      Yosemite Valley, Tuolumne Meadows, and Wawona.",       
                country: "United States",
                    state: "California"
            }
        },
        reviews: {
            10: {
                id: 10,
                    userId: 11,
                        trailId: 4,
                            photoId: 2,
                                rating: 4.2,
                                    comment: "I love this trail. Wonderful views.",
                                        trailDate: 2021 - 12 - 12
            },
            11: {
                id: 11,
                    userId: 1,
                        trailId: 2,
                            photoId: 4,
                                rating: 5.0,
                                    comment: "I love hiking on this trail. It is a lovely time with my dog.",
                                        trailDate: 2020 - 08 - 23
            }
        },
        photos: {
            3: {
                id: 3,
                trailId: 7,
                userId: 22,
                content: 'sample_photo.png'
            }
        },
        tags: {
            4: {
                id: 8,
                description: "hiking",
                trailId: 4,
                parkId: 8
            }
        }
    },
    ui: {
        modal: true / false
    },
    errors: {
        session: ["Incorrect username or password."]
    },
    session: { currUserId: 11 }
}