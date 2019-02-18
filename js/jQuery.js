const failures = {
    babies: {
        painful: [
            {
                title: 'slackline',
                intensity: 1,
                gif: '<img src="images/slackline.gif" alt="a toddler rides a slackline into a padded wall">'
            },
            {
                title: 'slide fail',
                intensity: 1,
                gif: '<img src="images/baby-slide.gif" alt="a toddler falls through a backyard slide">'
            },
            {
                title: 'huskie slam',
                intensity: 2,
                gif: '<img src="images/baby-huskies.gif" alt="a toddler gets knocked over by a running huskie">'
            },
            {
                title: 'twerky mum',
                intensity: 2,
                gif: '<img src="images/twerking-mum.gif" alt="a twerking mother accidentally knocks over a toddler running behind her">'
            },
        ],
        embarrassing: [
            {
                title: 'brain freeze',
                intensity: 1,
                gif: '<img src="images/baby-brain-freeze.gif" alt="a toddler drinking a soft drink through a straw gets brain freeze">'

            },
            {
                title: 'hoser',
                intensity: 1,
                gif: '<img src="images/baby-hose.gif" alt="a toddler tries to drink from a hose but misses his mouth">'
            },
            {
                title: 'snot baby',
                intensity: 2,
                gif: '<img src="images/baby-snot.gif" alt="a baby blows snot bubbles on his face">'
            },
            {
                title: 'spaghetti',
                intensity: 2,
                gif: '<img src="images/spaghetti-snot.gif" alt="a baby sneezes a piece of spaghetti through her nose">'
            }

        ]
    },
    "non-babies": {
        painful: [
            {
                title: 'yoyo fail',
                intensity: 1,
                gif: '<img src="images/yoyo.gif" alt="a preteen hits himself in the face with a yoyo">'
            },
            {
                title: 'shameful display',
                intensity: 1,
                gif: '<img src="images/display-fail.gif" alt="a main in a department store trips over a cordon and knocks over a display">'
            },
            {
                title: 'watermelon juice',
                intensity: 2,
                gif: '<img src="images/watermelon.gif" alt="a woman participating in a competition tries to fire a watermelon from a giant slingshot and has it fire in her face">'
            },
            {
                title: 'no pain no gain',
                intensity: 2,
                gif: '<img src="images/treadmill.gif" alt="a woman falls on a treadmill and is sent flying backwards">'
            }
        ],
        embarrassing: [
            {
                title: 'bad posture',
                intensity: 1,
                gif: '<img src="images/car-slip.gif" alt="a lady slouching in a car seat slides into the footwell and gets stuck">'

            },
            {
                title: 'sit down',
                intensity: 1,
                gif: '<img src="images/chair-break.gif" alt="a man breaks a chair as he goes to sit down">'
            },
            {
                title: 'beer explosion',
                intensity: 2,
                gif: '<img src="images/beer-explosion.gif" alt="a drunk man trying to use an ATM drops his beer, causing a beer geyser to blast him in his face">'
            },
            {
                title: 'sweet moves',
                intensity: 2,
                gif: '<img src="images/dance-slip.gif" alt="a man dancing at a party slips and flails on a wet floor as he struggles to regain his balance">'
            }
        ]
    },
    sports: {
        painful: [
            {
                title: 'gymnast face slam',
                intensity: 1,
                gif: '<img src="images/gymnast.gif" alt="a gymnast flings herself in the air but misses the bar on her way down, faceplanting on the mat">'
            },
            {
                title: 'soccer ball rocket',
                intensity: 1,
                gif: '<img src="images/soccerball.gif" alt="a soccer player gets hit in the head by a soccerball launched at her by a member of the opposing team">'
            },
            {
                title: 'speeding train',
                intensity: 2,
                gif: '<img src="images/sprint.gif" alt="a sprinter at a track meet knocks over a young athlete not paying attention as she crosses the track">'
            },
            {
                title: 'pole vault',
                intensity: 2,
                gif: '<img src="images/pole-vault.gif" alt="a pole-vaulter spears himself in the groin as he clears the bar">'
            }

        ],
        embarrassing: [
            {
                title: 'job opening',
                intensity: 1,
                gif: '<img src="images/missed-football.gif" alt="an NFL player misses a very easy pass">'
            },
            {
                title: 'insult to injury',
                intensity: 1,
                gif: '<img src="images/stretcher.gif" alt="a medic trying to pick up an injured soccer player on a stretcher falls on top of him">'
            },
            {
                title: '0.5/10',
                intensity: 2,
                gif: '<img src="images/high-dive.gif" alt="a competitive diver completes an aerial somersault and then belly flops on the water">'
            },
            {
                title: 'boomerang',
                intensity: 2,
                gif: '<img src="images/pole-vault-boomerang.gif" alt="a pole vaulter fails to clear the bar but holds on to his pole as it bends and flings him back in the direction he came from">'
            }

        ]
    },
    animals: {
        painful: [
            {
                title: 'penguin slide',
                intensity: 1,
                gif: '<img src="images/penguin.gif" alt="a penguin slips and falls on the ice">'
            },
            {
                title: 'boop',
                intensity: 1,
                gif: '<img src="images/water-mammal.gif" alt="a manatee in an aquarium swims face first into an observation window">'
            },
            {
                title: 'dolphin dab',
                intensity: 2,
                gif: '<img src="images/dolphins.gif" alt="a dolphin swimming behind a boat leaps into the air only to have another dolphin leap up beneath it, smashing it in the belly with its rostrum">'
            },
            {
                title: 'rag-dog',
                intensity: 2,
                gif: '<img src="images/dog-exercise.gif" alt="a dog leaps onto an exercise ball and is sent flying">'
            }
        ],
        embarrassing: [
            {
                title: 'top-heavy',
                intensity: 1,
                gif: '<img src="images/top-heavy-puppy.gif" alt="a top heavy puppy feeding at a bowl falls head over heels into his food">'
            },
            {
                title: 'pathetic',
                intensity: 1,
                gif: '<img src="images/cat-misses-dog.gif" alt="a cat tries to attack a dog but misses completely">'
            },
            {
                title: "dog inna' water",
                intensity: 2,
                gif: '<img src="images/dog-fish.gif" alt="a fish flopping around on a dock scares a dog and causes it to fall off the dock into the water">'
            },
            {
                title: 'nice try, no banana',
                intensity: 2,
                gif: '<img src="images/monkey-banana.gif" alt="a monkey on the hood of a car tries to eat a banana on the other side of the windshield">'
            }
        ]
    }
};


