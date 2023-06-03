function Steam() {
    window.location.href = "https://steamcommunity.com/id/waffwrw/";
}

function Twitter() {
    window.location.href = "https://twitter.com/waffwrw";
}

function Youtube() {
    window.location.href = "https://www.youtube.com/@waffwrw";
}

function CatAndroid() {
    window.location.href = "https://drive.google.com/file/d/18ob4oFdeImJV0nbjmN3iLVlZec6gM28W/view?usp=sharing";
}

var out = document.getElementById("output");
   
function getWord() {
     
    var theWord= [
        '𝕚 𝕒𝕞 𝕨𝕚𝕟𝕣𝕒𝕣 𝕪𝕠𝕦 𝕒𝕣𝕖 𝕝𝕠𝕤𝕖𝕣𝕒𝕣 (◣_◢)',
        '𝕨𝕚𝕟 𝕨𝕚𝕥𝕙 𝕗𝕒𝕤𝕥 𝕒𝕟𝕕 𝕨𝕚𝕤𝕕𝕠𝕞 ♛',
        '𝕝𝕚𝕗𝕖 𝕚𝕤 𝕝𝕚𝕜𝕖 𝕒 𝕘𝕒𝕞𝕖, 𝕤𝕥𝕖𝕒𝕞 𝕝𝕖𝕧𝕖𝕝 𝕚𝕤 𝕙𝕠𝕨 𝕨𝕖 𝕜𝕖𝕖𝕡 𝕥𝕙𝕖 𝕤𝕔𝕠𝕣𝕖 ♛',
        'ℙ𝔸𝕐 𝕋𝕆 ℙ𝕃𝔸𝕐, 𝕊ℙ𝕀ℕ 𝕋𝕆 𝕎𝕀ℕ ♛ (◣_◢)',
        '𝕀𝕄 𝔸 ℚ𝕌𝔼𝔼ℕ ♛ 𝕌ℝ 𝔸 ℚ𝕌𝔼𝔼ℝ (◣_◢)',
        '𝓓𝓸𝓷𝓽 𝓹𝓮𝓪𝓴 𝓽𝓱𝓮 𝓫𝓮𝓪𝓼𝓽',
        '𝕥𝕙𝕒𝕟𝕜 𝕪𝕠𝕦 𝕗𝕠𝕣 𝕔𝕙𝕚𝕔𝕜𝕖𝕟 𝕕𝕚𝕟𝕟𝕖𝕣, 𝕟𝕠𝕨 𝕚 𝕙𝕒𝕧𝕖 𝕜𝕣𝕒𝕞𝕡𝕦𝕤 (◣_◢)',
        '+𝕣𝕖𝕡 𝕗𝕠𝕣 +𝕣𝕖𝕡𝕠𝕣𝕥 (◣_◢)',
        '𝕄𝔸𝕊𝕋𝕌ℝ𝔹𝔼𝔸𝕊𝕋 𝕄𝕆𝔻𝔼 𝔸ℂ𝕋𝕀𝕍𝔸𝕋𝔼𝔻 (◣_◢)',
      ];

      
    var wordNum = Math.floor(Math.random() * theWord.length); 
     
    output.textContent = theWord[wordNum];
}