/* メソッド */
// 戦績計算
function calcRecord(downs, matches) {
    const record = downs / matches;
    return record.toFixed(3);
}


/* 表示処理 */
document.getElementById("rankForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // 入力値を取得して数値化
    const downs = Number(document.getElementById("downs").value);
    const matches = Number(document.getElementById("matches").value);

    // --- 計算 ---
    const record = calcRecord(downs, matches);

    // HTML に結果を表示
    document.getElementById("record").textContent = record;
});
