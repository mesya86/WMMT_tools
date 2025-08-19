/* マスタ */

// ランク
const rank = [
    "N", "C9", "C8", "C7", "C6", "C5", "C4", "C3", "C2", "C1",
    "B9", "B8", "B7", "B6", "B5", "B4", "B3", "B2", "B1",
    "A9", "A8", "A7", "A6", "A5", "A4", "A3", "A2", "A1",
    "S9", "S8", "S7", "S6", "S5", "S4", "S3", "S2", "S1",
    "SS9", "SS8", "SS7", "SS6", "SS5", "SS4", "SS3", "SS2", "SS1",
    "SSS9", "SSS8", "SSS7", "SSS6", "SSS5", "SSS4", "SSS3", "SSS2", "SSS1",
    "SSSS9", "SSSS8", "SSSS7", "SSSS6", "SSSS5", "SSSS4", "SSSS3", "SSSS2", "SSSS1",
    "SSSSS9", "SSSSS8", "SSSSS7", "SSSSS6", "SSSSS5", "SSSSS4", "SSSSS3", "SSSSS2", "SSSSS1",
    "SSSSSS"
];
// ストーリー話数
const storyCount = [
    10, 20, 30, 40, 50, 60, 80, 100, 140, 200,
    300, 400, 500, 600, 700, 900, 1100, 1500, 2000, 2500,
    3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500,
    8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500, 12000, 12500,
    13000, 13500, 14000, 14500, 15000, 15600, 16200, 16800, 17400, 18000,
    18600, 19200, 19800, 20400, 21000, 21600, 22200, 22800, 23400, 24000,
    24600, 25200, 25800, 26400, 27000, 27600, 28200, 28800, 29400, 30000,
    30600, 31200, 31800, 32400, 33000, 33600, 34200, 34800, 35400, 36000,
    36600, 37200, 37800, 38400, 39000, 39600, 40200, 40800, 41400, 42000,
    42600, 43200, 43800, 44400, 45000, 45600, 46200, 46800, 47400, 48000,
    48600, 49200, 49800
]
    ;
// 分身撃破数
const onlineGhostCount = [
    30, 60, 105, 150, 210, 300, 420, 570, 750, 960,
    1200, 1500, 2100, 3000, 4500, 6000, 7500, 9000, 10500, 12000,
    13500, 15000, 16500, 18000, 19500, 21000, 22500, 24000, 25500, 27000,
    28500, 30000, 31500, 33000, 34500, 36000, 37500, 39000, 40500, 42000,
    43500, 45000, 46500, 48000, 49500, 51000, 52500, 54000, 55500, 57000,
    58500, 60000, 61500, 63000, 64500, 66000, 67500, 69000, 70500, 72000,
    73500, 75000, 76500, 78000, 79500, 81000, 82500, 84000, 85500, 87000,
    88500, 90000, 91500, 93000, 94500, 96000, 97500, 99000, 100500, 102000,
    103500, 105000, 106500, 108000, 109500, 111000, 112500, 114000, 115500, 117000,
    118500, 120000, 121500, 123000, 124500, 126000, 127500, 129000, 130500, 132000,
    133500, 135000, 136500, 138000, 139500, 141000, 142500, 144000, 145500, 147000,
    148500, 150000, 151500, 153000, 154500, 156000, 157500, 159000, 160500, 162000,
    163500, 165000, 166500, 168000, 169500, 171000, 172500, 174000, 175500, 177000,
    178500, 180000, 181500, 183000, 184500, 186000, 187500, 189000, 190500, 192000,
    193500, 195000, 196500, 198000, 199500, 201000, 202500, 204000, 205500, 207000,
    208500, 210000, 211500, 213000, 214500, 216000, 217500, 219000, 220500, 222000,
    223500, 225000, 226500, 228000, 229500, 231000, 232500, 234000, 235500, 237000,
    238500, 240000, 241500, 243000, 244500, 246000, 247500, 249000, 250500, 252000,
    253500, 255000, 256500, 258000, 259500, 261000, 262500, 264000, 265500, 267000,
    268500, 270000, 271500, 273000, 274500, 276000, 277500, 279000, 280500, 282000,
    283500, 285000, 286500, 288000, 289500, 291000, 292500, 294000, 295500, 297000,
    298500, 300000, 301500, 303000, 304500, 306000, 307500, 309000, 310500, 312000,
    313500, 315000, 316500, 318000, 319500, 321000, 322500, 324000, 325500, 327000,
    328500, 330000, 331500, 333000, 334500, 336000, 337500, 339000, 340500, 342000,
    343500, 345000, 346500, 348000, 349500, 351000, 352500, 354000, 355500, 357000,
    358500, 360000, 361500, 363000, 364500, 366000, 367500, 369000, 370500, 372000,
    373500, 375000, 376500, 378000, 379500, 381000, 382500, 384000, 385500, 387000,
    388500, 390000, 391500, 393000, 394500, 396000, 397500, 399000, 400500, 402000,
    403500, 405000, 406500, 408000, 409500, 411000, 412500, 414000, 415500, 417000,
    418500, 420000, 421500, 423000, 424500, 426000, 427500, 429000, 430500, 432000,
    433500, 435000, 436500, 438000, 439500, 441000, 442500, 444000, 445500, 447000,
    448500, 450000, 451500, 453000, 454500, 456000, 457500, 459000, 460500, 462000,
    463500, 465000, 466500, 468000, 469500, 471000, 472500, 474000, 475500, 477000,
    478500, 480000, 481500, 483000, 484500, 486000, 487500, 489000, 490500, 492000,
    493500, 495000, 496500, 498000, 499500
]
    ;
