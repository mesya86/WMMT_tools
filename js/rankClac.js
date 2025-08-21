/* マスタ */
// ランク

const rankMaster = [
    ["段位", "乱入", "撃墜", "極め"],
    [1, 200, 400, 600],
    [2, 900, 1100, 1300],
    [3, 1600, 1800, 2000],
    [4, 2450, 2700, 2950],
    [5, 3400, 3650, 3900],
    [6, 4500, 4800, 5100],
    [7, 6000, 6400, 6800],
    [8, 8400, 9000, 9600],
    [9, 11900, 12700, 13500],
    [10, 16500, 17500, 20000],
    [11, 25000, 30000, 35000],
    [12, 45000, 55000, 65000],
    [13, 85000, 105000, 125000],
    [14, 155000, 185000, 215000],
    [15, 255000, 295000, 335000]
];

// 段位名配列
const rankNames = ["段位", "乱入", "撃墜", "極め"];

// 段数名配列（レベル → 表示名）
const rankNamesJP = ["なし", "初段", "二段", "三段", "四段", "五段", "六段", "七段", "八段", "九段", "十段",
    "十一段", "十二段", "十三段", "十四段", "十五段"];

/* メソッド */
// ポイント
function calcPoint(first, second, third, fourth) {
    const point = first * 5 + second * 3 + third * 2 + fourth * 1;
    return point;
}

// 段位判定
function getRankCategory(totalPoint) {
    for (let i = rankMaster.length - 1; i >= 1; i--) {
        const [_, r, g, k] = rankMaster[i];
        if (totalPoint >= k) return 3;
        if (totalPoint >= g) return 2;
        if (totalPoint >= r) return 1;
    }
    return 0;
}


// 現在段位（レベル）
function getLevel(totalPoint) {
    return rankMaster.slice(1).reduce((acc, r) => totalPoint >= r[1] ? r[0] : acc, 0);
}

// 次のランクまでのポイント
function getNextPoint(totalPoint) {
    const nextValues = rankMaster.slice(1)
        .flatMap(r => r.slice(1))
        .filter(v => v > totalPoint);
    return nextValues.length ? Math.min(...nextValues) - totalPoint : "-";
}

/* 表示処理 */

document.getElementById("rankForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // 入力値を取得して数値化
    const first = Number(document.getElementById("first").value);
    const second = Number(document.getElementById("second").value);
    const third = Number(document.getElementById("third").value);
    const fourth = Number(document.getElementById("fourth").value);

    // --- 計算 ---
    const totalPoint = calcPoint(first, second, third, fourth);
    // 段位判定
    const rankIndex = getRankCategory(totalPoint);
    // 現在段位（レベル）
    const level = getLevel(totalPoint);
    // 次のランクまでのポイント
    const nextPoint = getNextPoint(totalPoint);

    // HTML に結果を表示
    document.getElementById("point").textContent = totalPoint;
    document.getElementById("rankName").textContent = rankNames[rankIndex];
    document.getElementById("rankCount").textContent = rankNamesJP[level];
    document.getElementById("remainingPoint").textContent = nextPoint;
});