$(document).ready(function () {

    const arrowBounce = $('.down-arrow').hover(
        function () { $(this).removeClass('fadeIn delay-1s').addClass('bounce') },
        function () { $(this).removeClass('bounce') }
    )

    const arrowScroll = $('.down-arrow').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#quiz-container').offset().top
        }, 1000);
    });

    const restart = $('#submit-button').on('click', function () {

        setTimeout(function () {
            $('.start-over-container').css({
                "display": "block",
            }, 3000);
            $('.wrapper').css({
                "height": "auto",
            });
            $('form').css({
                "position": "relative",
            })
            $('#start-over').hover(function () {
                $(this).removeClass('fadeIn').addClass('bounce')
            },
                function () {
                    $(this).removeClass('bounce')
                });
        });
    });

    const refreshPage = $('.start-over').on('click', function () {
        location.reload(true);
    });

    $('input[name=painful-embarrassing').on('click', function () {
        const genre = $('input[name=painful-embarrassing]:checked').val();
        $('.second-question').css({
            "display": "block",
        });
        $('#second-question-text').html(`What kind of ${genre} fail?`);
    });

    $('input[name=category]').on('click', function () {
        const genre = $('input[name=painful-embarrassing]:checked').val();
        $('.third-question').css({
            "display": "block",
        })
        $('#third-question-text').html(`How intensely ${genre} can you handle?`);
    })

    $('#intensity-button').click(function (e) {
        e.preventDefault;
        $('.fourth-question').css({
            "display": "block",
        });
    });

    const displayGif = function () {
        $('.wrapper').css({
            "height": "auto",
        })
    }

    const randomVid = function (optionsArray) {
        const index = Math.floor(Math.random() * optionsArray.length);
        return optionsArray[index];
    }

    console.log(randomVid(failures.babies.embarrassing), 'this is another');

    $('form').on('submit', function (e) {
        e.preventDefault();

        //babies/ non-babies/ etc
        const demographic = $('input[name=category]:checked').val();
        //painful or embarrassing
        const genre = $('input[name=painful-embarrassing]:checked').val();
        // console.log(genre);
        const intensity = parseInt($('input[name=intensity').val());
        const proceed = $('input[name=to-continue]:checked').val();

        //store users chosen demographics from Failures object
        const failOptions = failures[demographic];

        //combine user's dem preference with genre  pref
        const failOpGenre = failOptions[genre];

        let failOpIntensity = [];

        for (let i = 0; i < failOpGenre.length; i = i + 1) {
            let currentItem = failOpGenre[i];
            if (currentItem.intensity === intensity) {
                failOpIntensity.push(currentItem);
                randomVid(failOpIntensity);
                console.log(randomVid(failOpIntensity), "this it the console");
            };
        }
        // if ($(window).scrollTop() > navpos.top && $(window).width() < 960)
        if (proceed === 'proceed' && $(window).width() < 1140) {
            $('.quiz-container').css({
                // "height": "80vh",
                "padding": "10px 20px",
                "flex-direction": "column-reverse",
            });
            $('.wrapper').css({
                "height": "100vh",
                "padding-top": "10%",
            });
            document.getElementById('rattle').play();
            $('.answer').addClass('animated shake');
            setTimeout(function () {
                $('.gif-container').html(randomVid(failOpIntensity).gif)
            }, 1000);
        } else if (proceed === 'do-not-proceed' && $(window).width() < 1140) {
            $('.quiz-container').css({
                // "height": "80vh",
                "padding": "10px 20px",
                "flex-direction": "column-reverse",
            });
            $('.wrapper').css({
                "height": "100vh",
                "padding-top": "10%",
            });
            document.getElementById('rattle').play();
            $('.answer').addClass('animated shake');
            setTimeout(function () {
                $('.gif-container').html('<img src="images/feel-good.gif" alt="Bob Ross pets a baby deer">')
            }, 1000);
        } else if (proceed === "proceed") {
            document.getElementById('rattle').play();
            $('.answer').addClass('animated shake');
            setTimeout(function () {
                $('.gif-container').html(randomVid(failOpIntensity).gif)
            }, 1000);
        } else {
            document.getElementById('rattle').play();
            $('.answer').addClass('animated shake');
            setTimeout(function () {
                $('.gif-container').html('<img src="images/feel-good.gif" alt="Bob Ross pets a baby deer">')
            }, 1000);
        }
    })
});