// 撃墜数
const VSPlayerCount = [
    20, 50, 100, 400, 1000, 2000, 3000, 5000, 7000, 10000,
    15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000,
    55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000,
    95000, 100000, 105000, 110000, 115000, 120000, 125000,
    130000, 135000, 140000, 145000, 150000, 155000, 160000,
    165000, 170000, 175000, 180000, 185000, 190000, 195000,
    200000, 205000, 210000, 215000, 220000, 225000, 230000,
    235000, 240000, 245000, 250000, 255000, 260000, 265000,
    270000, 275000, 280000, 285000, 290000, 295000, 300000,
    305000, 310000, 315000, 320000, 325000, 330000
]
    ;

/* メソッド */

// ランク
function getRank(story, onlineGhost, VSPlayer, storyCount, onlineGhostCount, VSPlayerCount, rank) {
    // MATCH 相当（値以下の最大インデックスを返す）
    function match(value, array) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] <= value) return i;
        }
        return -1; // 見つからなければ -1
    }

    // 各 MATCH
    const idxStory = match(story, storyCount) + 1;
    const idxOnlineGhost = match(onlineGhost, onlineGhostCount) + 1;
    const idxVSPlayer = match(VSPlayer, VSPlayerCount) + 1;

    const total = (idxStory || 0) + (idxOnlineGhost || 0) + (idxVSPlayer || 0);

    if (total > 74) { return "SSSSSS"; }

    // INDEX 相当
    return rank[total]; // 配列は0始まりなので total-1
}


// ストーリー
function calcStoryRank(story) {
    if (story < 10) {
        return 10 - story; // 入力値が10未満なら差を返す
    } else {
        // 最大値を探す
        let index = -1;
        for (let i = 0; i < storyCount.length; i++) {
            if (storyCount[i] <= story) {
                index = i;
            } else {
                break;
            }
        }

        // 次のランク基準（index + 1 の値）を取得
        const next = (index + 1 < storyCount.length) ? storyCount[index + 1] : storyCount[storyCount.length - 1];

        // 差を返す
        return next - story;
    }
}

// 分身
function calconlineGhostRank(onlineGhost) {
    if (onlineGhost < 30) {
        return 30 - onlineGhost; // 入力値が30未満なら差を返す
    } else {
        // 最大値を探す
        let index = -1;
        for (let i = 0; i < onlineGhostCount.length; i++) {
            if (onlineGhostCount[i] <= onlineGhost) {
                index = i;
            } else {
                break;
            }
        }

        // 次のランク基準（index + 1 の値）を取得
        const next = (index + 1 < onlineGhostCount.length) ? onlineGhostCount[index + 1] : onlineGhostCount[onlineGhostCount.length - 1];

        // 差を返す
        return next - onlineGhost;
    }
}

// 乱入
function calcVSPlayer(VSPlayer) {
    if (VSPlayer < 20) {
        return 20 - VSPlayer; // 入力値が20未満なら差を返す
    } else {
        // 最大値を探す
        let index = -1;
        for (let i = 0; i < VSPlayerCount.length; i++) {
            if (VSPlayerCount[i] <= VSPlayer) {
                index = i;
            } else {
                break;
            }
        }

        // 次のランク基準（index + 1 の値）を取得
        const next = (index + 1 < VSPlayerCount.length) ? VSPlayerCount[index + 1] : VSPlayerCount[VSPlayerCount.length - 1];

        // 差を返す
        return next - VSPlayer;
    }
}


/* 表示処理 */

document.getElementById("rankForm").addEventListener("submit", function (event) {
    event.preventDefault(); // ページ遷移を防ぐ

    // --- ストーリー ---
    const storyInput = document.getElementById("story");
    const story = Number(storyInput.value);
    const remainingStory = calcStoryRank(story);
    const remainingStoryEl = document.getElementById("remainingStoryCount");
    if (remainingStoryEl) remainingStoryEl.textContent = remainingStory.toString();

    // --- 分身 ---
    const onlineGhostInput = document.getElementById("onlineGhost");
    const onlineGhost = Number(onlineGhostInput.value);
    const remainingOnlineGhost = calconlineGhostRank(onlineGhost);
    const remainingOnlineGhostEl = document.getElementById("remainingOnlineGhostCount");
    if (remainingOnlineGhostEl) remainingOnlineGhostEl.textContent = remainingOnlineGhost.toString();

    // --- 乱入 ---
    const VSPlayerInput = document.getElementById("VSPlayer");
    const VSPlayer = Number(VSPlayerInput.value);
    const remainingVSPlayer = calcVSPlayer(VSPlayer);
    const remainingVSPlayerEl = document.getElementById("remainingVSPlayer");
    if (remainingVSPlayerEl) remainingVSPlayerEl.textContent = remainingVSPlayer.toString();

    // --- ランク ---
    // storyCount, onlineGhostCount, VSPlayerCount, rank は事前に定義された配列
    const rankValue = getRank(story, onlineGhost, VSPlayer, storyCount, onlineGhostCount, VSPlayerCount, rank);
    const rankNowEl = document.getElementById("rankNow");
    if (rankNowEl) rankNowEl.textContent = rankValue.toString();
});




