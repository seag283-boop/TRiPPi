document.addEventListener('DOMContentLoaded', function () {


    /* =========================================================
       0. 여행기 데이터
       URL의 ?place= 값에 따라 여행기 내용이 변경된다.
       
       예)
       travel-my-detail.html?place=jeju
       travel-my-detail.html?place=busan
       travel-my-detail.html?place=gangneung
       travel-my-detail.html?place=seoul
       travel-my-detail.html?place=jeonju
       travel-my-detail.html?place=yeosu
    ========================================================= */


    const travelData = {

        /* =====================================================
           제주도
        ===================================================== */

        jeju: {

            place: '제주도',

            category: '제주도 여행',

            title: '푸른 바다와 함께한 제주도 3박 4일 여행',

            subtitle:
                '바람도, 바다도, 모든 것이 완벽했던 제주에서의 힐링 여행',

            date: '2024. 05. 17 ~ 2024. 05. 20',

            views: 342,

            likes: 128,

            comments: 32,

            tags: [
                '#제주도',
                '#힐링여행',
                '#바다',
                '#맛집투어',
                '#가족여행'
            ],

            images: [
                './img/travel-write/제주.jpg',
                './img/travel-write/유채꽃.jpg',
                './img/travel-write/제주 노을.jpg',
                './img/travel-write/돌하르방.jpg',
                './img/travel-write/해안.jpg',
                './img/travel-write/카페.jpg',
                './img/travel-write/음식.jpg'
            ],

            content: `
                <p>
                    제주에서 보낸 3박 4일 동안 바다와 자연을 마음껏
                    즐기며 여유로운 시간을 보냈습니다.
                </p>

                <p>
                    여행 첫날에는 푸른 바다가 펼쳐진 해안도로를 따라
                    천천히 드라이브를 하면서 제주 여행을 시작했습니다.
                    바쁜 일상에서 잠시 벗어나 바다를 바라보는 것만으로도
                    마음이 한결 편안해지는 기분이었습니다.
                </p>

                <p>
                    예쁜 카페에 들러 제주에서만 느낄 수 있는 분위기를
                    즐기고, 맛있는 음식도 하나씩 찾아 먹었습니다.
                    특히 여행 중간중간 만난 작은 풍경들이 오래 기억에
                    남았습니다.
                </p>

                <p>
                    마지막 날에는 노을이 지는 바다를 바라보며 여행을
                    마무리했습니다. 특별한 계획 없이 천천히 움직였던
                    시간이 오히려 제주 여행을 더 편안하게 만들어준 것 같습니다.
                </p>
            `,

            information: {
                location: '제주특별자치도',
                period: '3박 4일',
                type: '힐링 여행',
                theme: '바다 · 자연 · 맛집'
            }

        },


        /* =====================================================
           부산
        ===================================================== */

        busan: {

            place: '부산',

            category: '부산 여행',

            title: '바다와 맛있는 음식이 가득했던 부산',

            subtitle:
                '친구들과 함께 떠난 부산 먹방 여행',

            date: '2024. 04. 03 ~ 2024. 04. 05',

            views: 287,

            likes: 96,

            comments: 18,

            tags: [
                '#부산',
                '#바다',
                '#먹방여행',
                '#광안리',
                '#친구여행'
            ],

            images: [
                './img/travle/부산.png',
                './img/travle/부산.png',
                './img/travle/부산.png'
            ],

            content: `
                <p>
                    친구들과 함께 부산으로 2박 3일 여행을 다녀왔습니다.
                    오랜만에 다 같이 떠나는 여행이라 출발하는 순간부터
                    설레는 기분이 들었습니다.
                </p>

                <p>
                    부산에 도착하자마자 바다가 보이는 곳으로 이동했습니다.
                    시원하게 펼쳐진 바다를 바라보며 산책을 하고,
                    친구들과 사진도 찍으면서 여행의 시작을 즐겼습니다.
                </p>

                <p>
                    부산 여행에서 가장 기대했던 것은 역시 맛있는
                    음식이었습니다. 시장을 돌아다니면서 부산에서
                    유명한 음식들을 하나씩 맛보고, 저녁에는 바다를
                    바라보면서 하루를 마무리했습니다.
                </p>

                <p>
                    짧은 여행이었지만 친구들과 함께 웃고 이야기했던
                    순간들이 많아서 더 기억에 남는 여행이었습니다.
                    다음에는 조금 더 여유롭게 부산을 둘러보고 싶습니다.
                </p>
            `,

            information: {
                location: '부산광역시',
                period: '2박 3일',
                type: '친구 여행',
                theme: '바다 · 맛집 · 도시'
            }

        },


        /* =====================================================
           강릉
        ===================================================== */

        gangneung: {

            place: '강릉',

            category: '강릉 여행',

            title: '혼자 떠난 강릉 바다 여행',

            subtitle:
                '아무 계획 없이 떠나 더 좋았던 하루',

            date: '2024. 03. 15 ~ 2024. 03. 17',

            views: 214,

            likes: 74,

            comments: 21,

            tags: [
                '#강릉',
                '#혼자여행',
                '#바다',
                '#카페',
                '#힐링'
            ],

            images: [
                './img/travle/강릉.jpg',
                './img/travle/강릉.jpg',
                './img/travle/강릉.jpg'
            ],

            content: `
                <p>
                    이번 여행은 특별한 계획 없이 혼자 강릉으로 떠났습니다.
                    평소에는 여러 사람과 함께 여행하는 경우가 많았지만
                    이번에는 혼자만의 시간을 보내보고 싶었습니다.
                </p>

                <p>
                    바다를 바라보면서 천천히 걸어보고, 마음에 드는 카페에
                    들어가 커피를 마시며 시간을 보냈습니다.
                    아무것도 하지 않고 바다를 바라보는 것만으로도
                    충분히 좋은 하루였습니다.
                </p>

                <p>
                    여행 중에는 작은 골목과 예쁜 가게들도 발견했습니다.
                    미리 정해놓은 일정이 없었기 때문에 마음에 드는 곳이
                    보이면 잠시 머물 수 있다는 점이 좋았습니다.
                </p>

                <p>
                    혼자 떠난 여행이라 처음에는 조금 어색했지만,
                    여행이 끝날 때쯤에는 오히려 혼자만의 여행이 주는
                    여유를 알게 되었습니다.
                </p>
            `,

            information: {
                location: '강원특별자치도 강릉시',
                period: '2박 3일',
                type: '혼자 여행',
                theme: '바다 · 카페 · 힐링'
            }

        },


        /* =====================================================
           서울
        ===================================================== */

        seoul: {

            place: '서울',

            category: '서울 여행',

            title: '일상 속에서 발견한 서울의 새로운 모습',

            subtitle:
                '익숙한 서울을 여행자의 시선으로 바라보기',

            date: '2024. 02. 10',

            views: 193,

            likes: 61,

            comments: 12,

            tags: [
                '#서울',
                '#도시여행',
                '#카페',
                '#문화',
                '#일상'
            ],

            images: [
                './img/travle/서울.jpg',
                './img/travle/서울.jpg',
                './img/travle/서울.jpg'
            ],

            content: `
                <p>
                    매일 생활하는 서울을 하루 동안 여행자의 시선으로
                    바라보기로 했습니다.
                </p>

                <p>
                    평소에는 목적지를 정해놓고 빠르게 이동했지만,
                    이날은 일부러 걸어 다니면서 평소에 그냥 지나쳤던
                    골목과 작은 가게들을 천천히 둘러보았습니다.
                </p>

                <p>
                    익숙했던 거리도 천천히 바라보니 새로운 모습이
                    보였습니다. 햇빛이 예쁘게 들어오는 카페에 앉아
                    잠시 쉬기도 하고, 주변 풍경을 사진으로 남기기도 했습니다.
                </p>

                <p>
                    멀리 떠나지 않아도 여행하는 기분을 느낄 수 있다는
                    것을 알게 된 하루였습니다. 앞으로도 가끔은 가까운
                    곳에서 새로운 풍경을 찾아보고 싶습니다.
                </p>
            `,

            information: {
                location: '서울특별시',
                period: '당일 여행',
                type: '도시 여행',
                theme: '카페 · 문화 · 산책'
            }

        },


        /* =====================================================
           전주
        ===================================================== */

        jeonju: {

            place: '전주',

            category: '전주 여행',

            title: '한옥마을에서 보낸 느린 하루',

            subtitle:
                '맛있는 음식과 한옥 풍경을 즐긴 여행',

            date: '2024. 01. 21 ~ 2024. 01. 22',

            views: 176,

            likes: 53,

            comments: 10,

            tags: [
                '#전주',
                '#한옥마을',
                '#맛집',
                '#전통',
                '#감성여행'
            ],

            images: [
                './img/travle/전주.jpg',
                './img/travle/전주.jpg',
                './img/travle/전주.jpg'
            ],

            content: `
                <p>
                    전주에서 한옥마을을 중심으로 천천히 여행을 즐겼습니다.
                    바쁜 일정으로 움직이기보다는 골목을 따라 걸으며
                    주변 풍경을 구경했습니다.
                </p>

                <p>
                    한옥 지붕이 이어지는 골목길을 걷다 보니 평소와는
                    다른 분위기를 느낄 수 있었습니다. 예쁜 한옥 건물과
                    작은 가게들을 구경하며 사진도 많이 남겼습니다.
                </p>

                <p>
                    여행에서 빠질 수 없는 음식도 마음껏 즐겼습니다.
                    전주에서 먹은 음식들은 여행의 즐거움을 더해주었고,
                    친구들과 맛있는 음식을 나누며 이야기하는 시간도
                    오래 기억에 남았습니다.
                </p>

                <p>
                    빠르게 이동하기보다 천천히 걷고 쉬었던 여행이라
                    더욱 편안했습니다. 전주의 분위기를 제대로 느낄 수
                    있었던 시간이었습니다.
                </p>
            `,

            information: {
                location: '전북특별자치도 전주시',
                period: '1박 2일',
                type: '감성 여행',
                theme: '한옥 · 맛집 · 문화'
            }

        },


        /* =====================================================
           여수
        ===================================================== */

        yeosu: {

            place: '여수',

            category: '여수 여행',

            title: '노을이 예뻤던 여수 여행',

            subtitle:
                '바다와 노을을 마음껏 즐긴 여유로운 여행',

            date: '2023. 12. 12 ~ 2023. 12. 14',

            views: 154,

            likes: 48,

            comments: 9,

            tags: [
                '#여수',
                '#노을',
                '#바다',
                '#힐링',
                '#감성여행'
            ],

            images: [
                './img/travle/여수.jpg',
                './img/travle/여수.jpg',
                './img/travle/여수.jpg'
            ],

            content: `
                <p>
                    여수에서 바다와 노을을 마음껏 즐기며 여유로운 시간을
                    보냈습니다.
                </p>

                <p>
                    여행 중에는 바다가 보이는 길을 따라 천천히 산책하고,
                    주변 풍경을 구경하면서 시간을 보냈습니다.
                    특별한 일정을 정하지 않고 여유롭게 움직였던 것이
                    이번 여행의 가장 큰 매력이었습니다.
                </p>

                <p>
                    특히 해가 지기 시작하면서 바다 위로 노을이 번지는
                    모습이 정말 인상적이었습니다. 여행 중 찍은 사진을
                    다시 볼 때마다 그때의 분위기가 떠오를 정도로
                    기억에 남는 순간이었습니다.
                </p>

                <p>
                    맛있는 음식과 예쁜 풍경, 그리고 여유로운 시간이
                    함께했던 여행이었습니다. 다음에도 여수에 방문한다면
                    노을이 지는 시간에 다시 바다를 보고 싶습니다.
                </p>
            `,

            information: {
                location: '전라남도 여수시',
                period: '2박 3일',
                type: '힐링 여행',
                theme: '바다 · 노을 · 감성'
            }

        }

    };


    /* =========================================================
       1. URL에서 여행지 확인
    ========================================================= */

    const params = new URLSearchParams(window.location.search);

    const placeKey = params.get('place') || 'jeju';

    const currentTravel =
        travelData[placeKey] || travelData.jeju;


    /* =========================================================
       2. HTML에 여행기 데이터 넣기
    ========================================================= */


    /* ---------------------------------------------------------
       카테고리
    --------------------------------------------------------- */

    const category =
        document.querySelector('.detail-category');

    if (category) {

        category.textContent =
            currentTravel.category;

    }


    /* ---------------------------------------------------------
       제목
    --------------------------------------------------------- */

    const title =
        document.querySelector('.detail-title-area h1');

    if (title) {

        title.textContent =
            currentTravel.title;

    }


    /* ---------------------------------------------------------
       설명
    --------------------------------------------------------- */

    const subtitle =
        document.querySelector('.detail-subtitle');

    if (subtitle) {

        subtitle.textContent =
            currentTravel.subtitle;

    }


    /* ---------------------------------------------------------
       작성 날짜
    --------------------------------------------------------- */

    const dateElements =
        document.querySelectorAll('.detail-date');

    dateElements.forEach(function (element) {

        element.textContent =
            currentTravel.date;

    });


    /* ---------------------------------------------------------
       조회수
    --------------------------------------------------------- */

    const viewCount =
        document.getElementById('view-count');

    if (viewCount) {

        viewCount.textContent =
            currentTravel.views;

    }


    /* ---------------------------------------------------------
       좋아요 초기 숫자
    --------------------------------------------------------- */

    const likeCount =
        document.getElementById('like-count');

    if (likeCount) {

        likeCount.textContent =
            currentTravel.likes;

    }


    /* ---------------------------------------------------------
       댓글 숫자
    --------------------------------------------------------- */

    const commentCount =
        document.getElementById('comment-count');

    if (commentCount) {

        commentCount.textContent =
            currentTravel.comments;

    }


    /* =========================================================
       3. 여행기 태그
    ========================================================= */

    const tagContainer =
        document.querySelector('.detail-tags');


    if (tagContainer) {

        tagContainer.innerHTML = '';


        currentTravel.tags.forEach(function (tag) {

            const tagElement =
                document.createElement('span');

            tagElement.textContent =
                tag;

            tagContainer.appendChild(tagElement);

        });

    }


    /* =========================================================
       4. 여행 본문
    ========================================================= */

    const contentContainer =
        document.querySelector('.detail-body');


    if (contentContainer) {

        contentContainer.innerHTML =
            currentTravel.content;

    }


    /* =========================================================
       5. 여행 정보
    ========================================================= */

    const information =
        currentTravel.information;


    const locationElement =
        document.querySelector('.info-location');


    if (locationElement) {

        locationElement.textContent =
            information.location;

    }


    const periodElement =
        document.querySelector('.info-period');


    if (periodElement) {

        periodElement.textContent =
            information.period;

    }


    const typeElement =
        document.querySelector('.info-type');


    if (typeElement) {

        typeElement.textContent =
            information.type;

    }


    const themeElement =
        document.querySelector('.info-theme');


    if (themeElement) {

        themeElement.textContent =
            information.theme;

    }


    /* =========================================================
       6. 여행기 사진 갤러리
    ========================================================= */

    const mainImage =
        document.getElementById('main-gallery-image');

    const prevButton =
        document.getElementById('gallery-prev');

    const nextButton =
        document.getElementById('gallery-next');

    const currentImageNumber =
        document.getElementById('current-image');

    const totalImageNumber =
        document.getElementById('total-image');


    /*
        기존 HTML의 썸네일은
        JS 데이터의 이미지로 다시 만들어준다.
    */

    const thumbnailContainer =
        document.querySelector('.gallery-thumbs');


    let galleryImages =
        currentTravel.images;


    let currentIndex = 0;


    /* =========================================================
       썸네일 생성
    ========================================================= */

    if (thumbnailContainer) {

        thumbnailContainer.innerHTML = '';


        galleryImages.forEach(function (imageSrc, index) {

            const thumbnail =
                document.createElement('button');

            thumbnail.type = 'button';

            thumbnail.className =
                'gallery-thumb';


            if (index === 0) {

                thumbnail.classList.add('active');

            }


            const image =
                document.createElement('img');

            image.src =
                imageSrc;

            image.alt =
                currentTravel.place +
                ' 여행 사진 ' +
                (index + 1);


            thumbnail.appendChild(image);


            thumbnail.addEventListener('click', function () {

                changeImage(index);

            });


            thumbnailContainer.appendChild(thumbnail);

        });

    }


    const thumbnails =
        document.querySelectorAll('.gallery-thumb');


    /* =========================================================
       사진 전체 개수
    ========================================================= */

    if (totalImageNumber) {

        totalImageNumber.textContent =
            galleryImages.length;

    }


    /* =========================================================
       메인 사진 변경
    ========================================================= */

    function changeImage(index) {

        if (!mainImage) {

            return;

        }


        if (galleryImages.length === 0) {

            return;

        }


        /* 마지막 사진 → 첫 번째 사진 */

        if (index >= galleryImages.length) {

            index = 0;

        }


        /* 첫 번째 사진 → 마지막 사진 */

        if (index < 0) {

            index =
                galleryImages.length - 1;

        }


        currentIndex =
            index;


        /* 메인 이미지 변경 */

        mainImage.src =
            galleryImages[currentIndex];


        mainImage.alt =
            currentTravel.place +
            ' 여행 사진 ' +
            (currentIndex + 1);


        /* 현재 사진 번호 */

        if (currentImageNumber) {

            currentImageNumber.textContent =
                currentIndex + 1;

        }


        /* 썸네일 active */

        const currentThumbnails =
            document.querySelectorAll('.gallery-thumb');


        currentThumbnails.forEach(
            function (thumbnail, thumbnailIndex) {

                if (
                    thumbnailIndex === currentIndex
                ) {

                    thumbnail.classList.add('active');

                } else {

                    thumbnail.classList.remove('active');

                }

            }
        );

    }


    /* =========================================================
       이전 사진
    ========================================================= */

    if (prevButton) {

        prevButton.addEventListener(
            'click',
            function () {

                changeImage(
                    currentIndex - 1
                );

            }
        );

    }


    /* =========================================================
       다음 사진
    ========================================================= */

    if (nextButton) {

        nextButton.addEventListener(
            'click',
            function () {

                changeImage(
                    currentIndex + 1
                );

            }
        );

    }


    /* =========================================================
       키보드 ← →
    ========================================================= */

    document.addEventListener(
        'keydown',
        function (event) {

            const target =
                event.target;


            /*
                입력창 사용 중에는
                갤러리를 움직이지 않는다.
            */

            if (
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA'
            ) {

                return;

            }


            if (
                event.key === 'ArrowLeft'
            ) {

                changeImage(
                    currentIndex - 1
                );

            }


            if (
                event.key === 'ArrowRight'
            ) {

                changeImage(
                    currentIndex + 1
                );

            }

        }
    );


    /* =========================================================
       7. 좋아요
    ========================================================= */

    const likeButton =
        document.getElementById('reaction-like');


    let isLiked = false;


    if (
        likeButton &&
        likeCount
    ) {

        likeButton.addEventListener(
            'click',
            function () {

                const heartImage =
                    likeButton.querySelector(
                        '.heart img'
                    );


                let count =
                    Number(
                        likeCount.textContent.trim()
                    );


                /* 좋아요 */

                if (!isLiked) {

                    isLiked = true;

                    count += 1;

                    likeButton.classList.add(
                        'active'
                    );


                    if (heartImage) {

                        heartImage.classList.add(
                            'active'
                        );

                    }

                }


                /* 좋아요 취소 */

                else {

                    isLiked = false;

                    count -= 1;

                    likeButton.classList.remove(
                        'active'
                    );


                    if (heartImage) {

                        heartImage.classList.remove(
                            'active'
                        );

                    }

                }


                likeCount.textContent =
                    count;

            }
        );

    }


    /* =========================================================
       8. 댓글 버튼
    ========================================================= */

    const commentButton =
        document.querySelector(
            '.reaction-comment'
        );


    if (commentButton) {

        commentButton.addEventListener(
            'click',
            function () {

                alert(
                    '댓글 기능은 준비 중입니다.'
                );

            }
        );

    }


    /* =========================================================
       9. 수정하기
    ========================================================= */

    const editButton =
        document.getElementById(
            'edit-btn'
        );


    if (editButton) {

        editButton.addEventListener(
            'click',
            function () {

                const editConfirm =
                    confirm(
                        '이 여행기를 수정하시겠어요?'
                    );


                if (editConfirm) {

                    location.href =
                        'travel-write.html';

                }

            }
        );

    }


    /* =========================================================
       10. 삭제하기
    ========================================================= */

    const deleteButton =
        document.getElementById(
            'delete-btn'
        );


    if (deleteButton) {

        deleteButton.addEventListener(
            'click',
            function () {

                const deleteConfirm =
                    confirm(
                        '이 여행기를 삭제하시겠어요?\n\n' +
                        '삭제한 여행기는 다시 복구할 수 없습니다.'
                    );


                if (!deleteConfirm) {

                    return;

                }


                alert(
                    '여행기가 삭제되었습니다.'
                );


                location.href =
                    'travel-write-my.html';

            }
        );

    }


    /* =========================================================
       11. 더보기
    ========================================================= */

    const moreButton =
        document.querySelector(
            '.more-btn'
        );


    if (moreButton) {

        moreButton.addEventListener(
            'click',
            function () {

                alert(
                    '더보기 기능은 준비 중입니다.'
                );

            }
        );

    }


    /* =========================================================
       12. 이전 글
    ========================================================= */

    const prevPost =
        document.querySelector(
            '.prev-post'
        );


    if (prevPost) {

        prevPost.addEventListener(
            'click',
            function (event) {

                event.preventDefault();

                alert(
                    '이전 글이 없습니다.'
                );

            }
        );

    }


    /* =========================================================
       13. 다음 글
    ========================================================= */

    const nextPost =
        document.querySelector(
            '.next-post'
        );


    if (nextPost) {

        nextPost.addEventListener(
            'click',
            function (event) {

                event.preventDefault();

                alert(
                    '다음 글이 없습니다.'
                );

            }
        );

    }


    /* =========================================================
       14. 메인 이미지 오류 확인
    ========================================================= */

    if (mainImage) {

        mainImage.addEventListener(
            'error',
            function () {

                console.error(
                    '메인 여행기 이미지를 불러올 수 없습니다.',
                    mainImage.src
                );

            }
        );

    }


    /* =========================================================
       15. 여행기 이미지 오류 확인
    ========================================================= */

    document
        .querySelectorAll('.gallery-thumb img')
        .forEach(function (image) {

            image.addEventListener(
                'error',
                function () {

                    console.error(
                        '여행기 썸네일 이미지를 불러올 수 없습니다.',
                        image.src
                    );

                }
            );

        });


    /* =========================================================
       16. 첫 번째 사진으로 초기화
    ========================================================= */

    if (
        galleryImages.length > 0
    ) {

        changeImage(0);

    }


});