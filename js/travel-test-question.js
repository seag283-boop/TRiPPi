document.addEventListener("DOMContentLoaded", function () {


    /* =========================================================
       QUESTIONS
    ========================================================= */

    const questions = [

        {
            title: "여행을 떠난다면<br>어떤 여행을 하고 싶나요?",
            subtitle: "가장 마음에 드는 하나를 선택해주세요.",

            options: {
                healing: {
                    title: "느긋하게 쉬는 여행",
                    description: "조용한 곳에서 여유롭게<br>나만의 시간을 보내고 싶어요."
                },

                food: {
                    title: "맛있는 여행",
                    description: "맛집과 카페를 찾아다니며<br>새로운 음식을 맛보고 싶어요."
                },

                city: {
                    title: "도시를 탐험하는 여행",
                    description: "새로운 도시의 거리와<br>핫플레이스를 돌아다니고 싶어요."
                },

                nature: {
                    title: "자연을 만나는 여행",
                    description: "바다와 산, 숲처럼<br>아름다운 자연을 보고 싶어요."
                },

                culture: {
                    title: "문화를 경험하는 여행",
                    description: "그 지역의 역사와 문화,<br>전통을 직접 경험하고 싶어요."
                },

                activity: {
                    title: "활동적인 여행",
                    description: "새로운 체험과 액티비티를<br>마음껏 즐기고 싶어요."
                }
            }
        },


        {
            title: "여행지에 도착하면<br>가장 먼저 무엇을 하고 싶나요?",
            subtitle: "여행 첫날을 떠올려보세요.",

            options: {
                healing: {
                    title: "숙소에서 잠깐 쉬기",
                    description: "짐을 풀고 천천히<br>여행을 시작하고 싶어요."
                },

                food: {
                    title: "맛집부터 찾아가기",
                    description: "도착하자마자 유명한<br>현지 음식을 먹고 싶어요."
                },

                city: {
                    title: "주변 거리 돌아보기",
                    description: "숙소 근처부터 걸으며<br>새로운 장소를 찾아보고 싶어요."
                },

                nature: {
                    title: "멋진 풍경 보러가기",
                    description: "여행지의 대표적인<br>자연 풍경부터 보고 싶어요."
                },

                culture: {
                    title: "명소와 유적지 방문하기",
                    description: "그 지역의 역사와 문화를<br>직접 보고 싶어요."
                },

                activity: {
                    title: "체험부터 시작하기",
                    description: "도착하자마자 재미있는<br>활동을 해보고 싶어요."
                }
            }
        },


        {
            title: "여행에서 가장 중요하게<br>생각하는 것은 무엇인가요?",
            subtitle: "나에게 가장 가까운 것을 골라주세요.",

            options: {
                healing: {
                    title: "휴식과 여유",
                    description: "바쁜 일상에서 벗어나<br>편안하게 쉬는 것이 중요해요."
                },

                food: {
                    title: "맛있는 음식",
                    description: "여행의 즐거움은 역시<br>맛있는 음식이라고 생각해요."
                },

                city: {
                    title: "새로운 발견",
                    description: "처음 보는 장소와<br>새로운 경험을 좋아해요."
                },

                nature: {
                    title: "아름다운 풍경",
                    description: "자연을 바라보며<br>마음이 편안해지는 게 좋아요."
                },

                culture: {
                    title: "새로운 문화",
                    description: "여행을 통해 새로운<br>문화를 배우고 싶어요."
                },

                activity: {
                    title: "특별한 경험",
                    description: "평소에는 하지 못했던<br>새로운 것에 도전하고 싶어요."
                }
            }
        },


        {
            title: "여행 숙소를 고른다면<br>어떤 곳이 좋나요?",
            subtitle: "가장 마음에 드는 숙소 분위기를 골라주세요.",

            options: {
                healing: {
                    title: "조용한 감성 숙소",
                    description: "아늑하고 조용한 곳에서<br>편하게 쉬고 싶어요."
                },

                food: {
                    title: "맛집 근처 숙소",
                    description: "맛있는 음식점이 많은<br>곳에 머물고 싶어요."
                },

                city: {
                    title: "도심 속 호텔",
                    description: "교통이 편하고 볼거리가 많은<br>도심에 머물고 싶어요."
                },

                nature: {
                    title: "자연 속 숙소",
                    description: "산이나 바다를 바라보며<br>쉬고 싶어요."
                },

                culture: {
                    title: "전통적인 숙소",
                    description: "그 지역의 분위기를 느낄 수 있는<br>숙소에서 지내고 싶어요."
                },

                activity: {
                    title: "활동지 근처 숙소",
                    description: "다양한 체험을 하기 좋은<br>곳에 머물고 싶어요."
                }
            }
        },


        {
            title: "여행 중 하루가 완전히 비었다면<br>무엇을 하고 싶나요?",
            subtitle: "아무 계획이 없는 하루를 생각해보세요.",

            options: {
                healing: {
                    title: "카페에서 느긋하게",
                    description: "좋은 카페를 찾아<br>천천히 하루를 보내고 싶어요."
                },

                food: {
                    title: "맛집 투어",
                    description: "아침부터 저녁까지<br>맛있는 것을 먹고 싶어요."
                },

                city: {
                    title: "골목길 탐방",
                    description: "지도 없이 걸으며<br>새로운 장소를 발견하고 싶어요."
                },

                nature: {
                    title: "자연 속 산책",
                    description: "공원이나 숲을 걸으며<br>여유로운 시간을 보내고 싶어요."
                },

                culture: {
                    title: "전시와 박물관",
                    description: "전시나 박물관을 둘러보며<br>새로운 것을 알아가고 싶어요."
                },

                activity: {
                    title: "신나는 체험",
                    description: "평소 해보지 못했던<br>활동을 해보고 싶어요."
                }
            }
        },


        {
            title: "여행 사진을 찍는다면<br>무엇을 가장 많이 찍을 것 같나요?",
            subtitle: "여행에서 남기고 싶은 사진을 골라주세요.",

            options: {
                healing: {
                    title: "감성적인 풍경",
                    description: "노을이나 카페처럼<br>분위기 있는 장면을 찍어요."
                },

                food: {
                    title: "맛있는 음식",
                    description: "예쁘고 맛있는 음식과<br>카페 사진을 남겨요."
                },

                city: {
                    title: "도시의 풍경",
                    description: "건물과 거리처럼<br>도시의 모습을 찍어요."
                },

                nature: {
                    title: "자연 풍경",
                    description: "산과 바다처럼<br>멋진 자연을 찍어요."
                },

                culture: {
                    title: "문화적인 장소",
                    description: "전통 건축물이나<br>유적지를 찍어요."
                },

                activity: {
                    title: "즐기는 내 모습",
                    description: "액티비티를 즐기는<br>순간을 남겨요."
                }
            }
        },


        {
            title: "여행지에서 가장 먹고 싶은 것은?",
            subtitle: "여행에서 가장 기대되는 음식을 골라주세요.",

            options: {
                healing: {
                    title: "예쁜 카페 디저트",
                    description: "맛있는 디저트와 차를 마시며<br>여유를 즐기고 싶어요."
                },

                food: {
                    title: "현지 대표 음식",
                    description: "그 지역에서만 맛볼 수 있는<br>음식을 먹고 싶어요."
                },

                city: {
                    title: "트렌디한 맛집",
                    description: "SNS에서 유명한<br>핫한 맛집을 찾아가고 싶어요."
                },

                nature: {
                    title: "자연에서 나는 음식",
                    description: "지역에서 나는 신선한<br>재료를 맛보고 싶어요."
                },

                culture: {
                    title: "전통 음식",
                    description: "그 지역의 역사와 함께하는<br>전통 음식을 먹고 싶어요."
                },

                activity: {
                    title: "든든한 한 끼",
                    description: "신나게 활동하기 전에<br>든든하게 먹고 싶어요."
                }
            }
        },


        {
            title: "여행 중 가장 설레는 순간은?",
            subtitle: "가장 기대되는 순간을 골라주세요.",

            options: {
                healing: {
                    title: "아무 걱정 없이 쉬는 순간",
                    description: "일상을 잊고 편안하게<br>쉬는 순간이 좋아요."
                },

                food: {
                    title: "처음 먹어보는 음식",
                    description: "새로운 맛을 발견하는<br>순간이 가장 설레요."
                },

                city: {
                    title: "새로운 장소 발견",
                    description: "처음 보는 거리를<br>발견할 때 설레요."
                },

                nature: {
                    title: "멋진 자연을 만났을 때",
                    description: "눈앞에 아름다운 풍경이<br>펼쳐질 때 설레요."
                },

                culture: {
                    title: "새로운 문화를 경험할 때",
                    description: "몰랐던 문화를 직접<br>알게 될 때 설레요."
                },

                activity: {
                    title: "새로운 것에 도전할 때",
                    description: "처음 해보는 활동에<br>도전할 때 설레요."
                }
            }
        },


        {
            title: "여행을 함께 간다면<br>누구와 가고 싶나요?",
            subtitle: "가장 편안한 여행 상대를 골라주세요.",

            options: {
                healing: {
                    title: "혼자 또는 가까운 사람",
                    description: "조용하고 편안하게<br>여행하고 싶어요."
                },

                food: {
                    title: "맛있는 것을 좋아하는 친구",
                    description: "함께 맛집을 찾아다니며<br>먹는 즐거움을 나누고 싶어요."
                },

                city: {
                    title: "같이 돌아다니기 좋아하는 친구",
                    description: "하루 종일 돌아다니며<br>새로운 곳을 보고 싶어요."
                },

                nature: {
                    title: "자연을 좋아하는 사람",
                    description: "함께 자연을 바라보며<br>여유를 즐기고 싶어요."
                },

                culture: {
                    title: "새로운 것을 좋아하는 친구",
                    description: "함께 새로운 문화를<br>경험하고 싶어요."
                },

                activity: {
                    title: "뭐든 함께 도전하는 친구",
                    description: "새로운 경험을 함께하며<br>신나게 놀고 싶어요."
                }
            }
        },


        {
            title: "당신이 원하는 여행은<br>어떤 모습인가요?",
            subtitle: "나의 여행 스타일과 가장 가까운 것을 골라주세요.",

            options: {
                healing: {
                    title: "마음이 편안해지는 여행",
                    description: "아무 걱정 없이 쉬면서<br>나를 위한 시간을 보내고 싶어요."
                },

                food: {
                    title: "맛있는 추억이 남는 여행",
                    description: "여행이 끝난 뒤에도<br>맛있는 기억이 남았으면 좋겠어요."
                },

                city: {
                    title: "새로운 발견이 가득한 여행",
                    description: "돌아온 뒤에도 이야기할 거리가<br>많은 여행을 하고 싶어요."
                },

                nature: {
                    title: "아름다운 풍경이 남는 여행",
                    description: "사진으로 오래 간직하고 싶은<br>풍경을 만나고 싶어요."
                },

                culture: {
                    title: "새로운 것을 배운 여행",
                    description: "여행을 통해 나도 몰랐던<br>새로운 것을 알고 싶어요."
                },

                activity: {
                    title: "잊지 못할 경험이 남는 여행",
                    description: "평생 기억할 특별한 경험을<br>만들고 싶어요."
                }
            }
        }

    ];



    /* =========================================================
       ELEMENTS
    ========================================================= */

    const currentNumber =
        document.getElementById("current-number");

    const questionNumber =
        document.getElementById("question-number");

    const questionTitle =
        document.getElementById("question-title");

    const questionSubtitle =
        document.getElementById("question-subtitle");

    const progressCurrent =
        document.getElementById("progress-current");

    const nextButton =
        document.getElementById("next-button");

    const nextText =
        document.getElementById("next-text");

    const prevButton =
        document.getElementById("prev-button");

    const options =
        document.querySelectorAll(".test-option");



    /* =========================================================
       STATE
    ========================================================= */

    let currentQuestion = 0;

    const answers =
        new Array(questions.length).fill(null);



    /* =========================================================
       RENDER
    ========================================================= */

    function renderQuestion() {

        const data =
            questions[currentQuestion];


        /* 번호 */

        currentNumber.textContent =
            currentQuestion + 1;


        questionNumber.textContent =
            "QUESTION " +
            String(currentQuestion + 1).padStart(2, "0");


        /* 질문 */

        questionTitle.innerHTML =
            data.title;


        questionSubtitle.textContent =
            data.subtitle;


        /* 진행률 */

        const progress =
            ((currentQuestion + 1) / questions.length) * 100;

        progressCurrent.style.width =
            progress + "%";


        /* 이전 버튼 */

        prevButton.disabled =
            currentQuestion === 0;


        /* 마지막 버튼 */

        if (currentQuestion === questions.length - 1) {

            nextText.textContent =
                "결과 보기";

        } else {

            nextText.textContent =
                "다음 질문";

        }


        /* 선택지 */

        options.forEach(function (option) {

            const type =
                option.dataset.type;

            const dataOption =
                data.options[type];


            option.querySelector(".option-title").textContent =
                dataOption.title;


            option.querySelector(".option-description").innerHTML =
                dataOption.description;


            option.classList.remove("selected");


            if (answers[currentQuestion] === type) {

                option.classList.add("selected");

            }

        });

    }



    /* =========================================================
       SELECT
    ========================================================= */

    options.forEach(function (option) {

        option.addEventListener("click", function () {

            const type =
                option.dataset.type;


            answers[currentQuestion] =
                type;


            options.forEach(function (item) {

                item.classList.remove("selected");

            });


            option.classList.add("selected");

        });

    });



    /* =========================================================
       NEXT
    ========================================================= */

    nextButton.addEventListener("click", function () {

        if (!answers[currentQuestion]) {

            alert("하나의 답변을 선택해주세요.");

            return;

        }


        if (currentQuestion === questions.length - 1) {


            localStorage.setItem(
                "trippiTestAnswers",
                JSON.stringify(answers)
            );


            window.location.href =
                "travel-test-result.html";


            return;

        }


        currentQuestion++;

        renderQuestion();

    });



    /* =========================================================
       PREVIOUS
    ========================================================= */

    prevButton.addEventListener("click", function () {

        if (currentQuestion === 0) {
            return;
        }


        currentQuestion--;

        renderQuestion();

    });



    /* =========================================================
       START
    ========================================================= */

    renderQuestion();

});