document.addEventListener('DOMContentLoaded', function () {


    /* =========================================================
       1. 기본 요소
    ========================================================= */

    const tabs = document.querySelectorAll('.my-tab');
    const sortSelect = document.getElementById('travel-sort');
    const travelList = document.getElementById('my-travel-list');
    const travelCount = document.querySelector('.travel-count strong');

    const cards = Array.from(
        document.querySelectorAll('.my-travel-card')
    );


    /* =========================================================
       2. 여행기 데이터
       
       현재 HTML에 들어있는 카드 정보를 기준으로 사용
    ========================================================= */

    const travelData = [

        {
            place: '제주도',
            date: '2024. 05. 17',
            like: 128,
            comment: 32
        },

        {
            place: '부산',
            date: '2024. 04. 03',
            like: 96,
            comment: 18
        },

        {
            place: '강릉',
            date: '2024. 03. 15',
            like: 74,
            comment: 21
        },

        {
            place: '서울',
            date: '2024. 02. 10',
            like: 61,
            comment: 12
        },

        {
            place: '전주',
            date: '2024. 01. 21',
            like: 53,
            comment: 10
        },

        {
            place: '여수',
            date: '2023. 12. 12',
            like: 48,
            comment: 9
        }

    ];


    /* =========================================================
       3. 카드에 데이터 연결
    ========================================================= */

    cards.forEach(function (card, index) {

        const data = travelData[index];

        if (!data) {
            return;
        }


        card.dataset.place = data.place;

        card.dataset.date = data.date;

        card.dataset.like = data.like;

        card.dataset.comment = data.comment;

    });


    /* =========================================================
       4. 여행기 개수 표시
    ========================================================= */

    function updateTravelCount() {

        if (!travelCount) {
            return;
        }

        const visibleCards =
            travelList.querySelectorAll(
                '.my-travel-card:not(.hidden)'
            );


        travelCount.textContent =
            `총 ${visibleCards.length}개`;

    }


    updateTravelCount();


    /* =========================================================
       5. 탭 기능
    ========================================================= */

    tabs.forEach(function (tab) {

        tab.addEventListener('click', function () {


            /* 모든 탭 active 제거 */

            tabs.forEach(function (item) {

                item.classList.remove('active');

            });


            /* 현재 탭 active */

            tab.classList.add('active');


            const tabText =
                tab.textContent.trim();


            /*
                현재는 나의 여행기만 실제 카드가 있기 때문에
                다른 탭은 안내창으로 처리
            */

            if (tabText === '나의 여행기') {

                cards.forEach(function (card) {

                    card.classList.remove('hidden');

                });

                updateTravelCount();

                return;

            }


            if (tabText === '좋아요한 여행기') {

                alert(
                    '좋아요한 여행기는 준비 중입니다.'
                );

                return;

            }


            if (tabText === '저장한 여행기') {

                alert(
                    '저장한 여행기는 준비 중입니다.'
                );

                return;

            }


            if (tabText === '임시저장') {

                alert(
                    '임시저장 여행기는 준비 중입니다.'
                );

                return;

            }

        });

    });


    /* =========================================================
       6. 날짜를 숫자로 변환
    ========================================================= */

    function getDateValue(dateText) {

        if (!dateText) {
            return 0;
        }


        const numbers =
            dateText.match(/\d+/g);


        if (!numbers || numbers.length < 3) {
            return 0;
        }


        const year =
            Number(numbers[0]);

        const month =
            Number(numbers[1]);

        const day =
            Number(numbers[2]);


        return new Date(
            year,
            month - 1,
            day
        ).getTime();

    }


    /* =========================================================
       7. 좋아요 숫자 가져오기
    ========================================================= */

    function getLikeValue(card) {

        const likeText =
            card.dataset.like;


        return Number(likeText) || 0;

    }


    /* =========================================================
       8. 최신순 / 오래된순 / 좋아요순
    ========================================================= */

    function sortCards(sortType) {

        const sortedCards =
            [...cards];


        /* 최신순 */

        if (sortType === 'latest') {

            sortedCards.sort(function (a, b) {

                const dateA =
                    getDateValue(a.dataset.date);

                const dateB =
                    getDateValue(b.dataset.date);


                return dateB - dateA;

            });

        }


        /* 오래된순 */

        else if (sortType === 'oldest') {

            sortedCards.sort(function (a, b) {

                const dateA =
                    getDateValue(a.dataset.date);

                const dateB =
                    getDateValue(b.dataset.date);


                return dateA - dateB;

            });

        }


        /* 좋아요순 */

        else if (sortType === 'like') {

            sortedCards.sort(function (a, b) {

                return (
                    getLikeValue(b) -
                    getLikeValue(a)
                );

            });

        }


        /*
            정렬된 순서대로
            다시 HTML에 넣기
        */

        sortedCards.forEach(function (card) {

            travelList.appendChild(card);

        });

    }


    /* =========================================================
       9. 정렬 선택
    ========================================================= */

    if (sortSelect) {

        sortSelect.addEventListener(
            'change',
            function () {

                sortCards(
                    sortSelect.value
                );

            }
        );

    }


    /* =========================================================
       10. 자세히 보기
    ========================================================= */

    const detailButtons =
        document.querySelectorAll('.detail-btn');


    detailButtons.forEach(function (button) {

        button.addEventListener(
            'click',
            function (event) {

                /*
                    HTML의 href를 그대로 사용
                */

                const link =
                    button.getAttribute('href');


                if (!link || link === '#') {

                    event.preventDefault();

                    alert(
                        '여행기 상세 페이지가 없습니다.'
                    );

                }

            }
        );

    });


    /* =========================================================
       11. 페이지네이션
    ========================================================= */

    const pagination =
        document.querySelector('.pagination');


    if (pagination) {

        const paginationButtons =
            pagination.querySelectorAll('button');


        paginationButtons.forEach(
            function (button, index) {

                button.addEventListener(
                    'click',
                    function () {


                        const buttonText =
                            button.textContent.trim();


                        /*
                            이전 페이지
                        */

                        if (buttonText === '‹') {

                            alert(
                                '이전 페이지가 없습니다.'
                            );

                            return;

                        }


                        /*
                            다음 페이지
                        */

                        if (buttonText === '›') {

                            alert(
                                '다음 페이지가 없습니다.'
                            );

                            return;

                        }


                        /*
                            현재 페이지
                        */

                        if (
                            buttonText === '1'
                        ) {

                            paginationButtons.forEach(
                                function (item) {

                                    item.classList.remove(
                                        'active'
                                    );

                                }
                            );


                            button.classList.add(
                                'active'
                            );

                            return;

                        }


                        /*
                            2, 3 페이지
                        */

                        alert(
                            `${buttonText}페이지는 준비 중입니다.`
                        );

                    }
                );

            }
        );

    }


    /* =========================================================
       12. 카드 이미지 오류 확인
    ========================================================= */

    const cardImages =
        document.querySelectorAll(
            '.my-travel-card .card-image img'
        );


    cardImages.forEach(function (image) {

        image.addEventListener(
            'error',
            function () {

                console.error(
                    '여행기 카드 이미지를 불러오지 못했습니다:',
                    image.src
                );

            }
        );

    });


    /* =========================================================
       13. 초기 상태
    ========================================================= */

    if (sortSelect) {

        sortSelect.value = 'latest';

    }


    sortCards('latest');


    updateTravelCount();


});