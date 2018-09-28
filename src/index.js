module.exports = function check(str, bracketsConfig) {
    if(str.length % 2 !== 0) return false;
    var br = ''; 
    for(var h=0; h<bracketsConfig.length; h++){
        for(var n=0; n<2; n++){
            br+= bracketsConfig[h][n];
        }
    }
    var st = [];
    for (var i = 0; i < str.length; ++i) {
        var ch = str[i];
        var ind = br.indexOf(ch);
        if (ind >= 0) {
            if (ind & 1) {
                if (!st.length) return false;
                var last_br = st.pop();
                if (last_br != br[ind - 1]) return false;
            } 
            else { 
                st.push(ch);
            }
        }
    }
    return true;
}
