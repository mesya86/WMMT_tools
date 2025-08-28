/* マスタ */
// ランク
/*const rank = [
    "N", "C9", "C8", "C7", "C6", "C5", "C4", "C3", "C2", "C1",
    "B9", "B8", "B7", "B6", "B5", "B4", "B3", "B2", "B1",
    "A9", "A8", "A7", "A6", "A5", "A4", "A3", "A2", "A1",
    "S9", "S8", "S7", "S6", "S5", "S4", "S3", "S2", "S1",
    "SS9", "SS8", "SS7", "SS6", "SS5", "SS4", "SS3", "SS2", "SS1",
    "SSS9", "SSS8", "SSS7", "SSS6", "SSS5", "SSS4", "SSS3", "SSS2", "SSS1",
    "SSSS9", "SSSS8", "SSSS7", "SSSS6", "SSSS5", "SSSS4", "SSSS3", "SSSS2", "SSSS1",
    "SSSSS9", "SSSSS8", "SSSSS7", "SSSSS6", "SSSSS5", "SSSSS4", "SSSSS3", "SSSSS2", "SSSSS1",
    "SSSSSS"
];*/

// ストーリー話数
const storyCount = [
    10, 20, 30, 40, 50, 60, 80, 100, 140, 200,
    300, 400, 500, 600, 700, 900, 1100, 1500, 2000, 2500,
    3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500,
    8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500, 12000, 12500,
    13000, 13500, 14000, 14500, 15000, 15600, 16200, 16800, 17400, 18000,
    18600, 19200, 19800, 20400, 21000, 21600, 22200, 22800, 23400, 24000,
    24600, 25200, 25800, 26400, 27000, 27600, 28200, 28800, 29400, 30000,
    30600, 31200, 31800
];

// 分身
const onlineGhostCount = [
    30, 60, 105, 150, 210, 300, 420, 570, 750, 960,
    1200, 1500, 2100, 3000, 4500, 6000, 7500, 9000, 10500, 12000,
    13500, 15000, 16500, 18000, 19500, 21000, 22500, 24000, 25500, 27000,
    28500, 30000, 31500, 33000, 34500, 36000, 37500, 39000, 40500, 42000,
    43500, 45000, 46500, 48000, 49500, 51000, 52500, 54000, 55500, 57000,
    58500, 60000, 61500, 63000, 64500, 66000, 67500, 69000, 70500, 72000,
    73500, 75000, 76500, 78000, 79500, 81000, 82500, 84000, 85500, 87000,
    88500, 90000, 91500
];

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
    305000, 310000, 315000, 320000, 325000
];

/* メソッド */
// ランク
/*function getRank(story, winCount, VSPlayer, storyCount, onlineGhostCount, VSPlayerCount, rank) {
    // 値以下の最大インデックスを返す
    function match(value, array) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] <= value) return i;
        }
        return -1; // 見つからなければ -1
    }

    const idxStory = match(story, storyCount) + 1;
    const idxOnlineGhost = match(winCount, onlineGhostCount) + 1;
    const idxVSPlayer = match(VSPlayer, VSPlayerCount) + 1;

    const total = (idxStory || 0) + (idxOnlineGhost || 0) + (idxVSPlayer || 0);

    if (total > 74) { return "SSSSSS"; }

    return rank[total];
}*/


// ストーリー
function calcStoryRank(story) {
    // 配列の最大値を取得
    const maxValue = storyCount[storyCount.length - 1];

    // 配列の最大値を超えていたらエラーを投げる
    if (story > maxValue) {
        throw new Error(`-`);
    }

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
function calconlineGhostRank(ghostDefeated, totalDefeated) {
    // 配列の最大値を取得
    const maxValue = onlineGhostCount[onlineGhostCount.length - 1];

    // 算出した勝利数を代入
    const winCount = calcwinCount(ghostDefeated, totalDefeated);

    // 配列の最大値を超えていたらエラーを投げる
    if (winCount > maxValue) {
        throw new Error(`-`);
    }

    if (totalDefeated < ghostDefeated) {
        throw new Error(`-`);
    }

    if (winCount < 30) {
        return (30 - winCount); // 入力値が30未満なら差を返す
    } else {
        // 最大値を探す
        let index = -1;
        for (let i = 0; i < onlineGhostCount.length; i++) {
            if (onlineGhostCount[i] <= winCount) {
                index = i;
            } else {
                break;
            }
        }

        // 次のランク基準（index + 1 の値）を取得
        const next = (index + 1 < onlineGhostCount.length) ? onlineGhostCount[index + 1] : onlineGhostCount[onlineGhostCount.length - 1];

        // 差を返す
        return next - winCount;
    }
}

// 勝利数を算出
function calcwinCount(ghost, total) {
    const count = ((total - ghost) + Math.floor(ghost / 3)) * 3;
    return count;
}

// 乱入
function calcVSPlayer(VSPlayer) {
    // 配列の最大値を取得
    const maxValue = VSPlayerCount[VSPlayerCount.length - 1];

    // 配列の最大値を超えていたらエラーを投げる
    if (VSPlayer > maxValue) {
        throw new Error(`-`);
    }

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
    event.preventDefault();

    const remainingStoryEl = document.getElementById("remainingStoryCount");
    const remainingOnlineGhostEl = document.getElementById("remainingOnlineGhostCount");
    const remainingVSPlayerEl = document.getElementById("remainingVSPlayer");

    try {
        const story = Number(document.getElementById("story").value);
        const ghostDefeated = Number(document.getElementById("ghostDefeated").value);
        const totalDefeated = Number(document.getElementById("totalDefeated").value);
        const VSPlayer = Number(document.getElementById("VSPlayer").value);

        // --- 計算 ---
        const remainingStory = calcStoryRank(story);
        const remainingOnlineGhost = calconlineGhostRank(ghostDefeated, totalDefeated);
        const remainingVSPlayer = calcVSPlayer(VSPlayer);
        // const winCount = calcwinCount(totalDefeated, ghostDefeated);

        // --- 出力 ---
        if (remainingStoryEl) remainingStoryEl.textContent = remainingStory.toString();
        if (remainingOnlineGhostEl) remainingOnlineGhostEl.textContent = remainingOnlineGhost.toString();
        if (remainingVSPlayerEl) remainingVSPlayerEl.textContent = remainingVSPlayer.toString();

        /*const rankValue = getRank(story, winCount, VSPlayer, storyCount, onlineGhostCount, VSPlayerCount, rank);
        if (rankNowEl) {
            rankNowEl.textContent = rankValue.toString();
            if (rankValue === "SSSSSS") {
                remainingStoryEl.textContent = "-";
                remainingOnlineGhostEl.textContent = "-";
                remainingVSPlayerEl.textContent = "-";
            }
        }*/
    } catch (e) {
        // エラー時は文字列を直接代入する
        if (remainingStoryEl) remainingStoryEl.textContent = "-";
        if (remainingOnlineGhostEl) remainingOnlineGhostEl.textContent = "-";
        if (remainingVSPlayerEl) remainingVSPlayerEl.textContent = "-";
        /*if (rankNowEl) {
            if (e.message === "-") {
                // 特定のエラーなら "-" を表示
                rankNowEl.textContent = "-";
            } else {
                // それ以外のエラーは SSSSSS
                rankNowEl.textContent = "SSSSSS";
            }
        }*/
    }
});
