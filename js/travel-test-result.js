document.addEventListener("DOMContentLoaded", function () {


    /* =========================================================
       RESULT DATA
    ========================================================= */

    const resultData = {

        healing: {

            name: "힐링형",

            subtitle:
                "조용한 곳에서 여유를 즐기는 당신!",

            heading:
                "쉬어가는 여행을 좋아해요",

            description:
                "바쁜 일상에서 잠시 벗어나 " +
                "<br>" +
                "조용하고 편안한 시간을 보내는 것을 좋아하는 당신." +
                "<br>" +
                "여행에서도 무리하게 일정을 채우기보다 " +
                "<br>" +
                "나만의 속도로 여행을 즐기는 편이에요.",

            keywords: [
                "#여유로운여행",
                "#감성카페",
                "#힐링"
            ],

            rabbit:
                "./img/test main/힐링형.png",

            recommendPlace:
                "조용한 여행지",

            recommendPlaceText:
                "사람이 많지 않고 자연을 느낄 수 있는 " +
                "여행지를 추천해요.",

            recommendSchedule:
                "하루에 많은 곳을 방문하기보다 " +
                "한두 곳을 천천히 둘러보세요.",

            recommendActivity:
                "예쁜 카페와 산책하기 좋은 장소에서 " +
                "여행의 여유를 즐겨보세요.",

            destinations: [
                {
                    name: "제주도",
                    image: "./img/travle/제주.png"
                },
                {
                    name: "강릉",
                    image: "./img/travle/강릉.jpg"
                },
                {
                    name: "전주",
                    image: "./img/travle/전주.jpg"
                }
            ]

        },


        food: {

            name: "미식형",

            subtitle:
                "맛있는 음식이 여행의 가장 큰 즐거움인 당신!",

            heading:
                "먹는 즐거움이 가득한 여행을 좋아해요",

            description:
                "새로운 지역을 여행할 때 그곳에서만 맛볼 수 있는 " +
                "<br>" +
                "음식과 맛집을 찾아다니는 것을 좋아하는 당신." +
                "<br>" +
                "유명한 맛집부터 숨겨진 로컬 맛집까지 " +
                "<br>" +
                "맛있는 경험을 여행의 중요한 추억으로 생각해요.",

            keywords: [
                "#맛집투어",
                "#카페투어",
                "#로컬푸드"
            ],

            rabbit:
                "./img/test main/미식형.png",

            recommendPlace:
                "맛집이 많은 여행지",

            recommendPlaceText:
                "다양한 음식과 카페를 경험할 수 있는 " +
                "도시를 추천해요.",

            recommendSchedule:
                "하루에 한두 곳의 맛집을 정하고 " +
                "주변 카페까지 함께 둘러보세요.",

            recommendActivity:
                "현지 시장과 유명 맛집, 감성 카페를 " +
                "여행 코스에 넣어보세요.",

            destinations: [
                {
                    name: "부산",
                    image: "./img/travle/부산.png"
                },
                {
                    name: "전주",
                    image: "./img/travle/전주.jpg"
                },
                {
                    name: "후쿠오카",
                    image: "./img/travle/후쿠오카.jpg"
                }
            ]

        },


        city: {

            name: "도시탐험형",

            subtitle:
                "새로운 도시를 발견하는 것이 즐거운 당신!",

            heading:
                "도시 곳곳을 돌아다니는 여행을 좋아해요",

            description:
                "새로운 도시에 도착하면 가만히 있기보다 " +
                "<br>" +
                "거리 곳곳을 돌아다니며 새로운 장소를 발견하는 당신." +
                "<br>" +
                "유명한 관광지는 물론이고 골목과 핫플레이스까지 " +
                "<br>" +
                "직접 찾아다니는 것을 좋아해요.",

            keywords: [
                "#도시여행",
                "#핫플레이스",
                "#골목탐방"
            ],

            rabbit:
                "./img/test main/도시탐험형.png",

            recommendPlace:
                "활기찬 도시",

            recommendPlaceText:
                "볼거리와 즐길 거리가 많은 도시를 추천해요.",

            recommendSchedule:
                "하루 동안 여러 장소를 연결해서 " +
                "도시의 다양한 모습을 만나보세요.",

            recommendActivity:
                "핫플레이스와 쇼핑거리, 유명한 랜드마크를 " +
                "함께 둘러보세요.",

            destinations: [
                {
                    name: "서울",
                    image: "./img/travle/서울.jpg"
                },
                {
                    name: "도쿄",
                    image: "./img/travle/도쿄.png"
                },
                {
                    name: "뉴욕",
                    image: "./img/travle/뉴욕.png"
                }
            ]

        },


        nature: {

            name: "자연사랑형",

            subtitle:
                "푸른 자연 속에서 편안함을 느끼는 당신!",

            heading:
                "자연과 함께하는 여행을 좋아해요",

            description:
                "복잡한 도시보다 바다와 산, 숲처럼 " +
                "<br>" +
                "아름다운 자연이 있는 곳에서 마음의 여유를 찾는 당신." +
                "<br>" +
                "멋진 풍경을 바라보고 천천히 산책하며 " +
                "<br>" +
                "자연의 분위기를 온전히 느끼는 여행을 좋아해요.",

            keywords: [
                "#자연여행",
                "#바다",
                "#풍경맛집"
            ],

            rabbit:
                "./img/test main/자연사랑형.png",

            recommendPlace:
                "자연이 아름다운 여행지",

            recommendPlaceText:
                "바다와 산, 숲을 모두 만날 수 있는 " +
                "여행지를 추천해요.",

            recommendSchedule:
                "관광지를 많이 넣기보다 자연 속에서 " +
                "충분히 머무는 시간을 가져보세요.",

            recommendActivity:
                "산책과 드라이브, 자연 속 카페처럼 " +
                "여유로운 활동을 즐겨보세요.",

            destinations: [
                {
                    name: "제주도",
                    image: "./img/travle/제주.png"
                },
                {
                    name: "강릉",
                    image: "./img/travle/강릉.jpg"
                },
                {
                    name: "산토리니",
                    image: "./img/travle/산토리니.png"
                }
            ]

        },


        culture: {

            name: "문화체험형",

            subtitle:
                "새로운 문화를 직접 경험하는 것이 즐거운 당신!",

            heading:
                "그곳만의 이야기를 만나는 여행을 좋아해요",

            description:
                "여행지의 유명한 관광지만 보는 것보다 " +
                "<br>" +
                "그 지역의 역사와 전통, 문화를 직접 경험하고 싶은 당신." +
                "<br>" +
                "전통시장과 박물관, 문화유적처럼 " +
                "<br>" +
                "그곳만의 이야기를 느낄 수 있는 장소를 좋아해요.",

            keywords: [
                "#문화여행",
                "#역사탐방",
                "#전통체험"
            ],

            rabbit:
                "./img/test main/문화체험형.png",

            recommendPlace:
                "문화가 풍부한 여행지",

            recommendPlaceText:
                "역사와 전통을 직접 경험할 수 있는 " +
                "여행지를 추천해요.",

            recommendSchedule:
                "박물관이나 유적지 한두 곳을 정하고 " +
                "주변의 문화 공간을 함께 둘러보세요.",

            recommendActivity:
                "전통시장과 박물관, 지역 축제 등 " +
                "현지 문화를 직접 경험해보세요.",

            destinations: [
                {
                    name: "경주",
                    image: "./img/travle/경주.png"
                },
                {
                    name: "교토",
                    image: "./img/travle/교토.png"
                },
                {
                    name: "전주",
                    image: "./img/travle/전주.jpg"
                }
            ]

        },


        activity: {

            name: "액티비티형",

            subtitle:
                "새로운 경험에 도전하는 것이 즐거운 당신!",

            heading:
                "특별한 경험이 가득한 여행을 좋아해요",

            description:
                "여행을 가면 평소에는 하지 못했던 새로운 경험에 " +
                "<br>" +
                "도전하며 특별한 추억을 만드는 것을 좋아하는 당신." +
                "<br>" +
                "액티비티와 체험처럼 직접 몸으로 즐길 수 있는 " +
                "<br>" +
                "활동적인 여행을 선호해요.",

            keywords: [
                "#액티비티",
                "#체험여행",
                "#도전"
            ],

            rabbit:
                "./img/test main/액티비티형.png",

            recommendPlace:
                "즐길 거리가 많은 여행지",

            recommendPlaceText:
                "다양한 액티비티와 체험을 즐길 수 있는 " +
                "여행지를 추천해요.",

            recommendSchedule:
                "하루에 하나 이상의 특별한 체험을 " +
                "일정에 넣어보세요.",

            recommendActivity:
                "스포츠와 액티비티, 체험 프로그램처럼 " +
                "직접 참여할 수 있는 활동을 추천해요.",

            destinations: [
                {
                    name: "괌",
                    image: "./img/travle/괌.png"
                },
                {
                    name: "발리",
                    image: "./img/travle/발리.png"
                },
                {
                    name: "다낭",
                    image: "./img/travle/다낭.png"
                }
            ]

        }

    };



    /* =========================================================
       GET ANSWERS
    ========================================================= */

    const savedAnswers =
        localStorage.getItem("trippiTestAnswers");


    /*
     * 테스트를 바로 접속한 경우
     */

    if (!savedAnswers) {

        window.location.href =
            "travel-test-question.html";

        return;

    }


    const answers =
        JSON.parse(savedAnswers);



    /* =========================================================
       COUNT
    ========================================================= */

    const scores = {

        healing: 0,
        food: 0,
        city: 0,
        nature: 0,
        culture: 0,
        activity: 0

    };


    answers.forEach(function (answer) {

        if (scores.hasOwnProperty(answer)) {

            scores[answer]++;

        }

    });



    /* =========================================================
       GET RESULT
    ========================================================= */

    let resultType = "healing";
    let maxScore = -1;


    Object.keys(scores).forEach(function (type) {

        if (scores[type] > maxScore) {

            maxScore = scores[type];

            resultType = type;

        }

    });


    const result =
        resultData[resultType];



    /* =========================================================
       ELEMENTS
    ========================================================= */

    const resultTypeElement =
        document.getElementById("result-type");

    const resultSubtitle =
        document.getElementById("result-subtitle");

    const resultHeading =
        document.getElementById("result-heading");

    const resultDescription =
        document.getElementById("result-description");

    const resultKeywords =
        document.getElementById("result-keywords");

    const resultRabbit =
        document.getElementById("result-rabbit");

    const recommendPlace =
        document.getElementById("recommend-place");

    const recommendPlaceText =
        document.getElementById("recommend-place-text");

    const recommendSchedule =
        document.getElementById("recommend-schedule");

    const recommendActivity =
        document.getElementById("recommend-activity");

    const destinationList =
        document.getElementById("destination-list");



    /* =========================================================
       RESULT TEXT
    ========================================================= */

    resultTypeElement.textContent =
        result.name;


    resultSubtitle.textContent =
        result.subtitle;


    resultHeading.textContent =
        result.heading;


    resultDescription.innerHTML =
        result.description;


    resultRabbit.src =
        result.rabbit;


    resultRabbit.alt =
        result.name + " 여행 토끼";


    recommendPlace.textContent =
        result.recommendPlace;


    recommendPlaceText.textContent =
        result.recommendPlaceText;


    recommendSchedule.textContent =
        result.recommendSchedule;


    recommendActivity.textContent =
        result.recommendActivity;



    /* =========================================================
       KEYWORDS
    ========================================================= */

    resultKeywords.innerHTML = "";


    result.keywords.forEach(function (keyword) {

        const span =
            document.createElement("span");

        span.textContent =
            keyword;

        resultKeywords.appendChild(span);

    });



    /* =========================================================
       DESTINATION
    ========================================================= */

    destinationList.innerHTML = "";


    result.destinations.forEach(function (destination) {

        const card =
            document.createElement("article");

        card.className =
            "destination-card";


        card.innerHTML = `

            <div class="destination-card-image">

                <img
                    src="${destination.image}"
                    alt="${destination.name}"
                >

            </div>


            <div class="destination-card-info">

                <span>
                    TRAVEL DESTINATION
                </span>

                <h4>
                    ${destination.name}
                </h4>

            </div>

        `;


        destinationList.appendChild(card);

    });



    /* =========================================================
       RESTART
    ========================================================= */

    const restartButton =
        document.getElementById("restart-test");


    restartButton.addEventListener("click", function () {

        localStorage.removeItem(
            "trippiTestAnswers"
        );


        window.location.href =
            "travel-test-question.html";

    });

});